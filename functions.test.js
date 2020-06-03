const { noAcii, noAcii2 } = require('./functions/char')
const { indexArray } = require('./functions/array')

test('xóa dấu chuỗi' , () => {
  const testString = 'Con cáo nâu nhanh nhẹn nhảy qua con chó lười biếng'
  const expectString = 'Con cao nau nhanh nhen nhay qua con cho luoi bieng'
  expect(noAcii(testString)).toBe(expectString)
})

test('xóa dấu chuỗi với hàm chaining' , () => {
  const testString = 'Con cáo nâu nhanh nhẹn nhảy qua con chó lười biếng'
  const expectString = 'Con cao nau nhanh nhen nhay qua con cho luoi bieng'
  expect(noAcii2(testString)).toBe(expectString)
})

test('tạo mảng index' , () => {
  const limit = 5
  const expectArray = [0, 1, 2, 3, 4]
  expect(indexArray(limit)).toEqual(expectArray)
})
