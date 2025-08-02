// =========================
// Bài 1: Class cơ bản
// =========================

class Person {
    name: string
    age: number

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    chat(): void {
        console.log(`Hi, I am ${this.name} and I'm ${this.age} year old`)
    }
}

const user1 = new Person("Cuong", 22)
user1.chat()


// Bài 2 (Đóng gói - Encapsulation)
// Đóng gói: Ẩn dữ liệu bên trong class (dùng private) và chỉ cho phép truy cập
// thông qua các phương thức public. Mục đích: bảo vệ dữ liệu, kiểm soát cách dữ liệu thay đổi.

class bankAccount {
    private soDuTaiKhoan: number // Chỉ truy cập được trong class

    constructor(soDuTaiKhoan: number) {
        this.soDuTaiKhoan = soDuTaiKhoan
    }

    // Nạp tiền (public method)
    napTien(amount: number) {
        this.soDuTaiKhoan += amount
        console.log(`Nap tien: ${amount}`)
    }
    
    // Rút tiền (kiểm tra trước khi rút)
    rutTien(amount: number) {
        if(amount > this.soDuTaiKhoan) return console.log(`Khong du tien vi so du hien tai la: ${this.soDuTaiKhoan}`)
        this.soDuTaiKhoan -= amount
        console.log(`Rut tien: ${amount}`)
    }

    // Kiểm tra tài khoản (public method)
    kiemTraTaiKhoan(): void {
        console.log(`So du tai khoan hien tai: ${this.soDuTaiKhoan}`)
    }

    // Lấy số dư (public method trả về dạng số)
    laySoDu(): number {
        return this.soDuTaiKhoan
    }
}

// Test đóng gói
const account = new bankAccount(1000000)
account.kiemTraTaiKhoan()
account.napTien(200000)
account.kiemTraTaiKhoan()
account.rutTien(10000000000000000)
account.kiemTraTaiKhoan()
account.rutTien(100000)
account.kiemTraTaiKhoan()
account.kiemTraTaiKhoan()
