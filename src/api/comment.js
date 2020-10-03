import { comment } from './index.js';

function deleteComment(commentId) {
  return comment.delete(`/${commentId}`);
}

export { deleteComment };
