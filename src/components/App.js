import React, { Component } from 'react'
import { Root, Text, Container } from 'native-base'
import { StackNavigator, DrawerNavigator } from 'react-navigation'

import Authentication from './Authentication'
import Sidebar from './SideBar'
import Maps from './Maps'

const Drawer = DrawerNavigator(
    {
        Authentication: { screen: Authentication },
        Maps: { screen: Maps }
    },
    {
        initialRouteName: "Maps",
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <Sidebar {...props} />
    }
)

const AppNavigation = StackNavigator(
    {
        Drawer: { screen: Drawer },
        Maps: { screen: Maps },
    },
    {
        initialRouteName: "Drawer",
        headerMode: "none"
    }
)

const AuthenNavigation = StackNavigator(
    {
        Maps: { screen: Maps },
        Authentication: { screen: Authentication }
    },
    {
        initialRouteName: "Authentication",
        headerMode: "none"
    }
)

export default class Navigation extends Component {
    render() {
        return (
            <Root>
                <AuthenNavigation />
            </Root>
        )
    }
}

