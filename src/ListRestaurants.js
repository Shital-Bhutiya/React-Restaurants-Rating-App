import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Restauranticon from "@material-ui/icons/Restaurant";
import ThumbUpicon from "@material-ui/icons/ThumbUp";
import Star from "@material-ui/icons/Star";
import ThumbDownicon from "@material-ui/icons/ThumbDown";

class ListRestaurants extends Component {
  renge = function(value) {
    let arr = [];
    for (let i = value; i > 0; i--) {
      arr.push(<i key={i}><Star/></i>);
    }
    return (<span>{arr}</span>);
  };
  addRestaurantsRating(restaurant, ind) {
    let temp = this.props.restaurants;
    if (temp[ind].rating < 5) {
      temp[ind].rating = temp[ind].rating + 1;
      this.props.setRestaurants(temp);
    }
  }

  reduceRestaurantsRating(restaurant, ind) {
    let temp = this.props.restaurants;
    if (temp[ind].rating > 0) {
      temp[ind].rating = temp[ind].rating - 1;
      this.props.setRestaurants(temp);
    }
  }

  writeCommnet(restaurants, ind, value) {
    let tem = this.props.restaurants;
    console.log(value.length);
    tem[ind].temp = value.trim() !== "" ? value : "";
    this.props.sendComments(tem);
  }
  pushCommit(restaurant, ind) {
    let temp = this.props.restaurants;
    if (temp[ind].temp !== "") temp[ind].comments.push(temp[ind].temp);
    temp[ind].temp = "";
    this.props.setRestaurants(temp);
  }
  render() {
    return (
      <div>
        <h1>Welcome To Restaurant's Rating App</h1>
        <ul className="container">
          {this.props.restaurants.map((restaurant, index) => (
            <li
              key={index}
              className={
                restaurant.rating < 2
                  ? "temp1"
                  : "" || restaurant.rating > 4
                    ? "temp"
                    : ""
              } >
              <h6>
                <Restauranticon />
                {restaurant.name}
              </h6>
              <img src={restaurant.url} alt="restaurants" />
              <p>
                  {
                    this.renge(restaurant.rating)
                  }
              </p>
              <p>{restaurant.description}</p>
              <Button
                variant="fab"
                color="primary"
                className="addButton"
                aria-label="add"
                onClick={() => this.addRestaurantsRating(restaurant, index)} >
                <ThumbUpicon />
              </Button>
              <Button
                variant="fab"
                color="secondary"
                aria-label="add"
                className="reduceButton"
                onClick={() => this.reduceRestaurantsRating(restaurant, index)} >
                <ThumbDownicon />
              </Button>
              {restaurant.rating > 4 && (
                <p>Great place with great food & amazing service.</p>
              )}
              {restaurant.rating < 2 && (
                <p>Great place with great food & amazing service.</p>
              )}
              <span>
                {restaurant.comments.map((s, index) => <p key={index}>{s}</p>)}
              </span>
              <TextField
                id="with-placeholder"
                label="Send Your FeedBack"
                placeholder="Placeholder"
                margin="normal"
                value={restaurant.temp}
                onChange={event =>
                  this.writeCommnet(restaurant, index, event.target.value)
                } />

              <Button
                variant="contained"
                color="primary"
                onClick={() => this.pushCommit(restaurant, index)} >
                Send
              </Button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListRestaurants;
