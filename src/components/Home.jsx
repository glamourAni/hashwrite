import React, { useEffect } from "react"
import { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Search from "./Search"
import { ErrorBoundary } from "react-error-boundary"
import Hint from "./Hint"

function ErrorFallback({ error }) {
	return (
		<div role="alert">
			<p>Something went wrong:</p>
			<pre style={{ color: "red" }}>{error.message}</pre>
		</div>
	)
}

const Home = () => {
	const [searchHashtag, setSearchHashtag] = useState("")
	const [hashtagList, setHashtagList] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [errorMessage, setErrorMessage] = useState("")

	const fetchHashtags = async (query) => {
		setIsLoading(true)

		try {
			const response = await fetch(
				`http://localhost:5500/api/v1/hashtags?name=${encodeURIComponent(
					query
				)}`
			)
			if (!response.ok) {
				throw new Error(response.status)
			}
			const result = await response.json()

			const data = result.data

			if (!data || data === undefined) {
				setErrorMessage("Keyword is not valid. Try a valid keyword.")
				// console.log(errorMessage)
			}
			//append hashtags to the predefined list
			setHashtagList(data || [])
		} catch (error) {
			console.log(`Error fetching data: ${error}`)
			console.log(query)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		if (!searchHashtag) return
		fetchHashtags(searchHashtag)
	}, [searchHashtag])

	return (
		<div className="min-h-screen flex flex-col">
			<Header />

			<div className="flex-grow px-10  lg:px-[25%]">
				<section className="main-content md:flex mb-[5em]">
					<div className="wrapper md:basis-[2000px]">
						<h2>
							generate hashtags for{" "}
							<span className="current-sm text-blue-600 italic">
								instagram
							</span>
						</h2>

						<Search
							searchTerm={searchHashtag}
							updateTerm={setSearchHashtag}
						/>

						{searchHashtag && (
							<div className="results-section">
								{isLoading ? (
									<p className="text-green-500">
										Please wait for hashtags to load...
									</p>
								) : hashtagList < 1 ? (
									<p className="text-red-800">
										{errorMessage}
									</p>
								) : (
									<ul>
										{hashtagList.map((hashtag) => (
											<li
												className="item"
												key={hashtag.id}
											>
												{hashtag}
											</li>
										))}
									</ul>
								)}
							</div>
						)}
					</div>
					<Hint />
				</section>
				<section className="why">
					<div className="mb-10">
						<h3 className="">Why HashWrite</h3>
						<p>
							Hashwrite gives you accurate and up-to-date hashtags
							for your instagram posts and helps you know what's
							trending on Twitter.
						</p>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	)
}

export default Home
