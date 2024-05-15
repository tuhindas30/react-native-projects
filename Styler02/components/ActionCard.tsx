import {
  Image,
  Linking,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  const openURL = (URL: string) => {
    Linking.openURL(URL);
  };

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Text style={styles.cardTitle}>
          Javascript in action: Under the hood 🧐
        </Text>
        <Image
          source={{
            uri: 'https://tuhindas.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1626857650517%2FlrXX9PhRr.png&w=1920&q=75',
          }}
          style={styles.cardImage}
        />
        <Text numberOfLines={3} style={styles.cardDescription}>
          Javascript is a popular programming language with many peculiar
          behaviors which can sometimes blow your mind. But if you get to know
          how it works under the hood, you will just love it resulting in a
          master of it. To really understand its working, two thing needs to be
          clearly understood.
        </Text>
        <View style={styles.cardFooter}>
          <TouchableOpacity>
            <Text
              style={styles.cardFooterText}
              onPress={() => openURL('https://twitter.com/tuhindas30')}>
              Follow me
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openURL(
                'https://tuhindas.dev/blogs/javascript-in-action-under-the-hood',
              )
            }>
            <Text style={styles.cardFooterText}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

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
    backgroundColor: 'white',
    margin: 20,
    marginTop: 0,
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
    borderRadius: 8,
    marginTop: 10,
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
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardFooterText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
