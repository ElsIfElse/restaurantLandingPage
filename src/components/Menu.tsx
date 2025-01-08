import SmallHero from "./Smallhero";
import MenuSection from "./MenuSection";

const Menu = () => {
    return ( 
        
        <div id="menu" className="flex flex-col items-center w-full mb-[100px]">
            
            <SmallHero marginTop="0" marginBottom="0" text=" - Menu - "/>
            <MenuSection 
            typeName="Soups"

            item1Title="Roasted Tomato Basil Soup"
            item1Description="Creamy, slow-roasted tomatoes blended with fresh basil for a rich, comforting classic."
            item1Photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWOLBP6qbN0vZalHv5peDfNEiyYOt9WdwCA&s"
            item1Price="9$"

            item2Title="Wild Mushroom Bisque"
            item2Description="Earthy wild mushrooms in a velvety bisque with a hint of garlic and thyme."
            item2Photo="https://www.allrecipes.com/thmb/PKh_MtthZMtG1flNmud0MNgRK7w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13096-Cream-of-Mushroom-Soup-ddmfs-4x3-293-b505e37374d74e81807e8a93bcdd7bab.jpg"
            item2Price="10$"

            item3Title="Lemon Chicken Orzo Soup"
            item3Description="Light and refreshing, with tender chicken, orzo pasta, and a bright lemon finish."
            item3Photo="https://www.meatloafandmelodrama.com/wp-content/uploads/2018/02/instant-pot-lemon-chicken-orzo-soup-wide.jpg"
            item3Price="8$"

            item4Title="Spicy Coconut Curry Soup"
            item4Description="A creamy coconut base with bold curry spices, veggies, and a touch of heat."
            item4Photo="https://img.freepik.com/premium-photo/bowl-thai-coconut-curry-soup-fragrant-with-lemongrass-coconut-milk-aromatic-spices_118124-115647.jpg"
            item4Price="9$"

            />

            <MenuSection 
            typeName="Main Courses"

            item1Title="Grilled Herb-Crusted Salmon"
            item1Description="Fresh salmon fillet, seared with a blend of herbs, served with lemon-butter sauce."
            item1Photo="https://www.foodandwine.com/thmb/gsmfmXOFg-z039diVnHwz_7qxqE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/quinoa-crusted-salmon-with-spicy-orange-miso-sauce-xl-wnbook2014-2000-36b0260d079c48f7a22380207263efc0.jpg"
            item1Price="22$"

            item2Title="Steak Frites"
            item2Description="Juicy, grilled steak paired with crispy French fries and a savory garlic aioli."
            item2Photo="https://img.hellofresh.com/f_auto,fl_lossy,h_640,q_auto,w_1200/hellofresh_s3/image/steak-frites-107fe6c3.jpg"
            item2Price="24$"

            item3Title="Lemon Thyme Roasted Chicken"
            item3Description="Tender roasted chicken infused with lemon and thyme, served with seasonal vegetables."
            item3Photo="https://www.foodandwine.com/thmb/t9YqzGbmH-huAbV6xitCQs0-G4s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-herb-and-lemon-roasted-chicken-hero-c4ba0aec56884683be482c47b1e1df11.jpg"
            item3Price="19$"

            item4Title="Wild Mushroom Risotto"
            item4Description="Creamy Arborio rice with sautéed wild mushrooms, finished with Parmesan and truffle oil."
            item4Photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXpwZRQXPfnq3j_hlrlJi3B7m8AmCIytrKVg&s"
            item4Price="18$"

            />

            <MenuSection 
            typeName="Desserts"

            item1Title="Decadent Chocolate Lava Cake"
            item1Description="A rich, warm chocolate cake with a gooey molten center, served with a scoop of vanilla ice cream. "
            item1Photo="https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes7.jpg"
            item1Price="8$"

            item2Title="Classic New York Cheesecake"
            item2Description="Creamy cheesecake on a graham cracker crust, topped with fresh berries and a hint of lemon."
            item2Photo="https://mediavine-res.cloudinary.com/image/upload/s--d4CGxhXA--/c_limit,f_auto,fl_lossy,h_1080,q_auto,w_1920/v1562102722/vgoftghakc5mx8ahynn4.jpg"
            item2Price="7$"

            item3Title="Lemon Meringue Tart"
            item3Description="A zesty lemon filling in a buttery tart shell, topped with fluffy meringue and a touch of toasted sugar. "
            item3Photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_JAEvVXiPYJKjHWGUXQxYFPedG1pu5cXMsA&s"
            item3Price="9$"

            item4Title="Mixed Berry Parfait"
            item4Description="Layers of fresh mixed berries, creamy yogurt, and crunchy granola, drizzled with honey. "
            item4Photo="https://lynnecurry.com/wp-content/uploads/2024/08/greek-yogurt-berry-parfait-recipe-1723041996.jpg"
            item4Price="6$"

            />

        </div>
     );
}
 
export default Menu;