
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from "styled-components/native";
import { FlexRowSpaceBetween } from "./styles/Common";
import Player from "./components/Player";
import { BottomNavigation, TopNavigation } from "./components/Navigation";

export default function App() {
  return (
    <Container>
      <TopNavigation />

      <Text>Cover</Text>
      <View>
        <Player />
        <BottomNavigation />
      </View>
    </Container>
  );
}



const Container = styled.View`
  background: #000;
  width:100%;
  height:100%;
  padding:20px;
  flex: 1;
  z-index:1
  justify-content:space-between;
  
`;



