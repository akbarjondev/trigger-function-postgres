import { gql } from "@apollo/client"

const PROFILE = gql `
	query userProfile($username: String!) {
		userProfile(username: $username) {
			user {
				id
				username
				fullName
				avatar
				language {
					name
				}
				specialization {
					name
				}
				hiring
				joinedAt
			}
			followersCount
			followingCount
		}
	}
`

export {
	PROFILE,
}
