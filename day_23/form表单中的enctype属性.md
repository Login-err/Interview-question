##### form标签的enctype属性指定数据发送到服务器时浏览器对于form表单数据进行编码。其中有三种编码形式：

1. application/x-www-form-urlencode（也是默认格式）

    如果是get请求，这格式会把表单数据编码成a=‘123’&b='123'，如果是post请求，浏览器把form数据封装到http body中，然后发送到服务器。当我们通过post方式向服务器发送ajax请求时最好要通过设置请求头来指定application/x-www-form-urlencode编码类型。

2. multipart/form-data

    这个专门是用来传输特殊文件的，例如文件上传。

3. text/plain

    数据以纯文本格式上传