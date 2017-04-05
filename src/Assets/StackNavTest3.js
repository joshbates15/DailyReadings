/* 
 * For https://snack.expo.io
 */

import React from 'react';
import { Text, ScrollView, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation';

const MyNavScreen = ({ navigation, banner }) => (
    <ScrollView>
        <Text style={styles.sampleText}>{banner}</Text>
        <Button
            onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
            title="Go to a profile screen"
        />
        <Button
            onPress={() => navigation.navigate('Photos', { name: 'Jane' })}
            title="Go to a photos screen"
        />
        <Button
            onPress={() => navigation.goBack(null)}
            title="Go back"
        />
    </ScrollView>
);

const MyHomeScreen = ({ navigation }) => (
    <MyNavScreen
        banner="Home Screen"
        navigation={navigation}
    />
);
MyHomeScreen.navigationOptions = {
    title: 'Welcome',
    header: {
      right: <Button title="Settings" />,
      left: <Button title="Menu" />,
    },
};

const MyPhotosScreen = ({ navigation }) => (
    <MyNavScreen
        banner={`${navigation.state.params.name}'s Photos`}
        navigation={navigation}
    />
);
MyPhotosScreen.navigationOptions = {
    title: 'Photos',
};

const MyProfileScreen = ({ navigation }) => (
    <MyNavScreen
        banner={
            `${navigation.state.params.mode === 'edit' ? 'Now Editing ' : ''
            }${navigation.state.params.name}'s Profile`
        }
        navigation={navigation}
    />
);
MyProfileScreen.navigationOptions = {
    header: ({ state, setParams }) => ({
        title: `${state.params.name}'s Profile!`,
        // Render a button on the right side of the header.
        // When pressed switches the screen to edit mode.
        right: (
            <Button
                title={state.params.mode === 'edit' ? 'Done' : 'Edit'}
                onPress={() => setParams({ mode: state.params.mode === 'edit' ? '' : 'edit' })}
            />
        ),
    }),
};

const SimpleStack = StackNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Profile: {
        path: 'people/:name',
        screen: MyProfileScreen,
    },
    Photos: {
        path: 'photos/:name',
        screen: MyPhotosScreen,
    },
});

export default SimpleStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
