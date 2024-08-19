import React, { Component } from "react";
import classes from "./iceCreamBuilder.module.css";
import IceCream from "../../components/IceCream/IceCream";
import Builder from "../../Components/Builder/Builder";

export default class IceCreamBuilder extends Component {
  //IceCream Builder State
  state = {
    items: {
      vanilla: 45,
      chocolate: 50,
      lemon: 35,
      orange: 40,
      strawberry: 60,
    },
    scoops: [],
    totalPrice: 0,
  };

  // componentDidMount() {
  //   console.log("[IceCreamBuilder]");
  // }

  // componentDidUpdate() {
  //   console.log("[IceCreamBuilder] update");
  // }

  //Add Scoop
  addScoop = (scoop) => {
    const { scoops, items } = this.state;
    const workingScoops = [...scoops];
    workingScoops.push(scoop);

    this.setState((prevState) => {
      return {
        scoops: workingScoops,
        totalPrice: prevState.totalPrice + items[scoop],
      };
    });
  };

  //Remove Scoop
  removeScoop = (scoop) => {
    const { scoops, items } = this.state;
    const workingScoops = [...scoops];

    const scoopIndex = workingScoops.findIndex((sc) => sc === scoop);

    workingScoops.splice(scoopIndex, 1);

    this.setState((prevState) => {
      return {
        scoops: workingScoops,
        totalPrice: prevState.totalPrice - items[scoop],
      };
    });
  };

  render() {
    const { items, totalPrice, scoops } = this.state;

    return (
      <div className={["container", classes.container].join(" ")}>
        <IceCream scoops={scoops} />
        <Builder
          items={items}
          price={totalPrice}
          add={this.addScoop}
          remove={this.removeScoop}
        />
      </div>
    );
  }
}
