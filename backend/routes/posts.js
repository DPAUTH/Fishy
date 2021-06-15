const router = require("express").Router();
const Post = require("../models/post");
const User = require("../models/user");

//CREATE POST

router.post("/", async (request, response) => {
  const newPost = new Post(request.body);
  try {
    const savedPost = await newPost.save();
    response.status(200).json(savedPost);
  } catch (err) {
    response.status(500).json(err);
  }
});


//UPDATE POST
router.put("/:id", async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);
    if (post.userId === request.body.userId) {
      await post.updateOne({ $set: request.body });
      response.status(200).json("the post has been updated");
    } else {
      response.status(403).json("you can update only your post");
    }
  } catch (err) {
    response.status(500).json(err);
  }
});

//DELETE POST
router.delete("/:id", async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);
    if (post.userId === request.body.userId) {
      await post.deleteOne();
      response.status(200).json("the post has been deleted");
    } else {
      response.status(403).json("you can delete only your post");
    }
  } catch (err) {
    response.status(500).json(err);
  }
});


//LIKE AND DISLIKE POST
router.put("/:id/like", async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);
    if (!post.likes.includes(request.body.userId)) {
      await post.updateOne({ $push: { likes: request.body.userId } });
      response.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: request.body.userId } });
      response.status(200).json("The post has been disliked");
    }
  } catch (err) {
    response.status(500).json(err);
  }
});


//GET POST
router.get("/:id", async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);
    response.status(200).json(post);
  } catch (err) {
    response.status(500).json(err);
  }
});


//GET TIMELINE POSTS
router.get("/timeline/all", async (request, response) => {
  try {
    const currentUser = await User.findById(request.body.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    response.json(userPosts.concat(...friendPosts))
  } catch (err) {
    response.status(500).json(err);
  }
});

module.exports = router;