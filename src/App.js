import React, { Component } from "react";
import ListRestaurants from "./ListRestaurants";

class App extends Component {
  state = {
    restaurants: [
      {
        description:
          "Relax and enjoy great food in a comfortable atmosphere at Smitty’s Restaurant and Lounge",
        name: "Smitty's",
        url:
          "http://923754a44bec557e7a04-c27bd7765020b85ba1f12dac6c8e911a.r82.cf1.rackcdn.com/lps/assets/u/HD-The-Carolina-Room--1-.jpg",
        rating: 3,
        comments: [],
        temp: ""
      },
      {
        description:
          "Earls Kitchen + Bar is a globally inspired restaurant focused on using the freshest ingredients.",
        name: "Earls Kitchen + Bar",
        url:
          "https://cdn.cnn.com/cnnnext/dam/assets/161221152712-new-restaurants-2017-attitude-at-avani-riverside-bangkok-full-169.jpg",
        rating: 3,
        comments: [],
        temp: ""
      },
      {
        description:
          "Contemporary Italian food, International wine list and historic Valhalla building at Glebe.",
        name: "Tinello",
        url:
          "https://www.lonelyplanet.in/wp-content/uploads/2015/02/MG_0022-750x468.jpg",
        rating: 3,
        comments: [],
        temp: ""
      },
      {
        description:
          "Dauphin’s combines two of the most important names in Baumhower and Mobile history",
        name: "Dauphin's",
        url:
          "http://www.travelsense.asia/wp-content/uploads/2014/12/Lebuas_Breeze.jpg",
        rating: 3,
        comments: [],
        temp: ""
      },
      {
        description:
          "Stunning waterfront views of St. Joseph Sound, Honeymoon and Caledesi Islands.",
        name: "Bon Appetit",
        url:
          "http://www.blog.sagmart.com/wp-content/uploads/2015/11/Open-Air-Restaurants-Kolkata.jpg",
        rating: 3,
        comments: [],
        temp: ""
      },
      {
        description:
          "Hy's Toronto has everything you could expect from a steakhouse in an elegant atmosphere.",
        name: "Hy's Steakhouse",
        url:
          "http://static.asiawebdirect.com/m/kl/portals/penang-ws/homepage/dining/top10-restaurants/pagePropertiesImage/matsu-restaurant-night.jpg",
        rating: 3,
        comments: [],
        temp: ""
      },
      {
        description:
          "Is located in the heart of Toronto’s Financial District, features modern Japanese inspired cuisine.",
        name: "Katana on Bay",
        url:
          "https://d22ir9aoo7cbf6.cloudfront.net/wp-content/uploads/sites/2/2015/07/The-Lighthouse.jpg",
        rating: 3,
        comments: [],
        temp: ""
      },
      {
        description:
          "Critically acclaimed to be among Canada’s best restaurants, Canoe's unique Lake Ontario. ",
        name: "Canoe Restaurant and Bar",
        url:
          "http://100anspjparis.com/wp-content/uploads/2017/10/restaurant-01.jpg",
        rating: 3,
        comments: [],
        temp: ""
      },
      {
        description:
          "As the first East Coast location of Vancouver based Aburi Restaurants, Toronto waterfront.",
        name: "Miku Restaurant",
        url:
          "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/08/12/ce-la-vi-marina-bay-sands-singapore.jpg.rend.hgtvcom.966.725.suffix/1491580916513.jpeg",
        rating: 3,
        comments: [],
        temp: ""
      }
    ],

    temp: ""
  };
  setRestaurants = restaurant => {
    this.setState({ restaurants: restaurant });
  };
  reduceRating = restaurant => {
    this.setState({ restaurants: restaurant });
  };
  sendComments = (restaurant, ind, value) => {
    this.setState({ temp: value });
  };

  render() {
    return (
      <div>
        <ListRestaurants
          restaurants={this.state.restaurants}
          setRestaurants={this.setRestaurants}
          sendComments={this.sendComments}
        />
      </div>
    );
  }
}

export default App;
