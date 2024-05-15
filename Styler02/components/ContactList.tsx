import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      id: 1,
      name: 'Tuhin Das',
      status: 'Coding ReactJS',
      imageUrl: 'https://avatars.githubusercontent.com/u/53912455?v=4',
    },
    {
      id: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      id: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      id: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView>
        {contacts.map(({id, name, status, imageUrl}) => (
          <View key={id} style={styles.card}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.cardImage}
            />
            <View>
              <Text style={styles.cardTitle}>{name}</Text>
              <Text style={styles.cardSubtitle}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    padding: 20,
    fontWeight: 'bold',
  },
  card: {
    borderRadius: 8,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 14,
    marginTop: 5,
    color: 'gray',
  },
});
