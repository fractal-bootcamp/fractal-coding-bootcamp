import cat_fight from "../images/callan/cat-fight.png";
import aces_pizza from "../images/callan/aces-pizza.gif";
import young_callan from "../images/callan/callan.jpg";
import old_site from "../images/callan/old-site.png";
import with_it from "../images/callan/with-it.gif";


function Header() {
  return (
    <header className=" bg-red-100 text-gray-900 text-center py-4">
      <h1 className="text-2xl md:text-4xl font-regular font-serif">Callan's Page</h1>
    </header>
  );
}

const About = () => {
  return (
    <section className="text-gray-900 text-xl p-2 mx-auto max-w-4xl text-justify font-serif">
      <div className="space-y-4">
        <h2 className="text-center text-2xl md:text-3xl font-regular mb-4">About me (and my cats)</h2>
        <p>
          I'm Callan. I live with my two cats, Peter and Gregory*, senior boys who I adopted in 2019.
          They have risen to relative* social media stardom on <a href="https://www.instagram.com/greg_and_peter"
          target="_blank" className="underline text-red-300 hover:text-red-400 visited:text-red-300">Instagram</a>,
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
          className="underline text-red-300 hover:text-red-400 visited:text-red-300"> relative to me</a>.
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
          target="_blank" className="underline text-red-300 hover:text-red-400 visited:text-red-300">Thinkin' Things</a>?
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
    <footer className="font-serif bg-red-100 text-black text-center py-4 mt-auto">
      <p>Big thanks to chatGPT, which (who?) helped me a lot with this page.</p>
    </footer>
  );
};

const Callan = () => {
  return (
    <div className="flex flex-col min-h-screen bg-red-50">
      <Header />
      <main className="flex-1">
        <About />
      </main>
      <Footer />
    </div>
  );
};
export default Callan;
