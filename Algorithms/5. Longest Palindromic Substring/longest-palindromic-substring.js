// Source : https://leetcode.com/problems/longest-palindromic-substring/
// Author : zhangolve zhangolve@gmail.com
// Date   : 2016-12-24


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    //当有一个对称点的时候
   
    var newStr='';  //将构成回文的字符串单独拿出来
    var db=[];      //将构成会问的字符串统一放到数组中方便比较
    var dblen=0;
    var finalStr='';  //最终输出的回文字符串
    //遍历，把每一个字符串中的值作为中心点进行试验
    for(var i=1;i<s.length-1;i++)
    {    var max=1;
       
        for(var j=1;j<=i;j++)  //如果i为1，则j最大也为1,
        {
            if(s[i-j]==s[i+j])  //中心点两侧值做出比较
          
            max+=2;             //如果中心点两侧值相同，构成回文，则将max加上2
        }
       
        newStr=s.substr(i-((max-1)/2),max);
       
        db.push(newStr);
    }
    for(var k=0;k<db.length;k++)
    {
        if(db[k].length>dblen)
        {
            dblen=db[k].length;
            finalStr=db[k]
        }
    }
    return finalStr;
};

/*
当是偶对称的时候，可以通过加入*这样的字符来构造出偶对称来。
some link:https://www.youtube.com/watch?v=V-sEwsca1ak
https://github.com/hanzichi/leetcode/blob/master/Algorithms/Longest%20Palindromic%20Substring/longest-palindromic-substring.js
*/