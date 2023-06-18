import styled from 'styled-components/native';
import { Picker } from "@react-native-picker/picker";

import { theme } from '../../theme';

export const Container = styled.TouchableOpacity`
    padding: 8px 24px;
    
    background-color: ${theme.colors.primary};

    max-width: 84px;

    border-radius: 1000px;
`;

export const PickerStyled = styled(Picker)`
    display: none;
`;

export const Text = styled.Text`
    font-size: 14px;
    font-weight: 300;

    color: ${theme.colors.white};
`;