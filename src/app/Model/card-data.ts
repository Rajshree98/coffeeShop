export class CardData {
    offer:string | undefined;
    image!:string;
    qty!:string;
    weight!:string;
    price!:string;
    shipCharge!:string;
   discountedPrice!:string;
}

export class coffeeData{
    img!:string;
   name!:string;
    type!:string;
    roastType!:string;
    qty!:number;
}
export class grindData{
    img!:string;
    grindType!:string;
    beanType!:string;
}

export class coffeeSubscription{
    subStatement!:string;
}

export class addOns{
    img!:string;
    name!:string;
}

export class coffeeSelected{
    img!:string;
    purpose!:string;
    weight!:string;
    message!:string;
}

export class checkoutData{
    amount!:string;
    roastedPreference!:string;
    grindType!:string;
    freq!:string;
    addOns!:string;
    img!:string;
    purpose!:string;
    weight!:string;
    price!:string;
    shipCharge!:string;
    beanType!:string;
    message!:string;
    bags!:string;
}

export class coffeeTypeList{
    name!:string;
    qty!:string;
}