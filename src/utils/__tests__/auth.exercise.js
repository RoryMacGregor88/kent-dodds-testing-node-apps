// Testing Pure Functions

// 🐨 import the function that we're testing
import {isPasswordAllowed} from '../auth'

// 🐨 write tests for valid and invalid passwords
// 💰 here are some you can use:
//
// valid:
// - !aBc123
//
// invalid:
// - a2c! // too short
// - 123456! // no alphabet characters
// - ABCdef! // no numbers
// - abc123! // no uppercase letters
// - ABC123! // no lowercase letters
// - ABCdef123 // no non-alphanumeric characters

const validPassword = '!aBc123'
const invalidPasswords = [
  'a2c!',
  '123456!',
  'ABCdef!',
  'abc123!',
  'ABC123!',
  'ABCdef123',
]

describe('isPasswordAllowed', () => {
  it('should return true if password is valid', () => {
    const result = isPasswordAllowed(validPassword)
    expect(result).toBe(true)
  })

  it.each(invalidPasswords)(
    'should return false if password is invalid (%s)',
    (password) => {
      const result = isPasswordAllowed(password)
      expect(result).toBe(false)
    },
  )
})
