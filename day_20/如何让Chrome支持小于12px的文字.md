- -webkit-text-size-adjust:none; 这个属性在高版本的 Chrome 中已经被废除。
- 使用transform: scale(0.5, 0.5)，但使用transform需要注意下面几点：
    - `transform` 对行内元素无效，因此要么使用 `display: block;` 要么使用 `display: inline-block;`
    - `transform` 即使进行了缩放，原来元素还是会占据对应的位置。因此需要做调整，最好是在外面再包一层元素，以免影响其他元素。
- 作为图片。

最好的办法还是进行切图，或者就不要使用小于 12px 的字体。