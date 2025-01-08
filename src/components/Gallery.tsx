import { useRef } from "react";
import SmallHero from "./Smallhero";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useInView,motion } from "framer-motion";




const Gallery = () => {

  const ref1 = useRef(null)
  const isItInView = useInView(ref1,{once:true})

    return ( 
        <motion.div ref={ref1} id="gallery" className="flex flex-col items-center pb-[100px] pt-8 px-[310px] w-full bg-[#AB886D] border-t-2 border-black"
          initial={{opacity:0}}
          animate={isItInView ? {opacity:1} : {opacity:0}}
          transition={{duration:1,delay:0.2}}
        >
            <SmallHero text="- Gallery -" marginBottom="7" marginTop="0"/>
            <Carousel className="rounded-md w-[1700px]">
                <CarouselContent className="h-[400px] w-full">

                  <CarouselItem className=" basis-1/3">
                    <img className="object-cover h-full w-full" src="https://www.foodandwine.com/thmb/ZJ1bVjGJuzucUJt9lF6QvjwI6Vc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wyoming-old-faitherful-inn-coziest-restaurants-FT-SS1117-fdd6e5db03ee4aff9cd815431ddff209.jpg" alt="" />
                    </CarouselItem>
 
                  <CarouselItem className="basis-1/3">
                    <img className="object-cover h-full w-full" src="https://www.foodandwine.com/thmb/PNBt8JtkI6NdBSghSOjThYBOTKA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/alabama-springhouse-coziest-restaurants-FT-SS1117-c44107e15dda4895ac20ce47c530feac.jpg" alt="" />
                    </CarouselItem>

                  <CarouselItem className="basis-1/3">
                    <img className="object-cover h-full w-full" src="https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2023/10/beacon_restaurants-2.jpg" alt="" />
                    </CarouselItem>

                    <CarouselItem className=" basis-1/3">
                    <img className="object-cover h-full w-full" src="https://assets.vogue.com/photos/6616a687e7d14f98f00a988b/4:3/w_3412,h_2559,c_limit/ezgif-2-9ee2230662.jpeg" alt="" />
                    </CarouselItem>
 
                  <CarouselItem className="basis-1/3">
                    <img className="object-cover h-full w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuayUxlWgfvXuNBJYR9yhL8qaiJo4Tw5q-Qg&s" alt="" />
                    </CarouselItem>

                  <CarouselItem className="basis-1/3">
                    <img className="object-cover h-full w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt-y74QKi-H-aOBULzvYXpBpwt0MCo7oeKQw&s" alt="" />
                    </CarouselItem>

                    <CarouselItem className="basis-1/3">
                    <img className="object-cover h-full w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuayUxlWgfvXuNBJYR9yhL8qaiJo4Tw5q-Qg&s" alt="" />
                    </CarouselItem>

                  <CarouselItem className="basis-1/3">
                    <img className="object-cover h-full w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt-y74QKi-H-aOBULzvYXpBpwt0MCo7oeKQw&s" alt="" />
                    </CarouselItem>

                    
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </motion.div>
     );
}
 
export default Gallery;