import { like } from './index.js';

// 해당 post에 특정 user가 좋아요를 눌렀는지 확인하는 API
function fetchLike(postId, username) {
  return like.get(`/post/${postId}/nick-name/${username}`);
}

export { fetchLike };
