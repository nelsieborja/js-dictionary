// This is actually a constructor function!!
// Regardless, functions are actually the only way to create new scope
function hello() {
  this.helloMsg = 'Hello';
  this.worldMsg = 'World!';

  this.hello = () => {
    return this.helloMsg;
  };

  this.world = () => {
    return this.worldMsg;
  };

  this.updateMsgs = (helloMsg = '', worldMsg = '') => {
    this.helloMsg = helloMsg;
    this.worldMsg = worldMsg;
  };
}

module.exports = hello;
