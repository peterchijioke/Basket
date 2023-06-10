import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AppText from '../common/AppText';

const CardItem = ({title, icon}: {title: string; icon: any}) => (
  <TouchableOpacity style={styles.itemInnerWrap}>
    <View style={styles.iconWrap}>{icon}</View>
    <AppText style={styles.title}>{title}</AppText>
  </TouchableOpacity>
);

export default CardItem;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemInnerWrap: {
    width: '60%',
    height: 50,
    // backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
  },
  iconWrap: {width: 70},
});
