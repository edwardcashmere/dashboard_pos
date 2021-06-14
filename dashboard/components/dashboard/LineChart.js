import {Line } from "react-chartjs-2"
const LineChart = () => {
    return (
        <>
            <h2 className="flex justify-center items-center text-4xl py-2 text-blue-600">CashFlow</h2>
                <Line className="bg-white px-2 pb-2 pt-8"
                    options={{
                
                    }}
                    width={50}
                    height={30}
                        data={{
                        labels:["January","February","March","April","May","June","July","August","September","October","November","December"].map(a=>a),
                        datasets:[{
                            data:[20000,50000,60000,50000,150000,40000,100000,80000,60000,33000,55000,45000].map(b=>b),
                            label:'Payment Received',
                            borderColor:'#3333ff',
                            fill:true

                        },{
                            data:[22000,5000,33000,20000,50000,4000,10000,82000,61000,31000,30000,20000].map(b=>b),
                            label:'Payment Sent',
                            borderColor:'green',
                            fill:true

                        }]
                    }}/>

        </>
    )
}

export default LineChart
