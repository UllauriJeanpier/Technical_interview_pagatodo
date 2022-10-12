import {FlatList, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {initDatabase} from '../../utils/database/init';
import {useHome} from './hook';
import {indexStyles as styles} from './style';
import {ItemList} from './item';

export const HomeScreen = () => {
  const {banks} = useHome();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={banks}
        renderItem={({item}) => <ItemList item={item} />}
        keyExtractor={item => item.bankName}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
