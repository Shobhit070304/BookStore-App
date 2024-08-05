import bookModel from "../models/book-model.js";

export const getBooks = async (req, res) => {
  try {
    const Books = await bookModel.find();
    return res.status(200).json(Books);
  } catch (error) {
    console.log("Error : ", error);
    return res.status(500).json({ error });
  }
};
