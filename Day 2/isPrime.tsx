export function isPrime(numberInput: number): boolean {
    if(numberInput < 2) return true

    for(let numberStart = 1; numberStart < numberInput; numberStart++) {
        if(numberInput % numberStart === 0) return false
    }
    
    return true
}