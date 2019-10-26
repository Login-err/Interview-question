```javascript
function getParams(){
    const search = window.location.search;
    const newStr = search.slice(1);
    const params = {}
    newStr.split('&').map(item => {
        const arr = item.split('=');
        params[arr[0]] = arr[1];
    })
    return params;
}
```

```javascript
function urlParam(){
    const param = {};
    location.search.replace(/([^&=?]+)=([^&]+)/g,(m,$1,$2)=> param[$1] = $2);
    return param;
}
```

