import { Navigation } from 'react-native-navigation';
import FeedsScreen from './FeedsScreen';
import ExploreScreen from './ExploreScreen'
import WithProvider from '../components/WithProvider';
import LoginScreen from './LoginScreen';

export const registerScreens = () => 
{   Navigation.registerComponent('instagram_mobile.FeedsScreen', () => WithProvider(FeedsScreen));
    Navigation.registerComponent('instagram_mobile.ExploreScreen', () => WithProvider(ExploreScreen));
    Navigation.registerComponent('instagram_mobile.LoginScreen', () => WithProvider(LoginScreen),
        );
}