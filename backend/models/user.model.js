import mongoose from "mongoose"

const { Schema } = mongoose

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Username is required"],
			minLength: 2,
			maxLength: 30,
			trim: true,
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
			trim: true,
			lowercase: true,
			match: [
				/^[\w.-]+@[\w.-]+\.[a-z]{2,}$/,
				"Please enter a valid email address",
			],
		},
		password: {
			type: String,
			required: [true, "Password is required"],
			trim: true,
			minLength: [6, "Password must be up to six characters"],
			match: [
				/\?=.*[A-Za-z]?=.*\d/,
				"Password must contain at least one letter and one number",
			],
		},
	},
	{ timestamps: true }
)

const User = mongoose.model("User", userSchema)

export default User
