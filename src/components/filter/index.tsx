import { JSX, CSSProperties, Dispatch, SetStateAction } from "react"
import { Button, DatePicker, Radio, Space } from "antd"

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

const FilterBar = ({
    view,
    setView
}: {
    view: number
    setView: Dispatch<SetStateAction<number>>
}): JSX.Element => {

    const handleView = (value: number): void => {
        setView(value)
    }

    return (
        <Space
            style={containerStyle}
        >
            <Space>
                <Button
                    type="primary"
                >
                    Today
                </Button>
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
                <DatePicker />
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