import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import {  iconsMap } from './utils/themes';
import appInitialized from './utils/appInitialized';
registerScreens();
export function startLogin() 
{ Navigation.startSingleScreenApp(
    {   screen: { screen: 'instagram_mobile.LoginScreen', 
                  navigatorStyle: { navBarHidden: true,  },
                  },
    });
}

export function startMainApp() 
{  Navigation.startTabBasedApp(
    {  
        tabs: [{ label: 'Feeds', screen: 'instagram_mobile.FeedsScreen', title: 'Instagram', icon: iconsMap.home,},
              { label: 'Explore', screen: 'instagram_mobile.ExploreScreen', title: 'Explore', icon: iconsMap['ios-search'],  },
             ],
    });
}

export function init() {  appInitialized();  }
