function AddressBox(props) {

    const genesisAddresses = [
        "Eki6MBjZmhht1XqWogUCjjBYgLL1wBKyUHhz6eHBhkNPsaLY1xWdLPqp6p9t6rTqG28LxnpPb6dZsEjithNG4RWkK1ko5zZVFFLup52H14tq9iBMPCABzJ1Mjj69hudwMxNS2aF8tm9MtUq1a1ya8MYZ7hKWwtHRw7RV849fKZNoQL1w9LxeaWcNdRoPMJx61XyoN6F9CKBAqWsgkLVmNi5CZD1Ge8eTrKoQ6nxu9NbG2D5duWRmraZiQeLJtEuP7oyofdPnuyTT36d4TqpMWpF841oa8PBfep67v5HJTPZ56mpLkxGP5",
        "1Gjb3dgSLtTY7t4nkUh3WBHWfLdgZ8zx32fYCXJymFby6",
        "EmMHhafTauTaFyZm5cWfwTvHUaQpRAzefPw1TuycvnGcwonSnGuSYFUb3CC7CwN4iC5TyU1Re4m2qTf39pGsr6GukGHFk5d5zANVT5QH2LjwVvMRm3K4dafoH2yVYEi57Dp6zkCf9fm8FWW8GPCaupM3hvTgF4sTzUC9X4HaiQefqomc72FsTyR9kqgHmMMSsTkAfNu9jZ6YfFTNEJo5ncdLx75bkGeWqydf8ctWMpW9tX8JvET5c5uTU5pwV9trtFgR4DqwPEkVAvoJUKAGU66hACWYNFsWNsgNQc9VtQyaXD3p7aDT9",
        "17CtvwRZsaAhDjVLDm1YWNigKDETZbpcwqbrSkSsnV3XH",
        "EnYRcDQ8sXTNYQg3DpKagp1GqKRVj8U9JVK1t65ynpMNQsErYKJwFUiZDu6jWRaysNY7tDxLHJCNwQr2S5iBa2ZNErMk7TWpEFppFvGFVpogtZzBFg7zZF9HMb4LmXjrySLeC4WZLxr72iLVJ4SH1Q3JG1cJz3KCNMsxxvhGJvFdz1mu2gz19ZngpUXD1hPUdfjUSGXCJVnJpCTFn3WH1iMekBd6s4MoteLERNP6jRcfB3V5BwCSUrvmL2tLUvrrVidHSZVnM3VTucC2kAarEAP1yKt4f6jfzVNmchz5V3RX3qd8kQTjq",
        "Wz8UJ2YZqQxBN2Af9fvTpDQR3daZUC3hpPrc6omCP2U3iYqAxCVPCdPtgocRTsZfYrgvswf63DUyLda4QKhmGtzkpwcutG2SwReiv6p7SQhkxYfQT3S2cFGGyqkbAvoamqwcJD",
        "12M6P9BjzH1W7yRhnQ6nCLKzxDVRaZpm6JnJBFvmduG9S",
        "18Z3zQq9LBknYtRtnbWBG8NGfVCp552P9ux4sH8pin4mn",
        "WzTqVL2ENRCJ5JACdcY66ZyKiviFqE9n6naKRGUSayXB8QiY2enrj9XK1HG9qeB2PMpgvmDR5i3gergTPaCAt8cMzAvt8B3wJjRCwGdeZR3MtDsvbzmHwEiyHcTLU91ggsVJgh",
        "19aUGX3XH4qddGRr1rrkqbyVWfHBfUiyqNMYEJswHHxPv",
        "12mDBoQBHqZZWsk8Pmg73kcczKbRRke2XuMmFnPpt6wq8",
        "16GM1frLqDydqPNDqTCxv85vv4qF3GfqF2vGnS67dtkeh",
        "1CGUQYkY9BZRhDAYqtsNXDZKAQ128zzSBGkz57HdvQG51",
        "1HvtiA2uQzS8pbDx9DjciAj5h9rsu4dcXdX97o29QUasT",
        "1BRAH3yNWHfkSaaHhA4awcMf4UreCkTXJ93SbJz9UYbCL",
        "172Htr1jtgSot35aQbd8wWNQAEjygEZTpSMPcFmq96KK",
        "122uvHwwcaWoXR1ryub9VK1yh2CZvYCqXxzsYDHRb2jYB",
        "12L82SBroW8RHThbXXxdiHrEXBt9qat2kzj64rCmz5qm2",
        "15hDAGtDASzBR1unEv4DLenB9yRaAfoVt3Jxvoyvadeef",
        "16k5Pc9ztKqkiCqqsMw5dnxSDBGB7PzqoiFB6hb2eAywR",
        "12uTN2iy5D628nyPaW198rZa4eVP3G5sYrCsNRRpkPX8f",
        "1C5yTiQomGg8MCFTt86hu7MhGm2tfe2MQUG7q97tFAR3s",
        "1EsLXZrnFJk7S3ZvjPecpp5fqEWNKw8bketbvYspRsd6n",
        "1E74M1Fyun4QXJZ1VZYNp3j9rWcyDRUzxwKKEBqKnwpme",
        "1HxAEaCURcNU1jmyiVgpQ8jAkUomihwNahVNotsZJ862Y",
        "1GWqYNQDBeBTeWWhwr4vacahMCGHjMFTUACCAjWe3dv48",
        "14QBWBRfUD23VBwvhx8Fs9sidMCm3T9Ajp8GY9B1KJQ57",
        "19BrYed9yYBicxs3dTP5JV6gU2tscdPmhF5jEyed4Fqrc",
        "19FiW6LTT3LpgBSEBVfgyDfJreq7QS3eyNpLGmoZHJrs",
        "17EA8eHNt5sk8RsV1twfg7XjJ6n1783rComi3SDx7oMmh",
        "18buVypEnD7YUPhf4YgGfpSX6kyEhrsJNXNrzKRaZZuJF",
        "17SWCYGA1ExjSkLXDQfpJmjrwrZoAa828WGP3Lwxro4gZ",
        "19w9t9HZtfd5TBf2QGJSbfgp4dLeYJqFypxv52jR9aPeS",
        "1CtaB8TPTcymzonaGCZJBriJEZriHNoumShHqVkBz4ALr",
        "1HqduhoK49GonP9QDBtUwTYY5qz5Ga4Yn5Pwnxkyj5Nun",
        "19bocegGyHHiTY7kQG7XogN3PEtib3GQsYFmSXEVgwLuV",
        "19fqqhTSv5AMy59RNXgRAVJUB1yFZizXvYghxmjPLpddB",
        "164TUGU4K2mYuED89oSHf1RvXLNcjsstGU6dmyB6z2kmY",
        "12cg3U3hFwXAdmPpeTh4fNq1b1fH6EN78ztZ2xqAxuxmU",
        "14tTerSNgKv9WAxCSgvRnMCA3GwHMfawRKMsfDpzWh84w",
        "1AVZw2eEDLFQRpujxjXGTn7i9JHWeDYMxtxbdqTaycaK3",
        "18Mp5eHjtLCzjc4gggSPBYETdD37czoFDtndGj2u2j4wv",
        "18jW7ZMqUqg3z1pPxv45BL25XA7HDPuFoeqFoLGcVd2v5",
        "12ngBGaA4YboyDPyGvjNJcTxyWgpsZ2D3GzJwsfqRwupe",
        "12WBr374CdQY3N2w36XNKpb7pNEN3VFHvQ17kh1guJNV7",
        "16Eo2wcuRQtaxq8igxhVhc397rFLtYDjboPKR9t4EXjb6",
        "1DqgZq2693ShKxipz8xL3Vn85vTyjQYeSfSy6uwkxNLNo",
        "1AC7c5pq1kDSccztFBK9fobwXfqzM8cZyppuHGTg1gt75",
        "193BNP8HNwY32RzBYgmwUppFNQLzfaU6GkHLq3vT2qu85",
        "12YQkiEto1VrZZThPVtcjE9bh2bWaepmrZCbt284vhg91",
        "19unxeu1pphghjgDRg8s1PiwwYLU9GjRert1jLB9o4gv4",
        "167yEEVeKHNHKqzz9WTVhwicApDiHHQFfdFXxBnvA3Tmu",
        "1FmM8ehu5tF16oTSMS3d11nAfjmMvkinLPCMR7iE9HqVk",
        "17VcKroQpuug4aydfenHVTeGV4xTLXeUJ3gFmQ4sEzFj4",
        "1EG3SRBAdLM2sgkZLrn3HUEbgeBEKj5NesZ1R3FtVuWwH",
        "1HPsbtLkCUthsce7auna7eUv9yXynuEup2rdJZN6kaCHN",
        "12ReVxyWJkTDXdgaDmVLhEsfXCubHeE2gMKxB2b6aDs52",
        "X3NKdz8PW4hd8JeHwsxcgrFG9rsdt49M2jcNnCz8V9TiinzLbZkFrru3YeHFRowM5KchadZPJiFqcLoLoR6Ap137r4Zt4StN6gXPzVd6tfocDfd8Q5kjqAQ61HhzkzFckE5cgq",
        "1GfSaqsHFFW39qcMMBSjAcq45yVu9z618DZYx36Ug3kYL",
        "1HK8TT1VGcVcskrBGFCbkbnXNujfkRKZQcFCxmD9GLTuW",
        "1GvoF5b2TikYAGuR1NCZrLrs6YwDNDZup3bBAPHZxvdhJ",
        "15UARop3hSgCSARZiGGQPGrThDfG4DGDLCgeQ6nqjExDX",
        "1FngSHvX2JJBUYdJWC6swAg3C9GUWUCSWapXEAn4WqiwP",
        "18aA4R9C9aLgrnuY4mwAYvFqrqWMDefD2HPtr7eTkM7DM",
        "13fLRGMz6FZAYsxx4esj2p95BQXozuViYXu5CVpFQigx6",
        "124waG4PdzYcudVmsooJUSzPG5y24qxvofheoR1WB1nNe",
        "1GnjsUHa7FiB5qdwcT9V5JoQjjegA3neUL14rgsK8jzPh",
        "1618ZVEWNfxXSFx7r66ScpE1rYKfmMkjBGo1ybLGhvNWi",
        "1FfGMX5PgY2jUcpNakcSqeoRxwBguTkwDEFNwnzi9js5P",
        "18rS2Z9WK3hPJc6uGpmzpSCB17UBEWHP9XkUSGJsxkNE",
        "182R7WGaemRWuQPvRC93qsMiusXaiGM3pVoLFjdaLqjMG",
        "1V4frRbhdYiRDEhnQz5PXN6SJJdTaCgSLuFQyN4V8hvP",
        "X4qQktAL7FJ9eUZ1UgsSmhJXibYf9wr4JwQKnXNx4BRPTtBTwsFjWNivUXTvEdbTVHe4MqhzkCJra7Z6fhEwLJQ6CBho9yyUQA8TAMAySHWRNwJUwgsLReMamVRLcoC4RbP7LD",
        "1C7vYF26dnHKpvzWcVmvk5TwDJkNSggjAq8VBk9U9Ncjq",
        "1D2jWtVgy6Fkm9rxnCahHBynMXuUz8KUPkgrjqmdyYzym",
        "1Fa4scEGQAC2xqMQxh6XgEp7B25ewJ9Wgpsf9GBq6jmaQ",
        "14SE3kqzUhHB3A8QbPk3t842e8vG6VKqnox8thJqfW4vM",
        "1CqKDFmMvZKqXfEZ2aAzkDQ9ebqGkjbGQozYbD7RT22b3",
        "1Ehh237QdzddC4vitKrn1gtGUujFjAUuP8CqTYqjgYDSf",
        "15gsYtvkmhtdKYxHndtTX4tYqep5oTqTYy9wmvN1BNG92",
        "15sKeWkS9RwL7nBJLkeVTDogekpsBTYY3ENsTAGkkCXiZ",
        "1CSBSZNdHaJd62X4L8fLPHCaNDxJzVoTUqR2tm4e4PVA8",
        "18jKB3Lmfyb1GzrNk1FnVdNxvLtcEs44S2ccCYSeWXYy3",
        "15VWwuag4XVqLsELX5ZB8ZWH9LzDRouKwG6b5oQ14WATX",
        "16K2UTzqBrDMUqDBXZTTfKoRFkWmgJ3Zr9XnhCJvUujjA",
        "1FqtGvT4Ktqe5gnMP3dVsZmAGEAjC2vGfREgUhpM8kfnC",
        "1FJi7aBHwqi1C6g85gPJv9orjXNVtuckaMGbg8nFbmq3S",
        "1GbYFX3Fa75vanyfiaAbn2QJ725FUz5ZUGRtPyZ1LUXU4",
        "14Wvmh11LwwvupHgTcZ7p1yJ5VQTE9zcjxuBPbNCcaTN2",
        "13CwRH7dxFUF2A4gb8SLRiCTpFbEdHjna5jyEpZWhSS46",
        "1GYvVyTeyfZVym5sELdBF2dXGXMFDq5X5SFkttzS8fxan",
        "19uH24Rjs6vMgepd31Mot8PQBTffrnJwguKc8b88dknJ",
        "15RinCvUhxyLtDmizDTvTtZDxUZ5rC2XVDg46BbSsqKbL",
        "1HydBFMnYHrx8btTrFNr6GXfmGShCmcE9Fh8CKfZEPq8M",
        "1EsSdh3UTqQF8LQXDDeE7rjhs8kSdnxyFTd45pJDs7qSH",
        "16d8dpAyBv6P5YfXeb6eran7KxEq67kX6usZZHRqEvNVy",
        "1FzP9ow39Hj39P1yPazoTAs2go5ZFxZXSRSbVvW4vJCpu",
        "16qhi5Gi5uwHoF7x59FGmUBcKoHikfEHN8tuR4kX5ND44",
        "149Jdg4YZ349YkUBJhMmwevdvtJit5F1xadTZ6r4LrAzM"
    ]


    let address = props.address;
    const name = props.name;
    const addresHint = props.balanceHint;
    let index = props.index;
    const explorerLink = `https://explorer.alephium.org/#/addresses/${address}`
    let verifiedAddress = 'Unknown'

    if(name != null){
        verifiedAddress = name;
    }

    if (genesisAddresses.includes(address)) {
        verifiedAddress = 'Genesis'
    }

    //Slicing address (!IMPORTANT TO DO THAT AFTER ALL LOGIC!)
    address = address.slice(0, 15)

    if (verifiedAddress === 'Genesis') {

        return (
            <div className="border-bottom p-3">
                <div className="row">
                    <div className="col-lg">
                        <p className="mb-0">#{index}</p>
                    </div>
                    <div className="col-lg">
                        <a href={explorerLink} className="mb-0 text-decoration-none">{address}...</a>
                    </div>
                    <div className="col-lg">
                        <p className="mb-0">{addresHint}</p>
                    </div>
                    <div className="col-lg">
                        <p className="mb-0"><span className="bg-purple text-dark rounded-pill ps-2 pe-2">{verifiedAddress}</span></p>
                    </div>
                </div>
            </div>
        )

    }

    if (verifiedAddress !== 'Unknown') {

        return (
            <div className="border-bottom p-3">
                <div className="row">
                    <div className="col-lg">
                        <p className="mb-0">#{index}</p>
                    </div>
                    <div className="col-lg">
                        <a href={explorerLink} className="mb-0 text-decoration-none">{address}...</a>
                    </div>
                    <div className="col-lg">
                        <p className="mb-0">{addresHint}</p>
                    </div>
                    <div className="col-lg">
                        <p className="mb-0"><span className="bg-green text-dark rounded-pill ps-2 pe-2">{verifiedAddress}</span></p>
                    </div>
                </div>
            </div>
        )

    }

    return (
        <div className="border-bottom p-3">
        <div className="row">
            <div className="col-lg">
                <p className="mb-0">#{index}</p>
            </div>
            <div className="col-lg">
                <a href={explorerLink} className="mb-0 text-decoration-none">{address}...</a>
            </div>
            <div className="col-lg">
                <p className="mb-0">{addresHint}</p>
            </div>
            <div className="col-lg">
                <p className="mb-0"><span className="bg-label-dynamic rounded-pill ps-2 pe-2">{verifiedAddress}</span></p>
            </div>
        </div>
    </div>
    )

}

export default AddressBox