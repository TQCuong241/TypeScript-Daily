//====================
// Hoc Ham
//====================

// Ham void 

function chatBox (name: string, welcomeText: string = 'welcome'): void {
    console.log(`${name}, ${welcomeText}`)
}

chatBox('Cuong')
chatBox('CuongBro', 'Day la the gioi do toi tao ra do hehe')

// Ham tra ve gia tri

function tinhTongHaiSo ( soA: number, soB: number): number {
    return soA + soB
}

console.log(tinhTongHaiSo(10, 20))

// cach goi ham theo nhieu kieu du lieu truyen vao
function getLength(value: string): number
function getLength<T>(value: T[]): number
function getLength(value: any): number {
  return value.length;
}

console.log(getLength("Hello"));
console.log(getLength([1, 2, 3]));

// Generics cơ bản kieu minh nhap kieu du lieu vao sau

function testType<T>( value: T): T {
    return value
}

testType<string>('hello')
testType<number>(123)
testType<boolean>(true) 

// Generics với mảng

function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

getFirstElement<number>([10,20,30])  // T là number → trả 10
getFirstElement<string>(["a","b"])   // T là string → trả "a"
getFirstElement<boolean>([])         // Mảng rỗng → trả undefined
