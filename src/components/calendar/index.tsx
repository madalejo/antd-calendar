import { FC, JSX, useState } from "react"
import { Table, Typography } from "antd"

import dayjs from "dayjs"
import utc from 'dayjs/plugin/utc' 
import timezone from "dayjs/plugin/timezone"

import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import DraggableCell from "@components/tableCell"

dayjs.extend(utc)
dayjs.extend(timezone)

const { Title, Text } = Typography

const TODAY = {
    readable: dayjs().format('MMM, dddd DD - YYYY'),
    tz: dayjs().format('zZ')
}

interface DayItemDataType {
    key: string
    value: number
    values?: number[]
}

export const Day: FC = (): JSX.Element => {
    const [dayData, setDayData] = useState<DayItemDataType[]>([...Array(24)].map((_, idx) => {
        const formatDigit = idx.toString().padStart(2, '0')
        return {
            key: formatDigit + ":00",
            value: idx
        }
    }))

    const handleCellDrop = (item: any, toRowIndex: number, toColIndex: number) => {
        setDayData((prevData) => {
            const updatedData = [...prevData]
            const draggedItem = updatedData[item.rowIndex]
            const targetItem = updatedData[toRowIndex]
        
            // Swap the values only for the second column
            if (item.colIndex === 1 && toColIndex === 1) {
              const tempValue = draggedItem.value
              draggedItem.value = targetItem.value
              targetItem.value = tempValue
            }
        
            return updatedData
          })
          /* setDayData((prevData) => {
            const updatedData = [...prevData];
            const draggedItem = updatedData[item.rowIndex];
            const targetItem = updatedData[toRowIndex];
        
            // Check if both the source and target columns are in the second column
            if (item.colIndex === 1 && toColIndex === 1) {
              // If the target cell already has values, add the dragged value
              if (targetItem.values) {
                targetItem.values.push(draggedItem.value);
              } else {
                // If the target cell is empty, create an array with the dragged value
                targetItem.values = [draggedItem.value];
              }
        
              // If the source cell had only one value, make it empty
              if (draggedItem.values && draggedItem.values.length === 1) {
                draggedItem.values = undefined;
              }
            }
        console.log('update: ', updatedData)
            return updatedData;
          }) */

        console.log(`Cell Dropped from (${item.rowIndex}, ${item.colIndex}) to (${toRowIndex}, ${toColIndex})`)
    }

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
            key: "key",
            render: (_: any, record: any, index: number) => (
                <DraggableCell 
                    data={record.value}
                    rowIndex={index}
                    colIndex={1}
                    onCellDrop={handleCellDrop}
                />
            ),
        }
    ]

    return (
        <DndProvider backend={HTML5Backend}>
            <Table 
                title={() => <Title level={3}>Day</Title>}
                columns={columns}
                dataSource={dayData}
                pagination={false}
                bordered
            />
        </DndProvider>
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