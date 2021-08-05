/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],
    'Main Tab' : "主标签页",
    "Improvements" : "改良",
    "Boosters" : "增幅器",
    "Mastery" : "支配",
    "Mastery Rewards" : "镀金奖励",
    "The Shell" : "命令行",
    "The Motherboard" : "主板",
    "The Core" : "核心"
}


//需处理的前缀
var cnPrefix = {}

//需处理的后缀
var cnPostfix = {
    "Default" : "默认",
    "Aqua" : "海蓝",
    "NEW" : "新",
    "ALWAYS" : "总是",
    "AUTOMATION" : "自动",
    "INCOMPLETE" : "未完成",
    "NEVER" : "永不",
    "NORMAL" : "通常"
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^e([\d\.]+)e(\d+)$/,
    /^e([\d\.]+)e(\d+)\/sec$/,
];
var cnExcludePostfix = []

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([]);