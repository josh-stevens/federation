'use client';

import { RefObject } from "react";

export default function CenterColumn({ beep2 }: { beep2: RefObject<HTMLAudioElement | null> }) {
  function playSound(url: string) {
    beep2.current?.play()
  }
  return (
    <section id="column-2">
      <div className="panel-11"> 11-1524 </div>
      <button onClick={() => playSound('#')} className="sidebar-button button-almond-creme">JS2B-01</button>
      <button onClick={() => playSound('#')} className="sidebar-button button-butterscotch">JS2B-02</button>
      <button onClick={() => playSound('#')} className="sidebar-button button-african-violet">MS2B-03</button>
      <div className="panel-12"> 12-0730</div>
      <div className="panel-13">13-318</div>
      <div className="panel-14">14-DL44</div>
      <div className="panel-15">15-3504</div>
    </section>
  );
}