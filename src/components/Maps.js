import React, { Component } from 'react'
import { Dimensions, View, StyleSheet, Text } from 'react-native'
import {
    Container,
    Content,
    Button,
} from 'native-base';
import MapView from 'react-native-maps'
import axios from 'axios'
import Header from './shared components/Header'

const options = {
    enableHighAccuracy: true,
    timeout: 20000,
    maximumAge: 0
}

const { width, height } = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGTITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class Map extends React.Component {
    state = {
        currentPosition: null,
        markerPosition: null
    }

    watchID = null

    componentDidMount() {
        const error = err => alert(err.message)
        navigator.geolocation.getCurrentPosition(position => {
            let { latitude, longitude } = position.coords
            let initialRegion = {
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGTITUDE_DELTA
            }
            this.setState({
                currentPosition: initialRegion,
                markerPosition: initialRegion
            })

        }, error, options)

        this.watchID = navigator.geolocation.watchPosition(position => {
            let { latitude, longitude } = position.coords
            let currentRegion = {
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGTITUDE_DELTA
            }
            this.setState({
                currentPosition: currentRegion,
                markerPosition: currentRegion
            })
        })
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID)
    }

    render() {
        alert(JSON.stringify(this.props))
        return (
            <Container>
                <Header title="Maps" {...this.props} />
                <View style={styles.container}>
                    <MapView
                        style={styles.map}
                        showsTraffic
                        region={this.state.currentPosition}
                    >
                        {!!this.state.markerPosition && <MapView.Marker
                            coordinate={this.state.markerPosition}
                            title={"Your Location"}
                        />}
                    </MapView>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})