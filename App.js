
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styled from "styled-components/native";
import { FlexRowSpaceBetween } from "./styles/Common";
import Player from "./components/Player";
import { BottomNavigation, TopNavigation } from "./components/Navigation";


export default function App() {
  return (
    <AppContainer>
      <Background source={require('./assets/TheProdigy-TheFatOfTheLand.jpg')} blurRadius={100} />
      <Container>
        <TopNavigation />

        <CoverHolder>
          <Cover
            resizeMode={'center'} source={require('./assets/TheProdigy-TheFatOfTheLand.jpg')} />
        </CoverHolder>
        <View>
          <Player />
          <BottomNavigation />
        </View>
      </Container>
    </AppContainer>
  );
}

const Background = styled.Image`
  /* background: #000; */
  width:100%;
  height:100%;
  z-index;1;
  position:absolute;
  left:0;
 top:0;
 opacity:0.5;

`;
const AppContainer = styled.View`
  background:rgba(0,0,0,1);
  width:100%;
  height:100%;
  z-index;2;
  position:relative;

`;

const Container = styled.View`
  /* background: #000; */
  width:100%;
  height:100%;
  padding:20px;
  flex: 1;
  z-index:2;
  justify-content:space-between;

`;

const CoverHolder = styled.View`
flex: 1;

`;
const Cover = styled.Image`
width:100%;
height:100%;
filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25));
`;





