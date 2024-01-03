import {
  Link,
  Links,
  LiveReload,
  Meta,
  MetaFunction,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ReactNode } from "react";

import "~/tailwind.css";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "border-b-2 border-cyan-700" : "";

const Layout = (props: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <header className="w-full max-w-7xl mx-auto p-10 flex text-lg">
      <div className="flex-1 flex gap-16">
        <Link to="/" className="font-bold">
          Hung Nguyen
        </Link>
        <nav>
          <ul className="flex gap-16 font-semibold">
            <li>
              <NavLink to="/latest" className={navLinkClass}>
                Latest
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={navLinkClass}>
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink to="/goodies" className={navLinkClass}>
                Goodies
              </NavLink>
            </li>
            <li>
              <NavLink to="/courses" className={navLinkClass}>
                Courses
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <button>Switch Theme</button>
      </div>
    </header>
    <main className="w-full max-w-7xl mx-auto flex-1 flex">
      {props.children}
    </main>
    <footer className="w-full max-w-7xl mx-auto p-10 flex justify-center">
      <span className="text-sm text-gray-500">
        Made with 💙 by{" "}
        <a href="https://twitter.com/nnhungjs" target="_blank" rel="noreferrer">
          @nnhjs
        </a>
      </span>
    </footer>
  </div>
);

export const meta: MetaFunction = () => [
  { title: "nnhjs.dev" },
  {
    name: "description",
    content: "Welcome to nnhjs-blog, a blog about web development and more!",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="overflow-y-scroll">
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
