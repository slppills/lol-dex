"use client";

// import Link from "next/link";
// import Video from "next-video";
import { useEffect, useRef } from "react";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
    }
  }, []);

  return (
    <>
      {/* <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}> */}
      <video
        src="/assets/mp4/gods.mp4"
        autoPlay
        muted
        loop
        playsInline
        // className={`${isHovered && "brightness-[60%]"} transition object-cover w-full h-full fixed`}
        className={"transition object-cover w-full h-full fixed"}
      />
      {/* {isHovered && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link href="/champions" className="text-red-500 font-bold text-[1.5rem] bg-white px-5 py-3 rounded-md">
              챔피언 알아보러 가기
            </Link>
          </div>
        )} */}
      <audio ref={audioRef} src="/assets/mp3/gods.mp3" autoPlay muted loop />
      {/* </div> */}
    </>
  );
}
