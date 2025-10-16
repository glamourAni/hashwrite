import React from "react"
import { useState } from "react"

const Search = ({ searchTerm, updateTerm }) => {
	const [inputText, setInputText] = useState("")

	function handleUpdate() {
		updateTerm(`#${inputText}`)
	}

	{
		/* track keyboard input and store on Tab, Space or Enter key press*/
	}
	const [isNotFocusedInput, setIsNotFocusedInput] = useState(false)

	function handleLoseInputFocus(e) {
		const element = e.target
		if (e.key === "Tab" || e.key === "Enter" || e.key === " ") {
			console.log(element)
			{
				/* Clear input */
			}
			handleUpdate()
			// setInputText("")
			// updateTerm()?
			element.blur()
			setIsNotFocusedInput(true)
		}
	}
	return (
		<div className="input-field">
			<input
				className="input-box-search"
				onClick={() => setIsNotFocusedInput(false)}
				type="text"
				placeholder="#keyword"
				onKeyDown={handleLoseInputFocus}
				onChange={(e) => setInputText(e.target.value)}
				value={inputText}
			/>

			{/* display the tracked text in a span, positioned within the input field */}
			{inputText && isNotFocusedInput && (
				<span className="searched">{searchTerm}</span>
			)}
		</div>
	)
}

export default Search
