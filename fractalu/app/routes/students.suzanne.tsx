import React from 'react';
import 'tailwindcss/tailwind.css';


const Header = () => {
  return (
    <header className="bg-white text-black text-center py-4">
      {/* <h1 className="text-2xl md:text-4xl font-bold">Personal Page</h1> 
       <h2>starting a new page</h2> */}
    </header>
  );
};

const AboutMe = () => {
  return (
    <section className="my-8 mx-auto max-w-4xl flex items-center justify-center flex-col md:flex-row">
      <div className="md:w-1/2 md:pr-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Hi, I'm Suzanne.</h2>
        {/* <p className="text-lg">
          Welcome to my page. I know it needs some love.
        </p> */}
        <p className="text-lg mt-4">
        <span className="italic text-orange-500">Writer, </span>
        <span className="italic text-orange-400">Designer, </span>
        <span className="italic text-orange-300">Coder.</span> Kidding, I only rock 2/3. In my free time, I enjoy reading philosophical literature. I prefer philosophical discussions about the immaterial world.
        </p>

        <p className="font-bold text-lg mt-4">
          Ideas that shaped me:
        </p>
        <ul className="list-disc list-inside">
        <li className="pl-6"><a href="https://www.goodreads.com/en/book/show/22145861" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">What Are You Doing With Your Life?</a> by Jiddu Krishnamurti</li>
        <li className="pl-6"><a href="https://www.goodreads.com/book/show/97412.On_the_Shortness_of_Life" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">On the Shortness of Life: Life Is Long if You Know How to Use It</a> by Seneca</li>
        <li className="pl-6"><a href="https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Man's Search For Meaning</a> by Victor Frankl</li>
        <li className="pl-6"><a href="https://www.goodreads.com/book/show/46199.Letters_to_a_Young_Poet" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Letters to a Young Poet</a> by Rainer Maria Rilke</li>
        <li className="pl-6"><a href="https://www.goodreads.com/book/show/551520.The_Wisdom_of_Insecurity" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">The Wisdom of Insecurity</a> by Alan Watts</li>
        <li className="pl-6"><a href="https://www.goodreads.com/book/show/457264.The_Second_Sex" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">The Independent Woman</a> by Simone De Beauvoir</li>
        <li className="pl-6"><a href="https://www.goodreads.com/en/book/show/6596" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">The Four Agreements</a> by Miguel Ruiz</li>

        </ul>

        <p className=" font-bold text-lg mt-4">
          Quotes to live by:
          </p>
          <ul className="list-disc list-inside">
          <li className="pl-6"><span className="italic text-grey-500">The first principle is that you must not fool yourself and you are the easiest person to fool</span> by Richard P. Feynman </li>
          <li className="pl-6"><span className="italic text-grey-500">The art of being wise is the art of knowing what to overlook</span> by William James </li>
          <li className="pl-6"><span className="italic text-grey-500">A man with outward courage dares to die; a man with inner courage dares to live</span> by Lao Tzu </li>
          </ul>

    <div className="container mx-auto px-4 mt-8 bg-gray-100 p-4 rounded-md shadow-md">
      <p className="text-small text-center">I'd love to meet more people on the pathless path. Here is a poem for you.</p>
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Click me</button> */}
        <a href="https://www.youtube.com/watch?v=T2LUbk_7uKg" target="_blank" rel="noopener noreferrer" className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 text-center">Click me</a>
    </div>
    </div>

    <div className="flex justify-center items-center">
    <img src="https://miro.medium.com/v2/resize:fit:800/format:webp/1*5pri8yjj5QTJq-XMrqwakw.gif" alt="Suzanne's GIF" className="rounded-lg shadow-lg w-60" />
        <img src="https://i.pinimg.com/originals/2d/11/90/2d1190ef23ed9f21cd4e3b1bd3e688c8.gif" alt="Sticker" className="w-20 md:w-32 ml-4" />
        {/* <img src="https://media3.giphy.com/media/fwW11c8nPJ1UjkcNU3/giphy.gif" alt="Sticker" className="w-20 md:w-32 ml-4" /> */}
      </div>

    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black text-center py-4 mt-auto">
      <p>&copy; 2024 Suzanne's Personal Page. All rights reserved.</p>
    </footer>
  );
};

const SuzannePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-white">
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
};


export default SuzannePage;
