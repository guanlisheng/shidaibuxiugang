---
layout: product
title: 不锈钢庭院门
featured: true
description: 支持定制的不锈钢庭院大门，适用于农村自建房、别墅、厂区入口
image: /assets/images/gate/1.jpg
images:
  - /assets/images/gate/1.jpg
  - /assets/images/gate/2.jpg
  - /assets/images/gate/3.jpg
  - /assets/images/gate/4.jpg
  - /assets/images/gate/5.jpg
  - /assets/images/gate/6.jpg
  - /assets/images/gate/7.jpg
  - /assets/images/gate/8.jpg
  - /assets/images/gate/9.jpg
  - /assets/images/gate/10.jpg
  - /assets/images/gate/11.jpg
  - /assets/images/gate/12.jpg
  - /assets/images/gate/13.jpg
  - /assets/images/gate/14.jpg
  - /assets/images/gate/15.jpg

category: 庭院门
material: 304不锈钢

summary: 
  主营产品之一，支持尺寸定制、样式定制，适用于农村庭院、别墅大门、厂区入口等场景。

features:
  - 支持双开门 / 单开门 / 推拉门
  - 防锈耐腐蚀，适合室外长期使用
  - 可搭配花纹、雕花、LOGO定制
  - 结构稳固，抗风能力强

applications:
  - 农村自建房
  - 别墅庭院
  - 工厂大门
  - 农场入口
---
## 安装案例

{% if page.images %}

<!-- 主图（第一张） -->
<div class="mb-8">
  <img src="{{ page.images[0] }}"
       alt="{{ page.title }}"
       class="w-full max-h-[500px] object-cover rounded-xl shadow">
</div>

<!-- 其他图片 -->
<div class="grid grid-cols-2 md:grid-cols-3 gap-4">

  {% for img in page.images offset:1 %}
  <a href="{{ img }}" target="_blank"
     class="block overflow-hidden rounded-lg">

    <img src="{{ img }}"
         alt="{{ page.title }}"
         class="w-full h-40 object-cover hover:scale-105 transition duration-300">

  </a>
  {% endfor %}

</div>

{% endif %}
