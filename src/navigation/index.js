import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import { ModalRoutes, SwitchRoutes, AppRoutes } from './routes';

const mainAppNavigator = createStackNavigator(AppRoutes);

const switchNavigator = createSwitchNavigator({
    ...SwitchRoutes,
    App: { screen: mainAppNavigator }
});

const appNavigator = createStackNavigator({
    Index: switchNavigator,
    ...ModalRoutes 
}, {
    headerMode: "none",
    mode: "modal",
    transparentCard: true,
    cardStyle: {
        backgroundColor: 'transparent',
        opacity: 1,
    },
});

export default createAppContainer(appNavigator);