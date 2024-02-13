import { JSX, FC, CSSProperties } from "react"
import { Layout as Container, theme} from "antd"

const { 
    Header, 
    Content 
} = Container

const Layout: FC = (): JSX.Element => {
    const {
        token: { colorBgContainer }
    } = theme.useToken()

    const containerStyle: CSSProperties = {
        minHeight: "100vh",
        height: "100%",
    }

    const headerStyle: CSSProperties = {
        background: colorBgContainer,
    }

    return (
        <Container
            style={containerStyle}
        >
            <Header
                style={headerStyle}
            >
                <>header</>
            </Header>
            <Content>
                <>Content</>
            </Content>
        </Container>
    )
}

export default Layout