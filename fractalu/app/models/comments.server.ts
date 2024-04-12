import { promises as fs } from 'fs';
import path from 'path';

interface Comment {
    text: string,
    timestamp: string,
}

export async function addComment(comment: Comment) {
    const filePath = path.join(__dirname, '../models/comments.json'); // Adjust the path as necessary
    console.log(filePath)

    try {
      // Read the current comments from the file
    const data = await fs.readFile(filePath, 'utf8');
    const comments = JSON.parse(data);
    console.log(comments)

      // Add the new comment
    comments.push(comment);
    console.log(comments)

      // Write the updated comments back to the file
    await fs.writeFile(filePath, JSON.stringify(comments, null, 2), 'utf8');
    } catch (error) {
    console.error('Failed to add a comment:', error);
    throw new Error('Failed to add the comment.');
    }
}
