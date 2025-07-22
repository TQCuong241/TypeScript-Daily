// Bài đầu tiên chủ yếu phân biệt const, let, var

// 1. const không thể gán lại được:

const PI = 3.14

// nếu mà giờ PI = 3.145 thì sẽ lỗi
// PI = 3.145

// 2. let có thể thay đổi, nhưng không khai báo lại được:

let ageOfCuong = 22
ageOfCuong = 23

// Nếu mà để là let ageOfCuong = 23 sẽ lỗi
// let ageOfCuong = 23

// 3. var có thể thay đổi all, kiểu gì cx được:

var username = 'cuong'
var username = 'cuongbro'
username = 'cuongdz'
