#### 用处

<P>meta常用于定义页面的说明，关键字，最后的修改日期和其他的元数据。这些元数据将服务于浏览器，搜索引擎和其他网络服务</p>

#### 组成

<p>meta标签共有两个属性，分别是http-equiv属性和name属性</p>

1. name属性

    <p>name属性主要用于描述网页，比如网页的关键字，叙述等。与之对应的属性值是content，content中的内容是对name填入类型的具体描述，便于搜索引擎的抓取</p>

    ```html
    <meta name="参数" content="具体的描述">
    ```

    其中name属性共有以下几个参数

    * keywords（关键字）

        用于告诉搜索引擎你的网页的关键字

        ```html
        <meta name="keywords" content="前端">
        ```

    * description（网站内容的描述）

        用于告诉搜索引擎，你网页的主要内容

        ```html
        <meta name="description" content="我是黄炼">
        ```

    * viewport（移动端的窗口）

        ```html
        <meta name="viewport" content="width=device-width,initial-scale=1">
        ```

    * robots（定义搜索引擎爬虫的索引方式）

        robots用来告诉爬虫哪些页面需要索引，哪些页面不需要索引，content的参数有all，none，index，noindex，follow，nofollow，默认是all

        all：搜索引擎忽略此网页，等价于noindex，nofollow

        noindex：搜索引擎不索引此网页

        nofollow：搜索引起不继续通过此网页的链接索引其他的网页

        all：搜索引擎将索引此网页与继续通过此网页的链接索引，等价于index，follow

        index：搜索引擎索引此网页

        follow：搜索引起继续通过此网页的链接索引其他的网页

        ```html
        <meta name="robots" content="none">
        ```

    * author（作者）

        用于标注网页作者

        ```html
        <meta name="author" content="黄炼">
        ```

2. http-equiv属性

    meta标签中http-equiv的语法格式

    ```html
    <meta http-equiv="参数" content="具体的描述">
    ```

    * content-Type（设定网页字符集）

        ```html
        <meta http-equiv="content-Type" content="text/html;charset=utf-8">// 不推荐使用
        <meta charset="utf-8">// HTML5设定网页字符集的方式，推荐使用
        ```

    * X-UA-Compatible（浏览器采取何种版本渲染当前页面）

        ```html
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><!--指定IE和Chrome使用最新版本的浏览器渲染当前页面-->
        ```

    * cache-control（指定请求和响应遵循的缓存机制）

        指导浏览器如何缓存某个响应以及缓存多长时间。

        ```html
        <meta http-equiv="cache-control" content="no-cache">
        ```

        no-cache：先发送请求，与服务器确认该资源是否被更改，如果未被更改，则使用缓存

        no-store：不允许缓存，每次都要去服务器上，并下载完整的响应

        public：缓存所有的响应，但并非必须。因为max-age可以同样实现

        private：只为单个用户缓存，因此不允许任何中继进行缓存

        max-age：表示该响应可以缓存多久，且在有效时间内不需要去请求服务器

    * expires（网页到期的时间）

        网页的到期时间，过期后网页必须到服务器上重新传输

        ```html
        <meta http-equiv="expries" content="某个时间戳">
        ```

    * refresh（自动刷新并指向某页面）

        网页将在设定的时间内，自动刷新并调向设定的网址

        ```html
        <meta http-equiv="refresh" content="2; URL=http://baidu.com/"> <!--两秒后调整到百度-->
        ```

    * Set-Cookie（cookie设定）

        如果网页过期。那么网页存在本地的cookie也会被删除

        ```html
        <meta http-equiv="Set-cookie" content="name,date"><!--语法-->
        <meta http-equiv="Set-Cookie" content="User=huanglian"; path=/; expires=时间戳><!--实例-->
        ```

        