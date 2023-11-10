import Footer from "../Components/Elements/Footer/Footer";
import Now from "../Components/Elements/Fragments/Now";
import Popular from "../Components/Elements/Fragments/Popular";
import TopRated from "../Components/Elements/Fragments/TopRated";
import Trending from "../Components/Elements/Fragments/Trending";
import SearchFilter from "../Components/Elements/Fragments/SearchFilter";

function Home() {
  return (
    <>
      <div className="font-custom">
        <Now />
        <SearchFilter />
        <Trending />
        <Popular />
        <TopRated />
        <Footer />
      </div>
    </>
  );
}

export default Home;
