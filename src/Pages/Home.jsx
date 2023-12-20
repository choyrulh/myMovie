import Footer from "../Components/Elements/Footer/Footer";
import Now from "../Components/Elements/Fragments/Now";
import Popular from "../Components/Elements/Fragments/Popular";
import TopRated from "../Components/Elements/Fragments/TopRated";
import Trending from "../Components/Elements/Fragments/Trending";
import { useContext } from "react";
import { SearchFilter } from "../Context/FilterContext";
import AllCard from "../Components/Container/AllCard";
import SearchByGenre from "../Components/Elements/Fragments/SearchByGenre";
import { GenreFilter } from "../Context/GenreFilterContext";

function Home() {
  const { searchQuery, searchResults } = useContext(SearchFilter);
  const { searchTerm, searchResultsGenres } = useContext(GenreFilter);
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
            {searchTerm && searchResultsGenres.length > 0 ? (
              <AllCard label={searchResultsGenres} />
            ) : (
              <>
                {" "}
                <Trending />
                <Popular />
                <TopRated />
              </>
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Home;
