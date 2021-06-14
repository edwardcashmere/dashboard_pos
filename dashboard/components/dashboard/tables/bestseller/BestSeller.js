import {useMemo,useState} from "react";
import Table from "../Table";

const BestSeller = () => {
    const [data,setData]=useState([
        {
            sl: "123",
            product_details: `baby powder`,
            quantity: "13031",
        },
        {
            sl: "455",
            product_details: "phones",
            quantity: "313",
        },
        {
            sl: "654",
            product_details: "Games",
            quantity: "3321",
        },
        {
            sl: "443",
            product_details: "Chicken",
            quantity: "1311",
        }

    ])

    const columns = useMemo(
        ()=>
        [
            {
                Header: "SL No",
                accessor: "sl"
            },
            {
                Header: "Product Details",
                accessor: "product_details"
            },
            {
                Header: "Qty",
                accessor: "quantity"
            }

        ]
    )

    return (
        <Table columns={columns} data={data}/>
    )
}

export default BestSeller;
