import styled from 'styled-components/native';
import { Dimensions, StyleSheet } from 'react-native';

import { Touchable, Text, View } from '@app/components';

import { StyledBoardContainerProps, StyledBoardTitleProps } from './Game.types';
import { getBoardColors } from './Game.helpers';

const { width } = Dimensions.get('window');

const ITEM_SIZE = width * 0.33 - 20;

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingVertical: 100,
  },
  button: {
    marginHorizontal: 10,
  },
});

export const StyledBoardContainer = styled(
  Touchable
)<StyledBoardContainerProps>((props) => ({
  height: ITEM_SIZE,
  width: ITEM_SIZE,
  backgroundColor: getBoardColors({
    type: props.type,
    isFinished: props.isFinished,
    colors: props.theme.colors,
  }).backgroundColor,
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 7.5,
}));

export const StyledBoardTitle = styled(Text)<StyledBoardTitleProps>(
  (props) => ({
    fontSize: ITEM_SIZE * 0.7,
    color: getBoardColors({
      type: props.type,
      isFinished: props.isFinished,
      colors: props.theme.colors,
    }).textColor,
  })
);

export const StyledGameContainer = styled(View)({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

export const StyledGameContent = styled(View)({
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'center',
});

export const StyledButtonContainer = styled(View)({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20,
});

export const StyledGameStatusBarContainer = styled(View)({
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 30,
});
