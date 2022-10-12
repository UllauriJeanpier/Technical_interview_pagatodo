import {View, Text, Image} from 'react-native';
import React from 'react';
import {itemStyles as styles} from './style';
import {IBank} from '../../interfaces/bank';

interface Props {
  item: IBank;
}

export const ItemList = ({item}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{uri: item.url}} style={styles.img} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoName}>{item.bankName}</Text>
        <Text style={styles.infoSymbol}>{item.age}</Text>
        <Text style={styles.infoDescription}>{item.description}</Text>
      </View>
    </View>
  );
};
