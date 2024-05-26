import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

type DiceProps = PropsWithChildren<{
  imageURL: ImageSourcePropType;
}>;

const Dice = ({imageURL}: DiceProps): JSX.Element => {
  return (
    <View style={styles.diceContainer}>
      <Image source={imageURL} style={styles.diceImage} />
    </View>
  );
};
export default Dice;

const styles = StyleSheet.create({
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
});
