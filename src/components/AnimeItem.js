import React from 'react';
import {StyleSheet, Image, TouchableOpacity, Animated} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setSelectedAnime} from '../actions/selectedAnimeAction';

function AnimeItem({anime, index, scrollY}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const ITEM_SIZE = 65;
  const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 4)];
  const opacityInputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 3)];
  // const scale = scrollY.interpolate({
  //   inputRange,
  //   outputRange: [1, 1, 1, 0.5],
  // });
  // const opacity = scrollY.interpolate({
  //   inputRange: opacityInputRange,
  //   outputRange: [1, 1, 1, 0.5],
  // });

  return (
    <Card
      onPress={() => {
        dispatch(setSelectedAnime(anime));
        navigation.navigate('anime', {source: anime.source});
      }}>
      <CardWrapper>
        <Image
          style={styles.image}
          source={{
            uri: anime.image,
          }}
          resizeMode="cover"
        />
        <CardContent>
          <CardText numberOfLines={4} ellipsizeMode="tail">
            {anime.name}
          </CardText>
        </CardContent>
      </CardWrapper>
      <BottomImage source={require('../../assets/images/app-logo.png')} />
    </Card>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 110,
    width: 110,
  },
});

const BottomImage = styled.Image`
  position: absolute;
  bottom: -5px;
  right: -3px;
  height: 40px;
  width: 40px;
  opacity: 0.8;
`;

const Card = styled(TouchableOpacity)`
  flex: 0.33;

  justify-content: center;

  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  position: relative;
`;

const CardText = styled.Text`
  font-size: 13px;
  color: #fff;
  width: 90px;
`;

const CardWrapper = styled.View`
  flex: 1;
  background-color: ${props => props.theme.card.BG_COLOR};
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  elevation: 5;
`;

const CardContent = styled.View`
  padding: 10px 0 20px 0;
`;

export default AnimeItem;
