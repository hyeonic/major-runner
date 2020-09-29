import { category } from './index.js';

// 전체 category목록을 조회하는 API
function fetchAllCategories() {
  return category.get('/');
}

// category name별 category목록을 조회하는 API
function fetchCategories(categoryName) {
  return category.get(`category-name/${categoryName}`);
}

// category 한건을 조회하는 API
function fetchCategory(categoryId) {
  return category.get(`${categoryId}`);
}

export { fetchAllCategories, fetchCategories, fetchCategory };
