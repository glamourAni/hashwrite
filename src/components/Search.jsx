import React from "react";
import { useState } from "react";

const Search = ({ searchTerm, updateTerm }) => {
  const [selectedTerm, updateSelectedTerm] = useState();

  /**
   *
   * @param {KeyboardEvent} e
   */
  function deleteChipOnBackspace(e) {
    if (e.key !== "Backspace") return;
    updateSelectedTerm("");
    updateTerm("");

    document.removeEventListener("keydown", deleteChipOnBackspace);

    /**
     * @type {HTMLInputElement}
     */
    const input = document.getElementById("input");

    if (input) {
      setTimeout(() => input.focus(), 200);
    }
  }

  /**
   *
   * @param {KeyboardEvent} e
   */
  function checkSubmission(e) {
    if (e.key === "Enter") {
      updateSelectedTerm(`#${searchTerm}`);
      document.addEventListener("keydown", deleteChipOnBackspace);
    }
  }

  return (
    <div className="input-field">
      <input
        id="input"
        className="input-box-search"
        disabled={!!selectedTerm}
        type="text"
        placeholder="#keyword"
        onChange={(e) => updateTerm(e.target.value)}
        onKeyDown={checkSubmission}
        value={searchTerm}
      />

      {/* display the tracked text in a span, positioned within the input field */}
      {selectedTerm && <span className="searched">{selectedTerm}</span>}
    </div>
  );
};

export default Search;
