import CountUp from "react-countup";
const Card = ({Icon, amount,title}) => {
    return (
        <div className="bg-white m-3 w-80 h-48 flex flex-col justify-center items-center rounded-sm">
            <Icon className="h-12 text-blue-500 mb-2"/>
            <p className="text-lg mb-4 text-gray-600">{title}</p>
            <p className="text-3xl font-light text-gray-600"><CountUp start={0} end={amount} duration={2.5} separator=","/></p>
        </div>
    )
}

export default Card
