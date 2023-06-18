import styled from 'styled-components/native';
import { theme } from '../../theme';

export const Container = styled.View`
    padding: 24px;
    background-color: ${theme.colors.primary};


    border-radius: 40px;

    margin-bottom: 8px;
`

export const Text = styled.Text`
    font-size: 14px;

    color: ${theme.colors.white};

    margin-bottom: 70px;
    font-weight: 300;
`

export const Result = styled.Text`
    font-size: 40px;

    color: ${theme.colors.white};
    font-weight: 300;
`

export const Icon = styled.View`
    padding: 16px;
    background-color: ${theme.colors.primary};

    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 40px;

    align-items: center;
    justify-content: center;

    position: absolute;
    right: 20px;
    top: 20px;

    transform: rotate(45deg);
`