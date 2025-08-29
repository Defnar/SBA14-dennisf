import { Bookmark } from "../models/Bookmark.js";

export const createBookmark = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ message: "Body empty" });
    }

    console.log(req.user);

    const bookmark = await Bookmark.create({
      ...req.body,
      userId: req.user._id,
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

        if (bookmarks.length === 0) return res.json({message: "no bookmarks found"})

        res.json(bookmarks);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({message: err.message})
    }
}

export const getBookmark = (req, res) => {
    const bookmark = req.bookmark;

    res.json(bookmark);
}

export const editBookmark = async (req, res) => {
    try {
        const bookmark = Object.assign(req.bookmark, req.body);

        await bookmark.save();

        res.json(bookmark);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
}

export const deleteBookmark = async (req, res) => {
    try {
        await req.bookmark.deleteOne();
        res.json({message: "bookmark successfully deleted"})
    }
    catch (err) {
        console.log(err);
        res.status(500).json({message: err.message})
    }
}
