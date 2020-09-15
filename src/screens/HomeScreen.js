import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeSectionComponent from '../components/HomeSectionComponent';

export default function HomeScreen() {
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <FontAwesome name="search" size={24} color="#969696" />
          <TextInput
            style={styles.inputText}
            placeholder="Bạn tìm gì hôm nay?"
          />
        </View>
        <View style={styles.cartContainer}>
          <FontAwesome name="shopping-cart" size={24} color="#FFF" />
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <ScrollView>
          <HomeSectionComponent />
          <HomeSectionComponent />
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    paddingTop: 50,
    flexDirection: 'row',
    backgroundColor: '#1e88e5',
  },
  inputContainer: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginBottom: 4,
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
  },
  inputText: {
    color: '#969696',
    fontSize: 14,
    marginLeft: 8,
    fontWeight: '500',
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
