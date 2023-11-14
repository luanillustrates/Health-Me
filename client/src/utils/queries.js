import { gql } from "@apollo/client";

export const QUERY_DOCTORS = gql`
  query getDoctors($profession: ID) {
    doctors(profession: $profession) {
      _id
      name
      experience
      image
      profession {
        _id
      }
    }
  }
`;

// export const QUERY_CHECKOUT = gql`
//   query getCheckout($doctors: [chosenDoctor]) {
//     checkout(doctors: $doctors) {
//       session
//     }
//   }
// `;

export const QUERY_ALL_DOCTORS = gql`
  {
    doctors {
      _id
      name
      experience
      profession {
        name
      }
    }
  }
`;

export const QUERY_PROFESSIONS = gql`
  {
    professions {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      bookings {
        _id
        bookedDate
        doctors {
          _id
          name
          # description
          experience
          image
        }
      }
    }
  }
`;
