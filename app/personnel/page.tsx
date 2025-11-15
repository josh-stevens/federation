'use client';

import { redirect } from "next/navigation";

export default function Personnel() {
  const beep3 = new Audio("/beep3.mp3");

  function playSound(url: string) {
    beep3.onended = () => {
      redirect(url)
    }
    beep3.play()
  }

  return (
    <>
      <h1>Personnel</h1>
      <h2>Select an assignment below to view personnel.</h2>
      <div className="buttons">
        <button className="button-butterscotch" onClick={() => playSound("/personnel/ncc-1701-e")}>NCC-1701-E</button>
      </div>
    </>
  );
}
