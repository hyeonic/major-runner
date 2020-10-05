// 필터 관련 함수가 존재하는 파일
export function formatDate(value) {
  const year = value[0];
  let month = value[1];
  month = month > 9 ? month : `0${month}`;
  const day = value[2];
  let hours = value[3];
  hours = hours > 9 ? hours : `0${hours}`;
  const minutes = value[4];
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}
