import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  requestGifs,
  recentGifs,
  openModal,
  trendingGifs,
} from "../redux/actions";
import GifList from "./GifList";
import GifModal from "./GifModal";
import Pagination from "./Pagination";
import "../styles/global.scss";

/**
 *
 * @returns Home Component with Trending GIFS and a button to get latest cats and dogs
 */

const Home = () => {
  const gifs = useSelector((state) => state?.gifs?.data);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 25;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = gifs?.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(gifs?.length / recordsPerPage);

  useEffect(() => {
    dispatch(trendingGifs());
  }, []);

  return (
    <div>
      <div className="search">
        <input
          placeholder="Enter text to search for gifs!"
          onChange={(event) => dispatch(requestGifs(event.target.value))}
        />
      </div>
      <button
        className="query-btn"
        onClick={() => dispatch(trendingGifs())}
        title="GIFS by trending"
      >
        Trending GIFs
      </button>
      <button
        className="query-btn"
        onClick={() => dispatch(recentGifs())}
        title="Sort by newest"
      >
        Recent Cats and Dogs GIFs
      </button>
      <GifList
        gifs={currentRecords}
        onGifSelect={(selectedGif) => dispatch(openModal({ selectedGif }))}
      />
      <GifModal />
      {nPages !== 0 ? (
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default connect()(Home);
