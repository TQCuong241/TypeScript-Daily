type EvenOrOdd = "Even" | "Odd"

export function isEvenOrOdd(numberInput: number) : EvenOrOdd {
    return numberInput % 2 === 0 ? "Even" : "Odd"
}