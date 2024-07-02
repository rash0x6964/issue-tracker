import Github from "./components/icons/github";
import Card from "./components/card";
import { DASHBOARD_URL } from "@/lib/constants";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

import manage from "../public/manage.png"
import filter from "../public/filter.png"
import shear_it from "../public/shear_it.png"
import style_issue from "../public/style_issue.png"

export default async function Home() {
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
    <div className="flex items-center w-full flex-col justify-center">
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Track your issues to enhance productivity
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Centralizes all issues in one place, making it easy to see what needs
          attention and to prioritize tasks effectively.
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <Link
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href="/dashboard"
          >
            <p>Get Started</p>
          </Link>
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

      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={demo}
            large={large}
          />
        ))}
      </div>
    </div>
  );
}

const features = [
  {
    title: "Manage your issues",
    description: "The ability to create / update / remove your issues any time",
    large: false,
    demo: <Image src={manage} layout="responsive" alt="" className="hover:scale-105 transition duration-500 ease-in-out"/>,
  },
  {
    title: "Search easily",
    description:
      "You can filter by status which makes finding unclosed issues easy for you",
    large: true,
    demo: <Image src={filter} layout="responsive" alt="" className="hover:scale-105 transition duration-500 ease-in-out"/>,
  },
  {
    title: "Share it",
    description:
      "assign an issue / task to any user so can help find a solution",
    large: true,
    demo: <Image src={shear_it} layout="responsive" alt="" className="hover:scale-105 transition duration-500 ease-in-out"/>,
  },
  {
    title: "Style your issues",
    description:
      "The ability to write using Markdown which make u style your issues as u like",
    large: false,
    demo: <Image src={style_issue} layout="responsive" alt="" className="hover:scale-105 transition duration-500 ease-in-out"/>,
  },

];

export const metadata: Metadata = {
  title: "Issue Tracker - Home",
  description: "The landing page of Issue-tracker",
};

export const revalidate = 0;
