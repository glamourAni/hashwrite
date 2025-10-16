import React, { useEffect, useState } from "react"

const Hint = () => {
	const [isHovered, setIsHovered] = useState(false)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true)
		}, 100) // A small delay ensures the element is in the DOM before the class changes

		return () => clearTimeout(timer)
	}, [])
	return (
		<div className="relative bg-usage py-4 pr-4  md:w-[400px]">
			<img
				className="hint"
				src="./question.svg"
				alt="hint"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			/>
			{isHovered && (
				<div
					className={`my-element ${
						isVisible ? "show" : ""
					}md:absolute md:top-[60px] transition delay-1000 ease-in-out`}
				>
					<h3 className="text-[1.1rem] font-medium text-header ">
						Usage
					</h3>
					<p className="text-[0.7rem]">
						Select your preferred social media platform, enter a
						keyword in and click enter to generate trending
						hashtags.
					</p>
				</div>
			)}
		</div>
	)
}

export default Hint
