const { format } = require('date-fns');
const { ko } = require('date-fns/locale/ko');

module.exports = {
  /**
   * 시간 포맷 함수
   * @param { Date } date iso 날짜
   * @param { string } dateFormat 포맷형식(선택)
   */
  formatToUtc: (date, dateFormat) => {
    return date
      ? format(new Date(date), dateFormat ?? 'yyyy-MM-dd HH:mm', {
          locale: ko,
        })
      : '-';
  },

  /**
   * Date -> 한국시간 포맷 함수
   * @param {Date} date 날짜 : Date 객체
   * @param {boolean} yyyyMMdd yyyyMMdd 출력여부
   * @returns {string} 변환된 날짜
   */
  formatToGmt: (date, yyyyMMdd) => {
    const tmp = date
      .toLocaleString('en-GB', {
        timeZone: 'Asia/Seoul',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      })
      .replace(' ', '')
      .split(/,|\/|:/);
    return yyyyMMdd
      ? `${tmp[2]}${tmp[1]}${tmp[0]}`
      : `${tmp[2]}-${tmp[1]}-${tmp[0]} ${tmp[3]}:${tmp[4]}`;
  },
};
