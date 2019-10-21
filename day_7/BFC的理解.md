#### 触发BFC的条件

* 浮动元素：float除none以外的值
* 绝对定位元素：position（absolute，fixed）
* display为inline-block、table-cells、flex、table-caption或者inline-flex
* overflow除了visible以外的值（hidden、auto、scroll）

##### bfc可以把他的所有子元素包裹起来

##### 特性

- 内部的盒子会在垂直方向上一个接一个的放置
- 对于同一个BFC的俩个相邻的盒子的margin会发生重叠，与方向无关。
- 每个元素的左外边距与包含块的左边界相接触（从左到右），即使浮动元素也是如此
- BFC的区域不会与float的元素区域重叠
- 计算BFC的高度时，浮动子元素也参与计算
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然