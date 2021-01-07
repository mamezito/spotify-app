import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import { FlexRowSpaceBetween } from "../styles/Common";
import { Ionicons } from '@expo/vector-icons';


export const TopNavigation = props => (

  <TopNavigationContainer>
    <TouchableOpacity
      accessible={true}
      accessibilityLabel="Collapse player"
    ><Ionicons
        name="chevron-down"
        size={24}
        color="#fff"
      /></TouchableOpacity>
    <Album>Album</Album>
    <TouchableOpacity
      accessible={true}
      accessibilityLabel="More options"
    ><Ionicons
        name="ellipsis-vertical"
        size={24}
        color="#fff"
      /></TouchableOpacity>
  </TopNavigationContainer>
);

TopNavigation;


export const BottomNavigation = props => (
  <BottomNavigationContainer>
    <TouchableOpacity
      accessible={true}
      accessibilityLabel="Switch device"
    >
      <Ionicons
        name="desktop-sharp"
        size={24}
        color="#fff"
      /></TouchableOpacity>
    <TouchableOpacity
      accessible={true}
      accessibilityLabel="Share song"
    >
      <Ionicons
        name="share-social"
        size={24}
        color="#fff"
      /></TouchableOpacity>
  </BottomNavigationContainer>

);

BottomNavigation;

const Album = styled.Text`
color:white;
font-size:12px;
`;


const TopNavigationContainer = styled.View`
width:100%;
${FlexRowSpaceBetween};
z-index:3;
margin:10px 0;
`;

const BottomNavigationContainer = styled.View`
${FlexRowSpaceBetween};
width:100%;
z-index:3;
margin:10px 0;
`;


