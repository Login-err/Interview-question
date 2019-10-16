* ### 边框(borders):

    - border-radius 圆角
    - box-shadow 盒阴影
    - border-image 边框图像

    ```css
a{
        border-radius: 100%;
        box-shadow: 10px 10px 5px #888888; // 水平偏移，垂直偏移，模糊度，阴影颜色
        border-image： url(border.png) 30 30 round; 
}
    ```

    
    
### 背景:
    
- background-size 背景图片的尺寸
    - background-origin 背景图片的定位区域
    - background-clip 背景图片的绘制区域
    
    ```css
    a{
        background-size:80px 60px;
        background-origin:content-box; // 按照什么定位
    background-clip:content-box;
    }
```
    
    
    
    ### 渐变：
    
    - linear-gradient 线性渐变
    - radial-gradient 径向渐变
    
    ```css
    a{
      background-image: linear-gradient(red, yellow, blue);
      background-image: radial-gradient(red, green, blue);
    }
```
    

    
### 文本效果;
    
    - word-break
    - word-wrap
    - text-overflow
    - text-shadow
    - text-wrap
    - text-outline
    - text-justify
    
    ### 转换：
    
    - 2D转换属性
    - transform
    - transform-origin // 目标坐标
    - 2D转换方法
    - translate(x,y)// 偏移
    - translateX(n)
- translateY(n)
    - rotate(angle)
- scale(n) // 放大与缩小
    - scaleX(n)
- scaleY(n)
    - rotate(angle) // 旋转
- matrix(n,n,n,n,n,n)
    
    ### 3D转换：
    
    * 3D转换属性：
    
    - transform
    - transform-origin
    - transform-style
    - 3D转换方法
    - translate3d(x,y,z)
    - translateX(x)
    - translateY(y)
    - translateZ(z)
    - scale3d(x,y,z)
    - scaleX(x)
    - scaleY(y)
    - scaleZ(z)
    - rotate3d(x,y,z,angle)
    - rotateX(x)
    - rotateY(y)
    - rotateZ(z)
    - perspective(n)
    
    ### 过渡
    
    - transition
    
    ### 动画
    
    - [@Keyframes](https://github.com/Keyframes)规则
    - animation