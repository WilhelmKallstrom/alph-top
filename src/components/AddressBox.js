


function AddressBox(props) {

    const genesisAddresses = props.genesisAddresses.map(function(item) { return item["address"]; });
    const address = props.address;
    const addresHint = props.balanceHint;
    const explorerLink = `https://explorer.alephium.org/#/addresses/${address}`
    let verifiedAddress = 'Unknown'

    if(genesisAddresses.includes(address)){
        verifiedAddress = 'Genesis'
    }


    return (
        <div className="border-bottom p-3">

            <div className="row">

                <div className="col-lg-4">
                    <a href={explorerLink} className="mb-0 text-decoration-none">{address.substring(0, 25)}...</a>
                </div>

                <div className="col-lg-4">
                    <p className="mb-0">{addresHint}</p>
                </div>

                <div className="col-lg-4">
                    <p className="mb-0"><span className="bg-green rounded-pill ps-2 pe-2">{verifiedAddress}</span></p>
                </div>


            </div>



        </div>


    )

}

export default AddressBox