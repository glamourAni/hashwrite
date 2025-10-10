import express from "express"
import { PORT } from "./config/env.js"
import authRouter from "./routes/auth.routes.js"
import userRouter from "./routes/user.routes.js"
import hashtagRouter from "./routes/hashtag.routes.js"
import connectToDatabase from "./database/mongodb.js"
import errorMiddleware from "./middleware/error.middleware.js"

const app = express()

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/hashtags", hashtagRouter)

app.use(errorMiddleware)

app.get("/", (req, res) => {
	res.send(`Hashwrite backend running on ${PORT}`)
})

app.listen(PORT, async () => {
	console.log(`Running on http://localhost:${PORT}`)
	await connectToDatabase()
})

// console.log(`running on Port ${PORT}`)
export default app
