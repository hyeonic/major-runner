import { category } from './index.js';

// category name별 category목록을 조회하는 API
function fetchCategories(categoryName) {
  return category.get(`${categoryName}`);
}

export { fetchCategories };
