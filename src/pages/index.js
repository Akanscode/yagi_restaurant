import Hero from "@/Components/Hero";
import Head from "next/head";
import AboutUs from "@/Components/AboutUs";
import CustomerRating from "@/Components/CustomerRating";
import MenuList from "@/Components/MenuList";
import TeamMember from "@/Components/TeamMember";
import Banner from "@/Components/Banner";
import Blog from "@/Components/Blog";
import Newsletter from "@/Components/Newsletter";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yagi Restaurant</title>
        <meta name="description" content="Yagi Restaurant" />
      </Head>
      <Hero />
      <AboutUs />
      <CustomerRating />
      <MenuList />
      <TeamMember />
      <Banner />
      <Blog />
      <Newsletter />
    </div>
  );
}
