// function Invoice(subTotal) {
//   this.taxRate = 0.06;
//   this.subTotal = subTotal;

//   this.total = setInterval(() => {
//     console.log((this.taxRate * this.subTotal) + this.subTotal);
//     // console.log(this);
//   }, 2000);
// }

// const inv = new Invoice(200);
// inv.total();

function Invoice(subTotal) {
  this.taxRate = 0.06;
  this.subTotal = subTotal;

  this.total = setInterval(() => {
     console.log((this.taxRate * this.subTotal) + this.subTotal)
    // console.log(this)
  }, 2000)
}

const inv = new Invoice(200);
// inv.total();
