import axios from 'axios'

const url = 'https://api.coingecko.com/api/v3/coins/markets';

export const fetchData = async (currency) => {
    let changeableUrl = url;
    currency = 'usd';
    if(currency){
        changeableUrl = `${url}?vs_currency=${currency}&order=market_cap_desc&per_page=100`;
    }else{
        currency = 'inr';
        changeableUrl = `${url}?vs_currency=${currency}&order=market_cap_desc&per_page=100`;
    }
    try {
        const { data } = await axios.get(changeableUrl);
        return data;
    } catch (error) {
        return alert("Please enter valid Currency code");
    }
}

// const { data } = await axios.get(changeableUrl);
//         const fieldData = data.map(( values, index ) => ({
//                 id: index

//             }
//         ));