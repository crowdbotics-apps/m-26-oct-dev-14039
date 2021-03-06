import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen213189Navigator from '../features/BlankScreen213189/navigator';
import CopyOfBlankScreen013185Navigator from '../features/CopyOfBlankScreen013185/navigator';
import BlankScreen013184Navigator from '../features/BlankScreen013184/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen213189: { screen: BlankScreen213189Navigator },
CopyOfBlankScreen013185: { screen: CopyOfBlankScreen013185Navigator },
BlankScreen013184: { screen: BlankScreen013184Navigator },

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
