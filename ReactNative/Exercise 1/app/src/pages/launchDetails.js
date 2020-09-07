import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const LaunchDetails = ({ route }) => {

    const { launch } = route.params;
    const {rocket} = launch;

    return (
        <View style={styles.container}>

            <Text style={styles.containerText}>Mission name: {launch.mission_name}</Text>
            <Text style={styles.containerText}>Year of launch: {launch.launch_year}</Text>
            <Text style={styles.containerText}>Rocket name: {rocket.rocket_name}</Text>

        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        padding: 20
    },

    containerText: {   
        fontSize: 25,
        backgroundColor: "#D3D3D3",
        padding:20,
        margin:10,
        borderRadius: 5,
        fontWeight: 'bold',
        color: "#004080",
    }
});

export default LaunchDetails;