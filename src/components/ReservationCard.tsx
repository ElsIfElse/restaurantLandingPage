import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Calendar } from "@/components/ui/calendar"
import { Button } from "./ui/button";



const ReservationCard = () => {
    const [date,setDate] = useState<Date>()

    return ( 
        <Dialog> 
            <DialogTrigger 
            // className="bg-[#493628] text-white text-xl px-5 py-1 mt-5 hover:outline-none border-none hover:border-none hover:bg-opacity-95"
                className="bg-[#493628] text-white text-md lg:text-xl px-5 py-1 hover:outline-none border-none hover:border-none hover:bg-opacity-95"
            
            >Reserve</DialogTrigger>
            <DialogContent className="w-[100%]">
                <DialogHeader className="flex w-[100%] items-center">
                    <DialogTitle className="text-2xl mb-5">Choose a day</DialogTitle>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border border-opacity-20 border-black"/>
                </DialogHeader>
                <DialogDescription className="flex flex-col w-full items-center justify-between">
                    <div className="flex flex-col h-[90px] items-center justify-between">
                        <input className="bg-white border w-[230px] text-lg rounded-sm border-black p-1" type="text" placeholder="Name"/>
                        <input className="bg-white border w-[230px] text-lg rounded-sm border-black p-1" type="number" placeholder="Number of people"/>
                    </div>
                    <Button
                    // className="bg-[#493628] text-xl w-[120px]"
                        className="
                        bg-[#493628] mt-2 text-md
                         lg:text-md lf:font-bold lg:mt-4"
                    >Reserve</Button>
                </DialogDescription>
            </DialogContent>
        </Dialog>
     );
}
 
export default ReservationCard;