import { Fragment, useEffect, useState } from 'react';
import {
    Link
  } from "react-router-dom";
import { URL } from './constants';
import Loader from './Loader';
import Pagination from './Pagination';

export default function CoinList({ currency }){

    const [coins, setCoins] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)

    //Fetch Data on component mount by 
    //using currency and default page number set to 1

    useEffect(() => {
        
        fetch(`${URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
          setCoins(res)
          
        })
      }, [])

      // Handler for pagination logic increment/decremneting 
      // the default page number and fetching the result

      function currentSelection(event,pageNumber){
        event.preventDefault()
        setCoins([])
        fetch(`${URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=${pageNumber}&sparkline=false`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
          setCoins(res)
          setCurrentPage(pageNumber)
        })
      }

    return (
        <Fragment>

        <Pagination currentPage={currentPage} 
            currentSelection={currentSelection} 
            resultPerPage={coins.length}/>
        
        <div className="list">
          {   
            coins.length > 0 && coins.map((coin,id) => 
              <div key={id} className="card bg-light" style={{width: '16rem',margin:'1%'}}>
                    <Link to={`/${coin.id}`}>
                  <img className="card-img-top" style={{padding:'5%'}} src={coin.image} alt="Card image cap"/>
                  <div className="card-body">
                      <h5 className="card-title text-dark">{coin.name}</h5>
                      <p className="card-text">
                          <span> <small className="text-secondary"> Symbol : </small> <span className="text-dark text-uppercase">{coin.symbol}</span></span> <br/>
                          <span> <small className="text-secondary"> CurrentPrice : </small> <span className="text-dark text-uppercase">{coin.current_price +" "+ currency}</span></span><br/> 
                          <span> <small className="text-secondary"> 24Hour Price(High) : </small> <span className="text-dark">{coin.high_24h}</span></span> <br/>
                          <span> <small className="text-secondary"> 24Hour Price(Low) : </small> <span className="text-dark">{coin.low_24h}</span></span> 
                      </p>
                  </div> 
                  </Link>
              </div>
              
          ) || <Loader/>
          } 
        </div>
        </Fragment>
    )
}