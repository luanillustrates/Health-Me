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

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $phoneNumber: String!
    $dob: String!
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

export const UPDATE_USER = gql`
  mutation updateUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $phoneNumber: String!
    $dob: String!
  ) {
    updateUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      phoneNumber: $phoneNumber
      dob: $dob
    ) {
      firstName
      lastName
      email
      phoneNumber
      dob
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser($id: ID!) {
    removeUser(id: $id)
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

export const UPDATE_BOOKING = gql`
  mutation updateBooking($services: [ID]!) {
    updateBooking(services: $services) {
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

export const REMOVE_BOOKING = gql`
  mutation removeBooking($services: [ID]!) {
    removeBooking(services: $services) {
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
