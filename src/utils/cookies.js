function saveAuthToCookie(value) {
  document.cookie = `mr_auth=${value}`;
}

function saveUserToCookie(value) {
  document.cookie = `mr_user=${value}`;
}

function saveNickNameToCookie(value) {
  document.cookie = `mr_nick_name=${value}`;
}

function getAuthFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)mr_auth\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function getUserFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)mr_user\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function getNickNameFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)mr_nick_name\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
  saveAuthToCookie,
  saveUserToCookie,
  saveNickNameToCookie,
  getAuthFromCookie,
  getUserFromCookie,
  getNickNameFromCookie,
  deleteCookie,
};
