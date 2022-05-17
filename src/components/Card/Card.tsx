import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParams } from '../../../RootStackParams';
import { useNavigation } from '@react-navigation/native';
import { CardProps } from '../../types';

type navigationProps = StackNavigationProp<RootStackParams, 'Redirect'>

const Card: React.FC<CardProps> = ({
  title, image_url,
}) => {

  const navigation = useNavigation<navigationProps>();

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        {title}
      </Text>
      <View >
      <TouchableOpacity onPress={() => navigation.navigate('Redirect')}>
        <Image
          style={styles.image}
          resizeMode='contain'
          source={{
            uri: image_url,
          }} 
        />
      </TouchableOpacity>
      </View>
      
      {/* <View>
        <Button
          title="Increase enthusiasm"
          accessibilityLabel="increment"
          onPress={onIncrement}
          color="blue"
        />
        <Button
          title="Decrease enthusiasm"
          accessibilityLabel="decrement"
          onPress={onDecrement}
          color="red"
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16
  },
  image: {
    width: 200, 
    height: 200
  }
});

export default Card;