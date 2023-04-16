const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
  chains: [],
  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    this.chains.push(value);
    return this;
  },
  removeLink(position) {
    if (
      isNaN(position) ||
      typeof position !== 'number' ||
      position < 0 ||
      position == 0 ||
      position % 1 !== 0 ||
      position > this.chains.length - 1
    ) {
      this.chains = [];
      throw new Error(`You can't remove incorrect link!`);
    }

    this.chains.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    let result = '';
    for (let i = 0; i < this.chains.length; i++) {
      result += `( ${this.chains[i]} )~~`;
    }
    this.chains = [];
    return result.substring(0, result.length - 2);
  },
};

// chainMaker
//   .addLink('GHI')
//   .addLink(null)
//   .reverseChain()
//   .addLink(333)
//   .reverseChain()
//   .reverseChain()
//   .addLink(0)
//   .reverseChain()
//   .reverseChain()
//   .addLink('GHI')
//   .finishChain();

// console.log(
//   chainMaker
//     .addLink('8.963')
//     .reverseChain()
//     .reverseChain()
//     .reverseChain()
//     .reverseChain()
//     .addLink({ 0: 'first', 1: 'second', length: 2 })
//     .reverseChain()
//     .addLink(3.14)
//     .addLink('DEF')
//     .reverseChain()
//     .finishChain(),
// );

module.exports = {
  chainMaker,
};
