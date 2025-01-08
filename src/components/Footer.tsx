
import { SocialIcon } from "react-social-icons";
import Hr from "./Hr";


const Footer = () => {
    return ( 
        <div className="w-full flex flex-col items-center">
            <Hr opa="10"/>
            <div className="flex flex-col items-center py-5">
                <h2 className="text-xl"> <SocialIcon network="email" className="scale-[0.8]"/> dineinmine@gmail.com</h2>

                <h3 className="uppercase text-lg">Follow Us</h3>
                <div className="flex flex-row items-center w-[300px] justify-between pt-3">
                    <button className="active:outline-none active:border-none focus:outline-none focus:border-none outline-none border-none hover:border-none hover:outline-none"><SocialIcon className="hover:scale-100 transition-all duration-300 scale-[0.9]" network="facebook"/></button>
                    <button className="active:outline-none active:border-none focus:outline-none focus:border-none outline-none border-none hover:border-none hover:outline-none"><SocialIcon className="hover:scale-100 transition-all duration-300 scale-[0.9]" network="instagram"/></button>
                    <button className="active:outline-none active:border-none focus:outline-none focus:border-none outline-none border-none hover:border-none hover:outline-none"><SocialIcon className="hover:scale-100 transition-all duration-300 scale-[0.9]" network="tiktok"/></button>
                    <button className="active:outline-none active:border-none focus:outline-none focus:border-none outline-none border-none hover:border-none hover:outline-none"><SocialIcon className="hover:scale-100 transition-all duration-300 scale-[0.9]" network="x"/></button>
                </div>
            </div>
            
        </div>
     );
}
 
export default Footer