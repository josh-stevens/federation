'use client';

import { redirect, usePathname } from "next/navigation";

export function BackButton() {
  const beep3 = new Audio("/beep3.mp3");
  const pathname = usePathname();

  function navigate() {
    beep3.onended = () => {
      redirect(pathname.substring(0, pathname.lastIndexOf('/')));
    }
    beep3.play();
  }
  return (
    <div className="buttons">
      <button className="button-bluey" onClick={() => navigate()}>
        Back
      </button>
    </div>
  );
}