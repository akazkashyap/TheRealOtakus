import React, { useEffect } from 'react';
import { SafeAreaView } from "react-native"
import styled from 'styled-components/native';
import GenreList from '../components/Genre/GenreList';
import Loader from '../components/utils/Loader';
import TryAgain from '../components/utils/TryAgain';
import { useDispatch, useSelector } from 'react-redux';
import { getAnimeGenre } from '../actions/animeGenreAction';
import Search from '../components/Search';

function SearchandGenreScreen() {
  const dispatch = useDispatch();
  const genre = useSelector(state => state.genre);

  const loadGenre = () => dispatch(getAnimeGenre());

  useEffect(() => {
    loadGenre();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Search />
      {genre.loading ? (
        <Loader />
      ) : genre.error.length !== 0 ? (
        <TryAgain reload={loadGenre} loading={genre.loading} />
      ) : (
        <GenreList genreList={genre.genreList} />
      )}
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  padding:30px 0 0 0 ;
`;

export default SearchandGenreScreen;
