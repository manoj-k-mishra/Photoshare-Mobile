import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import { iconsLoaded, iconsMap } from './utils/themes';

registerScreens();
export default class Nav
{    constructor(){  //this._initApp()  
                     iconsLoaded.then(() => this._initApp());  
                  }
     _initApp()
       {    Navigation.startTabBasedApp(
           { tabs:[  {  label: 'Feeds',  screen: 'instagram_mobile.FeedsScreen', title: 'Instagram',   icon: iconsMap.home },
                     { label: 'Explore', screen: 'instagram_mobile.ExploreScreen', title: 'Explore',  icon: iconsMap['ios-search'] },
                  ]
           })
       }
}