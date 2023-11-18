import { gql } from "@apollo/client";

export const QUERY_SERVICES = gql`
  query getServices($field: ID) {
    services(field: $field) {
      _id
      name
      description
      image
      field {
        _id
      }
    }
  }
`;

export const QUERY_ALL_SERVICES = gql`
  {
    services {
      _id
      name
      description
      field {
        name
      }
    }
  }
`;

export const QUERY_FIELDS = gql`
  {
    fields {
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
        bookedTime
        services {
          _id
          name
          description
          image
        }
      }
    }
  }
`;
