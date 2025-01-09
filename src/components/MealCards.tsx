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
        /* className="lg:flex-1 lg:flex lg:flex-col lg:items-center lg:justify-center lg:mx-2 lg:shadow-md" */
            className="flex-1 flex flex-col items-center justify-center mx-2 shadow-md w-[100%] mb-5
                        lg:flex-1 lg:flex lg:flex-col lg:items-center lg:justify-center lg:mx-2 lg:shadow-md"
        >
            <Card className="flex flex-col justify-center items-center w-[100%]
                            lg:h-[400px]">
                <CardHeader>
                    <CardTitle className="flex flex-col items-start justify-center text-2xl w-[100%]">
                        {dishName}
                    </CardTitle>
                    <CardDescription className="flex flex-col items-center justify-center text-md w-[100%]">
                        {dishDescription}
                    </CardDescription>
                </CardHeader>
                <CardContent className="w-[400px] h-[300px] flex items-center justify-center overflow-hidden
                                        lg:w-[100%] lg:h-[200px]">
                    <img className="rounded-md object-cover h-full w-full xl:object-cover" src={dishPhoto}/>
                </CardContent>
                <CardFooter className="text-xl">
                    {dishPrice}
                </CardFooter>
            </Card>
        </motion.div>
     );
}
 
export default MealCards;