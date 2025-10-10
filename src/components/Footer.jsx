import React from "react"

const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<footer className="bg-footer text-white text-center p-4 ">
			<p>&copy; {year} HashWrite. All rights reserved.</p>
		</footer>
	)
}
export default Footer
