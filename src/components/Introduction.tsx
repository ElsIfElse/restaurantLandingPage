import { useRef } from "react";
import SmallHero from "./Smallhero";
import { useInView,motion } from "framer-motion";

const Introduction = () => {

    const ref1 = useRef(null)    
    const ref2 = useRef(null)
    const ref3 = useRef(null)  
    
    const isInView1 = useInView(ref1,{once:true})    
    const isInView2 = useInView(ref2,{once:true})
    const isInView3 = useInView(ref3,{once:true})    

    return ( 
        <div id="mission" className="flex flex-col items-center w-full bg-[#AB886D] pt-8 pb-[105px] mt-10 mb-10 border-2 border-black rounded-xl">
            <SmallHero marginTop="0" marginBottom="[100px]" text="- Our Mission -" />
            <div className="flex flex-row w-full items-start justify-center pb-12 pt-12 ">
                <div className="flex flex-row justify-start w-[600px] px-[50px] -translate-y-[100px]">
                    <motion.h2
                    ref={ref1} className="text-3xl font-light tracking-wide"
                    initial={{opacity:0,transform:'translateX(100px)'}}
                    animate={isInView1 ? {opacity:1,transform:'translateX(0)'} : {opacity:0,transform:'translateX(100px)'}}
                    transition={{duration:0.4,delay:0.2}}
                    
                    >
                    At Dine in Mine, we’re dedicated to creating moments worth savoring. We believe that each dish tells a story, crafted from fresh, locally-sourced ingredients and inspired by flavors from around the world. Every meal we serve is an invitation to pause, connect, and enjoy life’s simple pleasures.
                    </motion.h2>
                </div>
                <div className="flex flex-row justify-start w-[600px] px-[50px]">
                    <motion.h2
                    ref={ref2} className="text-3xl font-light tracking-wide"
                    initial={{opacity:0,transform:'translateX(100px)'}}
                    animate={isInView2 ? {opacity:1,transform:'translateX(0)'} : {opacity:0,transform:'translateX(100px)'}}
                    transition={{duration:0.4,delay:0.2}}
                    
                    >
                    Our commitment to sustainability runs through everything we do, from reducing waste to supporting our community’s farmers and artisans. We aim to make choices that care for our planet while elevating the quality and taste of every bite.
                    </motion.h2>
                </div>
                <div className="flex flex-row justify-start w-[600px] px-[50px] translate-y-[100px]">
                    <motion.h2
                    ref={ref3} className="text-3xl font-light tracking-wide"
                    initial={{opacity:0,transform:'translateX(100px)'}}
                    animate={isInView3 ? {opacity:1,transform:'translateX(0)'} : {opacity:0,transform:'translateX(100px)'}}
                    transition={{duration:0.4,delay:0.4}}
                    
                    >
                    Above all, we strive to make every guest feel at home. With a welcoming atmosphere and attentive service, Dine in Mine is a place where friends, family, and flavors come together. We look forward to being part of your story and creating memorable dining experiences that leave a lasting impression.
                    </motion.h2>
                </div>
            </div>  
        </div>
     );
}
 
export default Introduction;