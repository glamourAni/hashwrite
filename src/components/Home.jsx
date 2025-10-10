import React from "react"
import { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Search from "./Search"

const Home = () => {
	const [searchTerm, setSearchTerm] = useState("")

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
							searchTerm={searchTerm}
							updateTerm={setSearchTerm}
						/>

						<div className="results-section"></div>
					</div>
					<div className=" relative bg-usage py-4 pr-4  md:w-[400px]">
						<img
							className="md:w-8 w-5 md:h-8 h-5 absolute md:relative md:top-[-26px] top-[-6px] right-3 hover:bg-gray-400 dark:hover:bg-white rounded-[50%] mb-4 mt-6 cursor-pointer"
							src="./question.svg"
							alt="hint"
						/>
						<div className="md:absolute md:top-[60px] ">
							<h3 className="text-[1.1rem] font-medium text-header ">
								Usage
							</h3>
							<p className="text-[0.7rem]">
								Select your preferred social media platform,
								enter a keyword in and click enter to generate
								trending hashtags.
							</p>
						</div>
					</div>
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
