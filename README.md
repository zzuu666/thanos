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

