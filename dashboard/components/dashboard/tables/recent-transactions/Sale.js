import {useMemo,useState} from "react";
import Table from "../Table";
import Status from "./Status";

const Sale = () => {
    const [data,setData]=useState([
        {
            date: "25-5-2020",
            reference: "cr-3535-24424",
            customer: "Zuri Omondi",
            status:"completed",
            total: 5000
        },
        {
            date: "19-5-2020",
            reference: "bts-3535-24424",
            customer: "Steph Curry",
            status: "completed",
            total: 2500
        },
        {
            date: "05-5-2020",
            reference: "sp-3535-24424",
            customer: "Edwin Omondi",
            status: "failed",
            total: 5000
        },
        {
            date: "15-5-2020",
            reference: "sop-3535-24424",
            customer: "Lebron james",
            status: "completed",
            total: 10000,
        }

    ])

    const columns = useMemo(
        ()=>
        [
            {
                Header: "Date",
                accessor: "date"
            },
            {
                Header: "Reference",
                accessor: "reference"
            },
            {
                Header: "Customer",
                accessor: "customer"
            },
            {
                Header: "Status",
                accessor: "status",
                Cell: ({cell:{value}}) => <Status value={value}/>
            },
            {
                Header: "Grand Total",
                accessor: "total"
            }

        ]
    )

    return (
        <Table columns={columns} data={data}/>
    )
}

export default Sale
