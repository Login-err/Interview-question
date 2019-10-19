#### a标签的target属性一共有四个值

* _self

    默认属性。在当前窗口或者框架中加载目标文档

* _blank

    打开新的窗口或者新的标签页。在使用这个属性时，最好添加rel="noopener norefferrer"属性，防止打开的新窗口对原窗口进行篡改。防止window.opener API的恶意想法。

* _parent

    在frame或者iframe中使用较多。在父级框架中载入目标文档，当a标签本身在顶层时，与_self相同

* _top

    在frame或者iframe中使用较多。直接在顶层的框架中载入目标文档，加载整个窗口。