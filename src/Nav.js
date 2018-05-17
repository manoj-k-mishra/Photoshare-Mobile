import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens();
export default class Nav
{    constructor(){  this._initApp()    }
     _initApp()
       {    Navigation.startTabBasedApp(
           { tabs:[  {  label: 'Feeds',  screen: 'instagram_mobile.FeedsScreen', title: 'Instagram', icon: 'icon1', },
                     { label: 'Explore', screen: 'instagram_mobile.ExploreScreen', title: 'Explore', icon: 'icon2', },
                  ]
           })
       }
}