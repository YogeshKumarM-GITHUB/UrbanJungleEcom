import CustomerSays from "../Components/CustomerSays"
import FlashSale from "../Components/FlashSale"
import HeroComp from "../Components/HeroComp"
import HeroDetails from "../Components/HeroDetails"
import OurCategories from "../Components/OurCategories"
import PopularProducts from "../Components/PopularProducts"
import PremieDestination from "../Components/PremieDestination"
import ReadyToFind from "../Components/ReadyTofind"
import TrendingProducts from "../Components/TrendingProducts"

const Home = () => {
    return (
        <div>
            <HeroComp />
            <HeroDetails />
            <TrendingProducts />
            <FlashSale/>
            <OurCategories/>
            <PremieDestination/>
            <PopularProducts/>
            <CustomerSays/>
            <ReadyToFind/>
        </div>
    )
}
export default Home