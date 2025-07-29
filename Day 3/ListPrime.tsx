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
            console.log(numberForm)
        }
    }
    setNumberForm(numberForm + 1)
}
















