import './App.css';
import React, { useState, useEffect} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from "react-bootstrap";
import { fetchData } from './api';

function App() {

 
  let [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
      const fetchAPI = async (search) =>{
        setCoins(await fetchData(search));
      }
      fetchAPI();
  }, []);


  const handleChange = async (event) => {
    // console.log(search.value)
    const fatchedData = await fetchData(event.target.value);
    setSearch(fatchedData);
    coins = search;
    console.log(search);
    // this.setSearch(coins: fatechedData);
 }

  return (
    <div className="container mt-4">
          <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="pt-3 pb-4 text-center font-bold font-up deep-purple-text">Crypto Coin Details</h2>
                            <div className="input-group md-form form-sm form-2 pl-0">
                              <div className="tb_search">
                                <input className="form-control" 
                                type="text" placeholder="Enter Currency Code..."
                                onChange={handleChange}/>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive">
                    <table  id="dtBasicExample" className="table table-striped table-bordered table-sm table-dark" cellSpacing="0" width="100%">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>Symbol</th>
                                <th>Price</th>
                                <th>Change Price 24h</th>
                                <th>Total Volume</th>
                                <th>Circulating supply</th>
                                <th>Total Supply</th>
                                <th>Max Supply</th>
                                <th>Mkt Cap</th>
                            </tr>
                        </thead>
                        <tbody>

                        {coins.map((data, i) =>
                         <tr>
                         <th scope="row">{i+1}</th>
                         <td>{data.market_cap_rank}</td>
                         <td><Image src={data.image} style={{height:'24px',width:'24px%'}}/> {data.name}</td>
                         <td>{data.symbol}</td>
                         <td>{data.current_price}</td>
                         <td>{data.price_change_24h}</td>
                         <td>{data.total_volume}</td>
                         <td>{data.circulating_supply}</td>
                         <td>{data.total_supply}</td>
                         <td>{data.max_supply}</td>
                         <td>{data.market_cap}</td>
                        </tr>
                        
                        )}
                           
                        </tbody>
                    </table>

                    
                    </div>
                </div>
            </div>
            <div className="mb-4">

            <div className="card">
                <div className="card-body">
                    <canvas id="chLine"></canvas>
                </div>
            </div>

        </div>
    </div>
  );
}

export default App;
