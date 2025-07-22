export function checkPalindrome(stringInput: string): boolean {
    const reversed = stringInput.split('').reverse().join('')
    return reversed === stringInput
}