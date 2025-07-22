// let name: string = "TypeScript"
// let age: number = 25
// let isLearning: boolean = true
// let anything: any = "Có thể là bất kỳ kiểu gì"
// let numbers: number[] = [1, 2, 3]
// let tupleExample: [string, number] = ["Age", 30]

import { findMax } from "./findMax"
import { isPositive } from "./isPositive"
import { isPrime } from "./isPrime"
// check thử có phải số dương không
console.log(isPositive(20))
// check thử có phải số nguyên tố không
console.log(isPrime(13))
// tìm số lớn nhất trong mảng
console.log(findMax([1,21,12312,31,2321,1312.12312,12312412]))