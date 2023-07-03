import * as React from 'react';

import { Button, Container } from '@app/components';
import { useChangeTheme } from '@app/context';

import styles, {
  StyledButtonContainer,
  StyledPrimaryText,
  StyledSecondaryText,
  StyledTitleContainer,
  StyledThemeSwitch,
} from './Welcome.styled';
import { WelcomeProps } from './Welcome.types';

const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
  const { isDarkTheme, setDarkTheme } = useChangeTheme();

  return (
    <Container style={styles.container}>
      <StyledThemeSwitch
        value={isDarkTheme}
        onChange={(value) => setDarkTheme(value)}
      />
      <StyledTitleContainer>
        <StyledPrimaryText font="Black">Tic</StyledPrimaryText>
        <StyledSecondaryText font="Black">Tac</StyledSecondaryText>
        <StyledPrimaryText font="Black">Toe</StyledPrimaryText>
      </StyledTitleContainer>
      <StyledButtonContainer>
        <Button
          style={styles.button}
          type="primary"
          onPress={() => navigation.replace('Game')}
        >
          Jouer
        </Button>
      </StyledButtonContainer>
    </Container>
  );
};

export default Welcome;
