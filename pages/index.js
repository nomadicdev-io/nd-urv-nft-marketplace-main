import PageMain from "@/components/PageMain";
import HomeBanner from "@/components/sections/HomeBanner";
import HomeBestSellers from "@/components/sections/HomeBestSellers";
import HomeColelctions from "@/components/sections/HomeCollections";
import HomeTrending from "@/components/sections/HomeTrending";

const Home = () => {
  return (
    <PageMain>
      <HomeBanner />
      <HomeBestSellers />
      <HomeTrending />
      <HomeColelctions />
    </PageMain>
  )
}

export default Home;