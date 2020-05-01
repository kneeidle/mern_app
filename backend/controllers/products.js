const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {//
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.addPost = async (req, res) => {//
  const post = new Post({
    title: req.body.title,
    ingredients: req.body.ingredients,
    calories: req.body.calories,
    image: req.body.image,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.getSinglePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.deletePost = async (req, res) => {//
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.updateOne({ _id: req.params.postId },
      { $set: { title: req.body.title } });
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
};
