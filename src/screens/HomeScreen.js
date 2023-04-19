import React from 'react';
import styled from 'styled-components/native';
import PopularAnimeList from '../components/PopularAnimeList';

function HomeScreen() {
  return (
    <Container>
      <PopularAnimeList />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  padding:25px 0 0 0 ;

`;

export default HomeScreen;
