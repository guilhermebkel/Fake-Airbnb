import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import { 
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
    TouchableOpacity,
    Image
} from 'react-native'

import Api from '../services/Api'

class SpotList extends Component {
    state = {
        spots: []
    }

    componentDidMount(){
        this.loadSpots()
    }

    handleNavigate = (id) => {
        this.props.navigation.navigate('Book', { id })
    }

    async loadSpots(){
        const { data: { success, error, data }} = await Api.get('/spots', {
            params: { tech: this.props.tech }
        })

        if (error) return

        this.setState({
            spots: data
        })
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Brands that use {''}
                    <Text style={styles.bold}>
                        {this.props.tech}
                    </Text>
                </Text>

                <FlatList
                    style={styles.list}
                    data={this.state.spots}
                    keyExtractor={spot => spot._id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.listItem}>
                            <Image 
                                style={styles.thumbnail}
                                source={{ uri: item.thumbnail_url }} 
                            />
                            <Text style={styles.company}>{item.company}</Text>
                            <Text style={styles.price}>{item.price ? `R$${item.price}/day` : 'FREE'}</Text>
                            <TouchableOpacity 
                                onPress={() => this.handleNavigate(item._id)}
                                style={styles.button}
                            >
                                <Text style={styles.buttonText}>BOOK</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                >

                </FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },

    title: {
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15
    },
    
    bold: {
        fontWeight: 'bold'
    },

    list: {
        paddingHorizontal: 20,
    },

    listItem: {
        marginRight: 15,
    },

    thumbnail: {
        width: 200,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 2,
    },

    company: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
    },

    price: {
        fontSize: 15,
        color: '#999',
        marginTop: 5
    },

    button: {
        height: 32,
        backgroundColor: '#F05A5B',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 15,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 15
    }
})

export default withNavigation(SpotList)