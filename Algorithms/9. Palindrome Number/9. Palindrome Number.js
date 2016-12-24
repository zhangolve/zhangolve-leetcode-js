// Source : https://leetcode.com/problems/longest-palindromic-substring/
// Author : zhangolve zhangolve@gmail.com
// Date   : 2016-12-24


/**
 * @param {number} x
 * @return {boolean}
 */
//在字符串中插入一个或多个字符
String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};


var isPalindrome = function(x) {
    if (x < 0) {
        return false  //如果这个数字是负数，则直接输出错误
    }
    var theStr = '' + x + ''; //转换成字符串,通过在数字的前后两边加上""，直接将数字转换成字符串，利用的是JS的弱类型特性.
    var len = theStr.length;   //这个时候判断这个字符串的长度是奇数还是偶数，来分别作出判断
    if (len == 1) {
        return true
    } else if (theStr.length % 2 === 0) //字符串长度为偶数，则需要加一个
    {
        theStr = theStr.splice((theStr.length / 2), 0, '*'); //构造出一个奇数序列
        for (var i = 1; i <= len / 2; i++) {
            if (theStr[len / 2 - i] !== theStr[len / 2 + i]) {   //只要有一个不能够匹配上，则直接输出false
                return false  
            }
        }
        return true   //当所有的匹配都成功的时候才能够输出true
    } else {
        for (var j = 1; j < len / 2; j++) {
            var center = (len - 1) / 2; //长度不为1的奇数             
            if (theStr[center - j] !== theStr[center + j]) {
                return false
            }
        }
        return true
    }
};

/*
some link:http://stackoverflow.com/questions/4313841/javascript-how-can-i-insert-a-string-at-a-specific-index

*/
