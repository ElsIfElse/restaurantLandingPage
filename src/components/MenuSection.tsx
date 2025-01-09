import MealCards from "./MealCards";
import MiniHero from "./MiniHero";

interface DishTypeProp{
    typeName:string,

    item1Title:string    
    item2Title:string
    item3Title:string
    item4Title:string

    item1Description:string    
    item2Description:string    
    item3Description:string
    item4Description:string    

    item1Photo:string    
    item2Photo:string
    item3Photo:string
    item4Photo:string

    item1Price:string,
    item2Price:string,
    item3Price:string,
    item4Price:string

}

const MenuSection:React.FC<DishTypeProp> = ({
    typeName,

    item1Title,
    item2Title,
    item3Title,
    item4Title,

    item1Description,
    item2Description,
    item3Description,
    item4Description,

    item1Photo,
    item2Photo,
    item3Photo,
    item4Photo,

    item1Price,
    item2Price,
    item3Price,
    item4Price
}) => {
    return ( 
        <div 
        /* className="lg:flex lg:flex-col lg:items-center lg:w-[1920px] lg:mt-5" */
            className="flex flex-col items-center justify-center w-[100%] mt-5
                        lg:flex lg:flex-col lg:items-center lg:w-full lg:mt-5
                        xl:flex xl:flex-col xl:items-center xl:w-full xl:mt-12 xl:px-5"

        >
            <div 
            /* className="lg:flex lg:flex-row lg:justify-start lg:w-full lg:ml-7" */
                className="flex flex-col items-center justify-center w-[100%]
                            lg:flex lg:flex-row lg:justify-start lg:w-full lg:ml-7"
            >
                <MiniHero text={typeName}/>
            </div>
            <div 
            /* className="lg:flex lg:flex-row lg:justify-between lg:w-[1920px] lg:mt-5" */
                className="flex flex-col items-center justify-center w-[100%] mt-5
                            lg:flex lg:flex-row lg:justify-between lg:w-full lg:mt-5"
            >
                <MealCards dishName={item1Title} dishDescription={item1Description} dishPhoto={item1Photo} dishPrice={`-${item1Price}`}/>
                <MealCards dishName={item2Title} dishDescription={item2Description} dishPhoto={item2Photo} dishPrice={`-${item2Price}`}/>
                <MealCards dishName={item3Title} dishDescription={item3Description} dishPhoto={item3Photo} dishPrice={`-${item3Price}`}/>
                <MealCards dishName={item4Title} dishDescription={item4Description} dishPhoto={item4Photo} dishPrice={`-${item4Price}`}/>
            </div>
        </div>
     );
}
 
export default MenuSection;