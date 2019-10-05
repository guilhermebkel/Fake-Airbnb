import React, { Component } from 'react'
import { 
    SafeAreaView, 
    ScrollView, 
    StyleSheet, 
    Image, 
    AsyncStorage 
} from 'react-native'

import SpotList from '../components/SpotList'

import Logo from '../assets/logo.png'

export default class List extends Component{
    state = {
        techs: [],
    }

    componentDidMount(){
        AsyncStorage.getItem('techs').then(techs => {
            this.setState({
                techs: techs.split(',').map(tech => tech.trim())
            })
        })
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <Image style={styles.logo} source={Logo} />
                <ScrollView>
                    {
                        this.state.techs.map((tech, index) => (
                            <SpotList 
                                key={'tech-' + index} 
                                tech={tech}
                            />
                        ))
                    }
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 30
    }
})