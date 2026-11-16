import { useState } from "react";
import type { ChangeEvent, SubmitEvent } from "react";
interface CommentFormProps {
  onAddComment: (content: string) => void;
}
export function CommentForm({ onAddComment }: CommentFormProps) {
  const [content, setContent] = useState<string>("");

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!content.trim()) return;
    onAddComment(content.trim());
    setContent("");
  }

  function handleContentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setContent(e.target.value);
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <textarea
        className="comment-input"
        placeholder="Comentário"
        value={content}
        onChange={handleContentChange}
      />

      <button className="comment-submit" type="submit">
        Send
      </button>
    </form>
  );
}
