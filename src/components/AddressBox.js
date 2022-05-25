function AddressBox(props) {

    const address = props.address;
    const addresHint = props.balanceHint;
    const explorerLink = `https://explorer.alephium.org/#/addresses/${address}`


    return (
        <div className="border-bottom p-3">

            <div className="row">


                <div className="col-lg-6">
                    <a href={explorerLink} className="mb-0 text-decoration-none">{address.substring(0, 25)}... <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                    </svg></span></a>
                </div>

                <div className="col-lg-6">
                    <p className="mb-0">{addresHint}</p>
                </div>


            </div>



        </div>



    )

}

export default AddressBox