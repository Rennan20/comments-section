import type { CommentType } from "../types/comment";

interface CommentProps {
  comment: CommentType;
  onDeleteComment: (id: number) => void;
  currentUser: CommentType["user"];
}

export function Comment({
  comment,
  onDeleteComment,
  currentUser,
}: CommentProps) {
  return (
    <article className="comment">
      <div className="comment-score">
        <span>{comment.score}</span>
      </div>

      <div className="comment-body">
        <div className="comment-header">
          <img
            src={comment.user.image.png}
            alt={`Avatar de ${comment.user.username}`}
          />

          <strong>{comment.user.username}</strong>
          <span>{comment.createdAt}</span>

          {comment.user.username === currentUser.username && (
            <button type="button" onClick={() => onDeleteComment(comment.id)}>
              <img src="/images/icon-delete.svg" alt="" />
              Delete
            </button>
          )}
        </div>

        <p className="comment-content">{comment.content}</p>
      </div>
    </article>
  );
}
