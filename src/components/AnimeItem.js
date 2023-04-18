import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setSelectedAnime } from '../actions/selectedAnimeAction';

function AnimeItem({ anime, index, scrollY }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const ITEM_SIZE = 65;
  // const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 4)];
  // const opacityInputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 3)];
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
        navigation.navigate('anime', { source: anime.source });
      }}>
      <CardWrapper>
        <Image
          style={styles.image}
          source={{
            uri: anime.image,
          }}
          resizeMode="cover"
        />
        <CardText numberOfLines={2} ellipsizeMode="tail">
          {anime.name}
        </CardText>
      </CardWrapper>
    </Card>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 180,
  },
});

const Card = styled(TouchableOpacity)`
  flex: 0.50;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  position: relative;
`;

const CardText = styled.Text`
  font-size: 16px;
  color: #fff;
  width: 130px;
  padding : 10px 5px;
`;

const CardWrapper = styled.View`
  flex: 1;
  background-color: ${props => props.theme.card.BG_COLOR};
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  elevation: 5;
`;




export default AnimeItem;
