'use client';
import Image from 'next/image'
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function Home() {
   const router = useRouter();

   useEffect(() => {
        router.push('/auth');
   }, [router]);

  return (
    <main className="flex h-[100%] w-[100%] items-center justify-center p-24">
        <Image src="/assets/loader.gif" alt="Logo" width={64} height={64} />
    </main>
  )
}
