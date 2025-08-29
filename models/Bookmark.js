import mongoose, { model, Schema } from "mongoose";

const BookmarkSchema = new Schema({
    title: {
        type: String,
        required: [true, "title required"]
    },
    content: {
        type: String,
        required: [true, "content required"]
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

export const Bookmark = model("Bookmark", BookmarkSchema);