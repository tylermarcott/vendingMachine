import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { SnackController } from "./controllers/SnackController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: SnackController,
    view: /*html*/`

      <section class="row justify-content-end" id="total-money"></section>

      <section class="row" id="snacks-list">

      <section class="row" id="purchased-snacks">

      </section>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
  // <div class="card">
  //   <div class="card-body">
  //     <p>Home Page</p>
  //     <button class="btn btn-dark" onclick="app.HomeController.testButton()">😎</button>
  //   </div>
  // </div>
]