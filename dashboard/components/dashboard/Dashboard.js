import Nav from "./Nav";
import LineChart from "./LineChart";
import DoughNutChart from "./DoughNutChart";
import BarChart from "./BarChart";
import YearlyTransaction from "./tables/YearlyTransaction";
import BestSeller from "./tables/bestseller/BestSeller";
import {
  ChartBarIcon,
  ReceiptRefundIcon,
  ReplyIcon,
  TrendingUpIcon
} from "@heroicons/react/solid";
import SideNav from "./SideNav";
import Layout from "../Layout"
import Card from "./Card";
import {Line, Bar, Doughnut} from "react-chartjs-2";
const Dashboard = () => {
  return (
    <>
      
      <Layout
       content={(
        <div className="w-full flex flex-col flex-shrink">
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
          <div>
           <div className="flex justify-between mx-4">
            {/* cards */}
            <Card Icon={ChartBarIcon} title="Revenue" amount={3000} />
            <Card Icon={ReceiptRefundIcon} title="Sale Return" amount={20000} />
            <Card Icon={ReplyIcon} amount={2500} title="Purchase Return" />
            <Card Icon={TrendingUpIcon} amount={10000} title="Profit" />
          </div>
           

          </div>
          <div className="flex my-5 mx-7 space-x-5">
              {/* cashflow cahrt and donut */}
              <div className="w-3/5 bg-white  rounded-sm">
                    {/* cashflow line chart */}
                    <LineChart/>
              </div>
              <div className="w-2/5 bg-white  rounded-sm">
                    {/* cashflow breakdown doughnut chart */}
                    <DoughNutChart/>
              </div>
              
          </div>
          <div className="bg-white rounded-sm m-8 p-4">
            {/* yearly report */}
            <BarChart/>
          </div>
          <div className="flex m-6 ">{/* yearly transaction table and m0nthly best seller */}
           {/* table one yearly transction */}
           <div className="bg-white h-80 rounded-sm w-7/12 m-2">
              <div className="flex m-2 justify-between">
              <h2 className="  text-gray-600">Recent Transaction</h2>
              <p className=" p-1 flex justify-center items-center w-13 h-6 rounded-sm text-sm text-white bg-blue-600">latest 5</p>
              </div>
             <YearlyTransaction/>
           </div>
           {/* table two monthly best seller  */}
           <div className="bg-white h-80 w-5/12 my-2 mx-8">
            <div className="flex justify-between p-2 mx-2 my-4" >
              <h2 className="  text-gray-600">Best Seller( May)</h2>
              <p className=" p-1 flex justify-center items-center w-13 h-6 rounded-sm text-sm text-white bg-blue-600">latest 5</p>
              </div>

                <BestSeller/>

           </div>
          </div>
          <div className="flex m-6">
            {/* best seller yealry by quantity table and best seller yearly by price table */}
            {/* table one best seller yearly by quantity  */}
            <div className="bg-white h-80 w-7/12 my-2 mx-8">
            <div className="flex justify-between p-2 mx-2 my-4" >
              <h2 className="  text-gray-600">Best Seller For Year by Quantity</h2>
              <p className=" p-1 flex justify-center items-center w-13 h-6 rounded-sm text-sm text-white bg-blue-600">latest 5</p>
              </div>

                <BestSeller/>

           </div>


            {/* best seller yearly by price */}
            <div className="bg-white h-80 w-5/12 my-2 mx-8">
            <div className="flex justify-between p-2 mx-2 my-4" >
              <h2 className="  text-gray-600">Best Seller for the year by Price</h2>
              <p className=" p-1 flex justify-center items-center w-13 h-6 rounded-sm text-sm text-white bg-blue-600">latest 5</p>
              </div>

                <BestSeller/>

           </div>

          </div>
        </div>


       )}
      
      />
    </>
  );
};

export default Dashboard;
