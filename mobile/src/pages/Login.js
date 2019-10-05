import React, { Component } from 'react'
import { 
    KeyboardAvoidingView, 
    View, 
    Image, 
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity,
    AsyncStorage,
    Alert
} from 'react-native'

import Api from '../services/Api'

import Logo from '../assets/logo.png'

export default class Login extends Component {
    state= {
        email: '',
        techs: ''
    }

    componentDidMount(){
        AsyncStorage.getItem('user').then(user => {
            if (user) this.props.navigation.navigate('List')
        })
    }

    handleSubmit = async () => {
        const { data: { success, error, data }} = await Api.post('/sessions', {
            email: this.state.email
        })

        if (error) return Alert.alert('Error when attempting to login!')

        const { _id } = data
        await AsyncStorage.setItem('user', _id)
        await AsyncStorage.setItem('techs', this.state.techs)

        this.props.navigation.navigate('List')
    }

    render(){
        return (
            <KeyboardAvoidingView 
                behavior="padding"
                style={styles.container}
            >
                <Image source={Logo} />
                <View style={styles.form}>
                    <Text style={styles.label}>E-MAIL *</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Your email..."
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
    
                    <Text style={styles.label}>TECHNOLOGIES *</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Technologies you're interested in..."
                        placeholderTextColor="#999"
                        autoCapitalize="words"
                        autoCorrect={false}
                        value={this.state.techs}
                        onChangeText={techs => this.setState({ techs })}
                    />
    
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={this.handleSubmit}
                    >
                        <Text style={styles.buttonText}>Find spots</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,    
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8
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

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }
})