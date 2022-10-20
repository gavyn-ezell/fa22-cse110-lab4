function discountPrices(prices, discount) {
    //var discounted = [];
    //var finalPrice = 0;
    //let discounted = [];
    //let finalPrice = 0;

    const discounted = [];
    const length = prices.length;

    for (let i = 0; i < prices.length; i++) {
        const discountedPrice = prices[i] * (1 - discount);
        //finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(discountedPrice);
    }

    //console.log(i);
    //console.log(length)
    // console.log(finalPrice);
    return discounted
}

console.log(discountPrices([100,200,300], 0.5))