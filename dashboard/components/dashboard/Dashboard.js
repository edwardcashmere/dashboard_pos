import Nav from "./Nav";
import {
  ChartBarIcon,
  ReceiptRefundIcon,
  ReplyIcon,
  TrendingUpIcon
} from "@heroicons/react/solid";
import {} from "@heroicons/react/outline";
import SideNav from "./SideNav";
import Card from "./Card";
import {Line, Bar, Doughnut} from "react-chartjs-2";
const Dashboard = () => {
  return (
    <div>
      {/* nav */}
      <Nav />

      {/* side nav */}

      {/* body or main */}
      <div className="flex bg-gray-100">
        <SideNav />
        <div className="w-full">
          <div className="flex justify-between">
            <div className="flex text-3xl text-blue-500 ml-2 mt-2 p-4">
              <h2>Welcome Edwin</h2>
            </div>
            <div className="flex mt-2 mr-4 p-1 mx text-white space-x-2  justify-center items-center">
              <div className="bg-gray-400 m-0  flex rounded-t-full rounded-b-full text-sm">
                <button className=" hover:bg-gray-500 hover:rounded-tl-full hover:rounded-bl-full py-1 px-3">
                  Today
                </button>
                <button className="hover:bg-gray-500 px-3 py-1">
                  Last 7 days
                </button>
                <button className="hover:bg-gray-500 px-3 py-1">
                  This month
                </button>
                <button className="bg-gray-500 rounded-tr-full rounded-br-full px-3 py-1">
                  This Year
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between mx-4">
            {/* cards */}
            <Card Icon={ChartBarIcon} title="Revenue" amount={3000} />
            <Card Icon={ReceiptRefundIcon} title="Sale Return" amount={20000} />
            <Card Icon={ReplyIcon} amount={2500} title="Purchase Return" />
            <Card Icon={TrendingUpIcon} amount={10000} title="Profit" />
          </div>
          <div className="flex my-5 mx-7 space-x-5">
              {/* cashflow cahrt and donut */}
              <div className="h-72  w-3/5 bg-white  rounded-sm">
                    {/* cashflow line chart */}
                    <Line className="bg-white px-2 pb-2 pt-8"
                        options={{
                        title:{
                            display:true,
                            text:"CashFlow",
                            fontSize:"30"
                        }
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
              </div>
              <div className="w-2/5 bg-white  rounded-sm h-72">
                    {/* cashflow breakdown doughnut chart */}
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
                        text: 'Breakdown of Cashflow Received',
                        fontSize:20
                      },
                      legend:{
                        display:true,
                        position: "right"
                      }
                    }}
                    
                    />
              </div>
              
          </div>
          <div>{/* yearly report */}</div>
          <div>{/* yearly transaction table and m0nthly best seller */}</div>
          <div>
            {/* best seller yealry by quantity table and best seller yearly by price table */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
