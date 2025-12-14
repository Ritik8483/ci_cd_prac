import { gql } from "@apollo/client";

const updateUser = gql`
mutation UpdateUser($updateUserId: ID!, $name: String!, $age: Int!,$designation:String) {
  updateUser(id: $updateUserId, name: $name, age: $age,designation:$designation) {
    age
    designation
    id
    name
  }
}
`;

export default updateUser