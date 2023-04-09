import React, {useEffect, useCallback} from 'react';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import AnimeList from './AnimeList';
import {getNextPage, getPopularAnimeList} from '../actions/animeListAction';
import TryAgain from './utils/TryAgain';

function PopularAnimeList() {
  const dispatch = useDispatch();
  const selectedData = useSelector(state => state.anime);
  const getAnimeList = useCallback(
    () => dispatch(getPopularAnimeList()),
    [dispatch],
  );

  useEffect(() => {
    getAnimeList();
  }, [selectedData.currentPage, getAnimeList]);

  const loadMore = () => (
    <Button
      mode="text"
      onPress={() => dispatch(getNextPage())}
      icon="progress-download"
      loading={selectedData.loading}
      disabled={selectedData.loading}>
      Load More
    </Button>
  );
  return (
    <Container>
      {selectedData.loading &&
      (selectedData.currentPage === 1 || selectedData.error.length) !== 0 ? (
        <Wrapper>
          <TryAgain reload={getAnimeList} loading={selectedData.loading} />
        </Wrapper>
      ) : (
        <AnimeList
          title="Popular 🔥"
          animeList={selectedData.popularAnimeList}
          footer={loadMore()}
        />
      )}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default PopularAnimeList;
