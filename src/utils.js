export function generateObject(data,currency){
    return {
            "name":data.name,
            "symbol":data.symbol,
            "hashing":data.hashing_algorithm,
            "description":data.description.en,
            "home":data.links.homepage,
            "date":data.genesis_date,
            "marketCap":{
              "currentPrice":data.market_data.current_price[currency],
              "high_24h": data.market_data.high_24h[currency],
              "low_24h": data.market_data.low_24h[currency],
              "price_change_24h_in_currency": data.market_data.price_change_24h_in_currency[currency],
              "price_change_percentage_1h_in_currency": data.market_data.price_change_percentage_1h_in_currency[currency],
              "price_change_percentage_24h_in_currency": data.market_data.price_change_percentage_24h_in_currency[currency],
              "market_cap_change_24h_in_currency": data.market_data.market_cap_change_24h_in_currency[currency],
              "market_cap_change_percentage_24h_in_currency": data.market_data.market_cap_change_percentage_24h_in_currency[currency],
            }
        }
    } 