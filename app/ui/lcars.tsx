'use client';

import { Ref, useRef } from "react";
import CenterColumn from "./center-column";
import LeftColumn from "./left-column";
import RightColumn from "./right-column";

export default function LCARS({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const beep1: Ref<HTMLAudioElement> = useRef(null);
  const beep2: Ref<HTMLAudioElement> = useRef(null);
  const beep3: Ref<HTMLAudioElement> = useRef(null);
  const beep4: Ref<HTMLAudioElement> = useRef(null);
  return (
    <>
      <audio ref={beep1} src="beep1.mp3" preload="auto"></audio>
      <audio ref={beep2} src="beep2.mp3" preload="auto"></audio>
      <audio ref={beep3} src="beep3.mp3" preload="auto"></audio>
      <audio ref={beep4} src="beep4.mp3" preload="auto"></audio>
      <div className="wrap-everything">
        <LeftColumn beep1={beep1} />
        <CenterColumn beep2={beep2} />
        <RightColumn beep2={beep2} beep4={beep4}>
          {children}
        </RightColumn>
      </div>
    </>
  )
}