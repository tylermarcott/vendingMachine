import { AppState } from "../AppState.js";
import { snacksService } from "../services/SnackService.js";
import { setHTML } from "../utils/Writer.js";


export class SnackController {

  constructor() {
    console.log("Let's buy some snacks! From controller")

    // NOTE: calling this so it draws they html out instead of starting with nothing.
    this.drawMoney()
    this.drawSnacks()
  }



  addMoney() {
    snacksService.addMoney()

    this.drawMoney()
  }

  drawMoney() {
    const money = AppState.totalMoney

    // console.log('logging total money. We currently have this much money:', money)

    let content = `
      <div class="row">Total Money: $${money}</div>
    `
    setHTML('total-money', content)
  }

  drawSnacks() {
    let snacks = AppState.snacks

    let listContent = ''

    snacks.forEach(s => listContent += s.ListTemplate)

    setHTML('snacks-list', listContent)

    // console.log(listContent)
  }

  drawSnacksPurchased() {
    let snacksPurchased = AppState.boughtSnack

    let listContent = ''

    console.log('drawing snack:', snacksPurchased)

    // FIXME: it's saying that this is not a function.
    snacksPurchased.forEach(s => listContent += s.BuyListTemplate)

    setHTML('purchased-snacks', listContent)
  }

  // TODO: for purchasing snacks, I have to make it so the onclick for the specific buy button of the specific snack is passed into my buySnack() function. This name is then passed to our service so we can find and buy the snack.

  buySnack(snackName) {

    // TODO: ok, so I forgot to put quotes around my snackname in my template, that was making it so it was just mustard, which is just an undefined var, instead of passing the string 'mustard'. Now, I get my console log below. I just have to continue on. Make sure that the snacks are being added to an array properly, check class model.

    // console.log(snackName)

    snacksService.buySnack(snackName)

    this.drawSnacksPurchased()
  }





}
