import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import RecipeScreen from './screens/RecipeScreen';

// Define a stack navigator.
const Stack = createStackNavigator();

// Main app component as a class-based component
export default class App extends Component {
    render() {
        return (
            // Provide navigation functionalities for our app.
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    {/* Define the screens and their respective components. */}
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Recipe" component={RecipeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}


