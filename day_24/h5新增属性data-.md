```html
<style>
    h2[data-a]{
        width: 800px;
    }
</style>
<h2 data-a='aaa' data-b='bbbb' data-c='ccccc' id='box'>123</h2>
<script>
	const article = document.querySelector('#box');
    article.dataset.a // aaa
    article.dataset.b // bbbb
    article.dataset.c // ccccc
</script>
```

