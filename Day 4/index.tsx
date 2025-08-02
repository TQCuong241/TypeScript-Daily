// ================
//bai 1: interface
// ================

interface Product {
    id: number
    name: string
    price: number
    category?: string
}

const products: Product[] = [
    { id: 1, name: 'Ao thun', price: 15000},
    { id: 2, name: 'Quan thun', price: 20000, category: 'Quan'}
]

function printProduct(product: Product): void {
  console.log(`[${product.id}] ${product.name} - Price: $${product.price} (Category: ${product.category ?? "N/A"})`);
}

products.forEach(printProduct);


// =====================
// bai 2:
// =====================

interface User {
    id: number
    name: string
    mail: string
}

interface Admin extends User {
    role: 'admin' | 'editor' | 'viewer'
}

const admin: Admin = {
    id: 1,
    name: 'Tran Quang Cuong',
    mail: 'cuongid241@gmail.com',
    role: 'admin'
}

function getRole(user: Admin): string {
    return `[${user.id}] ${user.name} thuoc role: ${user.role}`
}

console.log(getRole(admin))


// ================
// bai 3:
// ================

type Status = "pedding" | "completed" | "failed"

function updateStatus(status: Status): void {
    if(status == "pedding"){
        console.log("Don hang dang duoc xy ly")
    } else if(status == "completed") {
        console.log("Don hang hoan tat")
    } else {
        console.log("Don hang bi loi")
    }
}

updateStatus("completed")
