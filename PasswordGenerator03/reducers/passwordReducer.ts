import {
  InitialPasswordState,
  PasswordActionType,
} from '../types/passwordReducer.types';
import {getPasswordString} from '../utils/passwordGenerator';

const passwordReducer = (
  state: InitialPasswordState,
  action: PasswordActionType,
): InitialPasswordState => {
  switch (action.type) {
    case 'GENERATE_PASSWORD':
      return {
        ...state,
        password: getPasswordString(action.payload),
      };
    case 'INCLUDE_UPPERCASE_CHARACTERS':
      return {
        ...state,
        includeUpperCaseCharacters: true,
      };
    case 'INCLUDE_LOWERCASE_CHARACTERS':
      return {
        ...state,
        includeLowerCaseCharacters: true,
      };
    case 'INCLUDE_SPECIAL_CHARACTERS':
      return {
        ...state,
        includeSpecialCharacters: true,
      };
    case 'INCLUDE_NUMBERS':
      return {
        ...state,
        includeNumbers: true,
      };
    case 'RESET':
      return {
        password: '',
        includeUpperCaseCharacters: false,
        includeLowerCaseCharacters: false,
        includeSpecialCharacters: false,
        includeNumbers: false,
      };
    default:
      return state;
  }
};

export default passwordReducer;
