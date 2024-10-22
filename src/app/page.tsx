import DarkAndLightBtn from "@/components/DarkAndLightBtn";
import SearchAndBtn from "@/components/SearchAndBtn";
import Image from "next/image";
import Link from "next/link";

import { FaLocationDot } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaCity } from "react-icons/fa";

export default function Home() {
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
          <SearchAndBtn />

          <main className="flex w-full flex-col gap-5 rounded-lg bg-white dark:bg-slate-800 px-4 py-8 min-h-[200px]">
            {/* 1 */}
            <section className="flex gap-4">
              {/* user image */}

              <Image
                src={"https://avatars.githubusercontent.com/u/120788753?v=4"}
                width={200}
                height={200}
                alt="user-img"
                className="h-20 w-20 rounded-full"
              />

              <section className="flex flex-col justify-between gap-1 transition-all sm:w-full sm:flex-row">
                <div>
                  {/* name */}
                  <h1>Mohit Soni</h1>
                  {/* user id */}
                  <Link
                    href={"#"}
                    className="text-blue-500 hover:underline text-sm transition-all"
                  >
                    @mohitSoni
                  </Link>
                </div>
                {/* joined date */}
                <p className="">Joined 19 Sep 2019</p>
              </section>
            </section>
            {/* 2 */}
            <section className="flex flex-col gap-5">
              <p>Lorem ipsum dolor sit amet.</p>

              {/* repo and followers section */}

              <div className="flex justify-between gap-3 rounded-lg bg-stone-100 px-6 py-4 dark:bg-slate-900 min-h-[50px]">
                {/* item 1 */}
                <div className="flex flex-col items-center gap-2">
                  <p className="text-xs opacity-60">Repos</p>
                  <p className="text-sm font-bold sm:text-base">108</p>
                </div>
                {/* item 2 */}
                <div className="flex flex-col items-center gap-2">
                  <p className="text-xs opacity-60">Followers</p>
                  <p className="text-sm font-bold sm:text-base">20</p>
                </div>
                {/* item 3 */}
                <div className="flex flex-col items-center gap-2">
                  <p className="text-xs opacity-60">Following</p>
                  <p className="text-sm font-bold sm:text-base">10</p>
                </div>
              </div>

              {/* address and extra links */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* item 1 */}
                <div className="flex items-center gap-2">
                  {/* icon */}
                  <FaLocationDot className="text-xl" />
                  <p>Mathura</p>
                </div>
                {/* item 2 */}
                <div className="flex items-center gap-2">
                  {/* icon */}
                  <FaLink className="text-xl" />
                  <p>https://mohitsoni/vercel.com</p>
                </div>
                {/* item 3 */}
                <div className="flex items-center gap-2">
                  {/* icon */}
                  <FaSquareXTwitter className="text-xl" />
                  <p>Not Available</p>
                </div>
                {/* item 4 */}
                <div className="flex items-center gap-2">
                  {/* icon */}
                  <FaCity className="text-xl" />
                  <p>Mathura</p>
                </div>
              </div>
            </section>
          </main>
        </section>
      </div>
    </div>
  );
}
