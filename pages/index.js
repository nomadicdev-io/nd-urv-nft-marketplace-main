import Loading from "@/components/Loading";
import PageMain from "@/components/PageMain";
import HomeBanner from "@/components/sections/HomeBanner";
import HomeBestSellers from "@/components/sections/HomeBestSellers";
import HomeColelctions from "@/components/sections/HomeCollections";
import HomeExclusive from "@/components/sections/HomeExclusive";
import HomeTrending from "@/components/sections/HomeTrending";
import { Suspense } from "react";

const Home = () => {
  return (
    <PageMain>
      <Suspense fallback={<Loading />}>
        <HomeBanner />
        <HomeBestSellers />
        <HomeTrending />
        <HomeExclusive />
        <HomeColelctions />
      </Suspense>
    </PageMain>
  )
}

export default Home;