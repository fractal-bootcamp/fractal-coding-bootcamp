import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";

export const loader = async ({ params }) => {
    const post = await getPosts(params.postId);
    if (!post) {
        throw new Response("Not Found", { status: 404 });
    }
    return json({ post });
};

export default function PostSlug() {
    const { post } = useLoaderData();
    return (
        <main>
          <article>
            <header>
              <nav>
                <h1>{post.title}</h1>
              </nav>
            </header>
            <p>{post.body}</p>
          </article>
        </main>
    );
}

export function ErrorBoundary({ error }) {
    console.error(error);
    return <div>Oh no, something went wrong!</div>;
}