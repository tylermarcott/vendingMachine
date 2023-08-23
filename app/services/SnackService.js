import { AppState } from "../AppState.js";



class SnacksService {

  addMoney() {
    AppState.totalMoney

    // console.log('adding money. Current money:', AppState.totalMoney)

    AppState.totalMoney += 0.25

    // console.log('total money now $', AppState.totalMoney)
  }


  buySnack(snackName) {
    const selectedSnack = AppState.snacks.find(s => s.name == snackName)

    if (AppState.totalMoney >= selectedSnack.price) {

      AppState.boughtSnack = selectedSnack

      // NOTE: this returns the whole snack class instance
      console.log('bought', AppState.boughtSnack)


      // TODO: have to perform business logic to prevent used from being able to buy a snack if they don't have enough money. If they do have enough money, add the snack to the array of snacks and subtract the cost of the snack from our total money.

    }
    else {
      console.log('not enough money!')
    }



  }







}






export const snacksService = new SnacksService()