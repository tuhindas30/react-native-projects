export interface PasswordOptions
  extends Omit<InitialPasswordState, 'password'> {
  passwordLength: number;
}

export interface InitialPasswordState {
  password: string;
  includeUpperCaseCharacters: boolean;
  includeLowerCaseCharacters: boolean;
  includeSpecialCharacters: boolean;
  includeNumbers: boolean;
}

export type PasswordActionType =
  | {
      type: 'GENERATE_PASSWORD';
      payload: PasswordOptions;
    }
  | {
      type: 'INCLUDE_UPPERCASE_CHARACTERS';
    }
  | {
      type: 'INCLUDE_LOWERCASE_CHARACTERS';
    }
  | {
      type: 'INCLUDE_SPECIAL_CHARACTERS';
    }
  | {
      type: 'INCLUDE_NUMBERS';
    }
  | {
      type: 'RESET';
    };
