export function sumOneToN(numberInput: number) {
    let sumTarget = 0

    for(let i = 1; i <= numberInput; i++) {
        sumTarget += i
    }

    return sumTarget
}