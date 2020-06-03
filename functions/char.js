const noAcii = (string = '') => {
  let newString = string
  newString = newString.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A')
  newString = newString.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  newString = newString.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O')
  newString = newString.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  newString = newString.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U')
  newString = newString.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  newString = newString.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E')
  newString = newString.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  newString = newString.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I')
  newString = newString.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  newString = newString.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y')
  newString = newString.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  newString = newString.replace(/Đ/g, 'D')
  newString = newString.replace(/đ/g, 'd')
  return newString
}

String.prototype.chainingReplace = function(match, replace) {
  return this.replace(match, replace)
}

const noAcii2 = (string = '') =>
  string
    .chainingReplace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A')
    .chainingReplace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
    .chainingReplace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O')
    .chainingReplace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
    .chainingReplace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U')
    .chainingReplace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
    .chainingReplace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E')
    .chainingReplace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
    .chainingReplace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I')
    .chainingReplace(/ì|í|ị|ỉ|ĩ/g, 'i')
    .chainingReplace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y')
    .chainingReplace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
    .chainingReplace(/Đ/g, 'D')
    .chainingReplace(/đ/g, 'd')

module.exports = {
  noAcii,
  noAcii2,
}