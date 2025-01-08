import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import ReservationCard from "./ReservationCard";
import{motion} from 'framer-motion'
  


const RestaurantsSection = () => {
    return ( 
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.4,delay:0.2}}
        className="w-[100%]"
        >
            <Carousel id="restaurants">
                <CarouselContent>
                  <CarouselItem>
                  <Card className="bg-transparent border-none">
                        <CardHeader>
                          <CardTitle className="text-xl bold">New York</CardTitle>
                          <CardDescription>A vibrant New York restaurant featuring contemporary American cuisine with global flavors and a stylish atmosphere.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-row justify-center w-full h-full">
                          <img className="w-full h-full object-fill rounded-lg " src="https://orders.co/static/99a59eec0735fca313bf2b93349bd5d6/5715c/Italian-Restaurant-Design-Creating-an-Inviting-Ambiance.webp" alt="" />
                        </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card className="bg-transparent border-none h-full w-full">
                        <CardHeader>
                          <CardTitle className="text-xl bold">Oregon</CardTitle>
                          <CardDescription>A cozy Oregon restaurant showcasing fresh, local ingredients with a creative twist on Pacific Northwest cuisine in a relaxed, rustic setting.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-row justify-center w-full h-full">
                          <img className="w-full h-full object-cover" src="https://restaurantnoi.hk/wp-content/uploads/2024/05/noi-restaurant-hong-kong-0.jpg" alt="" />
                        </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                  <Card className="bg-transparent border-none h-full w-full">
                        <CardHeader>
                          <CardTitle className="text-xl bold">Atlanta</CardTitle>
                          <CardDescription>A trendy Atlanta restaurant serving Southern-inspired dishes with a modern flair, set in a lively and welcoming atmosphere.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-row justify-center w-full h-full">
                          <img className="w-full h-full object-cover" src="https://fruitbasket.limepack.com/blog/wp-content/uploads/2024/01/pexels-quark-studio-3201921.jpg" alt="" />
                        </CardContent>
                    </Card>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className="flex flex-col w-full items-center mt-5 mb-5">
              {/* <Button className="bg-[#493628] text-xl rounded-xl mt-5 px-10 py-5 hover:bg-opacity-80">Reserve</Button> */}
              <ReservationCard/>
            </div>
        </motion.div>
     );
}
 
export default RestaurantsSection;