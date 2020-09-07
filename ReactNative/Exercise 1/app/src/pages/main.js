import React, { Component } from 'react';
import { TouchableOpacity, View, Text, FlatList, StyleSheet } from 'react-native';

import api from '../services/api'

export default class Main extends Component {

    state = {

        data: [],
        limit: 2,
        offset: 0,
        numberOfData: 0,
    }

    componentDidMount() {
        this.loadLaunches();
    }

    loadLaunches = async (offset = 0) => {

        const { limit } = this.state;

        const response = await api.get(`/launches?limit=${limit}&offset=${offset}`);
        const key = "spacex-api-count"

        this.setState({
            data: [...this.state.data, ...response.data],
            numberOfData: response.headers[key],
            offset
        });

    }

    loadMore = () => {

        const { offset, limit, numberOfData } = this.state;
        const add = offset + limit;

        if (offset > numberOfData) return

        this.loadLaunches(add);
    }

    //possivelmente item eh palavra reservada
    //pois nao consegui acesso aos dados com outra palavra 
    renderItem = ({ item }) => (
        <View style={styles.launchContainer}>

            <Text style={styles.launchTitle}>{item.mission_name}</Text>

            <TouchableOpacity style={styles.launchButton} onPress={() => {
                this.props.navigation.navigate("LaunchDetails", { launch: item })
            }}>
                <Text style={styles.launchButtonText}>Acessar</Text>
            </TouchableOpacity>

        </View>
    )


    render() {
        return (
            <View style={styles.container}>

                <FlatList

                    contentContainerStyle={styles.list}
                    data={this.state.data}
                    keyExtractor={item => item.flight_number}
                    renderItem={this.renderItem}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.1}

                />
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa"
    },
    list: {
        padding: 20
    },
    launchContainer: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },
    launchTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333'
    },
    launchButton: {
        height: 42,
        width: 92,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#DA552F',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        alignSelf: 'center'
    },
    launchButtonText: {
        fontSize: 16,
        color: "#DA552F",
        fontWeight: 'bold'
    },

})
