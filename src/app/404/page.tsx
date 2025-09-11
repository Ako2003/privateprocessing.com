import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col justify-center h-screen items-center">
            <h1 className="">404</h1>
            <h4>Not Found</h4>
            <Link href="/">
                <h6>Return to home page</h6>
            </Link>
        </main>
    );
}
