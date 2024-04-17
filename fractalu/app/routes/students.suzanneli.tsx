import React, { useState } from 'react';
import { LoaderFunction, ActionFunction } from '@remix-run/node'; // Import LoaderFunction and ActionFunction
import { json } from '@remix-run/node'; // Import json function
import 'daisyui/dist/full.css';
import data from './data.json'; // Import data.json
import { Form } from "@remix-run/react";
import { ActionFunctionArgs } from '@remix-run/node'; // Import ActionFunctionArgs

// Initialize an array to store comments
let persistedComments: string[] = new Array(...data.comments);

const MyComponent: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<string[]>(persistedComments); // Initialize comments state with persisted comments

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };

  const { name, bio, bookList } = data; // Destructure data object

  return (
    <div className="max-w-md mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <label className="flex cursor-pointer gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
          <input type="checkbox" value="synthwave" className="toggle theme-controller" onChange={toggleTheme} />
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>
        <h1 className="text-xl font-bold">こだわり kodawari</h1>
      </div>

      <div className="mb-4">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Bio:</strong> {bio}</p>
      </div>
      <div className="flex justify-center items-center">
    <img src="https://miro.medium.com/v2/resize:fit:800/format:webp/1*5pri8yjj5QTJq-XMrqwakw.gif" alt="Suzanne's GIF" className="rounded-lg shadow-lg w-60" />
        {/* <img src="https://i.pinimg.com/originals/62/ee/f3/62eef37f128f5ba474805bfa123d55bc.gif" alt="Sticker" className="w-20 md:w-32 ml-4" /> */}
        <img src="https://media3.giphy.com/media/fwW11c8nPJ1UjkcNU3/giphy.gif" alt="Sticker" className="w-20 md:w-32 ml-4" />
      </div>

      <div className="block mb-2 mt-4">
        <p><strong>Books:</strong></p>
        <ul>
          {bookList.map((book, index) => (
            <li key={index}>
              <a href={book.url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                {book.title}
              </a>{" "}
              by {book.author}
            </li>
          ))}
        </ul>
      </div>

      {/* Form for adding comments */}
      <Form method="post">
        <label className="font-bold block mb-2">
          Add a new comment:
          <input type="text" name="comment" value={newComment} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-1 w-full" />
        </label>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 w-full">Submit</button>
      </Form>
      {/* Render comments */}
      <div>
  <p className="text-small font-bold mb-2 mt-4">Comments:</p>
  <ul>
    {comments.map((comment, index) => (
      <li key={index} className="border border-gray-300 rounded-md p-2 mb-2">{comment}</li>
    ))}
  </ul>
</div>
    </div>
  );
};

// Define the loader function
export let loader: LoaderFunction = async () => {
  // Simulate fetching data from an API
  return json(data); // Return the imported data.json
};

// Define the action function to handle comment submissions
export let action: ActionFunction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const comment = formData.get("comment");

  if (typeof comment === "string") {
    persistedComments.push(comment)

  }

  console.log(comment)
  
  // Perform any additional actions with the comment, such as storing it in a database
  // persistedComments.push("new comment")


  // Return a response
  return json(comment)
};

export default MyComponent;
