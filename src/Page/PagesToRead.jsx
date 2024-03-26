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
    console.log(data)
    return (
        <div className="w-full flex justify-center">
        
            <BarChart
               width={500}
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
                <XAxis dataKey="totalPages" />
                <YAxis  dataKey="yearOfPublishing" />
                <Bar dataKey="yearOfPublishing"  fill="#8884d8"    label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} />
                    ))}
                </Bar>
                <Bar dataKey="totalPages"  fill="#8884d8"    label={{ position: 'top' }}>
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