import { Navigation } from 'react-native-navigation';
import FeedsScreen from './FeedsScreen';
import ExploreScreen from './ExploreScreen'

export const registerScreens = () => {
    Navigation.registerComponent('instagram_mobile.FeedsScreen', () => FeedsScreen)
    Navigation.registerComponent('instagram_mobile.ExploreScreen', () => ExploreScreen)
}