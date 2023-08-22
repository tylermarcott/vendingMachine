import { AppState } from "../AppState.js";
import { snacksService } from "../services/SnackService.js";
import { setHTML } from "../utils/Writer.js";


export class SnackController {

  constructor() {
    console.log("Let's buy some snacks! From controller")

    // NOTE: calling this so it draws they html out instead of starting with nothing.
    this.drawMoney()
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
  }

  chooseSnack(snackName) {
    console.log('selecting', snackName)
  }







}

