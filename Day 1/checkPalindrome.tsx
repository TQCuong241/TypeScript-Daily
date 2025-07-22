export function checkPalindrome(stringInput: string) {
    const reversed = stringInput.split('').reverse().join('')
    return reversed === stringInput
}