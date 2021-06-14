import { Bar } from "react-chartjs-2"
const BarChart = () => {
    return (
 
        <>
             <h2 className="flex justify-center items-center text-4xl py-2 text-blue-600">CashFlow</h2>
                <Bar className="bg-white px-2 pb-2 pt-8"
    
                        data={{
                        labels:["January","February","March","April","May","June","July","August","September","October","November","December"].map(a=>a),
                        datasets:[{
                            data:[2000,50000,6000,5000,150000,40000,10000,8000,60000,33000,55000,45000].map(b=>b),
                            label:'Payment Received',
                            backgroundColor:'#3333ff',
                            fill:true

                        },{
                            data:[2200,5000,33000,2000,50000,4000,10000,82000,61000,31000,30000,20000].map(b=>b),
                            label:'Payment Sent',
                            backgroundColor:'green',
                            fill:true

                        }]
                    }}/>
       
            
        </>
    )
}

export default BarChart
