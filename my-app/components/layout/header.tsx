import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20 bg-slate-950">
      <nav className="h-14 flex items-center justify-between px-4">
        <div className="hidden lg:block">
          <Link
            href={"#"}
            target="_blank"
          >
          <Image src="/logo.png" width={80} height={80} alt="logo"></Image>
          </Link>
        </div>
      </nav>
    </div>
  );
}