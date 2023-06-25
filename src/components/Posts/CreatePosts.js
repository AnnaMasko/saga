import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import styles from "./CreatePosts.module.css";
import { setPostFetch } from "../../redux/postsSlice";

export function CreatePost() {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const dispatch = useDispatch();

	const savePost = () => {
		dispatch(
			setPostFetch({
				title: title,
				body: body,
				userId: uuidv4(),
				id: uuidv4(),
			})
		);
		setTitle("");
		setBody("");
	};

	return (
		<div className={styles.container}>
			<input
				type="text"
				placeholder="title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<input
				type="text"
				placeholder="body"
				value={body}
				onChange={(e) => setBody(e.target.value)}
			/>
			<button onClick={savePost}>Add</button>
		</div>
	);
}