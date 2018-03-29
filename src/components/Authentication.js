import React, { Component } from 'react'
import { Container, Header, Title, Content, Form, Item, Input, Button, Text } from 'native-base'

export default class Authentication extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Title style={{ margin: 30 }}>
                        <Text style={{ fontSize: 36 }}>NativeApp</Text>
                    </Title>
                    <Form>
                        <Item>
                            <Input placeholder="Username" />
                        </Item>
                        <Item >
                            <Input
                                placeholder="Password"
                                secureTextEntry
                            />
                        </Item>
                    </Form>
                    <Button
                        block
                        style={{ margin: 15, marginTop: 50 }}
                        onPress={() => this.props.navigation.navigate('Maps')}
                    >
                        <Text>Sign In</Text>
                    </Button>
                </Content>
            </Container >
        );
    }
}