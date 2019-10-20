1. 利用label模拟button来解决不同浏览器原生button样式不同的问题

    ```html
    <input type='button' id='btn'>
    <label for='btn'>Button</label>
    <style>
        input[type='button']{
            display: none;
        }
        label{
            display: inline-block;
            padding: 10px 20px;
            ...
        }
    </style>
    ```

2. 结合checkbox、radio表单元素实现纯css状态切换。比如控制css动画播放和停止。

    ```html
    <input type="checkbox" id="controller">
    <label class="icon" for="controller">
      <div class="play"></div>
      <div class="pause"></div>
    </label>
    <div class="animation"></div>
    
    <style>
    ...
    #controller:checked ~ .animation {
      animation-play-state: paused;
    }
    ...
    </style>
    ```

3. input的focus事件会触发锚点点位，我们可以利用label当触发器实现选项卡切换效果

    ```html
    <div class="box">
      <div class="list"><input id="one" readonly>1</div>
      <div class="list"><input id="two" readonly>2</div>
      <div class="list"><input id="three" readonly>3</div>
      <div class="list"><input id="four" readonly>4</div>
    </div>
    <div class="link">
      <label class="click" for="one">1</label>
      <label class="click" for="two">2</label>
      <label class="click" for="three">3</label>
      <label class="click" for="four">4</label>
    </div>
    
    <style>
    .box {
      width: 20em;
      height: 10em;
      border: 1px solid #ddd;
      overflow: hidden;
    }
    .list {
      height: 100%;
      background: #ddd;
      text-align: center;
      position: relative;
    }
    .list > input { 
      position: absolute; top:0; 
      height: 100%; width: 1px;
      border:0; padding: 0; margin: 0;
      clip: rect(0 0 0 0);
    }
    </style>
    ```

    