import {createBox} from '@shopify/restyle';
import {SafeAreaView} from 'react-native';
import {Theme} from '../../constants/theme';

const SafeAreaBox = createBox<Theme, React.ComponentProps<typeof SafeAreaView>>(
  SafeAreaView,
);

export type SafeAreaBoxProps = React.ComponentProps<typeof SafeAreaBox>;

export default SafeAreaBox;
