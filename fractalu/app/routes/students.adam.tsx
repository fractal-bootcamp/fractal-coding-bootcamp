import { json } from '@remix-run/node';
import { useLoaderData } from "@remix-run/react";

import data from "../adam-data.json";


interface LoaderData {
  name: string;
  interests: string[];
}

export const loader = async () => {
  return json(data);
}

const Header = () => {
  const { name }  = useLoaderData<LoaderData>();
  return (
    <header className="text-center py-4">
      <h1 className="text-2xl md:text-4xl font-regular font-serif">{name}&apos;s Page</h1>
    </header>
  );
}



const Footer = () => {
  return (
    <footer className="text-center py-4 mt-auto flex justify-center items-center bg-base-100">
        <h2 className="text-center text-2xl md:text-3xl font-regular mb-4">Excited to meet yall soon! </h2>
    </footer>
  );
};

const ThemeToggle = () => {
  return (
<label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="halloween" />
  {/* sun icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  {/* moon icon */}
  <svg className="swap-on fill-sinister w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <filter id="shadow">
    <feOffset dx="2" dy="2" />
    <feGaussianBlur result="blurOut" stdDeviation="1" />
    <feComposite in="SourceGraphic" in2="blurOut" operator="over" />
  </filter>
  <path d="M21.84,12.5a1,1,0,0,0-1-.14,7.5,7.5,0,0,1-3.17.73A7.65,7.65,0,0,1,8.78,5.29a8.19,8.19,0,0,1,.25-1.8A1,1,0,0,0,7.8,2.16,9.64,9.64,0,1,0,21.8,13.85,1,1,0,0,0,21.84,12.5Zm-9.3,6.39A7.64,7.64,0,0,1,6.88,5  v.27A9.65,9.65,0,0,0,17,15.43a9.39,9.39,0,0,0,2-.22A7.61,7.61,0,0,1,11.84,19.53z" fill="#C62828" filter="url(#shadow)" />
</svg>
</label>  );
};

const Adam = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ThemeToggle />
      <Header />
      <main className="flex-1">
        <About />
        <Interests />
        <Footer />
      </main>
   
    </div>
  );
};

const About = () => {
  const { name }  = useLoaderData<LoaderData>();
  return (
    <section className="text-xl p-2 mx-auto max-w-4xl text-justify font-serif">
      <div className="space-y-4">
        <h2 className="text-center text-2xl md:text-3xl font-regular mb-4">Hellllo    I&apos;m {name}!</h2>
      

      </div>

    </section>
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

export default Adam;