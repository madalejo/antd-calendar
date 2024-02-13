import { JSX, FC, CSSProperties } from "react"
import { Layout as Container, theme} from "antd"
import FilterBar from "@components/filter"

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
        width: "100%"
    }

    const headerStyle: CSSProperties = {
        background: colorBgContainer,
    }

    const contentStyle: CSSProperties = {
        width: "100%",
    }

    return (
        <Container
            style={containerStyle}
        >
            <Header
                style={headerStyle}
            >
                <FilterBar />
            </Header>
            <Content
                style={contentStyle}
            >
                <div>Content</div>
            </Content>
        </Container>
    )
}

export default Layout