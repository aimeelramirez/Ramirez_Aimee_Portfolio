'use strict';

class StaticMethodCall2 {
    static staticMethod() {
      return 'Static method has been called';
    }
    static anotherStaticMethod() {
      return this.staticMethod() + ' from another static method';
    }
  }
  console.log(StaticMethodCall2.staticMethod())
  // 'Static method has been called'
  
 console.log(StaticMethodCall2.anotherStaticMethod())