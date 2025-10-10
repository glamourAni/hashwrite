import React from "react"
import { useState } from "react"

const Search = ({ searchTerm, updateTerm }) => {
	{
		/* track keyboard input and store on Tab, Space or Enter key press*/
	}
	const [isNotFocusedInput, setIsNotFocusedInput] = useState(false)

	function handleLoseInputFocus(e) {
		const element = e.target
		if (e.key === "Tab" || e.key === "Enter" || e.key === " ") {
			console.log(element)
			// updateTerm("")
			element.placeholder = ""
			element.readOnly = true
			element.blur()
			setIsNotFocusedInput(true)
		}
	}
	return (
		<div className="input-field">
			<input
				type="text"
				placeholder="#keyword"
				onKeyDown={handleLoseInputFocus}
				onChange={(e) => updateTerm(e.target.value)}
				value={searchTerm}
			/>

			{/* display the tracked text in a span, positioned within the input field */}
			{searchTerm && isNotFocusedInput && (
				<span className="searched">{searchTerm}</span>
			)}
		</div>
	)
}

export default Search
