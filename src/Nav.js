import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens();
export default class Nav{
    constructor(){  this._initApp()    }
    _initApp(){
        Navigation.isAppLaunched()
      .then((appLaunched) => {
        if (appLaunched) {
          startApp();
        }
        new NativeEventsReceiver().appLaunched(startApp);
      }),
        Navigation.startTabBasedApp({
            tabs:[
                {
                    label: 'Feeds',
                    screen: 'instagram_mobile.FeedsScreen',
                    title: 'Instagram',
                    icon: 'aa',
                }
            ]
        })
    }
}