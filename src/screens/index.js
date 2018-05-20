import { Navigation } from 'react-native-navigation';
import FeedsScreen from './FeedsScreen';
import ExploreScreen from './ExploreScreen'
import WithProvider from '../components/WithProvider';

export const registerScreens = () => {
    Navigation.registerComponent('instagram_mobile.FeedsScreen', () => //FeedsScreen)
     WithProvider(FeedsScreen));
     
    Navigation.registerComponent('instagram_mobile.ExploreScreen', () =>// ExploreScreen)
      WithProvider(ExploreScreen));
}