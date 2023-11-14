const { User, Doctor, Profession, Booking } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
// const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    professions: async () => {
      return await Profession.find();
    },
    doctors: async (parent, { profession, name }) => {
      const params = {};

      if (profession) {
        params.profession = profession;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Doctor.find(params).populate('profession');
    },
    doctor: async (parent, { _id }) => {
      return await Doctor.findById(_id).populate('profession');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'bookings.doctors',
          populate: 'profession',
        });

        return user;
      }

      throw AuthenticationError;
    },
    // Booking: async (parent, { _id }, context) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user._id).populate({
    //       path: 'bookings.doctors',
    //       populate: 'profession',
    //     });

    //     return user.bookings.id(_id);
    //   }

    //   throw AuthenticationError;
    // },
    // checkout... optinal donation button
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

    // update booking here...

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
