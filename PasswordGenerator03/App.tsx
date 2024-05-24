import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useReducer} from 'react';
import {number, object} from 'yup';
import passwordReducer from './reducers/passwordReducer';
import {InitialPasswordState} from './types/passwordReducer.types';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const App = () => {
  const [state, dispatch] = useReducer(passwordReducer, initialState);

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={passwordSchema}
            onSubmit={values => {
              dispatch({
                type: 'GENERATE_PASSWORD',
                payload: {passwordLength: +values.passwordLength, ...state},
              });
            }}>
            {({
              values,
              errors,
              isValid,
              touched,
              handleChange,
              handleSubmit,
              handleReset,
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    placeholder="Example: 8"
                    keyboardType="numeric"
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Lowercase</Text>
                  <View>
                    <BouncyCheckbox
                      fillColor="#29AB87"
                      isChecked={state.includeLowerCaseCharacters}
                      onPress={() =>
                        dispatch({type: 'INCLUDE_LOWERCASE_CHARACTERS'})
                      }
                    />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Uppercase</Text>
                  <View>
                    <BouncyCheckbox
                      fillColor="#FED85D"
                      isChecked={state.includeUpperCaseCharacters}
                      onPress={() =>
                        dispatch({type: 'INCLUDE_UPPERCASE_CHARACTERS'})
                      }
                    />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Numbers</Text>
                  <View>
                    <BouncyCheckbox
                      fillColor="#C9A0DC"
                      isChecked={state.includeNumbers}
                      onPress={() => dispatch({type: 'INCLUDE_NUMBERS'})}
                    />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Special Characters</Text>
                  <View>
                    <BouncyCheckbox
                      fillColor="#FC80A5"
                      isChecked={state.includeSpecialCharacters}
                      onPress={() =>
                        dispatch({type: 'INCLUDE_SPECIAL_CHARACTERS'})
                      }
                    />
                  </View>
                </View>
                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={styles.primaryBtn}
                    onPress={() => handleSubmit()}>
                    <Text style={styles.primaryBtnTxt}>Generate</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => {
                      handleReset();
                      dispatch({type: 'RESET'});
                    }}>
                    <Text style={styles.secondaryBtnTxt}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {state.password.length > 0 && (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Long Press to copy</Text>
            <Text style={styles.generatedPassword} selectable>
              {state.password}
            </Text>
          </View>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;

const initialState: InitialPasswordState = {
  password: '',
  includeUpperCaseCharacters: false,
  includeLowerCaseCharacters: false,
  includeSpecialCharacters: false,
  includeNumbers: false,
};

const passwordSchema = object().shape({
  passwordLength: number()
    .min(4, 'Minimum password length should be 4 characters')
    .max(16, 'Cannot have password more than 16 characters')
    .required('Password length is required!'),
});

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    minWidth: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    minWidth: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
    color: '#000',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
  },
});
