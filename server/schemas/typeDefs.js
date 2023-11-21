const typeDefs = `#graphql
  type Field {
    _id: ID
    name: String
  }

  type Service {
    _id: ID
    name: String
    image: String
    description: String
    field: Field
  }

  type Booking {
    _id: ID
    bookedDate: String
    bookedTime: String
    comment: String
    services: [Service]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    phoneNumber: String
    dob: String
    bookings: [Booking]
  }

  type Auth {
    token: ID
    user: User
  }

  input chosenService {
    _id: ID
    name: String
  }

  type Query {
    fields: [Field]
    services(field: ID, name: String): [Service]
    service(_id: ID!): Service
    user: User
    booking(_id: ID!): Booking
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, phoneNumber: String!, dob: String!): Auth
    addBooking(bookedDate: String!, bookedTime: String!, comment: String!, services: [ID]!): Booking
    updateUser(firstName: String!, lastName: String!, email: String!, phoneNumber: String!, dob: String!): User
    updateBooking(bookedDate: String!, bookedTime: String!, comment: String!, services: [ID]!): Booking
    removeUser: User
    removeBooking(bookingId: ID!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
