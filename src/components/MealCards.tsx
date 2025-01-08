import { useRef } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import {motion,useInView} from 'framer-motion'
interface MealCardProps{
    dishName:string,
    dishDescription:string,
    dishPhoto:string,
    dishPrice:string
}




const MealCards:React.FC<MealCardProps> = ({dishName,dishDescription,dishPhoto,dishPrice}) => {

    const ref = useRef(null)
    const isInView = useInView(ref,{once:true})

    return ( 
        <motion.div
        ref={ref}
        initial={{opacity:0,transform:'translateX(100px)'}}
        animate={isInView ? {opacity:1,transform:'translateX(0px)'} : {opacity:0,transform:'translateX(100px)'}}
        transition={{duration:0.4,delay:0.2}}
        className="flex-1 flex flex-col items-center justify-center mx-2 shadow-md">
            <Card className="">
                <CardHeader>
                    <CardTitle>
                        {dishName}
                    </CardTitle>
                    <CardDescription>
                        {dishDescription}
                    </CardDescription>
                </CardHeader>
                <CardContent className="w-[400px] h-[300px] overflow-hidden">
                    <img className="rounded-md object-cover h-full w-full" src={dishPhoto}/>
                </CardContent>
                <CardFooter className="text-xl">
                    {dishPrice}
                </CardFooter>
            </Card>
        </motion.div>
     );
}
 
export default MealCards;