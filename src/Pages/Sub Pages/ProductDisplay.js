import React from "react";
import Footer from "../../Components/Store/Footer/Footer";
import "./ProductDisplay.css";
import ProductReview from "./ProductReview";
function ProductDisplay(props) {
  return (
    <div>
      <div className="maindivitemPage">
        <h3 className="album">{props.item.title}</h3>
        <div className="proCard">
          <div>
            <img
              src={props.item.imageUrl.img0}
              alt="image0"
              className="indImageitemPage"
            />
          </div>
          <div>
            <img
              src={props.item.imageUrl.img1}
              alt="image1"
              className="indImageitemPage"
            />
          </div>
          <div>
            <img
              src={props.item.imageUrl.img2}
              alt="image2"
              className="indImageitemPage"
            />
          </div>
          <div>
            <img
              src={props.item.imageUrl.img3}
              alt="image3"
              className="indImageitemPage"
            />
          </div>
        </div>
        <div>
          <img
            src={props.item.imageUrl.img4}
            alt="image4"
            className="imageitem"
          />
        </div>

        <div className="maindiv">
          <div className="com">
            <h4>Smartees</h4>
            <h3>{props.item.name}</h3>
          </div>

          <div>
            <h6 className="special">Special price</h6>
            <div>
              <span className="specialPrice">{`₹${props.item.price}`}</span>
              <span className="specialPriceCut">
                {props.item.originalPrice}
              </span>
              <span className="off">{props.item.off}</span>
            </div>
            <span className="star">{props.item.rating}</span>
            <span className="rating">{props.item.noOfRatingReviews}</span>
          </div>
          <div>
            <h6 className="smallheadingtitem">Coupons for you</h6>
            <div>
              <li className="cou">
                Special PriceGet extra 30% off upto ₹50 on 1 item(s)
                <br /> (price inclusive of discount)
              </li>
            </div>
            <h6 className="availableOffers">Available Offers</h6>
            <li className="cou">{`Special price:${props.item.AvailableOffers.one}`}</li>
            <li className="cou">{`Partner Offer:${props.item.AvailableOffers.two}`}</li>
            <li className="cou">{`Bank Offer:${props.item.AvailableOffers.three}`}</li>
          </div>
          <div className="deliverCheckDiv">
            <label className="deliverChecklabel">Deliver to</label>
            <div className="deliverCheckbtninput">
              <input
                type="number"
                placeholder="Enter delivery pincode"
                className="deliverCheckinput"
              />
              <button className="deliverCheckibtn">Check</button>
            </div>
          </div>

          <div>
            <h6 className="services">Services</h6>
            <p className="ser"> ⟳7 days return policy</p>
          </div>
        </div>
        <div className="ProductdetailsMaindiv">
          <div className="ProductdetailsProductdiv">
            <label>Product Details</label>
          </div>
          <div className="Productdetailsplusdiv">
            <label style={{ color: "gray" }}>+</label>
          </div>
        </div>

        <div className="ProductdetailsMaindiv">
          <div>
            <div className="ProductdetailsProductdiv">
              <label>Reviews</label>
              <div className="reviewratingitem">
                <button className="reviewButtonratingitem">4★</button>
                <label className="ReviwRatingcountitem">
                  11,977 ratings and 1,413 reviews
                </label>
                <div className="ReviwProductBTNDiv">
                  <button className="ReviwProductBTN"> Rate Product</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductReview></ProductReview>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ProductDisplay;
