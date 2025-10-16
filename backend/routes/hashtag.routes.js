import { Router } from "express"
import { API_KEY, API_URL } from "../config/env.js"
import fs from "fs"
import getHashtags from "../mock/query.js"

const hashtagRouter = Router()

const API_OPTIONS = {
	method: "GET",
	headers: {
		"x-rapidapi-key": `${API_URL}`,
		"x-rapidapi-host": `${API_KEY}`,
	},
}
const development = true

hashtagRouter.get("/", async (req, res) => {
	const name = encodeURIComponent(req.query.name)
	console.log(`Query parameter is ${name}`)
	// 1. GET hashtags from Hashtagy's api
	try {
		if (development) {
			fs.readFile("./mock/mock_data.json", "utf8", (err, data) => {
				if (err) {
					return res
						.status(500)
						.json({ error: "Failed to read file" })
				}
				const JSONData = JSON.parse(data)
				res.json({
					status: "Success",
					data: getHashtags(name, JSONData),
					message: "Make sure to encode query on frontend",
				})
			})

			//iterate through each hashtag and their respective array values
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
