import "./css/base.css";

import { sayHello,Util } from "./js/utils";
import { Storage } from "./js/storage";

(function (){
  let _storage = new Storage();
  let _util = new util();
  console.log(sayHello("Hello"));
  debugger
  if(_storage.length==0){
    _util.hiddenMain();
    _util.hiddenFooter();
  }
})();


