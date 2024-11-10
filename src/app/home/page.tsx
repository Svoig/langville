import Link from "next/link";

import PageRoot from "../components/PageRoot";
import Nav from "../components/Nav";
import Box from "../components/Box";

export default function Home() {
  return (
    <PageRoot>
      <Nav />
      <h2 className="font-bold text-xl">Home</h2>
      <Box>
        <h3 className="font-bold text-lg pb-2">Benefits</h3>
        <ul className="list-disc">
          <li className="ms-2">Learn a new language by solving real-world problems</li>
          <li className="ms-2">Engange in practical conversations to improve your vocabulary</li>
          <li className="ms-2">Practice listening and speaking to super-charge your learning</li>
        </ul>
        <Link className="pt-5 text-blue-700 underline font-bold" href="game">Play now</Link>
      </Box>
    </PageRoot>
  );
}
