import { posts } from "../../dummyUsers";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { useDispatch } from "react-redux";
import { postActions } from "../../store/post-store";

import "./PostDetailPage.css";
const PostDetailPage = () => {
  const { title } = useParams();
  const [post, setPost] = useState({});
  const [comment, setComment] = useState("");
  const retrievedPost = posts.find((post) => post.title === title);
  const dispatch = useDispatch();
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    let newComment = {
      postTitle: post.title,
      comment: comment,
    };
    dispatch(postActions.addComments(newComment));
  };
  useEffect(() => {
    setPost(retrievedPost);
  }, [retrievedPost, handleCommentSubmit]);
  return (
    <div className="post-detail-page-container">
      <Header />
      {post === null ? (
        <h1>Post not found</h1>
      ) : (
        <>
          <h1>Post Detail</h1>
          <div className="post-detail">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <img src={post.imageUrl} alt={post.title} />
            {/* make a comments thread for the post*/}

            <div className="comments-thread">
              <form>
                <input
                  type="textbox"
                  placeholder="Add a comment"
                  onChange={(event) => {
                    setComment(event.target.value);
                  }}
                />
                <button onClick={handleCommentSubmit}>Submit</button>
              </form>

              <h2>Comments</h2>
              {post.comments ? (
                post.comments.map((comment) => {
                  return <p>{comment}</p>;
                })
              ) : (
                <h1>No Comments yet for this post</h1>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PostDetailPage;
