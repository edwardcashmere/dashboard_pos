import { Doughnut } from "react-chartjs-2";
const DoughNutChart = () => {
    return (
        <>
            <h2 className="flex justify-center items-center text-4xl py-2 text-blue-600">CashFlow BreakDown</h2>
            <Doughnut
                    className="bg-white"
                    data={{
                      labels:["Purchase","Revenue", "Expense"],
                      datasets:[{
                        label: "Cash Received",
                        backgroundColor:["#483d8b","#008080",""],
                        data: [200000, 500000,100000 ]
                      }]
                    }}
                    options={{
                      title:{
                        display:true,
                        text: "Breakdown of Cashflow Received",
                        fontSize:20
                      },
                      legend:{
                        display:true,
                        position: "right"
                      }
                    }}
                    
                    />

        </>
    )
}

export default DoughNutChart
