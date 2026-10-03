import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

const DetailResep = () => {
    const { id } = useLocalSearchParams();
  return (
    <View>
      <Text 
      style={{ 
        fontSize: 20, 
        marginTop: 20 }}>
        Detail Resep : {id}
      </Text>
    </View>
  );
};

export default DetailResep