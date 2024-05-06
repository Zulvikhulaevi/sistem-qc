import Footer from "@/components/Footer";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <Image
        src="/static/assets/bg.jpg"
        layout="responsive"
        width={1920}
        height={1080}
        objectFit="cover"
        quality={100}
        alt="background"
      />
      <div className="absolute w-full top-1/2 left-16">
        <Link
          href={session ? "/qcsys" : "/auth/login"}
          className="btn btn-lg glass btn-wide text-white font-bold px-4 py-2 rounded">
          QC Input
        </Link>
      </div>
      <Footer />
    </div>
  );
}
