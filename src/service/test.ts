// 1.类型注解
// any, string, number, boolean
// let arr: number = [1, 2], let arr2: [string, number] = ['abc', 1] // 必须已知元素数量和类型
// enum Color { Red, Blue }
// never 类型: never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。
// 这意味着声明为 never 类型的变量只能被 never 类型所赋值，在函数中它通常表现为抛出异常或无法执行到终止点（例如无限循环）

let title: string;
title = "haha";
// title = 1; 错误

let title2 = "xx"; // 类型推论
// title2 = 1; // 会错误

let names: string[];
names = ["tom", "jerry"];

let foo: any;
foo = "xx";
foo = 1;

let list: any[];
list = [1, "abc", true];

function geeter(name: string): string {
  console.log(name);
  return "hello, " + name;
}

// ?表示可选参数
function geeter1(name: string, age?: number): string {
  console.log(name);
  return "hello, " + name;
}

geeter1("aa");
// geeter(1);

function geeter2(name: any): void {
  // return name;
}
geeter2("haha");

let a: [string, number] = ["1", 1];

enum Color {
  Red,
  Blue
}
let co: Color = Color.Blue;
console.log(co); // 输出的是索引: 1

let b: never;
//b = 123;// 报错
// b = (() => {
//   throw new Error("ss");
// })(); // ok

let d: string | number;
d = 1;
d = "2";
// d=true// 报错
