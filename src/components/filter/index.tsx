import { JSX, FC, CSSProperties, useState } from "react"
import { Button, Radio, Space } from "antd"

import { Icon } from "@iconify/react"

const containerStyle: CSSProperties = {
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
}

const radioOptions = [
    {
        label: 'Day',
        value: 0,
        key: 0,
    },
    {
        label: 'Week',
        value: 1,
        key: 1,
    },
    {
        label: 'Month',
        value: 2,
        key: 2,
    }
]

const FilterBar: FC = (): JSX.Element => {
    const [view, setView] = useState<number>(0)

    const handleView = (value: number): void => {
        setView(value)
    }

    return (
        <Space
            style={containerStyle}
        >
            <Space>
                <Button>Today</Button>
                <Button 
                    icon={
                        <Icon 
                            icon="heroicons-outline:chevron-left" 
                            inline
                        />
                    }
                />
                <Button 
                    icon={
                        <Icon 
                            icon="heroicons-outline:chevron-right" 
                            inline
                        />
                    }
                />
            </Space>
            <Space>
                <Radio.Group 
                    options={radioOptions}
                    value={view}
                    defaultValue={view}
                    optionType="button"
                    onChange={
                        (e) => handleView(Number(e.target.value))
                    }
                />
            </Space>
        </Space>
    )
}

export default FilterBar