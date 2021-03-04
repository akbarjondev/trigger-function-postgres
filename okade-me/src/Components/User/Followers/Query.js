import { gql } from "@apollo/client"

const QUERY = gql `
	query followers($username: String!){
  followers(username: $username) {
    id
    connectionTime
    user {
      username
      fullName
      specialization {
        name
      }
    }
  }
}

`

export {
	QUERY,
}
