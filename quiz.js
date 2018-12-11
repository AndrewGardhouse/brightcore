let Fernet = require('fernet');

let secret = new Fernet.Secret('TluxwB3fV_GWuLkR1_BzGs1Zk90TYAuhNMZP_0q4WyM=');
let message = 'gAAAAABcDnpDIW1iZEfLz-rUFZfjgHM5Do3cAHrHl2gEQ042Y2eK0UUBbqUcTcW1bfDosAQouKNYJjDLEBunjba07TRa88DIZX4s-ljxfHoSq-5-YtZenArwzXofCdj8G83baVr1tPR5rR4UcIWRzhyDBQT9SJyonbr13JcMPJgJHF7BnpJWF7wpEDvF9g5v19KvZgAaUWnu';
let token = new Fernet.Token({
  secret,
  token: message,
  ttl:0,
});
let decoded = token.decode();

console.log(decoded);
