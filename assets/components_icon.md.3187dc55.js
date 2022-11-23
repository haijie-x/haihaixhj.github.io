import{_ as a,c,a as o,e as s,b as n,d as e,o as i,r as d}from"./app.48a2e59a.js";const T=JSON.parse('{"title":"Icon","description":"","frontmatter":{"title":"Icon"},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD","link":"#\u4ECB\u7ECD","children":[]},{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u56FE\u6807\u5927\u5C0F","slug":"\u56FE\u6807\u5927\u5C0F","link":"#\u56FE\u6807\u5927\u5C0F","children":[]},{"level":2,"title":"\u56FE\u6807\u914D\u7F6E","slug":"\u56FE\u6807\u914D\u7F6E","link":"#\u56FE\u6807\u914D\u7F6E","children":[]},{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027","link":"#\u5C5E\u6027","children":[]}],"relativePath":"components/icon.md","lastUpdated":1669183902000}'),l={name:"components/icon.md"},r=s(`<h1 id="icon-\u56FE\u6807" tabindex="-1">Icon \u56FE\u6807 <a class="header-anchor" href="#icon-\u56FE\u6807" aria-hidden="true">#</a></h1><h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u7EC4\u4EF6\u5E93\u7684\u56FE\u6807 <code>svg</code> \u51FA\u81EA\u7B2C\u4E09\u65B9 <code>IconPark</code> \u7684 <code>svg</code> \u5E93</p><p>\u4F7F\u7528\u524D\u9700\u8981\u8FDB\u884C\u5B89\u88C5 <code>npm/yarn/pnpm</code></p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">use npm </span></span>
<span class="line"><span style="color:#A6ACCD;">npm install @thor-ui/icons</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">use yarn</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add @thor-ui/icons</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">use pnpm</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm install @thor-ui/icons</span></span>
<span class="line"></span></code></pre></div><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h2><p><code>script</code> \u4E2D\u5F15\u5165icons\u5305\uFF0C\u5E76\u4E14\u5C06\u5176\u4F5C\u4E3A <code>icon</code> props\u4F20\u5165</p>`,7),p=n("h2",{id:"\u56FE\u6807\u5927\u5C0F",tabindex:"-1"},[e("\u56FE\u6807\u5927\u5C0F "),n("a",{class:"header-anchor",href:"#\u56FE\u6807\u5927\u5C0F","aria-hidden":"true"},"#")],-1),h=n("p",null,[e("\u4F7F\u7528 "),n("code",null,"size"),e(" \u914D\u7F6E "),n("code",null,"Icon"),e(" \u7684\u5927\u5C0F\uFF0C\u4EA6\u53EF\u4F7F\u7528 "),n("code",null,"iconConfig"),e(" \u7684 "),n("code",null,"size"),e(" \u5C5E\u6027\u914D\u7F6E")],-1),_=n("h2",{id:"\u56FE\u6807\u914D\u7F6E",tabindex:"-1"},[e("\u56FE\u6807\u914D\u7F6E "),n("a",{class:"header-anchor",href:"#\u56FE\u6807\u914D\u7F6E","aria-hidden":"true"},"#")],-1),u=n("p",null,[e("\u4F7F\u7528 "),n("code",null,"iconConfig"),e(" \u914D\u7F6E "),n("code",null,"icon"),e(" \u7684\u6837\u5F0F")],-1),C=s('<h2 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h2><div class="vp-table__wrapper"><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th></tr></thead><tbody><tr><td><code>icon</code></td><td>\u914D\u7F6E <code>icon</code> \u7684\u56FE\u6807</td><td>(p?: ISvgIconProps) =&gt; string</td><td>-</td></tr><tr><td><code>iconConfig</code></td><td>\u914D\u7F6E <code>icon</code> \u7684\u6837\u5F0F</td><td>ISvgIconProps</td><td>-</td></tr><tr><td><code>size</code></td><td>\u914D\u7F6E <code>Icon</code> \u7684\u5927\u5C0F</td><td>Number</td><td>-</td></tr></tbody></table></div>',2);function m(g,f,A,v,b,I){const t=d("Repl");return i(),c("div",null,[r,o(t,{initCode:`
<template>
  <t-icon :icon="Config"/>
</template>
<script setup lang="ts">
import { Config } from "@thor-ui/icons"
<\/script>
`}),p,h,o(t,{initCode:`
<template>
  <t-icon :icon="Config" :size="30" />
</template>
<script setup lang="ts">
import { Config } from "@thor-ui/icons"
<\/script>
`}),_,u,o(t,{initCode:`
<template>
  <t-icon :icon="Config" :icon-config="iconConfig" />
</template>
<script setup lang="ts">
import { Config } from "@thor-ui/icons"
const iconConfig = {
  size: 30,
  strokeWidth: 3,
  strokeLinejoin: "round"
}
<\/script>
`}),C])}const k=a(l,[["render",m]]);export{T as __pageData,k as default};
