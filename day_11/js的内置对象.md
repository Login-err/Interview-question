#### js有三大对象

* 本地对象
    * 与宿主无关，独立于宿主环境的ECMAScript实现提供的对象
    * 简单来说，本地对象就是引用类型
    * 这些引用类型在运行环境过程中需要通过new来创建所需的实例对象
    * 包含Object、Array、Date、RegExp、Function、Boolean、Number、String
* 内置对象
    * 与宿主无关，独立于宿主环境的ECMAScript实现提供的对象
    * 与ECMAScript程序开始执行之前就存在，本身就是实例化内置对象，开发者无需再去实例化
    * 内置对象是本地对象的子集
    * 包含Global和Math
    * ECMAScript5中添增了JSON这个存在于全局的内置对象
* 宿主对象
    * 由ECMAScript实现的宿主环境提供的对象，包含两大类，一个是宿主环境提供，一个是自定义类对象。
    * 所有非本地对象都属于宿主环境
    * 对于嵌入到网页中的JS来说，其宿主对象就是浏览器提供的对象，浏览器对象有很多，如Window和Document等
    * 所有的DOM和BOM对象都属于宿主环境

##### Object类型

###### 属性

* constructor
* prototype

实例方法

1. toString()

> [1, '2', true].toString(); // 1,2,true
>
> (new Date()).toString();// ‘Fri Oct 25 2019 21:28:44 GMT+0800 (中国标准时间)’
>
> ({ name: 'huanglian' }).toString(); // [object Object] 

2.  toLocaleString()

> (1234567).toLocaleString(); // 1,234,567
>
> (6.37588).toLocaleString(); // 6.376
>
> (new Date()).toLocaleString(); //"2019/10/25 下午9:30:52"

3. valueOf()

> 返回给定的原生Number对象值，参数可以是原生数据类型，string等

##### 静态方法

###### Objcet

1. Object.assign(target, ...sources)

    ```javascript
    const target = {
        a: 1
    }
    const source1 = {
        b: 2
    }
    const source2 = {
        c: function(){
            console.log(1);
        }
    }
    Object.assign(target, source1, source2);
    console.log(target);// {a:1, b:2, c:funciton(){...}}
    ```

2. Object.create(proto, [,propertiesObject])

    功能：创建一个对象，其原型是prototype，同时添加多个属性

    参数：

    * proto（必须）：原型对象，可以为null表示没有原型
    * descriptors（可选）：包含一个或多个属性描述符的对象

    propertiesObject参数详解：

    * 数据属性
        * value：值
        * writable：是否可修改属性的值
        * configurable： 是否可通过delete删除属性，重新定义
        * enumerable：是否可以for-in枚举
    * 访问属性
        * get()：访问
        * set()：设置值

    ```javascript
    function Person(name){
        this.name = name;
    }
    Person.prototype.say = function(){console.log('my name is' + this.name + ',my age is ' + this.age)};
    const person = new Person('huanglian');
    const p = Object.create(person, {
        age: {
            value: 20,
            writable: true,
            configurable: true
        },
        sex: {
            configurable: true,
            get: function(){
                return sex + '士';
            },
            set:function(value){
                sex = value;
            }
        }
    });
    p.sex = '男';
    p.say(); // 'my name is huanglian,my age is 20'
    console.log(p.sex); // 男士
    p.sex = '女'
    console.log(p.sex); // 女生
    ```

    

3. Object.defineProperty(obj, prop, descriptor)

    功能：在一个对象上定义一个新属性或修改一个现有属性，并返回该对象

    参数:

    * obj(必须)：被操作的目标对象
    * prop(必须)：被定义或修改的目标属性
    * descriptor(必须)：属性的描述符

    示例：

    ```javascript
    const obj = {};
    Object.defineProperty(obk, 'name', {
        writable: true,
        configurable: true,
        enumerabe: false,
        value: '张三'
    });
    console.log(obj.name);// 张三
    for(const key in obj){
        console.log(obj[key]); // 无结果
    }
    ```

    

4. Object.defineProperties(obj, props)

    功能：在一个对象上定义一个或多个新属性或修改现有属性，并返回该对象

    参数：

    * obj（必须）： 被操作的目标对象
    * props（必须）：该对象的一个或多个键值对定义了将要为对象添加或修改的属性的具体配置

    ```javascript
    const obj = {};
    Object.defineProperties(obj,{
       name: {
           writable: true,
           configurable: true,
           enumerable: false,
           value: '张三'
       },
       age:{
           writable: true,
           configurable: true,
           emumerable: true,
           value: 23
       }
    });
    console.log(obj.name); // 张三
    console.log(obj.age); // 23
    for(const key in obj){
        console.log(obj[key]); // 23
    }
    ```

5. Object.seal(obj) / Object.iseSealed(obj)

    功能：密封对象，阻止其修改现有属性的配置特效，即将对象的所有属性的configurable特效设置为false（也就是全部属性都无法重新配置，唯独可以把writable的值由true改为false，即冻结属性），并阻止添加新特性，返回该对象

    参数：

    * obj（必须）：被密封的对象

    示例：

    ```javascript
    const obj = {name:'张三'}
    Object.seal(obj);
    console.log(Object.isSealed(obj)); // true
    
    obj.name = '李四'; // 修改值成功
    console.log(obj.name); // '李四'
    obj.age = 23;
    console.log(obj.age); // undefined
    ```

6. Object.freeze(obj) / Object.isFrozen(obj)

    功能：完全冻结对象，在seal的基础上，属性值也不可以修改，即每个属性的wirtable也没设为false

    参数：

    * obj（必须）：被冻结的对象

    示例：

    ```javascript
    const obj = {name:'张三'}
    Object.freeze(obj);
    console.log(Object.isFrozen(obj)); // true
    
    obj.name = '李四'; // 修改值失败
    console.log(obj.name); // '张三'
    obj.age = 23;
    console.log(obj.age); // undefined
    Object.defineProperty(obj, 'name', {
        writable: true,
        configurable: true,
        enumerable: true
    }); //  报错 Cannot redefine property：name
    ```

7. getOwnPropertyDescriptor(obj, prop)

    功能：获取目标对象上某自有属性的配置特效（属性描述符），返回值为配置对象

    参数：

    * obj（必须）：目标对象
    * prop（必须）：目标自有属性

    示例：

    ```javascript
    const obj = {};
    Object.defineProperty(obj, 'name',{
        writable: true,
        configurable: false,
        enumerable: true,
        value: '张三'
    });
    const prop = Object.getOwnPropertyDescriptor(obj, 'name');
    console.log(prop) // {writable: true,configurable: false,enumerable: true,value: '张三'}
    ```

8. Object.getOwnPropertyNames(obj)

    功能：获取目标对象上的全部自有属性名（包括不可枚举属性）组成的数组

    参数：

    * obj（必须）：目标对象

    示例：

    ```javascript
    const obj = {};
    obj.say = function(){};
    
    Object.defineProperties(obj,{
        name:{
          writable: true,
          configurable: true,
          enumerable: true,
          value: '张三'
        },
        age:{
          writable: true,
          configurable: true,
          enumerable: false,
          value: 23
        }
    });
    const arr = Object.getOwnPropertyNames(obj);
    console.log(arr); // ['say', 'name', 'age']
    ```

9. Object.getPrototypeOf(obj)

    功能：获取指定对象的原型，即目标对象的prototype属性的值

    参数：

    * obj（必须）：目标对象

    示例：

    ```javascript
    function Person(name){
        this.name = name;
    }
    const person = new Person('张三');
    const p = Object.create(person);
    console.log(p); // Person {}
    const __proto__ = Object.getPrototypeOf(p);
    console.log(__proto__); ///Person {name: "张三"}
    ```

10. Object.setPrototypeOf(obj, proto)

    功能：设置目标对象的原型为另一个对象或null，返回该目标对象

    参数：

    * obj（必须）：目标对象
    * proto（必须）：原型对象

    示例：

    ```javascript
    const obj = {a:1}
    const proto = {};
    Object.setProtypeOf(obj, proto);
    proto.b = 2;
    proto.c = 3;
    console.log(obj.a);// 1
    console.log(obj.b);// 2
    console.log(obj.c);// 3
    ```

    >  Object.setPrototypeOf()方法的作用与__ proto __相同，用来设置当前对象的原型指向的对象(prototype)。它是 ES6 正式推荐的设置原型对象的方法。 

11. Object.keys(obj)

    功能：获取目标对象上所有可枚举属性组成的数组

    参数：

    * obj（必须）：目标对象

    示例：

    ```javascript
    const person = {
        type: 'person',
        say: function(){}
    }
    const obj = Object.create(person,{
        sex:{
            writable: true,
            configurable: true,
            enumerable: false, // 设置sex不可枚举
            value: 'male'
        },
        age: {
            writable: true,
            configurable: true,
            enumerable: true, // 设置age可枚举
            value: 23
        }
    })
    obj.name = '张三'; //自定义属性name默认为可枚举
    console.log(obj.propertyIsEnumerable('name')); //true，成功验证name属性为可枚举
    
    //用for-in可获取obj上全部可枚举的属性（包括自有和原型链上的）
    var arr = [];
    for(var key in obj){
       arr.push(key);
    }
    console.log(arr); //["age", "name", "type", "say"]
    
    //用Object.keys()可获取obj上全部可枚举的自有属性
    console.log(Object.keys(obj)); // ["age", "name"]
    ```

> 总结：Object.keys(obj)方法获取的集合和for-in遍历获取的不同在于，Object.keys()只获取目标对象上可枚举的自有属性，而for-in遍历会包含原型链上可枚举属性一并获取。
>
> Object.keys()和Object.getOwnPropertyNames()的相同之处都是获取目标对象的自有属性，区别在于，后者会连同不可枚举的自有属性也一并获取组成数组并返回。

12.  Object.preventExtensions(obj) / Object.isExtensible(obj) 

    功能： 使某一对象不可扩展，也就是不能为其添加新属性。 

    参数：

    * obj（必须）：目标对象

    补充： Object.isExtensible(obj)方法用于判断一个对象是否可扩展，即是否可以添加新属性。 

    示例

    ```javascript
    const obj = {
      name: '张三'
    };
    
    Object.preventExtensions(obj); //阻止obj的可扩展性
    console.log(Object.isExtensible(obj)); //false，表明obj对象为不可扩展，即阻止成功
    
    obj.age = 23; //默认添加失败
    console.log(obj.age); //undefined
    ```

##### Array

* Array对象属性

    * length

        设置或返回数组中元素的数目

    * constructor

        返回对创建此对象的数组函数的引用

    * prototype

        是您有能力向对象添加属性和方法

* Array对象方法

    * concat()

        * 连接两个数组或多个数组，该方法不会改变现有的数组，返回一个已经连接好的数组

        * 如果进行concat()操作的参数是数组，那么添加的是数组中的元素，而不是数组
* join()
    
    * 把数组中的元素放入一个字符串，元素是通过指定的分隔符进行分隔的
        * 若省略了分隔符参数，则使用逗号作为分隔符
    * push()

        * 向数组的末尾添加一个或多个元素，并返回新的数组长度
* pop()
    
    * 用于删除数组的最后一个元素，把数组的长度减1，并返回被删除的元素
        * 如果数组已经为空，则pop（）不改变数组，并返回undefined
* shift()
    
        * 用于把数组的第一个元素从其中删除，并返回被移除的这个元素
    * 如果数组是空的，那么shift()方法将不再进行如果操作，返回undefined
        * 该方法直接改变原数组
* unshift()
    
        * 向数组的开头添加一个或更多元素，并返回新的数组长度
        * 该方法是直接修改原数组
* reverse()
    
    * 用于颠倒数组中的元素的顺序
        * 该方法会直接修改原数组
    * sort()

        * 用于对数组的元素进行排序
    * 该排序直接修改原数组
        * 该方法接收一个可选参数，将按字母顺序对数组元素进行排序（字符编码顺序排序）
        * 里面提供比较函数小于0升序，大于0降序
* slice(start,end)
    
    * 截取原数组的start到end位置
        * 该方法返回一个新数组
        * 未指定end参数的话，则从start可以截取到最后
    * splice(index, count, [newArr])
    
    * 删除从index开始的count个数，并将删除的部分用newArr替换
        * 直接修改原数组
* map()
    * 返回一个新数组
    * filter()
    * 返回一个符合回调函数的数组
* some()
    * 判断是否有元素符合回调函数的条件
* every()
    * 判断所有元素是否符合回调函数的条件
    * forEach()
* 没有返回值，只是具有变量功能
    * reduce()
    * reduce有两个参数，第一个参数是回调函数，用于针对数组项操作，第二个参数则是传入的初始值，这个初始值用户单个数组项的操作。需注意的是，reduce返回的并不是数组，而是经过叠加处理后的值

#### Date类型

创建Date对象的四种方式

```javascript
const now = new Date();
const date1 = new Date('2019/10/26 09:12:55');
const date2 = new Date(2019 10 26 09 12 55);
const oldDate = new Date("1994/02/04");
const newDate = new Date(oldDate); //复制一个时间对象
```

日期API

* getFullYear()
* getMonth()     0-11
* getDate()
* getHours()
* getMinutes();
* getSeconds()

##### RegExp对象

##### Function类型

###### Function对象属性

1. arguments
    * .length：获取实参个数
    * .callee：获取参数本身引用的对象
    * .callee.length：获取函数形参的个数

###### Function对象方法

1. toString()
    * 功能：将函数体转换为对应的字符串

##### Boolean类型

1. toString()
    * 功能：根据布尔值返回字符串true或者false
2. valueof（）
    * 功能：返回Boolean对象的原始值

##### Number类型

1. toString（）

    功能：将Number数值转换为字符串，里面可接收一个参数，代表着转为了几进制的字符串

    > const num = 10
    >
    > console.log(num.toString(2)); //1010

2. toLocaleString()

    功能：把一个Number对象转换为本地格式的字符串

3. valueOf（）

    功能：返回一个Number对象的基本数字值

##### String类型

##### String对象属性

1. length

###### String对象方法

1. charAt()

    返回指定位置的字符

    0-length之间，没在返回空字符串

2. charCodeAt()

    返回指定位置的字符的Unicode编码

    不在0-length之间返回NaN

3. indexOf()

    返回下标

    没有返回-1

4. lastIndexOf()

    从后面开始检索

5. match()

    返回指定位置的字符

6. replace()

7. search()

    返回字符串中第一次匹配到的位置下标

8. toLowerCase() / toUpperCase()

9. concat()

10. split()

11. slice()

12. substr()

    截取一段字符串，第二个参数为截取长度

13. substring()

    截取一段字符串，第二个参数为结束位置

#### Global对象（全局对象）

###### 属性

infinity

代表正的无穷大的数值

NaN

代表非数字的值

Undefined

未定义的值

###### 方法

* encodeURI
* encodeURIComponent

>encodeURI和encodeURIComponent的区别：
>
>它们都是编码URL，唯一区别就是编码的字符范围，其中encodeURI方法不会对下列字符编码 ASCII字母、数字、~!@#$&*()=:/,;?+'
>encodeURIComponent方法不会对下列字符编码 ASCII字母、数字、~!*()'
>所以encodeURIComponent比encodeURI编码的范围更大。
>实际例子来说，encodeURIComponent会把 http:// 编码成 http%3A%2F%2F 而encodeURI却不会。

* parseInt()

    解析一个字符串，返回一个整数

* parseFloat

    解析一个字符串，返回一个浮点数

* inFinite

     用于检查其参数是否是无穷大。 

* isNaN

     用于检查其参数是否为非数字值 

* Number

     把对象的值转换为数字

* String

     把对象的值转换为字符串

#### JOSN

* JSON.parse()
* JSON.stringify