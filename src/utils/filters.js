// 필터 관련 함수가 존재하는 파일
export function formatDate(value) {
  //   const date = new Date(value);
  //   const year = date.getFullYear();
  //   let month = date.getMonth() + 1;
  //   month = month > 9 ? month : `0${month}`;
  //   const day = date.getDate();
  //   let hours = date.getHours();
  //   hours = hours > 9 ? hours : `0${hours}`;
  //   const minutes = date.getMinutes();
  //   return `${year}-${month}-${day} ${hours}:${minutes}`;
  const year = value[0];
  const month = value[1];
  const day = value[2];
  const hours = value[3];
  const minutes = value[4];
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}
