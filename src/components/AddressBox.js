


function AddressBox(props) {

    const address = props.address;
    const addresHint = props.balanceHint;
    const explorerLink = `https://explorer.alephium.org/#/addresses/${address}`

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
                    <p className="mb-0"><span className="bg-light rounded-pill ps-2 pe-2">Unknown</span></p>
                </div>


            </div>



        </div>


    )

}

export default AddressBox