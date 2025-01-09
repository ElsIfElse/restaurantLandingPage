interface SmallHeroProp{
    text:string,
}

const SmallHero:React.FC<SmallHeroProp> = ({text}) => {
    return ( 
        <h2 /* className={`text-3xl uppercase font-medium mt-${marginTop} mb-${marginBottom}`} */ 
        className="
        text-xl uppercase font-medium mt-10 mb-6
        lg:text-3xl lg:mt-10 lg:mb-6"
        >{text}</h2>
     );
}
 
export default SmallHero;