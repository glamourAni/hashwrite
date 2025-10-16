import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
	return (
		<div className="main px-5  bg-header">
			<div className="flex justify-between font-medium ">
				<ul className="row ">
					<li>
						<img
							className="md:w-50 max-md:w-[200px] md:h-12 max-md:h-[50px] object-cover"
							src="./logo.png"
							alt="hashwrite logo"
						></img>
					</li>
					<li className="">About</li>
				</ul>
				<ul className="row ">
					<li>
						<NavLink to="/login">Login</NavLink>
					</li>
					<li>
						<NavLink to="/signup">Signup</NavLink>
					</li>
					<div className="w-[100%] my-2 bg-blue-500 p-2">
						<li className="bg-blue-500">
							Instagram{" "}
							<span className="relative top-1 inline-block">
								<img
									className="w-5 h-5"
									src="./dropdown.svg"
									alt=""
								/>
							</span>
						</li>
					</div>
				</ul>
			</div>
		</div>
	)
}

export default Header
