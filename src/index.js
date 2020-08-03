const sayHello = (name = "hello") => console.log(name) ;
sayHello();

import {sayHello as sayHelloSecond} from "./say-hello.js"
sayHelloSecond();