


export class Snack {
  constructor(snack) {
    this.name = snack.name
    this.price = snack.price
    this.imgUrl = snack.imgUrl
  }

  // FIXME: this layout is a little wonky lol

  // NOTE: this is the template used to draw each of our snacks on the page
  get ListTemplate() {
    return `
      <div class="col-12">
        <img src="${this.imgUrl}" alt="snack.img">
        <div>${this.name}</div>
        <div>${this.price}</div>
        <button class="button">Buy!</button>
    `
  }





}