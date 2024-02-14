import { FC } from "react"
import { useDrag, useDrop } from "react-dnd"
import { Card } from "antd"

interface DraggableCellProps {
    data: string | number
    rowIndex: number
    colIndex: number
    onCellDrop: (item: CellDropItem, toRowIndex: number, toColIndex: number) => void
}

interface CellDropItem {
    rowIndex: number
    colIndex: number
    data: string | number
}

const DraggableCell: FC<DraggableCellProps> = ({ data, rowIndex, colIndex, onCellDrop}) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'cell',
        item: { rowIndex, colIndex, data },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const [, drop] = useDrop({
        accept: 'cell',
        drop: (item: CellDropItem) => onCellDrop(item, rowIndex, colIndex),
    })

    return (
        <Card
            ref={ (node) => drag(drop(node)) }
            style={{ opacity: isDragging ? 0.5 : 1 }}
        >
            { data }
        </Card>
    )
}

export default DraggableCell