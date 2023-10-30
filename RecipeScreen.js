import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class RecipeScreen extends Component {
    render() {
        // Get the passed recipe data from the navigation parameters.
        const { recipe } = this.props.route.params;

        return (
            <View style={{ flex: 1, padding: 20 }}>
                {/* Display the recipe's name and description. */}
                <Text>{recipe.name}</Text>
                <Text>{recipe.description}</Text>
            </View>
        );
    }
}


/*
1. Destructuring Assignment

The syntax { recipe } is an example of destructuring assignment in JavaScript. Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.
2. this.props

this.props refers to the props (short for "properties") of the class-based React component. Props in React are a way of passing data from parent to child components. They are read-only and help to make your components reusable.
3. this.props.route

In the context of React Navigation (which is what's being used in the code to manage screen transitions), each screen component (like RecipeScreen) will receive a route prop. This route prop contains information about the current screen's position in the navigation stack and any parameters passed to it.
4. this.props.route.params

params is a property of route that contains the parameters passed to the screen. When you navigate between screens, you can pass parameters to the destination screen. For example, in the provided code, when a recipe is clicked in the HomeScreen, the whole recipe object is passed as a parameter to the RecipeScreen.

So, if the navigation call looks something like this:

javascript

this.props.navigation.navigate('Recipe', { recipe: clickedRecipe });

The RecipeScreen will receive the clickedRecipe object as a parameter, and it will be available under this.props.route.params.recipe.

The line const { recipe } = this.props.route.params; essentially extracts this recipe parameter from the params object and stores it in a constant named recipe, making it easier to use throughout the RecipeScreen component.
 */