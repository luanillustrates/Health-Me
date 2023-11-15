const { User, Service, Field, Booking } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    fields: async () => {
      return await Field.find();
    },
    services: async (parent, { field, name }) => {
      const params = {};

      if (field) {
        params.field = field;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Service.find(params).populate("field");
    },
    service: async (parent, { _id }) => {
      return await Service.findById(_id).populate("field");
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "bookings.services",
          populate: "field",
        });

        return user;
      }

      throw AuthenticationError;
    },
    // Booking: async (parent, { _id }, context) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user._id).populate({
    //       // path: "bookings.services",
    //       // populate: "field",
    //     });

    //     // return user.bookings.id(_id);
    //   }

    //   throw AuthenticationError;
    // },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addBooking: async (parent, { products }, context) => {
      if (context.user) {
        const booking = new Booking({ products });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { bookings: booking },
        });

        return booking;
      }

      throw AuthenticationError;
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw AuthenticationError;
    },
    updateBooking: async (parent, args, context) => {
      // context user? Or context booking?
      if (context.user) {
        return await Booking.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw AuthenticationError;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
