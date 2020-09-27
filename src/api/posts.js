import { posts } from './index.js';

// category별 posts 목록 조회 API -> paging을 위한 param 삽임 예정
function fetchPosts(categoryId) {
  return posts.get(`/category/${categoryId}`);
}

// 특정 posts 1개를 조회하는 API
function fetchPost(postId) {
  return posts.get(postId);
}

// post를 생성하는 API
function createPost(post) {
  return posts.post('/', post);
}

// post를 수정하는 API
function editPost(postId, post) {
  return posts.put(postId, post);
}

// post를 삭제하는 API
function deletePost(postId) {
  return posts.delete(postId);
}

// post의 조회수를 올리는 API
function incrementViews(postId) {
  return posts.get(`/${postId}/views`);
}

// post에 comment를 조회하는 API
function fetchComments(postId) {
  return posts.get(`/${postId}/comments`);
}

// post에 comment를 추가하는 API
function createComment(postId, comment) {
  return posts.post(`/${postId}/comment`, comment);
}

// post에 좋아요를 추가하는 API
function addLike(postId, userData) {
  return posts.post(`/${postId}/like`, userData);
}

// post에 좋아요를 취소하는 API
function deleteLike(postId, likeId) {
  return posts.delete(`/${postId}/like/${likeId}`);
}

export {
  fetchPosts,
  fetchPost,
  createPost,
  editPost,
  deletePost,
  incrementViews,
  createComment,
  fetchComments,
  addLike,
  deleteLike,
};
