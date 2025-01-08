interface HrProps{
    opa:string
}

const Hr:React.FC<HrProps> = ({opa}) => {
    return ( 
        <hr className={`mt-0 p-0 w-full bg-transparent border-b  border-black h-[1px] border-opacity-${opa}`}/>
       
     );
}
 
export default Hr;