import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import "./CreatePostPage.css";
import Header from "../../components/Header";
import { useDispatch } from "react-redux";
import { postActions } from "../../store/post-store";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const CreatePostPage = () => {
  const [post, setPost] = useState({
    title: "",
    description: "",
    imageUrl: "",
    comments: [],
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.loggedUser.isLoggedIn);

  return (
    <div className="create-post-page-container">
      {!isLoggedIn ? (
        <>
          <h1>You need to be logged in to create a post</h1>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>
        </>
      ) : (
        <>
          <Header />
          <h1>Create Post</h1>
          <form>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              type="text"
              onChange={(event) => {
                setPost({ ...post, title: event.target.value });
              }}
            />
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              type="text"
              onChange={(event) => {
                setPost({ ...post, description: event.target.value });
              }}
            />
            <TextField
              id="outlined-basic"
              label="Image URL"
              variant="outlined"
              type="text"
              onChange={(event) => {
                setPost({ ...post, imageUrl: event.target.value });
              }}
            />
          </form>
          <h1>Preview</h1>
          <div className="post-preview">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <img src={post.imageUrl} alt={post.title} />
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch(postActions.addPost(post));
                navigate("/");
              }}
            >
              Add Post
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CreatePostPage;
