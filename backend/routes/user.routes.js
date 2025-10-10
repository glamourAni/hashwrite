import { Router } from "express"

const userRouter = Router()

userRouter.get("/", (req, res) => {
	res.send({ message: "GET all users" })
})

userRouter.get("/:id", (req, res) => {
	res.send({ message: "GET a user" })
})

userRouter.post("/", (req, res) => {
	res.send({ message: "CREATE a user" })
})

userRouter.put("/:id", (req, res) => {
	res.send({ message: "UPDATES a user" })
})

userRouter.delete("/:id", (req, res) => {
	res.send({ message: "DELETE a user" })
})

export default userRouter
