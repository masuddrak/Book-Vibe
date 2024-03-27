import { useEffect } from "react";
import { useState } from "react";
import { getLocalReadItems } from "../uitlity/utility";
import { Bar, BarChart, CartesianGrid, Cell, Tooltip, XAxis, YAxis } from "recharts";

const PagesToRead = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const myLocalReadData = getLocalReadItems()
        setData(myLocalReadData)
    }, [])
    // console.log(data)
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    return (
        <div className="w-full flex justify-center items-center mt-8">
            <BarChart
                width={800}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis dataKey="totalPages" />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} />
                    ))}
                </Bar>
                <Tooltip></Tooltip>
            </BarChart>


        </div>
    );
};

export default PagesToRead;