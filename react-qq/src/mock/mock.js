const Mock = require('mockjs')
const fs = require('fs');

const end = +new Date(), 
    start = end - 24*60*60*1000;
const friendList = Mock.mock({
    "list|300": [{
        id: "@id",
        name: "@name",
        lastTime: `@integer(${start}, ${end})`,
        unRead: `@integer(0, 100)`,
        "isTop|1-2": true,
        "isRead|1-2": false,
        "messgaes|10": [{
            "role|+1": ['send', 'receiver'],
            "conetent": "@word"
        }]
    }]
})

fs.writeFileSync('./friendList.json', JSON.stringify(friendList.list));