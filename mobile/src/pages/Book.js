import React, { Component } from 'react'
import { 
    Text, 
    SafeAreaView, 
    StyleSheet, 
    AsyncStorage,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native'

import Api from '../services/Api'

export default class Book extends Component{
    state = {
        date: ''
    }

    id = this.props.navigation.getParam('id')

    handleSubmit = async () => {
        const user_id = await AsyncStorage.getItem('user')

        await Api.post(`/spots/${this.id}/bookings`, {
            date: this.state.date
        },
        {
            headers: { user_id }
        })

        Alert.alert('Book done with success!')
        this.props.navigation.navigate('List')
    }
    
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.label}>BOOK FOR *</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="What date do you choose?"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={this.state.date}
                    onChangeText={date => this.setState({ date })}
                />

                <TouchableOpacity 
                    style={styles.button}
                    onPress={this.handleSubmit}
                >
                    <Text style={styles.buttonText}>BOOK</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.cancelButton}
                    onPress={() => this.props.navigation.navigate('List')}
                >
                    <Text style={styles.buttonText}>CANCEL</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 30,

    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
        marginTop: 30,
    },

    input: {
        borderWidth: 1,
        borderColor: '#DDD',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2,
    },

    button: {
        height: 42,
        backgroundColor: '#F05A5B',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },

    cancelButton: {
        height: 42,
        backgroundColor: '#CCC',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 10,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }
})