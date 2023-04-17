const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
let alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

//VigenereCipheringMachine.encrypt('attack at dawn!', 'alphonse');

class VigenereCipheringMachine {
  constructor(direct) {
    this.directMachine = direct;
  }

  encrypt(message, key) {
    if (arguments.length < 2 || typeof message !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
    }
    return this.encryptsMessage(message, key);
  }

  decrypt(string, key) {
    if (arguments.length < 2 || typeof string !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
    }
    return this.decryptsMessage(string, key);
  }

  encryptsMessage(message, key) {
    let wordInKey = '';
    let keyIndex = 0;
    // записали message в кодовом слове
    for (let i = 0; i < message.length; i++) {
      if (isAlpha(message[i])) {
        if (keyIndex == key.length) {
          keyIndex = 0;
        }
        wordInKey += key[keyIndex];
        keyIndex++;
      } else {
        wordInKey += message[i];
      }
    }
    // нашили индекс букв wordInKey в alphabet
    let indexKeyAlpha = [];
    let indexMessageAlpha = [];
    for (let i = 0; i < wordInKey.length; i++) {
      if (isAlpha(wordInKey[i])) {
        for (let j = 0; j < alphabet.length; j++) {
          if (alphabet[j].toLowerCase() === wordInKey[i].toLowerCase()) {
            indexKeyAlpha.push(j);
          }
        }
      } else {
        indexKeyAlpha.push(wordInKey[i]);
      }
    }
    // нашли инднеасы message в alphabet
    for (let i = 0; i < message.length; i++) {
      if (isAlpha(message[i])) {
        for (let j = 0; j < alphabet.length; j++) {
          if (alphabet[j].toLowerCase() === message[i].toLowerCase()) {
            indexMessageAlpha.push(j);
          }
        }
      } else {
        indexMessageAlpha.push(message[i]);
      }
    }

    // сумируем индексы ключа и сообщения
    let meaning = [];

    for (let i = 0; i < indexMessageAlpha.length; i++) {
      if (isAlpha(wordInKey[i])) {
        let sumAlpha = indexMessageAlpha[i] + indexKeyAlpha[i];
        if (sumAlpha >= 26) {
          meaning.push(sumAlpha % 26);
        } else {
          meaning.push(sumAlpha);
        }
      } else {
        meaning.push(wordInKey[i]);
      }
    }

    // шифруем
    let result = '';
    for (let i = 0; i < meaning.length; i++) {
      if (typeof meaning[i] === 'number') {
        result += alphabet[meaning[i]];
      } else {
        result += meaning[i];
      }
    }
    if (this.directMachine == false) {
      result = result.split('').reverse().join('');
    }
    return result;
  }
  decryptsMessage(message, key) {
    let wordInKey = '';
    let keyIndex = 0;
    // записали message в кодовом слове
    for (let i = 0; i < message.length; i++) {
      if (isAlpha(message[i])) {
        if (keyIndex == key.length) {
          keyIndex = 0;
        }
        wordInKey += key[keyIndex];
        keyIndex++;
      } else {
        wordInKey += message[i];
      }
    }
    // нашили индекс букв wordInKey в alphabet
    let indexKeyAlpha = [];
    let indexMessageAlpha = [];
    for (let i = 0; i < wordInKey.length; i++) {
      if (isAlpha(wordInKey[i])) {
        for (let j = 0; j < alphabet.length; j++) {
          if (alphabet[j].toLowerCase() === wordInKey[i].toLowerCase()) {
            indexKeyAlpha.push(j);
          }
        }
      } else {
        indexKeyAlpha.push(wordInKey[i]);
      }
    }
    // нашли инднеасы message в alphabet
    for (let i = 0; i < message.length; i++) {
      if (isAlpha(message[i])) {
        for (let j = 0; j < alphabet.length; j++) {
          if (alphabet[j].toLowerCase() === message[i].toLowerCase()) {
            indexMessageAlpha.push(j);
          }
        }
      } else {
        indexMessageAlpha.push(message[i]);
      }
    }

    // вычетаем индексы ключа и сообщения
    let meaning = [];

    for (let i = 0; i < indexMessageAlpha.length; i++) {
      if (isAlpha(wordInKey[i])) {
        let sumAlpha = indexMessageAlpha[i] - indexKeyAlpha[i];
        if (sumAlpha < 0) {
          meaning.push(sumAlpha + 26);
        } else {
          meaning.push(sumAlpha);
        }
      } else {
        meaning.push(wordInKey[i]);
      }
    }

    // шифруем
    let result = '';
    for (let i = 0; i < meaning.length; i++) {
      if (typeof meaning[i] === 'number') {
        result += alphabet[meaning[i]];
      } else {
        result += meaning[i];
      }
    }
    // let reverseOut = result.split('').reverse().join('');
    if (this.directMachine == false) {
      result = result.split('').reverse().join('');
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
let message = 'attack at dawn!';
let key = 'alphonse';
function isAlpha(ch) {
  return /^[A-Z]$/i.test(ch);
}
// console.log(wordInKey);
// console.log(meaning);
// // console.log(indexMessageAlpha);
// // console.log(indexKeyAlpha);
// console.log(result);
