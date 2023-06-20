import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { checkoutData, coffeeSelected } from "src/app/Model/card-data";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"],
})
export class LandingPageComponent {
  public coffeeSelected: coffeeSelected[] = [];
  public checkoutData: checkoutData = {
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
    bags: ""
  };

  constructor(private router: Router) {
    this.getSelectedCoffeeData();
  }
  coffeeSelection(coffeeData: any) {
    this.checkoutData.img = coffeeData.img;
    this.checkoutData.weight = coffeeData.weight;
    this.checkoutData.purpose = coffeeData.purpose;
    this.router.navigate(["funnel", coffeeData]);
  }
  getSelectedCoffeeData() {
    this.coffeeSelected = [
      {
        img: "../assets/images/Image 18.png",
        purpose: "For Myself",
        weight: "1lb bags",
        message: "Delivered right to yout door!",
      },
      {
        img: "../assets/images/Office Coffee@2x.png",
        purpose: "For the Office",
        weight: "5lb bags",
        message: "No more coffee runs at work!",
      },
      {
        img: "../assets/images/AdobeStock_243394535@2x.png",
        purpose: "It's A Gift",
        weight: "1lb bags",
        message: "Give the gift of coffee.",
      },
    ];
  }
}
