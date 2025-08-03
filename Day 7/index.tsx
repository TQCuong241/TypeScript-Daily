// ==================================
// Kế thừa OOP
// ==================================


class dongVat {
    name: string

    constructor(name: string) {
        this.name = name
    }

    speak() {
        console.log(`${this.name} là động vật`)
    }
}

class dog extends dongVat {
    constructor(name: string){
        super(name)
    }

    speak() {
        console.log(`${this.name} đang nói chuyện`)
    }
}

class Cat extends dongVat {
  constructor(name: string) {
    super(name);
  }
  speak() {
    super.speak();
    console.log(`${this.name} says meow`);
  }
}

const d = new dog("hello")
d.speak()

const cat = new Cat("Kitty");
cat.speak();



// ==========================
// Kế thừa nhiều cấp
// ==========================

class DangNhap {
    connect() {
        console.log('Đang đăng nhập.................')
    }
}

class User extends DangNhap {
    getUser() {
        console.log('Lấy thành công User!')
    }
}

class AdminUser extends User {
    deleteUser() {
        console.log('Xóa thành công User!')
    }
}

const admin = new AdminUser()

admin.connect()
admin.getUser()
admin.deleteUser()