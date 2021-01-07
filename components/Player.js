import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import { FlexRowSpaceBetween } from "../styles/Common";
import { Ionicons } from '@expo/vector-icons';

const Player = props => (
  <PlayerContainer>
    <Song>Song</Song>
    <Artist>Artist</Artist>
    <ProgressBar />
    <TimeFrame>
      <Time>0:00</Time>
      <Time>5:03</Time>
    </TimeFrame>
    <Controls>
      <TouchableOpacity
        accessible={true}
        accessibilityLabel="Add song to favourite"
      >
        <Ionicons
          name="md-heart-outline"
          size={24}
          color="#fff"
        />
      </TouchableOpacity>
      <SongControls>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Back to previous song"
        >
          <Ionicons
            name="play-skip-back"
            size={24}
            color="#fff"
          />

        </TouchableOpacity>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Play song"
        >
          <Ionicons
            name="caret-forward-circle"
            size={60}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Skip forward"
        >
          <Ionicons
            name="play-skip-forward"
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      </SongControls>

      <TouchableOpacity
        accessible={true}
        accessibilityLabel="Remove"
      >
        <Ionicons
          name="remove-circle-outline"
          size={24}
          color="#fff"
        />
      </TouchableOpacity>
    </Controls>
  </PlayerContainer >
);

export default Player;



const Song = styled.Text`
color:white;
font-weight:600;
font-size:20px;
`;

const Artist = styled.Text`
color:#B7B6B1;
font-weight:600;
font-size:15px;
margin-bottom:10px;
`;
const Time = styled.Text`
color:#B7B6B1;
font-size:12px;
`;

const PlayerContainer = styled.View`
width:100%;
padding:10px 0;
z-index:2;

`;

const Controls = styled.View`
${FlexRowSpaceBetween};
`;

const ProgressBar = styled.View`
background:#5A5A5A;
width:100%;
height:4px;
border-radius:2px;
margin:5px 0;
`;

const TimeFrame = styled.View`
margin:10px 0;
flex-direction:row;
align-items:center;
justify-content:space-between;
`;

const SongControls = styled.View`
${FlexRowSpaceBetween};
display: inline-flex;
  flex-wrap: wrap;
  gap: 18px;
  margin:10px 0;
`;