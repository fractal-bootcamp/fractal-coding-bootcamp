import React from 'react';
//import './styles.css'; // Import your CSS file

const Header = () => {
  return (
    <header className="bg-gray-100 text-black text-center py-4">
      <h1 className="text-3xl md:text-4xl font-bold">Suzanne's Personal Page</h1>
    </header>
  );
};

const AboutMe = () => {
  return (
    <section className="my-8 mx-auto max-w-4xl flex items-center justify-center flex-col md:flex-row">
      <div className="md:w-1/2 md:pr-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Hi, I'm Suzanne</h2>
        {/* <p className="text-lg">
          Welcome to my page. I know it needs some love.
        </p> */}
        <p className="text-lg mt-4">
          In my free time, I enjoy diving into philosophical literature and pondering the mysteries of life.
        </p>
        <p className="text-lg mt-4">
          Here are some of my favorite books:
        </p>
        <ul className="list-disc list-inside">
          <li><a href="https://www.goodreads.com/en/book/show/22145861" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">What Are You Doing With Your Life?

</a> by Jiddu Krishnamurti</li>
          <li><a href="https://www.goodreads.com/book/show/97412.On_the_Shortness_of_Life" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">On the Shortness of Life: Life Is Long if You Know How to Use It</a> by Seneca</li>
          <li><a href="https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Man's Search For Meaning</a> by Victor Frankl</li>
          <li><a href="https://www.goodreads.com/book/show/46199.Letters_to_a_Young_Poet" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Letters to a Young Poet</a> by Rainer Maria Rilke
</li>
          <li><a href="https://www.goodreads.com/book/show/551520.The_Wisdom_of_Insecurity" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">The Wisdom of Insecurity</a> by Alan Watts</li>
          <li><a href="https://www.penguinrandomhouse.com/books/576080/the-independent-woman-by-simone-de-beauvoir/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">The Independent Woman
</a> by Simone De Beauvoir</li>
          {/* Add more favorite books with Goodreads links as needed */}
        </ul>
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center items-center">
        <img src="https://miro.medium.com/v2/resize:fit:800/format:webp/1*5pri8yjj5QTJq-XMrqwakw.gif" alt="Suzanne's GIF" className="rounded-lg shadow-lg w-60" />
        <img src="https://cdn-icons-png.flaticon.com/256/7592/7592510.png" alt="Sticker" className="w-20 md:w-32 ml-4" />
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
      <main className="flex-1">
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
};

export default SuzannePage;
