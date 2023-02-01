// 注释
// 1.链表里的元素不是连续的，通过.next
// 2. JS没有链表，可以有用object
// 3. 链表常用操作： 修改next、遍历链表
// 4. JS中的原型链也是一个链表，通过__proto__
// 5. 使用指针可以获取JSON的节点值

const a = {val : 'a'}
const b = {val : 'b'}
const c = {val : 'c'}
const d = {val : 'd'}

a.next = b;
b.next = c;
c.next = d;

// 遍历链表

// 定义指针
let p = a;
while(p){
    console.log(p);
    p = p.next
}

// 插入
const e = { val: 'e' }
c.next = e;
e.next = d;

// 删除
c.next = d;