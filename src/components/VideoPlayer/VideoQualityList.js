import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';
import VideoQualityItem from './VideoQualityItem';
import styled from 'styled-components/native';

function VideoQualityList({setPlayerVisible, setCurrentUrl, vidUrls}) {
  const handlePress = url => {
    setCurrentUrl(url);
    setPlayerVisible(true);
  };

  return (
    <ScrollView>
      <Title>Stream Links</Title>
      {vidUrls.map((item, index) => {
        const quality = item.quality;
        const url = item.stream_url;
        return (
          <VideoQualityItem
            icon="speedometer"
            color={Colors.green700}
            key={index}
            text={quality || 'Play'}
            onPress={() => handlePress(url)}
          />
        );
      })}
    </ScrollView>
  );
}

export default VideoQualityList;

const styles = StyleSheet.create({
  contentStyle: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },
});

const Title = styled.Text`
  font-size: 20px;
  color: ${Colors.blueGrey700};
  font-family: 'Wabene';
  padding: 5px 0 15px 0;
`;
