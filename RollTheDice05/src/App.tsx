import React, {useState} from 'react';
import {
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';
import Dice from './components/Dice';

const App = (): JSX.Element => {
  const [diceImage, setDiceImaage] = useState<ImageSourcePropType>(DiceOne);

  return (
    <View style={styles.container}>
      <Dice imageURL={diceImage} />
      <Pressable onPress={() => setDiceImaage(rollDice())}>
        <Text style={styles.rollDiceBtnText}>Roll the Dice</Text>
      </Pressable>
    </View>
  );
};

const rollDice = () => {
  const randomIndex = Math.floor(Math.random() * 6) + 1;
  ReactNativeHapticFeedback.trigger('impactLight', options);
  switch (randomIndex) {
    case 1:
      return DiceOne;
    case 2:
      return DiceTwo;
    case 3:
      return DiceThree;
    case 4:
      return DiceFour;
    case 5:
      return DiceFive;
    case 6:
      return DiceSix;
    default:
      return DiceOne;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
