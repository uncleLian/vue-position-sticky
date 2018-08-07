# vue-position-sticky

![image](https://img.shields.io/badge/vue-2.5.16-blue.svg)
![image](https://img.shields.io/badge/vue--cli-3.0.0-green.svg)

> A Vue.js component to sticky to the page

## Install
```
$ npm install vue-position-sticky
```

## Usage
```javascript
import Vue from 'vue'
import vuePositionSticky from 'vue-position-sticky'

Vue.use(vuePositionSticky)
```

or

```html
<script src="vue.min.js"></script>
<!-- must place this line after vue.js -->
<script src="vue-position-sticky.umd.min.js"></script>
```

## demo
```html
<vue-position-sticky :offsetTop="0" stickyClass="myStickyClass" />
<vue-position-sticky :offsetBottom="30" @change="handleStickyChange" />
```

## Options
Property | Description | Type | Default
|:---:|---|:---:|:---:|
| offsetTop | distance to the top | Number | 0
| offsetBottom | distance to the bottom | Number | undefined
| stickyClass | vue-position-sticky component class | String | ''

### Callback
| Name | Description |
|:---:|---|
| change | when sticky will emit 
