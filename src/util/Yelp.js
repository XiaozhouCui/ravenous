// const clientId = 'MVg532o6HatTe7Jr9mByCQ';
const apiKey = '6xBfIFoiHjwgBpHDc8sMgITZfg-TcL2I_xegLX2ztPfWlir_9k24Gc4oVMMpi9S4YaQwhQi5ro9RfCdrsnNqspnurLUrRVMZohN05WAtFR9Mj-gLcj_YDpRARba7XXYx';

let Yelp = {
  search: function (term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
    .then(response => response.json())
    .then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.address,
            city: business.city,
            state: business.state,
            zipCode: business.zip_code,
            category: business.category,
            rating: business.rating,
            reviewCount: business.review_count
          };
        });
      }
    });
  },
};

export default Yelp;
