


function AddressBox(props) {

    const address = props.address;
    const addresHint = props.balanceHint;
    const explorerLink = `https://explorer.alephium.org/#/addresses/${address}`

    let verifiedAddress

    switch (address) {

        //Gate
        case '17R6Ptkz9i1LhiKyMhnitUMkgFygGeeQUFZvRx6GgV8Fc':
            verifiedAddress = 'Gate.io'
            break;

        //Crypto Club Mining Project
        case '1DEfJ1TdDBg3QJKKyFgMDcbRvN5TBQ2DXjk7WE5H5SQTf':
            verifiedAddress = 'Crypto Club Mining Project'
            break;

        //Sesame wallet
        case '1A4MWZve8d6r7tYBNpDPXUitHRqckfk73EhtXukshpW46':
            verifiedAddress = 'Sesame wallet'
            break;

        //Rewards Alephium
        case '1AmbA9FLB4ioUGFvibpamJ4VApeGLzXfJRjYJcrZvZcNL':
            verifiedAddress = 'Rewards Alephium'
            break;

        //Bill Bones
        case '193i2PYgRGMUDxH1svTFJywg5XdxJtdHdmEkLAQhxsJCq':
            verifiedAddress = 'Bill Bones'
            break;

        //Metapool
        case '1HSajUFSnCbBV5cXtwsCkWQ8jVAwBTjajun9qMXW8kG6m':
            verifiedAddress = 'Metapool'
            break;

        //Metapool
        case '18BHr6VE31bhSHJoBdmkrDGPKj1H3QQ6Ui2kakYbAWBqi':
            verifiedAddress = 'Metapool'
            break;

        //Metapool
        case '13vzh4LZJrTekg53tcAYzz9ETNNz12BaUHsGmjqPpXUTE':
            verifiedAddress = 'Metapool'
            break;

        //Metapool
        case '159STVKgoVi2KLwJSY7LDewjbq9b5QDw259QVS3sBxqvt':
            verifiedAddress = 'Metapool'
            break;

        //Bob Yellowbeard
        case '1EVYU3piNnkNDMxwpT915SKseiP5DpnhvgKRhafVWGz4C':
            verifiedAddress = 'Bob Yellowbeard'
            break;

        //Bob Yellowbeard
        case '1GV4EfsCmcvRf9UpQfkDEwwUD6HMVGbQyEMbAvTUUenhN':
            verifiedAddress = 'Bob Yellowbeard'
            break;

        //Coinhunters Pool
        case '1GY1EBQAW3tqHpwnRyon7M32VfU3k9K2EARdHPnosKjLW':
            verifiedAddress = 'Coinhunters Pool'
            break;

        //Coinhunters Pool
        case '1BRuUfJeuaVAAh9QQRsP4DH7RdJL83TwHWNyWLgx69jXc':
            verifiedAddress = 'Coinhunters Pool'
            break;

        //Coinhunters Pool
        case '1CaEXVpPVGHjA4BV8znXAYKM9jR11B28XZ9QnsByhbJBJ':
            verifiedAddress = 'Coinhunters Pool'
            break;

        //Coinhunters Pool
        case '1EiSSuHFdJhDZgjZ5M6kHSoxDC1jrHBmhnLrz37Qc2DFU':
            verifiedAddress = 'Coinhunters Pool'
            break;

        //Gate
        case '15znczEZD5osxcB2HmqLebm6yf93PoNVPnEdU1KkffYSN':
            verifiedAddress = 'GramSwap'
            break;

        default:
            break;
    }

    return (
        <div className="border-bottom p-3">

            <div className="row">

                <div className="col-lg-6">
                    <a href={explorerLink} className="mb-0 text-decoration-none">{address.substring(0, 25)}... <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
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