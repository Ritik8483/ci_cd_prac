import { gql } from "@apollo/client";

const getAllUsers = gql`
query Query {
  users {
    age
    designation
    id
    name
  } 
}
`

export default getAllUsers