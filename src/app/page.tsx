import DarkAndLightBtn from "@/components/DarkAndLightBtn";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full bg-sone-100 p-1.5 sm:p-4 pt-10 sm:pt-12 transition-all">
      {/* container */}
      <div className="border mx-auto flex w-full max-w-[600px] flex-col gap-8 rounded p-2">
        <section className="flex justify-between gap-3">
          <p className="text-xl font-semibold">devfinder</p>
          <DarkAndLightBtn />
        </section>
      </div>
    </div>
  );
}
