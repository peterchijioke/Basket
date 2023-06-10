import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CardItem from './CardItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CardItemWrap() {
  return (
    <View style={styles.itemCard}>
      <CardItem
        title="Notification"
        icon={<Ionicons name="notifications" size={25} color={'tomato'} />}
      />
      <CardItem
        title="Edit User"
        icon={<FontAwesome5 name="user-edit" size={25} color={'tomato'} />}
      />
      <CardItem
        title="Wishlist"
        icon={<Ionicons name="star" size={25} color={'tomato'} />}
      />
      <CardItem
        title="Order List"
        icon={
          <MaterialCommunityIcons
            name="newspaper-check"
            size={25}
            color={'tomato'}
          />
        }
      />
      <CardItem
        title="Track Order"
        icon={<Ionicons name="location" size={25} color={'tomato'} />}
      />
      <CardItem
        title="Payment Option"
        icon={<MaterialIcons name="payment" size={25} color={'tomato'} />}
      />
      <CardItem
        title="Settings"
        icon={<Ionicons name="settings-sharp" size={25} color={'tomato'} />}
      />
      <CardItem
        title="Logout"
        icon={<Ionicons name="log-out" size={25} color={'tomato'} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemCard: {
    width: '90%',
    // backgroundColor: 'pink',
    backgroundColor: '#FFF',
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 1000,

    borderRadius: 10,
    top: -50,
    alignItems: 'center',
  },
});
