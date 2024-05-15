import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={styles.cardText}>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={styles.cardText}>Me</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={styles.cardText}>To</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={styles.cardText}>Scroll</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={styles.cardText}>More ...</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text style={styles.cardText}>😃</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    padding: 20,
    fontWeight: 'bold',
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    backgroundColor: 'lightgray',
  },
  cardText: {
    fontWeight: 'bold',
    color: 'black',
  },
  elevatedCard: {
    margin: 10,
    elevation: 10,
    shadowRadius: 10,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
