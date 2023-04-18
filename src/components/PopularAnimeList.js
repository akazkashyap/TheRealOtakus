import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import AnimeList from './AnimeList';
import { getNextPage, getPopularAnimeList } from '../actions/animeListAction';
import TryAgain from './utils/TryAgain';
import { fetchInitialState } from '../actions/userChatAction';

function PopularAnimeList() {
  const dispatch = useDispatch();
  const selectedData = useSelector(state => state.anime);
  const getAnimeList = useCallback(
    () => dispatch(getPopularAnimeList()),
    [dispatch],
  );

  useEffect(() => {
    dispatch(fetchInitialState());
    getAnimeList();
  }, [selectedData.currentPage, getAnimeList, dispatch]);

  return (
    <Container>
      {selectedData.error.length !== 0 ? (
        <Wrapper>
          <TryAgain reload={getAnimeList} loading={selectedData.loading} />
        </Wrapper>
      ) : (
        <AnimeList
          title="Popular 🔥"
          animeList={selectedData.popularAnimeList}
          isLoading={selectedData.loading}
          loadMore={() => dispatch(getNextPage())}
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
