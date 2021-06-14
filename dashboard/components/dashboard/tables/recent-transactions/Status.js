const Status = ({value}) => {

    if(value === "completed"){
        return (
            <div className="flex justify-center rounded-sm bg-green-500 p-1 w-20 text-xm">
                {value}
            </div>
        )
          
    }
    if(value === "pending"){
        return (
            <div className="flex justify-center rounded-sm bg-yellow-500 p-1 w-20 text-xm">
                {value}
            </div>
        )
          
    }
    if(value === "failed"){
        return (
            <div className="flex justify-center rounded-sm bg-red-500 p-1 w-20 text-xm">
                {value}
            </div>
        )
          
    }

   
}

export default Status
