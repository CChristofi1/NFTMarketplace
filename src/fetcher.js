const endpoint = `https://eth-mainnet.g.alchemy.com/v2/vjf7Pv9tnSrwIcSvcJvczPwvNOwsQcLH`;

export const fetchNFTs = async (owner, contractAddress, setNFTs, retryAttempt) => {
  if (retryAttempt === 5) {
    return;
  }
  if (owner) {
    let data;
    try {
      if (contractAddress) {
        data = await fetch(
          `${endpoint}/getNFTs?owner=${owner}&contractAddresses%5B%5D=${contractAddress}`
        ).then((data) => data.json());
      } else {
        data = await fetch(`${endpoint}/getNFTs?owner=${owner}`).then((data) => data.json());
      }
    } catch (e) {
      fetchNFTs(endpoint, owner, contractAddress, setNFTs, retryAttempt + 1);
    }

    setNFTs(data.ownedNfts);
    return data;
  }
};
