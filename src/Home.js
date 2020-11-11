import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/Event/MegaGrocery20/GW/01-200_4th-1500x600._CB403370878_.jpg"
          alt=""
        ></img>
        <div className="home_row">
          <Product
            id="12547859"
            title="The lean startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 October 2011"
            price={450}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and whisk, 5 Litre Glass Bowl"
            price={5650}
            rating={4}
            image="https://5.imimg.com/data5/SELLER/Default/2020/8/QB/TR/MN/2432564/kenwood-stand-mixer-9899332022-india-500x500.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="325684597"
            title="New Apple ipad pro (12.9 inch , Wifi, 128 Gb) - Siver (4th generation)"
            price={69999}
            rating={4}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-cell-spacegray-202003_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1583553672276"
          />
          <Product
            id="23445930"
            title="Amazon Echo  {3rd Generation } | Smart speaker with Alexa, Charcoal Fabric"
            price={24500}
            rating={5}
            image="data:image/jpeg;base64,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"
          />
          <Product
            id="95867456"
            title="Samsung Gear Watch 3 Leatest"
            price={22750}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQssusXnf5nFP0B8PUs8jN__MM-gSzFSkO11iWVHZ4SL2cRn7AvfasGkOchAEeBl2aH_UKorao&usqp=CAc"
          />
        </div>
        <div className="home_row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={101999}
            rating={3}
            image="https://images.samsung.com/is/image/samsung/uk-monitor-crg90-lc49rg90ssuxen-backsilver-156915392?$PD_GALLERY_JPG$"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
