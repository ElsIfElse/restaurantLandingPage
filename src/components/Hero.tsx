import {motion} from 'framer-motion'

const Hero = () => {
    return ( 
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        /* className="flex flex-col items-center" */
            className='flex flex-col items-center mb-4'
        >
            <h1 /* className=" text-5xl tracking-widest mb-7 font-Charm " */
            className='text-4xl'
            > [Dine at Mine]</h1>
            <span className="text-sm filter contrast-200 saturate-150">⭐⭐⭐⭐⭐</span>
        </motion.div>
     );
}
 
export default Hero;