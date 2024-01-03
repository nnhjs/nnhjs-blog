import { json } from "@remix-run/node";
import { MetaFunction, useLoaderData } from "@remix-run/react";

import { getPosts } from "~/.server/posts";
import { Post } from "~/components/post";
import Hi from "~/assets/hi.png";

export const meta: MetaFunction = () => [
  { title: "Home" },
  {
    name: "description",
    content: "Welcome to nnhjs-blog, a blog about web development and more!",
  },
];

export const loader = () => {
  const posts = getPosts();
  return json(posts.filter((post) => post.frontmatter.featured));
};

export default function Index() {
  const featuredPosts = useLoaderData<typeof loader>();

  return (
    <div className="flex-1 p-10 grid sm:grid-cols-2 gap-16 sm:place-items-center">
      <div className="space-y-8">
        <div>
          <h2 className="text-4xl font-bold">Remix 🤝 MDX</h2>
          <p className="text-gray-600 font-light">
            Powered by Vite plugins. Check out the{" "}
            <a href="https://github.com/pcattori/remix-blog-mdx">
              code on Github
            </a>
            .
          </p>
        </div>
        <hr />
        <section>
          <h3 className="text-xl tracking-wide">✨ FEATURED ✨</h3>
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
        <img
          src={Hi}
          alt="Abstract sculpture with different colorful shapes"
        />
      </div>
    </div>
  );
}
