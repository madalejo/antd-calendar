import { FC, JSX } from "react"
import { Table } from "antd"

export const Day: FC = (): JSX.Element => {
    return (
        <Table 
            title={() => <>Day</>}
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