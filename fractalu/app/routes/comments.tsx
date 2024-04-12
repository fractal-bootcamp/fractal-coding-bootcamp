// import fs from "fs/promises";
// import { useLoaderData, Form } from "@remix-run/react";
// import { json, redirect } from "@remix-run/node";
// import path from "path";

// export const commentsLoader = async () => {
//   const commentsPath = path.join(process.cwd(), "app/models/comments.json");
//   let comments;
//   try {
//     const commentsData = await fs.readFile(commentsPath, "utf8");
//     comments = JSON.parse(commentsData) || [];
//   } catch (error) {
//     comments = [];
//   }
//   return json(comments);
// };

// export const commentsAction = async ({ request }) => {
//   const formData = await request.formData();
//   const name = formData.get("name");
//   const comment = formData.get("comment");
//   const commentsPath = path.join(process.cwd(), "app/models/comments.json");
  
//   try {
//     const comments = JSON.parse(await fs.readFile(commentsPath, "utf8")) || [];
//     const newComment = { name, comment, id: Date.now() };
//     comments.push(newComment);
//     await fs.writeFile(commentsPath, JSON.stringify(comments, null, 2));
//   } catch (error) {
//     console.error("Error writing comments:", error);
//     return json({ error: "Failed to save comment" }, { status: 500 });
//   }

//   try {
//     return redirect(".");
//   } catch (error) {
//     console.error("Error redirecting after form submission:", error);
//     return json({ error: "An unexpected error occurred" }, { status: 500 });
//   }
// };

// export default function Comments() {
//   const loaderData = useLoaderData();

//   if (loaderData.error) {
//     return <div>Error: {loaderData.error}</div>;
//   }

//   const comments = Array.isArray(loaderData) ? loaderData : [];

//   return (
//     <div className="text-xl mx-auto max-w-4xl font-serif p-8">
//       <h1 className="text-center text-2xl md:text-3xl font-regular mb-4">Comments</h1>
//       <Form method="post" className="space-y-4">
//         <div>
//           <label className="block">
//             Name:
//             <input type="text" name="name" required className="border border-gray-300 px-2 py-1 rounded-md w-full" />
//           </label>
//         </div>
//         <div>
//           <label className="block">
//             Comment:
//             <textarea name="comment" required className="border border-gray-300 px-2 py-1 rounded-md w-full"></textarea>
//           </label>
//         </div>
//         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           Submit Comment
//         </button>
//       </Form>
//       <section className="mt-8">
//         <h2 className="text-xl md:text-2xl font-regular mb-4">Previous Comments</h2>
//         {comments.map((comment) => (
//           <article key={comment.id} className="border border-gray-300 p-4 rounded-md mb-4">
//             <h3 className="text-lg font-bold">{comment.name}</h3>
//             <p>{comment.comment}</p>
//           </article>
//         ))}
//       </section>
//     </div>
//   );
// }