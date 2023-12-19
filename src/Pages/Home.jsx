import Footer from "../Components/Elements/Footer/Footer";
import Now from "../Components/Elements/Fragments/Now";
import Popular from "../Components/Elements/Fragments/Popular";
import TopRated from "../Components/Elements/Fragments/TopRated";
import Trending from "../Components/Elements/Fragments/Trending";
import { useContext } from "react";
import { SearchFilter } from "../Context/FilterContext";
import AllCard from "../Components/Container/AllCard";
import SearchByGenre from "../Components/Elements/Fragments/SearchByGenre";

function Home() {
  const { searchQuery, searchResults } = useContext(SearchFilter);
  console.log(searchResults);
  return (
    <>
      <div className="font-custom">
        {searchQuery && searchResults.length > 0 ? (
          <AllCard label={searchResults} />
        ) : searchQuery && searchResults.length === 0 ? (
          <p className="text-gray-400">No results found</p>
        ) : (
          <>
            <Now />
            <SearchByGenre />
            <Trending />
            <Popular />
            <TopRated />
          </>
        )}
        <Footer />
      </div>
    </>
  );
}

export default Home;
