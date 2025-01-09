interface MiniHeroProps{
    text:string
}

const MiniHero:React.FC<MiniHeroProps> = ({text}) => {
    return ( 
        <h3 
        // className="font-semibold text-2xl"
            className="font-semibold text-xl
                        lg:text-2xl"
        >{`/ ${text} /`}</h3>
     );
}
 
export default MiniHero;