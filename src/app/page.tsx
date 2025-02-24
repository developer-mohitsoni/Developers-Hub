"use client";

import DarkAndLightBtn from "@/components/DarkAndLightBtn";
import SearchAndBtn from "@/components/SearchAndBtn";
import Image from "next/image";
import Link from "next/link";
import dateFormat from "dateformat";

import { FaLocationDot } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { GitHubUser } from "@/User-Types";
import { useState } from "react";

export default function Home() {
  const [userName, setUserName] = useState("octocat");

  const { isLoading, error, data, refetch } = useQuery<GitHubUser>({
    queryKey: ["github"],
    queryFn: async () => {
      const data = await fetch(`https://api.github.com/users/${userName}`);
      return await data.json();
    },
  });

  // console.log("data - ", data);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <p className="animate-bounce">Loading...</p>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    refetch();
  };

  return (
    <div className="flex min-h-screen w-full bg-stone-100 p-1.5 sm:p-4 pt-10 sm:pt-12 transition-all dark:bg-slate-900">
      {/* container */}
      <div className="mx-auto flex w-full max-w-[600px] flex-col gap-8 rounded p-2">
        <section className="flex justify-between gap-3">
          <p className="text-xl font-semibold">Developer's Repo</p>
          <DarkAndLightBtn />
        </section>

        {/* search and main */}
        <section className="flex flex-col gap-6">
          {/* search and btn */}
          <SearchAndBtn
            onChange={(e) => setUserName(e.target.value)}
            onSubmit={handleSubmit}
            value={userName}
          />

          {data?.message ? (
            <div className="flex w-full flex-col gap-5 rounded-lg bg-white px-4 py-8 text-center text-red-400 dark:bg-slate-800">
              User Not Found
            </div>
          ) : (
            <main className="flex w-full flex-col gap-5 rounded-lg bg-white dark:bg-slate-800 px-4 py-8 min-h-[200px]">
              {/* 1 */}
              <section className="flex gap-4">
                {/* user image */}

                <Image
                  src={data?.avatar_url ?? ""}
                  width={200}
                  height={200}
                  alt="user-img"
                  className="h-20 w-20 rounded-full"
                />

                <section className="flex flex-col justify-between gap-1 transition-all sm:w-full sm:flex-row">
                  <div>
                    {/* name */}
                    <h1>{data?.name}</h1>
                    {/* user id */}
                    <Link
                      href={`https://github.com/${data?.login}/`}
                      target="_blank"
                      className="text-blue-500 hover:underline text-sm transition-all"
                    >
                      @{data?.login}
                    </Link>
                  </div>
                  {/* joined date */}
                  <p className="">
                    <span>Joined</span>
                    <span>{dateFormat(data?.created_at, " dd mmm yyyy")}</span>
                  </p>
                </section>
              </section>
              {/* 2 */}
              <section className="flex flex-col gap-5">
                <p>
                  {data?.bio ?? (
                    <span className="opacity-60">This profile has no bio</span>
                  )}
                </p>

                {/* repo and followers section */}

                <div className="flex justify-between gap-3 rounded-lg bg-stone-100 px-6 py-4 dark:bg-slate-900 min-h-[50px]">
                  {/* item 1 */}
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-xs opacity-60">Repos</p>
                    <p className="text-sm font-bold sm:text-base">
                      {data?.public_repos}
                    </p>
                  </div>
                  {/* item 2 */}
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-xs opacity-60">Followers</p>
                    <p className="text-sm font-bold sm:text-base">
                      {data?.followers}
                    </p>
                  </div>
                  {/* item 3 */}
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-xs opacity-60">Following</p>
                    <p className="text-sm font-bold sm:text-base">
                      {data?.following}
                    </p>
                  </div>
                </div>

                {/* address and extra links */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* item 1 */}
                  <div className="flex items-center gap-2">
                    {/* icon */}
                    <FaLocationDot className="text-xl" />
                    <p>
                      {data?.location ?? (
                        <span className="opacity-60">Not Available</span>
                      )}
                    </p>
                  </div>
                  {/* item 2 */}
                  <div className="flex items-center gap-2">
                    {/* icon */}
                    <FaLink className="text-xl" />
                    {data?.blog ? (
                      <Link
                        title={data?.blog}
                        className="hover:underline opacity-60 max-w-[220px] overflow-hidden text-ellipsis truncate"
                        href={data?.blog ?? "#"}
                      >
                        {data?.blog}
                      </Link>
                    ) : (
                      <span className="opacity-60">Not Available</span>
                    )}
                  </div>
                  {/* item 3 */}
                  <div className="flex items-center gap-2">
                    {/* icon */}
                    <FaGithub className="text-xl" />
                    {data?.url ? (
                      <Link
                        title={data?.url}
                        className="hover:underline opacity-60 max-w-[220px] overflow-hidden text-ellipsis truncate"
                        href={data?.url ?? "#"}
                      >
                        {data?.url}
                      </Link>
                    ) : (
                      <span className="opacity-60">Not Available</span>
                    )}
                  </div>
                  {/* item 4 */}
                  <div className="flex items-center gap-2">
                    {/* icon */}
                    <FaCity className="text-xl" />
                    <p>
                      {data?.company ?? (
                        <span className="opacity-60">Not Available</span>
                      )}
                    </p>
                  </div>
                </div>
              </section>
            </main>
          )}
        </section>
      </div>
    </div>
  );
}
