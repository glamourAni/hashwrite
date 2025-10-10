import mongoose from "mongoose"

const { Schema } = mongoose

const hashtagSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		topic: {
			type: String,
			required: true,
			trim: true,
		},
		platform: {
			type: String,
			enum: ["instagram", "x", "tiktok", "general"],
			default: "general",
		},
		usageCount: {
			type: Number,
			default: 0,
		},
		savedBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
			index: true,
		},
	},
	{ timestamps: true }
)

const Hashtag = mongoose.model("Hashtag", hashtagSchema)

export default Hashtag
