import { createSlice } from "@reduxjs/toolkit";
import { posts } from "../dummyUsers";
const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    addPost(state, action) {
      state.posts.push(action.payload);
      posts.push(action.payload);
    },
    addComments(state, action) {
      const updatedPosts = state.posts.map((post) => {
        if (post.title === action.payload.postTitle) {
          // Create a copy of the post with the new comment added
          return {
            ...post,
            comments: [...post.comments, action.payload.comment],
          };
        }
        return post; // Return the unchanged post if the title doesn't match
      });

      // Return the updated state with the new array of posts
      return {
        ...state,
        posts: updatedPosts,
      };
    },
  },
});

export const postActions = postSlice.actions;
export default postSlice.reducer;
