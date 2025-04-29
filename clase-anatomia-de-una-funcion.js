function calculateDiscountedPrice (price, discountPercentage){
    const discount = (price * discountPercentage)/100;
    const priceWhitDiscount = price - discount

    return priceWhitDiscount
}
const originalPrice = 1000;
const discountPercentage = 25;
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage)
console.log(`Original Price: $` + originalPrice)
console.log(`Discount: ` + discountPercentage + '%')
console.log(`Price whit discount: $` + finalPrice)