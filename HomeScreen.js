import React, { Component } from 'react';
import { View, FlatList, Button } from 'react-native';

export default class HomeScreen extends Component {
    // Constructor for the HomeScreen class.
    constructor(props) {
        super(props);

        // Initialize state with an empty recipes array.
        this.state = {
            recipes: []
        };
    }

    // Lifecycle method: Runs after the component output has been rendered to the DOM.
    componentDidMount() {
        // Fetch the list of recipes.
        fetch('https://api.example.com/recipes')
            .then(response => {
                // Convert the fetched data to JSON.
                return response.json();
            })
            .then(data => {
                // Update the state with fetched recipes.
                this.setState({ recipes: data });
            });
    }

    render() {
        return (
            <View style={{ flex: 1, padding: 20 }}>
                {/* Render the list of recipes using FlatList. */}
                <FlatList
                    data={this.state.recipes}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <Button
                            title={item.name}
                            // Navigate to RecipeScreen when a recipe is clicked.
                            onPress={() => this.props.navigation.navigate('Recipe', { recipe: item })}
                        />
                    )}
                />
            </View>
        );
    }
}

/*
    The constructor runs, initializing the component's state with an empty recipes array.
    The render method runs, displaying a FlatList that is initially empty because this.state.recipes is an empty array.
    After the initial render has completed, componentDidMount is called. Within componentDidMount, data is fetched from the API, and once that data is retrieved and processed, the component's state is updated with the new recipes data.
    The state update triggers a re-render, and this time the FlatList displays the fetched recipes.
 */
