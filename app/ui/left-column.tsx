'use client';

import { RefObject } from "react";

export default function LeftColumn({ beep1 }: { beep1: RefObject<HTMLAudioElement | null> }) {
  function playSound(url: string) {
    beep1.current?.play()
  }
  return (
    <section id="column-1">
      <div className="lcars-frame">
        <div className="frame-col-1">
          <div className="frame-col-1-cell-a"></div>
          <div className="frame-col-1-cell-b"></div>
          <div className="frame-col-1-cell-c"></div>
        </div>
        <div className="frame-col-2"> </div>
        <div className="frame-col-3 display-vertical">
          <div className="line"></div><div className="line"></div><div className="line"></div><div className="line"></div><div className="line"></div><div className="line"></div><div className="line"></div><div className="line"></div><div className="line"></div><div className="line"></div><div className="line"></div><div className="line"></div><div className="line"></div><div className="line"></div><div className="line"></div><div className="line"></div>
        </div>
        <div className="frame-col-4"> </div>
        <div className="frame-col-5">
          <div className="frame-col-5-cell-a"></div>
          <div className="frame-col-5-cell-b"></div>
          <div className="frame-col-5-cell-c"></div>
        </div>
      </div>
      <div className="pillbox">
        <button onClick={() => playSound('#')} className="pill">J-001</button>
        <button onClick={() => playSound('#')} className="pill">R-002</button>
        <button onClick={() => playSound('#')} className="pill">R-003</button>
        <button onClick={() => playSound('#')} className="pill">I-004</button>
        <button onClick={() => playSound('#')} className="pill">C-005</button>
        <button onClick={() => playSound('#')} className="pill">A-006</button>
      </div>
      <div className="lcars-list-2 uppercase">
        <ul>
          <li>Subspace Link: Established</li>
          <li>Starfleet Database: Connected</li>
          <li>Quantum Memory Field: stable</li>
          <li className="bullet-almond-creme font-almond-creme">Optical Data Network: rerouting</li>
        </ul>
      </div>
      <div className="pillbox-2">
        <button onClick={() => playSound('#')} className="pill-2">F12-22</button>
        <button onClick={() => playSound('#')} className="pill-2">G24-22</button>
        <div className="pill-2"> </div>
        <button onClick={() => playSound('#')} className="pill-2">H-07AM</button>
        <button onClick={() => playSound('#')} className="pill-2">I50-72</button>
        <button onClick={() => playSound('#')} className="pill-2">J5369</button>
      </div>
    </section>
  );
}