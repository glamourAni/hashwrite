import { Router } from "express"
import { API_KEY, API_URL } from "../config/env.js"
import fs from "fs"

const hashtagRouter = Router()

const API_OPTIONS = {
	method: "GET",
	headers: {
		"x-rapidapi-key": `${API_URL}`,
		"x-rapidapi-host": `${API_KEY}`,
	},
}
const hashtagData = []
const development = true

hashtagRouter.get("/", async (req, res) => {
	const name = req.query.name
	// 1. GET hashtags from Hashtagy's api
	try {
		if (development) {
			fs.readFile("./json-data/mock_data.json", "utf8", (err, data) => {
				if (err) {
					return res
						.status(500)
						.json({ error: "Failed to read file" })
				}
				const JSONData = JSON.parse(data)
				//iterate through each hashtag and their respective array values
				Object.keys(JSONData).forEach((key) => {
					// 2. Retrieve hashtags that match the keyword
					const arr = JSONData[key]
					const arrMatchesQuery = arr.filter((word) =>
						word.toLowerCase().includes(name)
					)
					console.log(arr)

					if (key.toLowerCase().includes(name) || arrMatchesQuery) {
						hashtagData.push({
							success: true,
							message: `Hashtags for '${name}'`,
							data: arr,
						})
						return
					}
				})
				res.json(hashtagData)
			})
		} else {
			const response = await fetch(API_URL, API_OPTIONS)
			const data = await response.json()

			res.send(data)
		}
	} catch (error) {
		console.log(`Error fetching api: ${error}`)
	}
})

hashtagRouter.post("/save", (req, res) =>
	res.send({ message: "POST hashtags" })
)

hashtagRouter.get("/history", (req, res) =>
	res.send({ message: "GET saved hashtags" })
)

export default hashtagRouter
