import Link from "next/link";

export default function Nav() {
    return (
        <div className="w-full h-10 bg-yellow-600 fixed top-0 left-0 flex flex-row justify-evenly content-center">
            <Link href="home" className="text-blue-700 underline font-bold py-2">Home</Link>
            <Link href="game" className="text-blue-700 underline font-bold py-2">Play</Link>
            <Link href="sign-up" className="text-blue-700 underline font-bold py-2">Sign Up</Link>
        </div>
    )
}