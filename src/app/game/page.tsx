import Link from "next/link";

import PageRoot from "../components/PageRoot";
import Nav from "../components/Nav";
import Box from "../components/Box";

export default function Game() {
  return (
    <PageRoot>
      <Nav />
      <h2 className="font-bold text-xl">Home</h2>
      <Link className="py-3 text-blue-700 underline font-bold" href="home">
        Home
      </Link>
      <Box>
        <div className="h-80 w-full flex flex-col justify-center content-center">
          <h3 className="font-bold text-lg pb-2">Langville</h3>
          <div className="size-80 bg-slate-800 mx-auto"></div>
        </div>
      </Box>
    </PageRoot>
  );
}
