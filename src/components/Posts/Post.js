import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Post.module.css";
import { getPostsFetch, deletePostFetch } from "../../redux/postsSlice";

export function Posts() {
	const { posts, isLoading, error } = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPostsFetch());
	}, [dispatch]);

	if (isLoading) return <div className={styles.loading}>Loading...</div>;
	if (error) return <div className={styles.error}>{error}</div>;

	return (
		<div className={styles.container}>
			{posts.map((post) => {
				return (
					<div
						className={styles.post}
						key={post.id}
						onClick={() => dispatch(deletePostFetch(post.id))}
					>
						<h3>{post.title}</h3>
						<p>{post.body}</p>
					</div>
				);
			})}
		</div>
	);
}