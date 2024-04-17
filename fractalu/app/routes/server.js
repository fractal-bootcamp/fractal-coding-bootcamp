// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs').promises;

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware to parse JSON request body
// app.use(bodyParser.json());

// // Endpoint to handle POST requests to /api/comments
// app.post('/api/comments', async (req, res) => {
//   try {
//     const { comment } = req.body;

//     // Read existing comments from file
//     let comments = [];
//     try {
//       const data = await fs.readFile('comments.json', 'utf8');
//       comments = JSON.parse(data);
//     } catch (error) {
//       console.error('Error reading comments file:', error);
//     }

//     // Add new comment to the array
//     comments.push(comment);

//     // Write updated comments back to file
//     await fs.writeFile('comments.json', JSON.stringify(comments, null, 2));

//     res.status(200).json({ success: true, message: 'Comment added successfully' });
//   } catch (error) {
//     console.error('Error adding comment:', error);
//     res.status(500).json({ success: false, message: 'Failed to add comment' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
