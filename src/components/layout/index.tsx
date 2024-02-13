import { JSX, FC, CSSProperties, useState } from "react"
import { Layout as Container, theme} from "antd"

import FilterBar from "@components/filter"
import { Day, Week, Month } from "@components/calendar"

const { 
    Header, 
    Content 
} = Container

const Layout: FC = (): JSX.Element => {
    const [view, setView] = useState<number>(0)

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
                <FilterBar 
                    view={view}
                    setView={setView}
                />
            </Header>
            <Content
                style={contentStyle}
            >
                {
                    view === 0 ? 
                        <Day />
                    : view === 1 ?
                        <Week />
                    :   
                        <Month />
                }
            </Content>
        </Container>
    )
}

export default Layout