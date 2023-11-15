import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_BOOKING = gql`
  mutation addBooking($services: [ID]!) {
    addBooking(services: $services) {
      bookedDate
      bookedTime
      services {
        _id
        name
        description
        field {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $phoneNumber: Int!
    $dob: Date!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      phoneNumber: $phoneNumber
      dob: $dob
    ) {
      token
      user {
        _id
      }
    }
  }
`;
