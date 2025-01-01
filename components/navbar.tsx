import { auth, signIn, signOut } from "../auth";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className=" px-5 py-1 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center h-full">
        <Link href="/">
          <Image src={"/logo.png"} alt="Logo" width={50} height={10}></Image>
        </Link>

        <div className="flex item-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>create</span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">Signout</button>
              </form>
              <Link href={`/user/${session.user.id}`}>
                <span>{session.user.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
