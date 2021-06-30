const Mock = require('mockjs')
const fs = require('fs');

// Mock Swier
let swipers = Mock.mock({
    "list|10": [{
        src: "@image(750x400, @color)"
    }]
})
fs.writeFileSync('./swiper.json', JSON.stringify(swipers.list));

// Mock List
const categories = [
    "品牌直发",
    "蔬菜水果",
    "便当",
    "肉蛋水产",
    "粮油副食",
    "熟食速食",
    "牛奶冰品",
    "酒水饮品",
    "休闲小食",
    "冲调饮品",
    "母婴天地",
    "进口专区",
    "美容洗护",
    "美妆个护",
    "纸品家清",
    "家居日用",
    "节日礼券",
    "便利特色",
]
const tags = ["满29赠毛豆", "满59减15", "14.9元5件"]
let goods = Mock.mock({
    "list|300": [{
        id: "@id",
        image: "@image(60x60, @color)",
        name: "@cname",
        "price": "@float(10, 100, 2, 2)",
        "tag|+1": tags,
        "category|+1": categories,
        "num": 0,
        "description": "@cword(20,30)"
    }]
})
fs.writeFileSync('./goods.json', JSON.stringify(goods.list));