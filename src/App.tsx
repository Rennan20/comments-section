import { useEffect, useState } from "react";
import "./App.css";
import data from "./data/data.json";
import { Comment } from "./components/Comment";
import type { CommentType } from "./types/comment";
import { CommentForm } from "./components/CommentForm";

function App() {
  const [comments, setComments] = useState<CommentType[]>(() => {
    const savedComments = localStorage.getItem("comments");

    return savedComments ? JSON.parse(savedComments) : data.comments;
  });
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);
  function addComment(content: string) {
    const newComment: CommentType = {
      id: Date.now(),
      content,
      createdAt: "just now",
      score: 0,
      user: data.currentUser,
    };

    setComments((prevComments) => [...prevComments, newComment]);
  }
  function deleteComment(id: number) {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== id),
    );
  }
  return (
    <main className="comments-container">
      <h1>Meus Comentários</h1>

      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          currentUser={data.currentUser}
          onDeleteComment={deleteComment}
        />
      ))}

      <CommentForm onAddComment={addComment} />
    </main>
  );
}

export default App;
