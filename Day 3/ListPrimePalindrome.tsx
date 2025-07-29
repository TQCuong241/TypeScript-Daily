import { numberForm, numberTo, setNumberForm  } from './index'


while (numberForm <= numberTo) {
    if (numberForm > 1) {
        let isPrime: boolean = true

        for (let i: number = 2; i <= Math.sqrt(numberForm); i++) {
            if (numberForm % i === 0) {
                isPrime = false
                break
            }
        }

        if (isPrime) {
            let str: string = numberForm.toString()
            let isPalindrome: boolean = str === str.split('').reverse().join('')

            if (isPalindrome) {
                console.log(numberForm)
            }
        }
    }
    setNumberForm(numberForm + 1)
}





// Bài toàn này là kiểm tra thử chuổi đó có đối xứng không
// ví dụ cuonggnouc abba
// tách ra thành mảng abba = ['a', 'b', 'b', 'a']
// đảo ngược lại thành ['a', 'b', 'b', 'a']
// so sánh 2 mảng này có bằng nhau không
// nếu bằng nhau thì đó là chuỗi đối xứng
// nếu không bằng nhau thì không phải chuỗi đối xứng
// Bài toán này là tìm số nguyên tố trong khoảng từ numberForm đến numberTo
// và kiểm tra xem số nguyên tố đó có phải là số đối xứng hay không



let cuong = 'c0_uo_ng'
cuong.split('_') // ['g', 'n', 'o', 'u', 'c'] "gnouc" == "cuong" // false
