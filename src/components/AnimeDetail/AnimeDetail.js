import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { ImageBackground, StyleSheet } from 'react-native';
import AnimeHeaderInfo from './AnimeHeaderInfo';
import { Title, Divider, Paragraph } from 'react-native-paper';
import AnimeEpisodesDialogList from './AnimeEpisodesDialogList';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

function AnimeDetail() {
  const navigation = useNavigation();
  const selectedData = useSelector(state => state.animeDetails);
  const selectedAnime = useSelector(state => state.selectedAnime);

  useEffect(() => {
    navigation.setOptions({ headerTitle: selectedAnime.name });
  }, [selectedAnime, navigation]);

  return (
    <ImageBackground
      source={{ uri: selectedAnime.image }}
      blurRadius={15}
    >
      <Wrapper contentContainerStyle={styles.listContainerStyle}>
        <AnimeHeaderInfo
          selectedAnime={selectedAnime}
          animeInfo={selectedData.anime_info}
        />
        <AnimeEpisodesDialogList
          animeEpisodes={selectedData.episodes}
          totalEp={selectedData.total_episodes}
        />
        <Title>Plot Summary</Title>
        <Divider />
        <Paragraph>
          {selectedData.anime_info && selectedData.anime_info.plot_summary}
        </Paragraph>
      </Wrapper>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  listContainerStyle: {
    paddingHorizontal: 10,
    paddingBottom: 100,
  },
});

const Wrapper = styled.ScrollView``;

export default AnimeDetail;
