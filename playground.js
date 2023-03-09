let myNft=[];

function mintNft(Name,description,image) {
    let nft={
        Name:Name,
        description:description,
        image:image
    }
    myNft.push(nft);
};

function listNFTs() {
    myNft.forEach((nft)=>{
        console.log("Name:"+nft.Name);
        console.log("DIscription:"+nft.description);
        console.log("image:"+nft.image + "'>");
});
 }

function getTotalSupply () {
    console.log("Total NFT minted:"+ myNft.length);

}
mintNft('f4slu1','First ever created',"https://i0.wp.com/coolhunting.com/wp-content/uploads/2022/11/GAGAG.jpg?w=1080&ssl=1");
mintNft("f4slu2","Second ever created","https://i0.wp.com/coolhunting.com/wp-content/uploads/2018/11/proenza.jpg?w=700&ssl=1");
mintNft("f4slu3","Third ever Created","https://i0.wp.com/coolhunting.com/wp-content/uploads/2019/06/proenza-schouler-tie-dye-swimsuit.jpg?w=798&ssl=1");
mintNft("f4slu4","Last one ","https://i0.wp.com/coolhunting.com/wp-content/uploads/2019/04/proenza.jpg?w=700&ssl=1");

listNFTs();

getTotalSupply();
