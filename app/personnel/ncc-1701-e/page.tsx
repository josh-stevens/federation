'use client';

import { redirect } from "next/navigation";

// TODO: parameterize this component and subcomponents
export default function NCC1701E() {
  const beep3 = new Audio("../../beep3.mp3");

  function playSound(officer: string) {
    beep3.onended = () => {
      redirect(`/personnel/ncc-1701-e/${officer}`)
    }
    beep3.play();
  }

  return (
    <>
      <h1>Personnel: NCC-1701-E</h1>
      <h2>Select an officer below to view details.</h2>
      <div className="buttons flex flex-col">
        <button className="button-butterscotch" onClick={() => playSound("picard")}>Captain Jean-Luc Picard</button>
        <button className="button-butterscotch" onClick={() => playSound("riker")}>First Officer William T. Riker</button>
      </div>
    </>
  );
}