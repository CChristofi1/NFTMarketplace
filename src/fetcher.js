

const endpoint = "https://eth-mainnet.g.alchemy.com/v2/Pkdj1uzDilZ0gkRvPz1HSr4SonxY745I"

export const getAddressNFTs = async (owner, contractAddress, setNFTs, retryAttempt) => {
    if (retryAttempt === 5) {
        return;
    }
    if (owner) {
        let data;
        try {
            if (contractAddress) {
                data = await fetch(`${endpoint}/getNFTs?owner=${owner}&contractAddresses%5B%5D=${contractAddress}`).then(data => data.json())
            } else {
                data = await fetch(`${endpoint}/getNFTs?owner=${owner}`).then(data => data.json())
            }
        } catch (e) {
            getAddressNFTs(endpoint, owner, contractAddress, setNFTs, retryAttempt+1)
        }

        setNFTs(data.ownedNfts)
        return data
    }
}

const getNFTsMetadata = async(NFTS) => {
    const NFTsMetadata = await Promise.allSettled(NFTS.map(async(NFT) => {
        const metadata = await fetch(`${endpoint}/getNFTsMetadata?contractAddress=${NFT.contract.address}&tokenId=${NFT.id.tokenId}`,).then(data => data.json())
        let imageUrl;
        console.log("metadata",metadata);
        if(metadata.media[0].uri.gateway.length){
            imageUrl = metadata.media[0].uri.gateway
        }
        else{
            imageUrl="https://via.placeholder.com/500"
        }
        
        return{
            id: NFT.id.tokenId,
            contractAddress: NFT.contract.address,
            image:imageUrl,
            title:metadata.metadata.name,
            description:metadata.metadata.description,
            attributes:metadata.metadata.attributes
        }

    }))
}

const fetchNFTs = async (owner,contractAddress,setNFTs) =>{
    const data = await getAddressNFTs(owner,contractAddress)
    if(data.ownedNfts.length){
        const NFTs = await getNFTsMetadata(data.ownedNfts)
        let fullfilledNFTs = NFTs.filter(NFT => NFT.status == "fulfilled")
        setNFTs(fullfilledNFTs)
    
    }
    else
    {
        setNFTs(null)
    }
    
}
export{ fetchNFTs };