import { gql } from "@apollo/client";

const addUser = gql`
mutation AddUser($name: String!, $age: Int!, $designation: String) {
  addUser(name: $name, age: $age, designation: $designation) {
    name
    id
  }
}
`

export default addUser