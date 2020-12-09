import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import CbSplashScreen1183498Navigator from '../features/CbSplashScreen1183498/navigator';
import HomeScreen2183497Navigator from '../features/HomeScreen2183497/navigator';
import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
    
    CbSplashScreen1183498: {
      screen: CbSplashScreen1183498
    }
      screen: CbSplashScreen1183498Navigator
    },

    HomeScreen2183497: {
      screen: HomeScreen2183497
    }
      screen: HomeScreen2183497Navigator
    },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
