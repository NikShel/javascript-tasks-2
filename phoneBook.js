'use strict';

var phoneBook = [];

var EMAIL_RE = new RegExp('^[a-zа-я0-9]+@[a-zа-я0-9\\-]+(?:\\.[a-zа-я0-9\\-]+)+$');
var PHONE_RE = new RegExp('^\\+{0,1}\\d*?(?:\\(\\d{3}\\)|\\d{3})(?:\\d{7}|\\d{3}-\\d-\\d{3})$');


function findMatching(query) {
    var matchingContacts = [];
    var contact;
    for (var i = 0; i < phoneBook.length; i++) {
        contact = phoneBook[i];
        if (contact[0].indexOf(query) >= 0 ||
            contact[1].indexOf(query) >= 0 ||
            contact[2].indexOf(query) >= 0) {

            matchingContacts.push(contact);
        }
    }
    return matchingContacts;
}


module.exports.add = function add(name, phone, email) {
    phone = phone.replace(/\s+/g, '');
    if (name !== '' &&
        phone.match(PHONE_RE) !== null &&
        email.match(EMAIL_RE) !== null) {

        phoneBook.push([name, phone, email]);
    }
};


module.exports.find = function find(query) {
    var matching;
    if (query) {
        matching = findMatching(query);
    } else {
        matching = phoneBook;
    }
    var contact;
    for (var i = 0; i < matching.length; i++) {
        contact = matching[i];
        console.log(contact.join(', '));
    }
};


module.exports.remove = function remove(query) {
    var matching = findMatching(query);
    for (var i = 0; i < matching.length; i++) {
        phoneBook.splice(phoneBook.indexOf(matching[i]), 1);
    }
    console.log('Контактов удалено:' + matching.length);
};

/*
   Функция импорта записей из файла (задача со звёздочкой!).
*/
module.exports.importFromCsv = function importFromCsv(filename) {
    var data = require('fs').readFileSync(filename, 'utf-8');

    // Ваша чёрная магия:
    // - Разбираете записи из `data`
    // - Добавляете каждую запись в книгу
};

/*
   Функция вывода всех телефонов в виде ASCII (задача со звёздочкой!).
*/
module.exports.showTable = function showTable() {

    // Ваша чёрная магия здесь

};
