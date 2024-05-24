import {PasswordOptions} from '../types/passwordReducer.types';

const UPPERCASE_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE_CHARACTERS = 'abcdefghijklmnopqrstuvwxyz';
const SPECIAL_CHARACTERS = '!@#$%^&*()_+';
const NUMBERS = '0123456789';

const createPassword = (
  allowedCharacters: string,
  passwordLength: number,
): string => {
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
    password += allowedCharacters[randomIndex];
  }
  return password;
};

const getPasswordString = ({
  passwordLength,
  includeUpperCaseCharacters,
  includeLowerCaseCharacters,
  includeSpecialCharacters,
  includeNumbers,
}: PasswordOptions): string => {
  let allowedCharacters = '';

  if (includeUpperCaseCharacters) {
    allowedCharacters += UPPERCASE_CHARACTERS;
  }
  if (includeLowerCaseCharacters) {
    allowedCharacters += LOWERCASE_CHARACTERS;
  }
  if (includeSpecialCharacters) {
    allowedCharacters += SPECIAL_CHARACTERS;
  }
  if (includeNumbers) {
    allowedCharacters += NUMBERS;
  }
  if (!allowedCharacters) {
    allowedCharacters =
      UPPERCASE_CHARACTERS +
      LOWERCASE_CHARACTERS +
      SPECIAL_CHARACTERS +
      NUMBERS;
  }
  return createPassword(allowedCharacters, passwordLength);
};

export {getPasswordString};
