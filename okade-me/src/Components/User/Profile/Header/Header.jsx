import "./Header.css"

import { Link } from "react-router-dom"

import moment from "moment"

import { useProfile } from "../../../../Context/Profile"

function Header () {

	const [{ user, followersCount, followingCount, }] = useProfile()

	return (
		<>
			<header className="profile">

				<div className="infoBox">

					<section>

						<h3>
							<span>{user?.fullName}</span>
							<Link to={"/" + user?.username}>@{user?.username}</Link>
						</h3>
						<h4>
							<span className="langauge">{user?.language?.name} •</span>
							<span className="specialization">{user?.specialization?.name}</span>
						</h4>
						<p className="joinedAt">
							<span>Since:</span>
							<span>{moment(user?.joinedAt, "YYYYMMDD").fromNow()}</span>
						</p>

					</section>

					<section className="avatar">
						<img width={50} height={50} alt="no-avatar" src={"http://192.168.43.66:3000/profile/" + user?.username} />
					</section>

				</div>

				<div className="navbar">

					<ul>
						<li>
							<Link to="/">codeBase</Link>
						</li>
						<li>
							<Link to={"/" + user?.username + "/followers"}>followers ({followersCount})</Link>
						</li>
						<li>
							<Link to="/">following ({followingCount})</Link>
						</li>
					</ul>

				</div>

			</header>
		</>
	)
}

export default Header
