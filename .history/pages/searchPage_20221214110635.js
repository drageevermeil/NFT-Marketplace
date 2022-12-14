import React, { useEffect, useState, useContext } from "react";

//INTRNAL IMPORT
import Style from "../styles/searchPage.module.css";
import { Slider,  Loader } from "../components/componentsindex";
import { SearchBar } from "../SearchPage/searchBarIndex";

import { NFTCardTwo, Banner ,Filter } from "../collectionPage/collectionIndex";
import images from "../img";

//SMART CONTRACT IMPORT
import { Context } from "../context/Context";

const searchPage = () => {
  const { fetchNFTs, setError, currentAccount } = useContext(
    Context
  );
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    try {
      if (currentAccount) {
        fetchNFTs().then((items) => {
          setNfts(items.reverse());
          setNftsCopy(items);
          console.log(nfts);
        });
      }
    } catch (error) {
      setError("Please reload the browser", error);
    }
  }, []);

  const onHandleSearch = (value) => {
    const filteredNFTS = nfts.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredNFTS.length === 0) {
      setNfts(nftsCopy);
    } else {
      setNfts(filteredNFTS);
    }
  };

  const onClearSearch = () => {
    if (nfts.length && nftsCopy.length) {
      setNfts(nftsCopy);
    }
  };

  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];
  return (
    <div className={Style.searchPage}>
      {/* <Banner bannerImage={images.creatorbackground2} /> */}
      <SearchBar
        onHandleSearch={onHandleSearch}
        onClearSearch={onClearSearch}
      />
      <Filter />
      {/* {nfts.length == 0 ? <Loader /> : <NFTCardTwo NFTData={nfts} />} */}
      <Slider />
      {/* <Brand /> */}
    </div>
  );
};

export default searchPage;
