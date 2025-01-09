import {motion} from 'framer-motion'

const Hero = () => {
    return ( 
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        /* className="flex flex-col items-center" */
            className='
            flex flex-col items-center mb-4
            lg:flex-col lg:mb-0 lg:mt-2
            '
        >
            <h1 /* className=" text-5xl tracking-widest mb-7 font-Charm " */
            className='
            text-4xl font-Charm
            lg:text-5xl lg:tracking-widest lg:mb-7
            '
            > [Dine at Mine]</h1>
            <span className="
            text-sm filter contrast-200 saturate-150
            lg:translate-x-[220px] lg:-translate-y-[70px]
            ">⭐⭐⭐⭐⭐</span>          
        </motion.div>
     );
}
 
// <h1 className=" text-5xl tracking-widest mb-7 font-Charm "> [Dine at Mine]</h1>
// <span className="text-sm filter contrast-200 saturate-150 -translate-y-[70px] translate-x-[220px]">⭐⭐⭐⭐⭐</span>
export default Hero;