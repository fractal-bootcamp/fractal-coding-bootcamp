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



const thingsILike = [
  "Do yooooga, ",
  "Go surfing, ",
  "Drink smoothies, ",
  "Take meandering walks, ",
  "Build sculptures, ",
  "Create drawings of fractals and patterns! ",
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
            <h1 className="header">Sebastian's personal page</h1>
            <p className="haiku">
                A vibrant petal <br />
                floats down the rivering stream <br />
                of my flowing thoughts
            </p>
            <div className="TextBox">
              <h3>About Me</h3>
              <span className="listTitle">I Like to:</span>
              <ul className="list">
                  {thingsILike.map((item) => (
                      <li key={item}>{item}</li>
                  ))}
              </ul>
            </div>
            <div className="TextBox">
              <h3>Some of My Favorite Words</h3>
              <ul className="list">
                  {favoriteWords.map((item) => (
                      <li key={item}>{item}</li>
                  ))}
              </ul>
            </div>
            <p className="paragraph">This is a drawing I made recently:</p>
            <img src={FractalDrawing} alt="Sebastian's Art" className="artwork" />
            <p className="paragraph">This is a drawing I made awhile ago:</p>
            <img src={SonicVibrationsBeingDrawing} alt="Sebastian's Art" className="artwork" />
            <p className="paragraph">These are some of my sculptures. I made them using pipe cleaners:</p>
            <img src={PipeCleanerSculptures1} alt="Sebastian's Art" className="artwork" />
            <p className="paragraph">These are some more of my pipe cleaner sculptures:</p>
            <img src={PipeCleanerSculptures2} alt="Sebastian's Art" className="artwork" />
            <p className="paragraph">These are some stills from a game I am building in which you can design and program interactive circuits of 2D block entities:</p>
            <img src={CellularCircuits1} alt="Sebastian's Art" className="artwork" />
            <img src={CellularCircuits2} alt="Sebastian's Art" className="artwork" />
            <img src={CellularCircuits3} alt="Sebastian's Art" className="artwork" />
            <img src={CellularCircuits4} alt="Sebastian's Art" className="artwork" />
            <p className="paragraph">These are some moire patterns I created with a moire pattern generater I designed:</p>
            <img src={MoirePatterns1} alt="Sebastian's Art" className="artwork" />
            <img src={MoirePatterns2} alt="Sebastian's Art" className="artwork" />
            <img src={MoirePatterns3} alt="Sebastian's Art" className="artwork" />
            <img src={MoirePatterns4} alt="Sebastian's Art" className="artwork" />

            <a className="instagram-link" href="https://www.instagram.com/sebastianhodge/?hl=en" target="_blank">Check out more of my art and creations here!</a>
        </div>
    );
};

export default SebastianPage;
