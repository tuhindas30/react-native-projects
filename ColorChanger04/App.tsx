import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('#000000');

  return (
    <>
      <StatusBar backgroundColor={backgroundColor} />
      <SafeAreaView style={[styles.container, {backgroundColor}]}>
        <View style={styles.shapesContainer}>
          {Array(100)
            .fill(0)
            .map((_, index) => (
              <View
                key={index}
                style={[
                  generateRandomShapes(),
                  {backgroundColor: generateRandomColor()},
                ]}
              />
            ))}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            delayLongPress={0}
            style={[styles.button, {backgroundColor: generateRandomColor()}]}
            onPress={() => setBackgroundColor(generateRandomColor())}>
            <Text style={styles.buttonText}>Click Me!</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const generateRandomColor = () => {
  const hexRange = '0123456789ABCDEF';
  let randomColor = '#';
  for (let i = 0; i < 6; i++) {
    randomColor += hexRange[Math.floor(Math.random() * 16)];
  }
  return randomColor;
};

const generateRandomShapes = () => {
  const shapes = [
    styles.square,
    styles.circle,
    styles.triangle,
    styles.invertedTriangle,
  ];
  const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
  return randomShape;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  buttonContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    elevation: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
  },
  shapesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  square: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
  },
  circle: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 40,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
  },
  invertedTriangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderTopWidth: 40,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'white',
  },
});

export default App;
