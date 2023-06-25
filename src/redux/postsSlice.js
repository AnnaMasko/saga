import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
	name: "posts",
	initialState: {
		posts: [],
		isLoading: false,
		error: false,
	},
	reducers: {
		getPostsFetch: (state) => {
			state.isLoading = true;
		},
		getPostsSuccess: (state, action) => {
			state.isLoading = false;
			state.posts = action.payload;
		},
		getPostsFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},

		setPostFetch: (state) => {
			state.isLoading = true;
		},
		setPostSuccess: (state, action) => {
			state.isLoading = false;
			state.posts.push(action.payload);
		},
		setPostFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},

		deletePostFetch: (state) => {
			state.isLoading = true;
		},
		deletePostSuccess: (state, action) => {
			state.isLoading = false;
			state.posts = state.posts.filter((post) => post.id !== action.payload);
		},
		deletePostFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const {getPostsFetch, getPostsSuccess, getPostsFailure, 
    setPostFetch, setPostSuccess, setPostFailure, 
    deletePostFetch, deletePostSuccess, deletePostFailure,} = postsSlice.actions;
export default postsSlice.reducer;