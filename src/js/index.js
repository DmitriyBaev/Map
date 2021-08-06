export default class ErrorRepository {
  constructor() {
    this.map = new Map([
      [400, 'неправильный, некорректный запрос'],
      [403, 'запрещено'],
      [404, 'не найдено'],
    ]);
  }

  translate(code) {
    if (!this.map.has(code)) {
      return 'Unknown error';
    }
    return this.map.get(code);
  }
}
