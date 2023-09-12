import { Ellipse, Line } from 'assets';
import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

interface Data {
  name: String;
  email: String;
}
const ListView = ({ name, email }: Data) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.container1}>
          <View>
            <Image source={Ellipse} />
          </View>
          <View style={styles.spacing}></View>
          <View>
            <View>
              <Text style={styles.text}>{name}</Text>
            </View>
            <View>
              <Text style={styles.text1}>{email}</Text>
            </View>
          </View>
        </View>
        <View style={styles.spacing1}></View>
        <View>
          <Image source={Line} style={styles.image} />
        </View>
      </View>
    </View>
  );
};
export default ListView;

const styles = StyleSheet.create({
  containerMain: {
  },
  container: {
    // flex: 1,
    marginHorizontal: 16
    // marginTop: 25
  },
  container1: {
    flexDirection: 'row'
    // justifyContent: 'space-between'
  },
  container2: {
    flexDirection: 'row'
  },

  item: {
    flex: 1,
    padding: 8
  },
  spacing: {
    width: 10
  },
  spacing1: {
    height: 10
  },

  text: {
    color: 'background: rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '600'
    // alignContent: 'center'
  },
  text1: {
    color: 'background: rgba(0, 0, 0, 1)',
    fontSize: 14,
    fontWeight: '400'
  },
  image: {
    width: '100%'
  },
  buttonSearch: {},
  infoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    // borderRadius: 10,
    width: 100,
    height: 50,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.4)'
    // alignItems: 'center'
  }
});
