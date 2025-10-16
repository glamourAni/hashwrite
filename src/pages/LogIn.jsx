import React from "react"

const LogIn = () => {
	return (
		<div>
			<header>
				<img
					className="md:w-70 max-md:w-[300px] md:h-12 max-md:h-[50px] object-cover mx-10 my-7"
					src="./logo.png"
					alt="hashwrite logo"
				/>
			</header>

			<section className="account flex-center h-[60vh]">
				<form
					action=""
					className="w-[60vw] min-w-[300px] max-w-[500px]"
				>
					<h1 className="text-align text-blue-800">Hashwrite</h1>
					<p className="text-align font-bold text-3xl text-blue-800 mb-0.5">
						Log In
					</p>
					<p className="text-[0.9rem] text-align">
						Don't have an account?{" "}
						<span className="text-blue-400">create one here</span>
					</p>

					<label htmlFor="email">Email</label>
					<input
						className="input-accounts"
						type="email"
						name="email"
						id="email"
						placeholder="janedoe@mail.com"
					/>
					<label htmlFor="password">Password</label>
					<input
						className="input-accounts"
						type="password"
						name="password"
						id="password"
					/>

					<button
						className="block bg-header w-full my-2 text-2xl py-2 cursor-pointer"
						type="submit"
					>
						Create account
					</button>
				</form>
			</section>
		</div>
	)
}

export default LogIn
