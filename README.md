## Thanos 灭霸 ![npm](https://img.shields.io/npm/v/thanos-boom.svg?style=flat-square)![npm](https://img.shields.io/npm/dy/thanos-boom.svg?style=flat-square)

可以像灭霸打响指一样，把元素变为原子尘埃。



![](https://i.loli.net/2019/05/20/5ce260c65871647492.gif)



## 想法与实现

想法来自于看了 [Google 彩蛋](https://www.google.com/search?q=thanos) 觉得非常炫酷！

实现的话只想到了需要把元素转化为 canvas，后续动画效果实在没有很好的思路，最终实现参考了[这个问题](https://www.reddit.com/r/webdev/comments/bhl8ga/how_does_the_thanos_google_avengers_easter_egg/)。



## 怎么使用

### 通过 NPM

#### 1. 安装前置依赖 html2canvas

``` bash
npm install html2canvas
```

#### 2. 安装 thanos-boom

``` bash
npm install thanos-boom --save
```

#### 3. 引用

``` js
import 'thanos-boom/dist/index.css';
import Thanos from 'thanos-boom';

const thanos = new Thanos();

thanos.disintegrate(document.querySelector('.example'));
```



## 参数

Thanos 类接受一个参数。

| 字段名          | 类型   | 默认值 | 说明                                                         |
| --------------- | ------ | ------ | ------------------------------------------------------------ |
| frames          | number | 16     | 将画面拆解为多少层，数值越高越消耗性能。                     |
| repetitionCount | number | 2      | 画面中的每个像素将被重复几次，数值越高越消耗性能。           |
| cssPrefix       | string | thanos | 动画 css 前缀名。                                            |
| html2canvas     | object | {}     | html2canvas 初始化时接受的参数。参考 <https://html2canvas.hertzen.com/configuration> |



## 更新日志

### 0.1.0

+ 最初版本。

### 0.1.4

+ 增加 types 文件
+ 调整参数默认值： `frames: 32 => 16` 和 `repetitionCount: 4 => 2`

