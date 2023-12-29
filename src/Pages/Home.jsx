// import Footer from "../Components/Elements/Footer/Footer";
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
  const { searchQuery, searchResults, isFetchingQuery } =
    useContext(SearchFilter);
  const { searchTerm, searchResultsGenres, isFetching } =
    useContext(GenreFilter);

  return (
    <>
      <div className="font-custom flex flex-col min-h-screen">
        {searchQuery && searchResults.length > 0 ? (
          <AllCard
            label={searchResults}
            Loading={isFetchingQuery}
            count={searchResults.length}
          />
        ) : (
          <main className="flex-grow">
            <Now />
            <SearchByGenre />
            {searchTerm && searchResultsGenres.length > 0 ? (
              <AllCard
                label={searchResultsGenres}
                Loading={isFetching}
                count={searchResultsGenres.length}
              />
            ) : (
              <>
                <Trending />
                <Popular />
                <TopRated />
              </>
            )}
          </main>
        )}
      </div>
    </>
  );
}

export default Home;
