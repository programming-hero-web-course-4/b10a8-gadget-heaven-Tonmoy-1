import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Container from "../Components/Container";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <h1 className="text-3xl font-bold text-center my-10">
        Explore Cutting-Edge Gadgets
      </h1>
      <Container categories={categories}></Container>
    </div>
  );
};

export default Home;
