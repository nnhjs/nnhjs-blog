import { json } from "@remix-run/node";
import { MetaFunction, useLoaderData } from "@remix-run/react";

import { getPosts } from "~/.server/posts";
import { Post } from "~/components/post";
import HomePage from "~/assets/homepage.png";

export const meta: MetaFunction = () => [
  { title: "Hung Nguyen" },
  {
    name: "description",
    content:
      "Welcome to nnhjs-blog.dev, Owner blog is Hung Nguyen. This blog about web development and more!",
  },
];

export const loader = () => {
  const posts = getPosts();
  return json(posts);
};

export default function Index() {
  const featuredPosts = useLoaderData<typeof loader>();

  return (
    <div className="flex-1 p-10 grid sm:grid-cols-2 gap-16 sm:place-items-center">
      <div className="space-y-8">
        <section>
          <h2 className="font-semibold text-pink-600 uppercase">
            Recently Published
          </h2>
          <ul className="mt-4 space-y-8">
            {featuredPosts.map((post) => (
              <li key={post.slug}>
                <Post {...post} />
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="hidden sm:block">
        <img src={HomePage} alt="Hung Nguyen Homepage" />
      </div>
    </div>
  );
}
