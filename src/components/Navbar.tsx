import Hr from "./Hr";
import { Button } from "./ui/button";
import {motion} from 'framer-motion'
  

const Navbar = () => {
    return ( 
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.4,delay:0.2}}
      /*className="sticky top-0 z-20 flex flex-col items-center w-screen bg-[#493628] border-2 border-black"*/
      className="
      sticky top-0 z-20 flex flex-col items-center w-[100%] bg-[#493628] border-y border-black mb-8
      lg:w-screen lg:border-y-2 
      ">
        <Hr opa="100"/>
        <div /* className="flex-row flex px-5 py-3 justify-center w-[1920px] max-w-[1920px]" */
            className="
            flex-row flex px-5 py-3 justify-center w-[100%] max-w-[100%]
            2xl:w-[1920px] 2xl:max-w-[1920px]
            "
        >
          <div /* className="flex flex-row w-[1920px] justify-around text-white" */
            className="flex flex-row w-[100%] justify-around text-white"
          >
            {
              screenX < 768 ? (<Button className="hover:outline-none hover:border-none text-sm tracking-tight hover:bg-transparent" variant={'ghost'} size={"sm"}> <a className="hover:text-stone-300" href="#restaurants">Restaurants</a> </Button>)
              : (<Button className="hover:outline-none hover:border-none text-xl tracking-wide hover:bg-transparent" variant={'ghost'}> <a className="hover:text-stone-300" href="#restaurants">Restaurants</a> </Button>)
            }
            {
              screenX < 768 ? (<Button className="hover:outline-none hover:border-none text-sm tracking-tight hover:bg-transparent" variant={'ghost'} size={"sm"}> <a className="hover:text-stone-300" href="#mission">Our Mission</a> </Button>)
              :
              (<Button className="hover:outline-none hover:border-none text-xl tracking-wide hover:bg-transparent" variant={'ghost'}> <a className="hover:text-stone-300" href="#mission">Our Mission</a> </Button>)
            }
            {
              screenX < 768 ? (<Button className="hover:outline-none hover:border-none text-sm tracking-tight hover:bg-transparent" variant={'ghost'} size={"sm"}> <a className="hover:text-stone-300" href="#menu">Menu</a> </Button>)
              :
              (<Button className="hover:outline-none hover:border-none text-xl tracking-wide hover:bg-transparent" variant={'ghost'}> <a className="hover:text-stone-300" href="#menu">Menu</a> </Button>)
            }
            {
              screenX < 768 ? (<Button className="hover:outline-none hover:border-none text-sm tracking-tight hover:bg-transparent" variant={'ghost'} size={"sm"}> <a className="hover:text-stone-300" href="#gallery">Gallery</a> </Button>)
              :
              (<Button className="hover:outline-none hover:border-none text-xl tracking-wide hover:bg-transparent" variant={'ghost'}> <a className="hover:text-stone-300" href="#gallery">Gallery</a> </Button>)
            }
          </div>
        </div>
        <Hr opa="100"/>
      </motion.div>
     );
}
 
export default Navbar;