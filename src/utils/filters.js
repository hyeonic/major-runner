// 필터 관련 함수가 존재하는 파일
export function formatDate(value) {
  const year = value[0];
  let month = value[1];
  month = month > 9 ? month : `0${month}`;
  let day = value[2];
  day = day > 9 ? day : `0${day}`;
  let hours = value[3];
  hours = hours > 9 ? hours : `0${hours}`;
  let minutes = value[4];
  minutes = minutes > 9 ? minutes : `0${minutes}`;
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}
