import { useEffect,useState } from "react";
import { URL } from './constants';
import { generateObject } from './utils'
import {
    useHistory
  } from "react-router-dom";
import Loader from "./Loader";

export default function CoinDetails({ currency }) {

    const history = useHistory();
    const [selectedCoin, setSelectedCoin] = useState(null);

    //handler for fetching the details for particular
    
    useEffect(() => {
      
        fetch(`${URL}/coins${history.location.pathname}`)
        .then(res => res.json())
        .then(data => {

        //Utility function for
        // storing selected information
        
          let result = generateObject(data,currency)
          setSelectedCoin(result);
        })
    },[])

    return (
         <div className="detailsList">
            {
            selectedCoin && 
                <div className="card bg-light" style={{ width:'80%',padding:'1%'}}>
                    <div className="jumbotron">
                        <h1 className="display-4">{selectedCoin.name}</h1>
                        <p className="lead text-uppercase">({selectedCoin.symbol})</p>
                        <p className="lead" dangerouslySetInnerHTML={{__html:selectedCoin.description}}></p>
                        <hr className="my-4"/>
                        <p className="lead">
                            <span style={{fontWeight:'bolder'}} className="text-dark">Home Page : </span> <a href={selectedCoin.home}>{selectedCoin.home}</a><br/>
                            <span style={{fontWeight:'bolder'}} className="text-dark">Hashing Algorithm : </span> <span>{selectedCoin.hashing} </span><br/>
                            <span style={{fontWeight:'bolder',textDecoration:'underline'}}>Market Data :</span><br/>
                            <span style={{fontWeight:'bolder'}} className="text-dark">Current Price :</span> <span>{selectedCoin.marketCap.currentPrice}</span><br/>
                            <span style={{fontWeight:'bolder'}} className="text-dark">24 Hour Price(High) : </span> <span>{selectedCoin.marketCap.high_24h}</span><br/>
                            <span style={{fontWeight:'bolder'}} className="text-dark">24 Hour Price(Low) : </span><span>{selectedCoin.marketCap.low_24h}</span><br/>
                            <span style={{fontWeight:'bolder'}} className="text-dark">Price change 1 Hour : </span><span>{selectedCoin.marketCap.price_change_percentage_1h_in_currency} %</span><br/>
                            <span style={{fontWeight:'bolder'}} className="text-dark">Price change 24 Hour : </span><span>{selectedCoin.marketCap.price_change_percentage_24h_in_currency} %</span><br/>
                            <span style={{fontWeight:'bolder'}} className="text-dark">Market Capture Change in 24 Hour : </span><span>{selectedCoin.marketCap.market_cap_change_24h_in_currency}</span><br/>
                            <span style={{fontWeight:'bolder'}} className="text-dark">Market Capture Change Percentage in 24 Hour : </span><span>{selectedCoin.marketCap.high_24h} %</span><br/>
                        </p>
                    </div>
                </div> ||
            <Loader/>
            }
        </div> 
    )
}