import Github from "../components/icons/github";
import { DASHBOARD_URL } from "@/lib/constants";

export default async function landing_page() {
//   const { stargazers_count: stars } = await fetch(
//     "https://api.github.com/repos/rash0x6964/issue-tracker",
//     {
//       ...(process.env.GITHUB_OAUTH_TOKEN && {
//         headers: {
//           Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
//           "Content-Type": "application/json",
//         },
//       }),
//       // data will revalidate every 24 hours
//       next: { revalidate: 86400 },
//     }
//   )
//     .then((res) => res.json())
//     .catch((e) => console.log(e));

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0 m-auto">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Building blocks for your Next project
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          An opinionated collection of components, hooks, and utilities for your
          Next.js project.
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href={DASHBOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Get Started</p>
          </a>
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/rash0x6964/issue-tracker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>
              <span className="hidden sm:inline-block">Star on</span> GitHub{" "}
              <span className="font-semibold">{0}</span>
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
