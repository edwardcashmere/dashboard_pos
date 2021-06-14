import {useMemo,useState} from "react";
import Table from "../Table";
import PurchaseStatus from "./PurchaseStatus";

const Purchase = () => {
    const [data,setData]=useState([
        {
            date: "25-5-2020",
            reference: "cr-3535-24424",
            supplier: "Zuri Omondi",
            status:"received",
            total: 5000
        },
        {
            date: "19-5-2020",
            reference: "bts-3535-24424",
            supplier: "Steph Curry",
            status: "not sent",
            total: 2500
        },
        {
            date: "05-5-2020",
            reference: "sp-3535-24424",
            supplier: "Edwin Omondi",
            status: "received",
            total: 5000
        },
        {
            date: "15-5-2020",
            reference: "sop-3535-24424",
            supplier: "Lebron james",
            status: "pending",
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
                Header: "Supplier",
                accessor: "supplier"
            },
            {
                Header: "Status",
                accessor: "status",
                Cell: ({cell:{value}}) => <PurchaseStatus value={value}/>
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

export default Purchase
