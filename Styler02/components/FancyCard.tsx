import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Victoria_Memorial_situated_in_Kolkata.jpg/1200px-Victoria_Memorial_situated_in_Kolkata.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Victoria Memorial</Text>
          <Text style={styles.cardSubtitle}>City of Joy, Kolkata</Text>
          <Text style={styles.cardDescription}>
            The Victoria Memorial is a large marble monument on the Maidan in
            Central Kolkata, having its entrance on the Queen's Way. It was
            built between 1906 and 1921 by the Government of India. It is
            dedicated to the memory of Queen Victoria, the Empress of India from
            1876 to 1901.
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    padding: 20,
    fontWeight: 'bold',
  },
  card: {
    borderRadius: 8,
    fontWeight: 'bold',
    padding: 20,
  },
  elevatedCard: {
    elevation: 10,
    shadowRadius: 10,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {
    padding: 10,
    backgroundColor: 'white',
    borderColor: 'lightgray',
    borderWidth: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
  cardDescription: {
    fontSize: 16,
    marginTop: 10,
    color: 'black',
  },
  cardFooter: {
    color: 'blue',
    marginTop: 20,
  },
});
