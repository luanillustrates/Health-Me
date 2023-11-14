const typeDefs = `#graphql
  type Profession {
    _id: ID
    name: String
  }

  type Doctor {
    _id: ID
    name: String
    description: String
    image: String
    experience: String
    profession: Profession
  }

  type Booking {
    _id: ID
    bookedDate: Date
    doctors: [Doctor]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    phoneNumber: Int
    dob: Date
    bookings: [Booking]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  input chosenDoctor {
    _id: ID
    name: String
    image: String
  }

  type Query {
    professions: [Profession]
    doctors(profession: ID, name: String): [Doctor]
    doctor(_id: ID!): Doctor
    user: User
    booking(_id: ID!): Booking
    checkout(doctors: [chosenDoctor]): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    # add user details?
    addBooking(doctors: [ID]!): Booking
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    # updateBooking() - how to update booking details e.g. category/type of appointment, booked time, etc
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
