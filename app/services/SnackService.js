import { AppState } from "../AppState.js";



class SnacksService {

  addMoney() {

    AppState.totalMoney

    // console.log('adding money. Current money:', AppState.totalMoney)

    AppState.totalMoney += 0.25

    // console.log('total money now $', AppState.totalMoney)
  }
}






export const snacksService = new SnacksService()