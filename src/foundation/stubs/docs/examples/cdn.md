### Examples CDN

```html
<!DOCTYPE html>
<html>
    <head>
        <title>
            Your Cool Application
        </title>
    </head>

    <body>
        <div>
            <!-- Content -->
        </div>

        <script src="https://unpkg.com/{repo}@{version}/build/index.min.js"></script>

        <script>
            let { {default_variable} } = {repo};
            window.{default_variable} = {default_variable};

            console.log(window.{default_variable});
        </script>
    </body>
</html>
```
