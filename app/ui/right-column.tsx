'use client';

import { redirect } from "next/navigation";
import { RefObject, useEffect } from "react";

export default function RightColumn({
  beep2,
  beep4,
  children,
}: Readonly<{
  beep2: RefObject<HTMLAudioElement | null>,
  beep4: RefObject<HTMLAudioElement | null>,
  children: React.ReactNode;
}>) {

  useEffect(() => {
    const topBtn = document.getElementById("topBtn") as HTMLElement;
    function scrollFunction() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
    }
    window.onscroll = scrollFunction;
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    }
  }, [])

  function playSound(ref: RefObject<HTMLAudioElement | null>, url: string) {
    if (ref.current) {
      ref.current.onended = () => {
        redirect(url)
      }
      console.log(ref.current)
      ref.current.play()
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <section id="column-3">
      <div className="wrap">
        <div className="left-frame-top">
          <button onClick={() => playSound(beep2, '/')} className="panel-1-button">HOME</button>
          <div className="panel-2">02<span className="hop">-262000</span></div>
        </div>
        <div className="right-frame-top">
          <div className="banner"> DATA &#149; II </div>
          <div className="data-cascade-button-group">
            <div className="data-cascade-wrapper" id="default">
              <div className="data-column">
                <div className="dc-row-1">93</div>
                <div className="dc-row-1">1853</div>
                <div className="dc-row-2">24109</div>
                <div className="dc-row-3">7</div>
                <div className="dc-row-3">7024</div>
                <div className="dc-row-4">322</div>
                <div className="dc-row-5">4149</div>
                <div className="dc-row-6">86</div>
                <div className="dc-row-7">05</div>
              </div>
              <div className="data-column">
                <div className="dc-row-1">21509</div>
                <div className="dc-row-1">68417</div>
                <div className="dc-row-2">80</div>
                <div className="dc-row-3">2048</div>
                <div className="dc-row-3">319825</div>
                <div className="dc-row-4">46233</div>
                <div className="dc-row-5">05</div>
                <div className="dc-row-6">2014</div>
                <div className="dc-row-7">30986</div>
              </div>
              <div className="data-column">
                <div className="dc-row-1">585101</div>
                <div className="dc-row-1">25403</div>
                <div className="dc-row-2">31219</div>
                <div className="dc-row-3">752</div>
                <div className="dc-row-3">0604</div>
                <div className="dc-row-4">21048</div>
                <div className="dc-row-5">293612</div>
                <div className="dc-row-6">534082</div>
                <div className="dc-row-7">206</div>
              </div>
              <div className="data-column">
                <div className="dc-row-1">2107853</div>
                <div className="dc-row-1">12201972</div>
                <div className="dc-row-2">24487255</div>
                <div className="dc-row-3">30412</div>
                <div className="dc-row-3">98</div>
                <div className="dc-row-4">4024161</div>
                <div className="dc-row-5">888</div>
                <div className="dc-row-6">35045462</div>
                <div className="dc-row-7">41520257</div>
              </div>
              <div className="data-column">
                <div className="dc-row-1">33</div>
                <div className="dc-row-1">56</div>
                <div className="dc-row-2">04</div>
                <div className="dc-row-3">69</div>
                <div className="dc-row-3">41</div>
                <div className="dc-row-4">15</div>
                <div className="dc-row-5">25</div>
                <div className="dc-row-6">65</div>
                <div className="dc-row-7">21</div>
              </div>

              <div className="data-column">
                <div className="dc-row-1">0223</div>
                <div className="dc-row-1">688</div>
                <div className="dc-row-2">28471</div>
                <div className="dc-row-3">21366</div>
                <div className="dc-row-3">8654</div>
                <div className="dc-row-4">31</div>
                <div className="dc-row-5">1984</div>
                <div className="dc-row-6">272</div>
                <div className="dc-row-7">21854</div>
              </div>
              <div className="data-column">
                <div className="dc-row-1">633</div>
                <div className="dc-row-1">51166</div>
                <div className="dc-row-2">41699</div>
                <div className="dc-row-3">6188</div>
                <div className="dc-row-3">15033</div>
                <div className="dc-row-4">21094</div>
                <div className="dc-row-5">32881</div>
                <div className="dc-row-6">26083</div>
                <div className="dc-row-7">2143</div>
              </div>
              <div className="data-column">
                <div className="dc-row-1">406822</div>
                <div className="dc-row-1">81205</div>
                <div className="dc-row-2">91007</div>
                <div className="dc-row-3">38357</div>
                <div className="dc-row-3">110</div>
                <div className="dc-row-4">2041</div>
                <div className="dc-row-5">312</div>
                <div className="dc-row-6">57104</div>
                <div className="dc-row-7">00708</div>
              </div>
              <div className="data-column">
                <div className="dc-row-1">12073</div>
                <div className="dc-row-1">688</div>
                <div className="dc-row-2">21982</div>
                <div className="dc-row-3">20254</div>
                <div className="dc-row-3">55</div>
                <div className="dc-row-4">38447</div>
                <div className="dc-row-5">26921</div>
                <div className="dc-row-6">285</div>
                <div className="dc-row-7">30102</div>
              </div>
              <div className="data-column">
                <div className="dc-row-1">21604</div>
                <div className="dc-row-1">15421</div>
                <div className="dc-row-2">25</div>
                <div className="dc-row-3">3808</div>
                <div className="dc-row-3">582031</div>
                <div className="dc-row-4">62311</div>
                <div className="dc-row-5">85799</div>
                <div className="dc-row-6">87</div>
                <div className="dc-row-7">6895</div>
              </div>
              <div className="data-column">
                <div className="dc-row-1">72112</div>
                <div className="dc-row-1">101088</div>
                <div className="dc-row-2">604122</div>
                <div className="dc-row-3">126523</div>
                <div className="dc-row-3">86801</div>
                <div className="dc-row-4">8447</div>
                <div className="dc-row-5">210486</div>
                <div className="dc-row-6">LV426</div>
                <div className="dc-row-7">220655</div>
              </div>
              <div className="data-column">
                <div className="dc-row-1">272448</div>
                <div className="dc-row-1">29620</div>
                <div className="dc-row-2">339048</div>
                <div className="dc-row-3">31802</div>
                <div className="dc-row-3">9859</div>
                <div className="dc-row-4">672304</div>
                <div className="dc-row-5">581131</div>
                <div className="dc-row-6">338</div>
                <div className="dc-row-7">70104</div>
              </div>
              <div className="data-column">
                <div className="dc-row-1">16182</div>
                <div className="dc-row-1">711632</div>
                <div className="dc-row-2">102955</div>
                <div className="dc-row-3">2061</div>
                <div className="dc-row-3">5804</div>
                <div className="dc-row-4">850233</div>
                <div className="dc-row-5">833441</div>
                <div className="dc-row-6">465</div>
                <div className="dc-row-7">210047</div>
              </div>
              <div className="data-column">
                <div className="dc-row-1">75222</div>
                <div className="dc-row-1">98824</div>
                <div className="dc-row-2">63</div>
                <div className="dc-row-3">858552</div>
                <div className="dc-row-3">696730</div>
                <div className="dc-row-4">307124</div>
                <div className="dc-row-5">58414</div>
                <div className="dc-row-6">209</div>
                <div className="dc-row-7">808044</div>
              </div>
              <div className="data-column">
                <div className="dc-row-1">331025</div>
                <div className="dc-row-1">62118</div>
                <div className="dc-row-2">2700</div>
                <div className="dc-row-3">395852</div>
                <div className="dc-row-3">604206</div>
                <div className="dc-row-4">26</div>
                <div className="dc-row-5">309150</div>
                <div className="dc-row-6">885</div>
                <div className="dc-row-7">210411</div>
              </div>
              <div className="data-column">
                <div className="dc-row-1">817660</div>
                <div className="dc-row-1">121979</div>
                <div className="dc-row-2">20019</div>
                <div className="dc-row-3">462869</div>
                <div className="dc-row-3">25002</div>
                <div className="dc-row-4">308</div>
                <div className="dc-row-5">52074</div>
                <div className="dc-row-6">33</div>
                <div className="dc-row-7">80544</div>
              </div>
              <div className="data-column">
                <div className="dc-row-1">1070</div>
                <div className="dc-row-1">020478</div>
                <div className="dc-row-2">26419</div>
                <div className="dc-row-3">372122</div>
                <div className="dc-row-3">2623</div>
                <div className="dc-row-4">79</div>
                <div className="dc-row-5">90008</div>
                <div className="dc-row-6">8049</div>
                <div className="dc-row-7">251664</div>
              </div>
              <div className="data-column">
                <div className="dc-row-1">900007</div>
                <div className="dc-row-1">704044</div>
                <div className="dc-row-2">982365</div>
                <div className="dc-row-3">25819</div>
                <div className="dc-row-3">385</div>
                <div className="dc-row-4">656214</div>
                <div className="dc-row-5">409</div>
                <div className="dc-row-6">218563</div>
                <div className="dc-row-7">527222</div>
              </div>
              <div className="data-column">
                <div className="dc-row-1">80106</div>
                <div className="dc-row-1">1314577</div>
                <div className="dc-row-2">39001</div>
                <div className="dc-row-3">7162893</div>
                <div className="dc-row-3">12855</div>
                <div className="dc-row-4">57</div>
                <div className="dc-row-5">23966</div>
                <div className="dc-row-6">4</div>
                <div className="dc-row-7">6244009</div>
              </div>
              <div className="data-column">
                <div className="dc-row-1">2352</div>
                <div className="dc-row-1">308</div>
                <div className="dc-row-2">928</div>
                <div className="dc-row-3">2721</div>
                <div className="dc-row-3">8890</div>
                <div className="dc-row-4">402</div>
                <div className="dc-row-5">540</div>
                <div className="dc-row-6">795</div>
                <div className="dc-row-7">23</div>
              </div>
              <div className="data-column">
                <div className="dc-row-1">66880</div>
                <div className="dc-row-1">8675309</div>
                <div className="dc-row-2">821533</div>
                <div className="dc-row-3">249009</div>
                <div className="dc-row-3">51922</div>
                <div className="dc-row-4">600454</div>
                <div className="dc-row-5">9035768</div>
                <div className="dc-row-6">453571</div>
                <div className="dc-row-7">825064</div>
              </div>
              <div className="data-column">
                <div className="dc-row-1">131488</div>
                <div className="dc-row-1">641212</div>
                <div className="dc-row-2">218035</div>
                <div className="dc-row-3">37</div>
                <div className="dc-row-3">6022</div>
                <div className="dc-row-4">82</div>
                <div className="dc-row-5">572104</div>
                <div className="dc-row-6">799324</div>
                <div className="dc-row-7">4404</div>
              </div>
              <div className="data-column">
                <div className="dc-row-1">8807</div>
                <div className="dc-row-1">4481</div>
                <div className="dc-row-2">8915</div>
                <div className="dc-row-3">2104</div>
                <div className="dc-row-3">1681</div>
                <div className="dc-row-4">326</div>
                <div className="dc-row-5">446</div>
                <div className="dc-row-6">8337</div>
                <div className="dc-row-7">526</div>
              </div>
              <div className="data-column">
                <div className="dc-row-1">593</div>
                <div className="dc-row-1">8057</div>
                <div className="dc-row-2">22</div>
                <div className="dc-row-3">23</div>
                <div className="dc-row-3">6722</div>
                <div className="dc-row-4">890</div>
                <div className="dc-row-5">2608</div>
                <div className="dc-row-6">7274</div>
                <div className="dc-row-7">2103</div>
              </div>
            </div>
            <nav>
              <button onClick={() => playSound(beep2, '/personnel')}>Personnel</button>
              <button onClick={() => playSound(beep2, '/starships')}>Starships</button>
              <button onClick={() => playSound(beep2, '/planets')}>Planets</button>
              <button onClick={() => playSound(beep2, '/species')}>Species</button>
            </nav>
          </div>
          <div className="bar-panel first-bar-panel">
            <div className="bar-1"></div>
            <div className="bar-2"></div>
            <div className="bar-3"></div>
            <div className="bar-4"></div>
            <div className="bar-5"></div>
          </div>
        </div>
      </div>
      <div className="wrap" id="gap">
        <div className="left-frame">
          <button onClick={() => {
            topFunction();
            playSound(beep4, '#');
          }} id="topBtn"><span className="hop">screen</span> top</button>
          <div>
            <div className="panel-3">03<span className="hop">-111968</span></div>
            <div className="panel-4">04<span className="hop">-041969</span></div>
            <div className="panel-5">05<span className="hop">-1701D</span></div>
            <div className="panel-6">06<span className="hop">-071984</span></div>
            <div className="panel-7">07<span className="hop">-081940</span></div>
            <div className="panel-8">08<span className="hop">-47148</span></div>
            <div className="panel-9">09<span className="hop">-081966</span></div>
          </div>
          <div>
            <div className="panel-10">10<span className="hop">-31</span></div>
          </div>
        </div>
        <div className="right-frame">
          <div className="bar-panel">
            <div className="bar-6"></div>
            <div className="bar-7"></div>
            <div className="bar-8"></div>
            <div className="bar-9"></div>
            <div className="bar-10"></div>
          </div>
          <main>
            {children}
            <p className="go-big">"Ad astra per aspera."</p>
          </main>
          <footer>
            Content &copy; 57601.3 United Federation of Planets <br />

            LCARS Inspired Website Template by <a href="https://www.thelcars.com">www.TheLCARS.com</a>.
          </footer>
        </div>
      </div>
    </section>
  );
}