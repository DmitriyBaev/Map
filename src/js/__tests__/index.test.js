import ErrorRepository from '../index';

test('correctError', () => {
  const error = new ErrorRepository();
  expect(error.translate(400)).toEqual('неправильный, некорректный запрос');
});

test('notcorrectError', () => {
  const error = new ErrorRepository();
  expect(error.translate(500)).toEqual('Unknown error');
});
