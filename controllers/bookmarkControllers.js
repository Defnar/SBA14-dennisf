import { Bookmark } from "../models/Bookmark";
import { User } from "../models/User";

export const createBookmark = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({ message: "Body empty" });
    }

    const note = await Note.create({
      ...req.body,
      user: req.user._id,
    });

    res.json({ message: "bookmark created", bookmark });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

export const getAllBookmarks = async (req, res) => {
    try {
        const bookmarks = await Bookmark.find({userId: req.user._id})

        if (!bookmarks) return res.json({message: "no bookmarks found"})

        res.json(bookmarks);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({message: err.message})
    }
}

export const getBookmark = async (req, res) => {
    const bookmark = res.bookmark;

    res.json(bookmark);
}
