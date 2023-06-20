import { Component } from "@angular/core";
import {
  CardData,
  addOns,
  checkoutData,
  coffeeData,
  coffeeSubscription,
  coffeeTypeList,
  grindData,
} from "../../Model/card-data";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-funnel",
  templateUrl: "./funnel.component.html",
  styleUrls: ["./funnel.component.css"],
})
export class FunnelComponent {
  public cardData: CardData[] = [];
  public coffeeData: coffeeData[] = [];
  public grindData: grindData[] = [];
  public subData: coffeeSubscription[] = [];
  public addOns: addOns[] = [];
  public checkoutData: checkoutData;
  subMessage: string = "";
  tabIndex: number = 0;
  totalCoffeeSeleced: number = 0;
  coffeeTypeList: coffeeTypeList[] = [];
  constructor(public router: Router, private route: ActivatedRoute) {
    this.checkoutData = {
      amount: "",
      roastedPreference: "",
      grindType: "",
      freq: "",
      addOns: "",
      img: "",
      purpose: "",
      weight: "",
      price: "",
      shipCharge: "",
      beanType: "",
      message: "",
      bags:""
    };
    this.route.params.subscribe((params) => {
      this.checkoutData.img = params?.["img"];
      this.checkoutData.purpose = params?.["purpose"];
      this.checkoutData.weight = params?.["weight"];
      this.checkoutData.message = params?.["message"];
    });

    this.getFunnelData();
    this.getCoffeeData();
    this.getGrindData();
    this.getSubscriptionData();
    this.getAddOns();
  }
  tabChanged(tabChangeEvent: MatTabChangeEvent) {
    this.tabIndex = tabChangeEvent.index;
  }
  coffeChosen(coffeeData: any) {
    this.checkoutData.amount = coffeeData.qty;
    this.checkoutData.price = coffeeData.price;
    this.checkoutData.shipCharge = coffeeData.shipCharge;
    this.checkoutData.bags=coffeeData.qty.split(" ")[0];
    this.tabIndex = this.tabIndex + 1;
  }
  roastPreference(roastType: string) {
    // this.tabIndex=this.tabIndex+1;
    this.checkoutData.roastedPreference = roastType;
  }
  getGrindType(grindData: any) { // Scope of improvement: to all the places where data type any is used, it is not the right practice to use any data type, proper object should be defined.
    this.tabIndex = this.tabIndex + 1;
    this.checkoutData.grindType = grindData.grindType;
    this.checkoutData.beanType = grindData.beanType;
  }
  getFrequencyData(freqData: string) {
    this.tabIndex = this.tabIndex + 1;
    this.checkoutData.freq = freqData;
  }
  getAddons(addOns: string) {
    this.tabIndex = this.tabIndex + 1;
    this.checkoutData.addOns = addOns;
  }

  next() {
    this.tabIndex = this.tabIndex + 1;
  }
  back() {
    this.tabIndex = this.tabIndex - 1;
    if (this.tabIndex < 0) {
      this.router.navigate(["/"]);
    }
    if(this.tabIndex===0){
      this.totalCoffeeSeleced=0;
    }
  }
  addNewBag() {
    this.router.navigate(["/"]);
  }
  increaseQty(data: any,i:number) {
    if (this.totalCoffeeSeleced < parseInt(this.checkoutData.bags)) {
      this.totalCoffeeSeleced = this.totalCoffeeSeleced + 1;
      data.qty = data.qty + 1;
    }
  }
  decreaseQty(data: any,i:number) {
    if (this.totalCoffeeSeleced > 0) {
      data.qty = data.qty - 1;
      this.totalCoffeeSeleced = this.totalCoffeeSeleced - 1;
    }
  }

  edit(index:number){
    this.tabIndex=index;
  }

  getFunnelData() {
    this.cardData = [
      {
        offer: " ",
        image: "../assets/images/Group 444.png",
        qty: "4 Bags",
        weight: "1LB",
        price: "$18.00",
        shipCharge: "$6",
        discountedPrice: "",
      },
      {
        offer: "5% OFF",
        image: "../assets/images/Group 442.png",
        qty: "8 Bags",
        weight: "2LBS",
        price: "$36.00",
        shipCharge: "Free",
        discountedPrice: "$34.20",
      },
      {
        offer: "10% OFF",
        image: "../assets/images/Group 440.png",
        qty: "12 Bags",
        weight: "3LBS",
        price: "$54.00",
        shipCharge: "Free",
        discountedPrice: "$48.60",
      },
    ];
  }

  getCoffeeData() {
    this.coffeeData =  [
      {
        img: "../assets/images/Image 1.png",
        name: "Lavazza Coffee",
        type: "EXOTIC . RICH . AROMATIC",
        roastType: " ",
        qty: 0,
      },
      {
        img: "../assets/images/Image 11-6.png",
        name: "Van Houtte",
        type: "CLASSIC . NUTTY . ROUND BODY",
        roastType: "DARK ROAST",
        qty: 0,
      },
      {
        img: "../assets/images/Image 11-6.png",
        name: "Van Houtte",
        type: "CLASSIC . NUTTY . ROUND BODY",
        roastType: "LIGHT ROAST",
        qty: 0,
      },
      {
        img: "../assets/images/Image 11-6.png",
        name: "Van Houtte",
        type: "CLASSIC . NUTTY . ROUND BODY",
        roastType: "",
        qty: 0,
      },
      {
        img: "../assets/images/Image 11-6.png",
        name: "Van Houtte",
        type: "CLASSIC . NUTTY . ROUND BODY",
        roastType: "",
        qty: 0,
      },
      {
        img: "../assets/images/Image 11-6.png",
        name: "Van Houtte",
        type: "CLASSIC . NUTTY . ROUND BODY",
        roastType: "",
        qty: 0,
      },
      {
        img: "../assets/images/Image 11-6.png",
        name: "Van Houtte",
        type: "CLASSIC . NUTTY . ROUND BODY",
        roastType: "LIGHT ROAST",
        qty: 0,
      },
      {
        img: "../assets/images/Image 11-6.png",
        name: "Van Houtte",
        type: "CLASSIC . NUTTY . ROUND BODY",
        roastType: "",
        qty: 0,
      },
      {
        img: "../assets/images/Image 11-6.png",
        name: "Van Houtte",
        type: "CLASSIC . NUTTY . ROUND BODY",
        roastType: "",
        qty: 0,
      },
      {
        img: "../assets/images/Image 11-6.png",
        name: "Van Houtte",
        type: "CLASSIC . NUTTY . ROUND BODY",
        roastType: "DARK ROAST",
        qty: 0,
      },
      {
        img: "../assets/images/Image 11-6.png",
        name: "Van Houtte",
        type: "CLASSIC . NUTTY . ROUND BODY",
        roastType: "",
        qty: 0,
      },
      {
        img: "../assets/images/Image 11-6.png",
        name: "Van Houtte",
        type: "CLASSIC . NUTTY . ROUND BODY",
        roastType: "",
        qty: 0,
      },
    ];
  }
  getGrindData() {
    this.grindData = [
      {
        img: "../assets/images/Group 434.png",
        grindType: "Beans",
        beanType: "Whole Beans",
      },
      {
        img: "../assets/images/Group 404.png",
        grindType: "Press",
        beanType: "Coarse",
      },
      {
        img: "../assets/images/Group 464.png",
        grindType: "Drip",
        beanType: "Medium",
      },
      {
        img: "../assets/images/Group 458.png",
        grindType: "Cone",
        beanType: "Medium-fine",
      },
      {
        img: "../assets/images/Group 410.png",
        grindType: "Expresso",
        beanType: "Fine",
      },
      {
        img: "../assets/images/Group 432.png",
        grindType: "Extra Fine",
        beanType: "The Finest",
      },
    ];
  }

  getSubscriptionData() {
    this.subData = [
      {
        subStatement: "Once A Month",
      },
      {
        subStatement: "Every Other Month",
      },
      {
        subStatement: "Every 3 Months",
      },
    ];
    this.subMessage =
      "All subscription orders will be roasted and shipped on the 1st of Every Month.";
  }
  getAddOns() {
    this.addOns = [
      {
        img: "../assets/images/Image cup.png",
        name: "Coffee Filter",
      },
      {
        img: "../assets/images/Image spreso.png",
        name: "Hand Spreso",
      },
      {
        img: "../assets/images/Image cookies.png",
        name: "Classic Cookies",
      },
      {
        img: "../assets/images/Image mug.png",
        name: "Coffee Mug",
      },
    ];
  }

}
