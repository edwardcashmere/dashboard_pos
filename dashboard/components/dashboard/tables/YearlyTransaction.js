import {useState,useMemo} from "react";

import Sale from "./recent-transactions/Sale";
import Payment from "./recent-transactions/Payment";
import Quotations from "./recent-transactions/Quotations";
import Purchase from "./recent-transactions/Purchase"

const YearlyTransaction = () => {
    const [component, setComponent] =useState("Payment")
    return (
        <>
            <div className="space-x-12 pt-4 px-4 pb-1 text-blue-600">
                <button onClick={()=>setComponent("Sale")} className="focus:border-b-2 border-blue-600 focus:outline-none w-24">Sale</button>
                <button onClick={()=> setComponent("Purchase")} className="focus:border-b-2 border-blue-600 focus:outline-none w-24">Purchase</button>
                <button onClick={()=> setComponent("Quotation")} className="focus:border-b-2 border-blue-600 focus:outline-none w-24">Quotation</button>
                <button onClick={()=> setComponent("Payment")} className="focus:border-b-2 border-blue-600 focus:outline-none w-24">Payment</button>

            </div>
            {component === "Payment" ? <Payment/>:component=== "Sale"? <Sale/>: component ==="Purchase"? <Purchase/>:component === "Quotation"? <Quotations/>:""}
        </>
    )
}

export default YearlyTransaction
