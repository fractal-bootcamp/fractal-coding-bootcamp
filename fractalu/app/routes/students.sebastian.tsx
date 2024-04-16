import React from 'react';
import '~/img/students.sebastian.css';
import FractalDrawing from '~/img/FractalDrawing.jpg'; 
import SonicVibrationsBeingDrawing from '~/img/SonicVibrationsBeingDrawing.jpg';
import PipeCleanerSculptures1 from '~/img/PipecleanerSculpturesWovenPods.jpg';
import PipeCleanerSculptures2 from '~/img/PipecleanerSculpturesZigZags.jpg';
import CellularCircuits1 from '~/img/EncodingDevices2a_cont.png';
import CellularCircuits2 from '~/img/fueldroppingsSalmonTeal5.png';
import CellularCircuits3 from '~/img/PowerGridFullyGrown.png';
import CellularCircuits4 from '~/img/V9firstWorld6.png';
import MoirePatterns1 from '~/img/quasicrystal2.svg';
import MoirePatterns2 from '~/img/CircleSetPairOscOsc.png';
import MoirePatterns3 from '~/img/RippleEnergyDissipate2.png';
import MoirePatterns4 from '~/img/SourceVoronoiMoire.png';

const ThemeToggle = () => {
  return (
<label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="coffee" />
  {/* sun icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  {/* moon icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
</label>  );
};

const thingsILike = [
  "Do yoga, ",
  "Go surfing, ",
  "Drink smoothies, ",
  "Take meandering walks, ",
  "Build sculptures, ",
  "Create drawings of fractals, patterns, and structures, ",
  "Dance",
  "Hackeysack",
  "Watch clouds, water, and trees swaying in the wind,",
  "Admire budding flowers in the Spring,",
  "And fallen leaves in the Fall,",
  "Code simulations, pattern generators, and simple games."
]

const favoriteWords = [
  "flutter, ",
  "undulate, ",
  "oscillate, ",
  "propagate, ",
  "contextualize, ",
  "interweave, ",
  "distill, ",
  "resonate, ",
  "harmonize, ",
  "equilibriate, ",
  "stagnation, ",
  "tantalize, ",
  "elucidate, ",
  "elicit, ",
  "cultivate."
]

const SebastianPage = () => {
    return (
        <div className="container">
          <ThemeToggle />
            <h1 className="bg-info-content text-secondary-content font-bold text-xl m-2">Sebastian's personal page</h1>
            <button className='btn btn-error m-2'>Etsy Shop</button>
            <button className='btn btn-accent m-2'>Instagram</button>
            <button className='btn btn-info m-2'>Drawings and Paintings</button>
            <button className='btn btn-success m-2'>Sculptures</button>
            <button className='btn btn-primary m-2'>Writing</button>
            <button className='btn btn-secondary m-2'>Projects</button>
            <p className="haiku">
                A vibrant petal <br />
                floats down the rivering stream <br />
                of my flowing thoughts
            </p>
            <h3 className="font-bold text-lg">About Me</h3>
            <div className="TextBoxNest">
              <div className="TextBox">
                <span className="listTitle">I Like to:</span>
                <ul className="list">
                    {thingsILike.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
              </div>
              <div className="TextBox">
                <span className="listTitle">Some of My Favorite Words:</span>
                <ul className="list">
                    {favoriteWords.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
              </div>
            </div>
            <p className="text-accent-content m-5">This is a drawing I made recently:</p>
            <img src={FractalDrawing} alt="Sebastian's Art" className="artwork" />
            <p className="text-accent-content m-5">This is a drawing I made awhile ago:</p>
            <img src={SonicVibrationsBeingDrawing} alt="Sebastian's Art" className="artwork" />
            <p className="text-accent-content m-5">These are some of my sculptures. I made them using pipe cleaners:</p>
            <img src={PipeCleanerSculptures1} alt="Sebastian's Art" className="artwork" />
            <p className="text-accent-content m-5">These are some more of my pipe cleaner sculptures:</p>
            <img src={PipeCleanerSculptures2} alt="Sebastian's Art" className="artwork" />
            <p className="text-accent-content m-5">These are some stills from a game I am building in which you can design and program interactive circuits of 2D block entities:</p>
            <img src={CellularCircuits1} alt="Sebastian's Art" className="artwork" />
            <img src={CellularCircuits2} alt="Sebastian's Art" className="artwork" />
            <img src={CellularCircuits3} alt="Sebastian's Art" className="artwork" />
            <img src={CellularCircuits4} alt="Sebastian's Art" className="artwork" />
            <p className="text-accent-content m-5">These are some moire patterns I created with a moire pattern generater I designed:</p>
            <img src={MoirePatterns1} alt="Sebastian's Art" className="artwork" />
            <img src={MoirePatterns2} alt="Sebastian's Art" className="artwork" />
            <img src={MoirePatterns3} alt="Sebastian's Art" className="artwork" />
            <img src={MoirePatterns4} alt="Sebastian's Art" className="artwork" />

            <a className="instagram-link" href="https://www.instagram.com/sebastianhodge/?hl=en" target="_blank">Check out more of my art and creations here!</a>
        </div>
    );
};

export default SebastianPage;
