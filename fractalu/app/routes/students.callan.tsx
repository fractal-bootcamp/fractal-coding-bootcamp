import cat_fight from "../images/callan/cat-fight.png";
import aces_pizza from "../images/callan/aces-pizza.gif";
import young_callan from "../images/callan/callan.jpg";
import old_site from "../images/callan/old-site.png";
import with_it from "../images/callan/with-it.gif";
import { json } from '@remix-run/node';
import data from "../callan-data.json";
import { useLoaderData } from "@remix-run/react";

interface LoaderData {
  name: string;
  interests: string[];
}

export const loader = async () => {
  return json(data);
}

const Header = () => {
  return (
    <header className="text-center py-4">
      <h1 className="text-2xl md:text-4xl font-regular font-serif">Callan's Page</h1>
    </header>
  );
}

const About = () => {
  return (
    <section className="text-xl p-2 mx-auto max-w-4xl text-justify font-serif">
      <div className="space-y-4">
        <h2 className="text-center text-2xl md:text-3xl font-regular mb-4">About me (and my cats)</h2>
        <p>
          I'm Callan. I live with my two cats, Peter and Greg, senior boys who I adopted in 2019.
          They have risen to relative* social media stardom on <a href="https://www.instagram.com/greg_and_peter"
          target="_blank" className="underline">Instagram</a>,
          where I like to put videos of them looking ridiculous with equally ridiculous soundtracks (and sometimes
          I just want to share a song I like with the world, but those posts tend to be unpopular).
        </p>

        <div className="flex flex-col items-center">
          <div className="relative group">
            <img src={cat_fight} alt="Peter and Greg" className="size-4/5 mx-auto rounded-xl" />
          </div>
        </div>
        <div>
          <figcaption className="text-center text-sm mt-2">This is pretty much how they are all the time</figcaption>
        </div>

        <p>
          Speaking of unpopular, the * next to relative meant <a href="https://www.instagram.com/callan.rg" target="_blank"
          className="underline"> relative to me</a>.
        </p>

        <p>
          That said, <i>my</i> Instagram has lots of painting videos, which have been described as "relaxing" or "soothing."
          (While I'm painting, I usually listen to history documentaries or podcasts, but I won't subject you to that.)
        </p>

        <div className="flex flex-col items-center">
          <div className="relative group">
            <img src={aces_pizza} alt="Painting of Ace's Pizza N64" className="size-4/5 mx-auto rounded-xl" />
          </div>
          <figcaption className="text-center text-sm mt-2">The N64 setup at Ace's Pizza in Brooklyn</figcaption>
        </div>

        <h2 className="text-center text-2xl md:text-3xl font-regular mb-4">Why Programming?</h2>

        <p>
          As for programming, computers basically raised me, as you can see below.
        </p>

        <div className="flex flex-col items-center">
          <div className="relative group">
          <img src={young_callan} alt="Callan in 1994" className="size-3/5 rounded-xl w-full" />
          </div>
        </div>

        <figcaption className="text-center text-sm mt-2">
        Anyone else remember <a href="https://en.wikipedia.org/wiki/Thinkin'_Things"
          target="_blank" className="underline">Thinkin' Things</a>?
      </figcaption>

        <p>
          For my 12th birthday, my dad got me... a domain name. The evidence is still
          on the Wayback Machine but I won't tell you the URL. (I updated that site until I was in my early teens and it gets a bit
          embarrassing, even for me!)
        </p>

        <p>
          But, I'll show you a screenshot because I think it's hilarous. Sadly the images have been lost to time, but I'm sure they were amazing.
          (I photoshopped my screenshot into another screenshot of Netscape Navigator 7.02.)
        </p>
        <div className="flex flex-col items-center">
          <div className="relative group">
            <img src={old_site} alt="Old Website" className="size-full mx-auto rounded-xl" />
          </div>
          <figcaption className="text-center text-sm mt-2">Delightfully edgy</figcaption>
        </div>

        <p>
          Anyway, I guess my web dev skills peaked in 2002. I didn't think I was good at it and gave up.
          Since then, the "World Wide Web" has changed and so have I. I still like Simpsons quotes and video games
          but apparently I'm old now? Actually, I have <i>just</i> the quote for this.
        </p>
        <div className="flex flex-col items-center">
          <div className="relative group">
            <img src={with_it} alt="Simpsons meme" className="size-full mx-auto rounded-xl" />
          </div>
          <figcaption className="text-center text-sm mt-2">Tough but fair</figcaption>
        </div>
      </div>

    </section>
  );
};

const Footer = () => {
  return (
    <footer className="font-seriftext-center py-4 mt-auto">
      <p>Big thanks to chatGPT, which (who?) helped me a lot with this page.</p>
    </footer>
  );
};

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

const Callan = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ThemeToggle />
      <Header />
      <main className="flex-1">
        <About />
        <Interests />
      </main>
      <Footer />
    </div>
  );
};

export function Interests() {
  const { interests }  = useLoaderData<LoaderData>();

  return (
    <section className="text-xl mx-auto max-w-4xl text-justify font-serif p-8">
      <div className="space-y-4">
        <h2 className="text-center text-2xl md:text-3xl font-regular mb-4">Interests</h2>
          <ul>
          {interests.map((interest, index) => (
            <li key={index}> * {interest}</li>
          ))}
        </ul>
    </div>
  </section>
  );
}

export default Callan;
