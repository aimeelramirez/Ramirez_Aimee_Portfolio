'use strict';

class StaticMethodCall1 {
    constructor() {
      console.log(StaticMethodCall1.staticMethod()); 
      // 'static method has been called.' 
  
      console.log(this.constructor.staticMethod()); 
      // 'static method has been called.' 
    }
  
    static staticMethod() {
      return 'static method has been called.';
    }
  }
console.log(StaticMethodCall1.staticMethod())