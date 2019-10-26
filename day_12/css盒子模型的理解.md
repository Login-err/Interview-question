#### css盒模型可以认为每个HTML标签都是一个方块，然后这个方块又包着几个小方块，如同盒子一层层的包裹着，这是所谓的盒模型

##### 盒模型分为ie盒模型和W3C标准盒模型

###### IE和模型 box-size:border-box;

属性width，height包含border和padding，指的是content-padding+border

###### W3C标准盒模型 box-size:content-box

属性width，height只包含content，不包含border和padding