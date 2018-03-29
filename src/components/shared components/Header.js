import React, { Component } from 'react'
import { Header, Body, Left, Right, Icon, Button, Title } from 'native-base'

export default props => {
    return (
        <Header>
            <Left>
                <Button
                    transparent
                    onPress={() => props.navigation.navigate('DrawerOpen')}
                >
                    <Icon name='menu' />
                </Button>
            </Left>
            <Body>
                <Title>
                    {props.title}
                </Title>
            </Body>
            <Right />
        </Header >)
}
