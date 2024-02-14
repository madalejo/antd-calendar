import { FC, JSX } from "react"
import { Table, Typography } from "antd"
import dayjs from "dayjs"
import utc from 'dayjs/plugin/utc' 
import timezone from "dayjs/plugin/timezone"

dayjs.extend(utc)
dayjs.extend(timezone)

const { Title, Text } = Typography

const TODAY = {
    readable: dayjs().format('MMM, dddd DD - YYYY'),
    tz: dayjs().format('zZ')
}

export const Day: FC = (): JSX.Element => {

    const columns = [
        {
            title: (<Text>{TODAY.tz}</Text>),
            dataIndex: "key",
            key: "key",
            width: 100,
        },
        {
            title: (
                <Title 
                    level={5} 
                    style={{ 
                        marginTop: 0, 
                        marginBottom: 0 
                    }}
                >
                    {TODAY.readable}
                </Title>
            ),
            key: "key"
        }
    ]

    const data = [...Array(24)].map((_, idx) => {
        const formatDigit = idx.toString().padStart(2, '0')
        return (
            {
                key: formatDigit + ":00",
                value: idx
            }
        )
    })

    return (
        <Table 
            title={() => <Title level={3}>Day</Title>}
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
        />
    )
}

export const Week: FC = (): JSX.Element => {
    return (
        <Table 
            title={() => <>Week</>}
        />
    )
}

export const Month: FC = (): JSX.Element => {
    return (
        <Table 
            title={() => <>Month</>}
        />
    )
}