import React from "react"
import DOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client"
import App from "./Components/App"

const client = new ApolloClient({
	uri: "http://192.168.43.200:4000/graphql",
	cache: new InMemoryCache()
})

DOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ApolloProvider client={client}>
				<App /> 
			</ApolloProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
)
