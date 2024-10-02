"use client";

// import Video from "next-video";
import { useEffect, useRef } from "react";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
    }
  }, []);

  return (
    <>
      <video
        src="/assets/mp4/gods.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="hover:brightness-[60%] transition object-cover top-0 w-full h-full fixed"
      />
      <audio ref={audioRef} src="/assets/mp3/gods.mp3" autoPlay loop />
    </>
  );
}
