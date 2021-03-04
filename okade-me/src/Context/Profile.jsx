import { createContext, useState, useContext, useEffect, } from "react"

const Context = createContext()

function Provider ({ children }) {

	const [profile, setProfile] = useState(JSON.parse(localStorage.getItem("profile") || "{}"))

	useEffect(() => {

		if (Object.keys(profile).length) {

			localStorage.setItem("profile", JSON.stringify(profile))
		}
		else {
			localStorage.removeItem("profile")
		}

	}, [
		profile,
	])

	return (
		<Context.Provider value={{ profile, setProfile, }}>
			{ children }
		</Context.Provider>
	)
}

function useProfile(setterOnly) {

	const { profile, setProfile } = useContext(Context)

	return setterOnly ? [setProfile] : [profile, setProfile]
}

export {
	Provider,
	useProfile,
}
