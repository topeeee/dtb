import React from 'react';
import Box from '../Base/Box';
import {Text} from '../Typography/index';
import {StatusBar} from 'react-native';
import SafeAreaBox, {SafeAreaBoxProps} from './SafeAreaBox';
import {palette} from '../../constants/theme';

export type LayoutComponentProps = SafeAreaBoxProps & {
  label: string;
  children?: JSX.Element | JSX.Element[];
};

export default function LayoutComponent({
  label,
  children,
  ...rest
}: LayoutComponentProps) {
  return (
    <Box backgroundColor="deepBlue" flex={1}>
      <StatusBar backgroundColor={palette.deepBlue} barStyle="light-content" />
      <SafeAreaBox flex={1} {...rest}>
        <Box
          alignItems="center"
          flexDirection="row"
          marginBottom="lg"
          marginTop="md"
          paddingHorizontal="md">
          <Box alignItems="center" flex={1} justifyContent="center">
            <Text color="white" marginTop="xs" variant="bold16">
              {label}
            </Text>
          </Box>
        </Box>
        {children}
      </SafeAreaBox>
    </Box>
  );
}
