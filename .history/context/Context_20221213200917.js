import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import axios from 'axios';

import { ContractAddress, ContractAddressABI } from './ABI';

export const Context = React.createContext();

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(ContractAddress, ContractAddressABI, signerOrProvider);

export const ContextProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('');
  const [loading, setLoading] = useState(false);

  //  (Подключение MetaMask )
  const connectWallet = async () => {
    // (Проверка установлен ли в браузере MetaMask)
    if (!window.ethereum) return alert('Please install MetaMask !');

    // (Запрос на подключение к учетным записям рользователей MetaMask ETH )
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    console.log(accounts);

    setCurrentAccount(accounts[0]);
    window.location.reload();
  };

  const checkWalletConnection = async () => {
    setLoading(true);
    if (!window.ethereum) return alert('Please install MetaMask !');

    //Ask for available accounts without requesting
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    console.log(accounts);

    if (accounts.length) {
      setCurrentAccount(accounts[0]);
    } else {
      console.log('No accounts found');
    }
  };

  //(Создание NFT )
  const createNFT = async (url, unformattedPrice, id, resell) => {
    //Interact contract as signer
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);

    const price = ethers.utils.parseUnits(unformattedPrice, 'ether');
    const listingPrice = await contract.getListingPrice();

    const sellMarketItem = resell
      ? await contract.resellItem(id, price, {
          value: listingPrice.toString(),
        })
      : await contract.createToken(url, price, {
          value: listingPrice.toString(),
        });

    await sellMarketItem.wait();
  };

  const fetchExistingMarketItem = async () => {
    setLoading(true);
    const provider = new ethers.providers.JsonRpcProvider();
    const contract = fetchContract(provider);

    const data = await contract.fetchMarketItem();
    const items = await Promise.all(
      data.map(async ({ tokenId, seller, owner, price: unformattedPrice }) => {
        const tokenURI = await contract.tokenURI(tokenId);
        const {
          data: { image, name, description },
        } = await axios.get(tokenURI);
        const price = ethers.utils.formatUnits(
          unformattedPrice.toString(),
          'ether'
        );

        return {
          price,
          tokenId: tokenId.toNumber(),
          id: tokenId.toNumber(),
          seller,
          owner,
          image,
          name,
          description,
          tokenURI,
        };
      })
    );

    return items;
  };

  const buyNFT = async (nft) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);

    const price = ethers.utils.parseUnits(nft.price, 'ether');
    const transaction = await contract.buyMarketItem(nft.tokenId, {
      value: price,
    });
    await transaction.wait();
  };

  const fetchCollectionOrListed = async (type) => {
    setLoading(true);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);

    const data =
      type === 'fetchListed'
        ? await contract.fetchListingItem()
        : await contract.fetchCollectionItem();

    const items = await Promise.all(
      data.map(async ({ tokenId, seller, owner, price: unformattedPrice }) => {
        const tokenURI = await contract.tokenURI(tokenId);
        const {
          data: { image, name, description },
        } = await axios.get(tokenURI);
        const price = ethers.utils.formatUnits(
          unformattedPrice.toString(),
          'ether'
        );

        return {
          price,
          tokenId: tokenId.toNumber(),
          id: tokenId.toNumber(),
          seller,
          owner,
          image,
          name,
          description,
          tokenURI,
        };
      })
    );

    return items;
  };

  useEffect(() => {
    checkWalletConnection();
  }, []);

  return (
    <Context.Provider
      value={{
        connectWallet,
        currentAccount,
        createNFT,
        fetchExistingMarketItem,
        fetchCollectionOrListed,
        buyNFT,
        loading,
        setLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};
