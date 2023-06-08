import React from "react";
/**
 * @param {*} props current records to show on each page
 * @returns List view of GIFs
 */

const GifList = (props) => {
  const gifItems = props?.gifs?.map((gif, index) => {
    const img_url = gif?.images?.downsized?.url;
    return (
      <div key={index}>
        {img_url !== undefined ? (
          <div className="gif-item">
            <img src={img_url} onClick={() => props.onGifSelect(gif)} alt={`gif ${index}`} />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  });

  return (
    <>
      <div className="gif-list">{gifItems}</div>{" "}
    </>
  );
};

export default GifList;
