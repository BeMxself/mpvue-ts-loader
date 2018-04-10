## 修改说明

原始仓库[mpvue-loader](http://mpvue.com/build/mpvue-loader)。

添加了对TS支持，使用参考[generator-mpvue-project](https://github.com/thundernet8/generator-mpvue-project)

## 使用

添加webpack配置的plugin

```js
new webpack.LoaderOptionsPlugin({
    test: /\.(vue|ts)$/,
    options: {
        ts: {
            appendTsSuffixTo: [/\.vue$/]
        }
    }
})
```

添加webpack配置的rule

```js
{
    test: /\.ts$/,
    use: [
        {
            loader: 'babel-loader'
        },
        {
            loader: 'mpvue-ts-loader',
            options: {
                checkMPEntry: true
            }
        }
    ]
}
```