import { Navigation } from 'react-native-navigation';
import FeedsScreen from './FeedsScreen';

export const registerScreens = () => {
    Navigation.registerComponent('instagram_mobile.FeedsScreen', () => FeedsScreen)
  
}