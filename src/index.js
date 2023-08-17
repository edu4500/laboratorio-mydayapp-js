import "./css/base.css";

import { sayHello } from "./js/utils";
import { storage } from "./js/storage";

(function (){
  let _storage = new storage();
  console.log(sayHello("Hello"));
})()


