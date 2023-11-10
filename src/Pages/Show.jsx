import Genrestv from "../Components/Elements/Dropdowns/Genretv";
import PopularTV from "../Components/Elements/Fragments/PopularTV";
import TopRatedTV from "../Components/Elements/Fragments/TopRatedTV";
import TrendingShow from "../Components/Elements/Fragments/TrendingShow";

function Show() {
  return (
    <>
      <div className="font-custom">
        <TrendingShow />
        <Genrestv />
        <PopularTV />
        <TopRatedTV />
      </div>
    </>
  );
}

export default Show;
