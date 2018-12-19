// Step 1
const solution = [104, 116, 116, 112, 115, 58, 47, 47, 101, 110, 103, 105, 110, 101, 101, 114, 105, 110, 103, 45, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 46, 98, 114, 105, 116, 101, 99, 111, 114, 101, 46, 99, 111, 109, 47, 113, 117, 105, 122, 47, 115, 97, 97, 115, 100, 97, 115, 100, 108, 102, 108, 102, 108, 115].map(code => String.fromCharCode(code)).join('')

console.log(solution);

// Step 2
const Fernet = require('fernet');

const secret = new Fernet.Secret('TluxwB3fV_GWuLkR1_BzGs1Zk90TYAuhNMZP_0q4WyM=');
// to get the entire message, I went into Chrome devtools and removed 'overflow-x: hidden;' from the body
const message = 'gAAAAABcDnpDIW1iZEfLz-rUFZfjgHM5Do3cAHrHl2gEQ042Y2eK0UUBbqUcTcW1bfDosAQouKNYJjDLEBunjba07TRa88DIZX4s-ljxfHoSq-5-YtZenArwzXofCdj8G83baVr1tPR5rR4UcIWRzhyDBQT9SJyonbr13JcMPJgJHF7BnpJWF7wpEDvF9g5v19KvZgAaUWnu';
const token = new Fernet.Token({
  secret,
  token: message,
  ttl:0,
});
const decoded = token.decode();

console.log(decoded);
