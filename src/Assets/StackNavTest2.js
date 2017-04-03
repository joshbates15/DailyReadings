import React from 'react';
import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation';

const NotificationsTabs = TabNavigator({
    NotificationsAll: {
        screen: NotificationsAll,
    },
    NotificationsBookmarked: {
        screen: NotificationsBookmarked,
    }
}, {
        tabBarOptions: {
            activeTintColor: '#206099',
            showLabel: false,
        },
    });

const NotificationsStack = StackNavigator({
    Notifications: {
        screen: NotificationsTabs,
    },
    Message: {
        screen: Message,
    }
}, { mode: 'modal', headerMode: 'none' });

const AppStack = StackNavigator({
    Home: {
        screen: Home,
    },
    Notifications: {
        screen: NotificationsStack,
    }
});

const MyApp = DrawerNavigator({
    App: { screen: AppStack },
});

export default MyApp;

import { Icon } from 'react-native-vector-icons/MaterialIcons';