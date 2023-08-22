


export class Snack {
  constructor(snack) {
    this.name = snack.name
    this.price = snack.price
    this.imgUrl = snack.imgUrl
  }


  // NOTE: this is the template used to draw each of our snacks on the page
  get ListTemplate() {
    return `
      <div class="col-6">
        <div>${this.name}</div>
        <div>${this.price}</div>
      </div>
      <div class="col-6">
        <button class="button">Buy!</button>
      </div>
    `
  }





}