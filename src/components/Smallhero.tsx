interface SmallHeroProp{
    text:string,
    marginTop:string,
    marginBottom:string
}

const SmallHero:React.FC<SmallHeroProp> = ({text,marginBottom,marginTop}) => {
    return ( 
        <h2 className={`text-3xl uppercase font-medium mt-${marginTop} mb-${marginBottom}`}>{text}</h2>
     );
}
 
export default SmallHero;