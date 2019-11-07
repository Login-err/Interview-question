1. 创建一个空对象
2. 链接到原型
3. 绑定this值
4. 返回新对象

```javascript
function createNew(fn, ...args){
    const obj = Object.create(fn.prototype); // 链接到原型
    const obj1 = fn.apply(obj, args);// 绑定this
    return obj1 instanceof Object ? obj1 : obj; // 如果返回值是一个对象就返回改对象，否则返回构造函数的一个实例
}
```

