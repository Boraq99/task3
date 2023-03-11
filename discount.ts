// 3- Task: Create a Function to Determine the Discount Amount for a Product

// Breakdown:

// · Create a function that takes a product price and a discount percentage as input and calculates the
//discount amount for the product using the formula:
// discount amount = product price * (discount percentage / 100).

// · If the discount percentage is greater than or equal to 50%, the function should return an error
//message indicating that the discount percentage is invalid.

// · Display the original price, discount percentage, discount amount, and final price of the product to
//the user as output.

// · Test the function with different product prices and discount percentages.

function calcdiscount(productprice: number, discountpercentage: number): void {
  if (discountpercentage >= 50) {
    console.error("Error: Invalid discount percentage");
    return;
  }

  let discountamount = productprice * (discountpercentage / 100);
  let finalprice = productprice - discountamount;

  console.log(`Original Price: $${productprice.toFixed(2)}`);
  console.log(`Discount Percentage: ${discountpercentage}%`);
  console.log(`Discount Amount: $${discountamount.toFixed(2)}`);
  console.log(`Final Price: $${finalprice.toFixed(2)}`);
}

calcdiscount(100, 10);
calcdiscount(50, 30);
calcdiscount(200, 60);
calcdiscount(500, 80);
