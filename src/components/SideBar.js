import React, { Component } from 'react'
import {
    Content,
    Text,
    List,
    ListItem,
    Icon,
    Container,
    Badge
} from 'native-base'

const routes = ["Maps"]
const datas = routes.map(data => {
    return {
        name: data,
        route: data,
        icon: "phone-portrait",
        bg: "#C5F442"
    }
})

export default class Sidebar extends Component {
    render() {
        return (
            <Container>
                <Content
                    bounces={false}
                    style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
                >
                    <List
                        dataArray={datas}
                        renderRow={data =>
                            <ListItem
                                button
                                noBorder
                                onPress={() => this.props.navigation.navigate(data.route)}
                            >
                                <Text>{data.name}</Text>
                            </ListItem>
                        }
                    />
                </Content>
            </Container>
        )
    }
}