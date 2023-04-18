import React, { useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import styled from 'styled-components';
import AnimeItem from './AnimeItem';
import ShimmerList from './ShimmerList';

function AnimeList({ animeList, title, loadMore, isLoading, isError }) {
  // const scrollY = React.useRef(new Animated.Value(0)).current;

  // if (isLoading) {
  //   return <ShimmerList title={title} itemsNum={12} />;
  // }

  return (
    <Container>
      {animeList.length !== 0 && (
        <FlatList
          data={animeList}
          renderItem={({ item, index }) => (
            <AnimeItem anime={item} index={index} />
          )}
          numColumns={2}
          contentContainerStyle={FlatListStyles.container}
          keyExtractor={item => item.name}
          columnWrapperStyle={FlatListStyles.column}
          ListHeaderComponent={title ? <ListTitle>{title}</ListTitle> : null}
          onEndReachedThreshold={0.3}
          onEndReached={loadMore}
          ListFooterComponent={() => {
            if (isLoading) {
              return <ActivityIndicator size={'small'} />
            }
          }}
        />
      )}
    </Container>

  );
}

const FlatListStyles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  column: {
    flex: 1,
  },
});

const Container = styled.View`
  flex: 1;
  width: 100%;
`;
const ListTitle = styled.Text`
  font-size: 30px;
  margin-left: 10px;
  padding: 10px 0;
  font-family: 'Paladise Script';
  letter-spacing: 2px;
  color: ${props => props.theme.SECONDARY_TEXT_COLOR};
`;

export default AnimeList;
