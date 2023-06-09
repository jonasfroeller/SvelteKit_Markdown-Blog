import type { Post } from '$lib/scripts/types';

export async function load({ fetch }) {
	const response = await fetch('api/posts');
	const posts: Post[] = await response.json();
	console.log(posts);
	return { posts };
}
