import Link from "next/link";

export default function LayoutLogin({ children }) {
  return (
    <>
      <main className="h-screen">
        <div>
          <div className="items-center flex justify-center p-3 mt-3">
            <Link
              href="/login"
             className="w-1/5  bg-[#008797] text-lg text-white rounded-full outline-none border-none font-bold tracking-wide transition-all hover:bg-[#252525]">
              ASESOR
            </Link>
            <Link
              href="/login/asesi"
              className="w-1/5  bg-[#008797] text-lg text-white rounded-full outline-none border-none font-bold tracking-wide transition-all hover:bg-[#252525]"
            >
              ASESI
            </Link>
          </div>
        </div>
        {children}
      </main>
    </>
  );
}
