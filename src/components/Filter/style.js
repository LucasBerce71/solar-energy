import styled from 'styled-components/native';
import { theme } from '../../theme';

export const Container = styled.TouchableOpacity`
    padding: 8px 24px;
    background-color: ${theme.colors.primary};

    max-width: 84px;

    border-radius: 1000px;
`

export const Text = styled.Text`
    font-size: 14px;

    color: ${theme.colors.white};
    font-weight: 300;

`