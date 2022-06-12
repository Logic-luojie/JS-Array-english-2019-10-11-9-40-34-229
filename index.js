// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
a instanceof Array; //false
b instanceof Array; //true

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (var index in a) {
   a[index] = a[index]*2;
}
console.log(a);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
console.log(colors.join(' '));
// case 2 output: 'Red+Green+White+Black'
console.log(colors.join('+'));
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(','))


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort((a,b)=>b-a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
// 声明一个空对象
var obj = {};
//遍历数组
for (var i = 0; i < a.length; i++) {
    //声明一个key接收数组中的每一个值
    var key = a[i];
    //判断 如果对象中有这个属性 个数加一 如果没有 添加这个属性
    if (obj[key]) {
        obj[key]++;
     } else {
        obj[key] = 1;
    }
}
//定义最大的次数 以及 最大字符串的key
var Count = 0;
var string = '';
for (var key in obj) {
    if (Count < obj[key]) {
        Count = obj[key];
        string = key;
    }
}
console.log(string);