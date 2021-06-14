import {useMemo,useState} from "react";
import Table from "../Table"

const Sale = () => {
    const [data,setData]=useState([
        {
            date: "25-5-2020",
            reference: "cr-3535-24424",
            amount: 5000,
            methodOfPayment: "card"
        },
        {
            date: "19-5-2020",
            reference: "bts-3535-24424",
            amount: 2500,
            methodOfPayment: "mpesa"
        },
        {
            date: "05-5-2020",
            reference: "sp-3535-24424",
            amount: 5000,
            methodOfPayment: "paypal"
        },
        {
            date: "15-5-2020",
            reference: "sop-3535-24424",
            amount: 7500,
            methodOfPayment: "card",
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
                Header: "Amount",
                accessor: "amount"
            },
            {
                Header: "Paid By",
                accessor: "methodOfPayment"
            }

        ]
    )

    return (
        <Table columns={columns} data={data}/>
    )
}

export default Sale
