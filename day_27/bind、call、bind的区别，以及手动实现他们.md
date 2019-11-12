<p>call与apply的第一个参数都是改变后的this指向，作用是相同，只是传参的方式不一样，call是接收一个参数列表，apply是接收一个参数数组。
bind是返回一个新的参数，不执行</p>

```javascript
function myCall(context){
    const args = [...arguments].slice(1);
    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;
    return result;
}
function myApply(context){
    context.fn = this;
    if(arguments.length > 1){
        const args = [...arguments].slice(1);
        const result = context.fn(args);
    }else {
        context.fn();
    }
    delete context.fn;
    return result;
}
function myBind(context){
    const that = this;
    const args = [...arguments].slice(1);
    return function F(){
        // 如果是new调用
        if(this instanceof F){
            return new that(...args, ...arguments);
        }else{
            // 普通函数调用
            return that.apply(context, args.concat(...arguments));
        }
    }
}
```

