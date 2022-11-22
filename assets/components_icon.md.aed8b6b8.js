import{_ as a,c as i,a as o,e as t,b as n,d as e,o as c,r as l}from"./app.344be837.js";const x=JSON.parse('{"title":"Icon","description":"","frontmatter":{"title":"Icon"},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD","link":"#\u4ECB\u7ECD","children":[]},{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u56FE\u6807\u5927\u5C0F","slug":"\u56FE\u6807\u5927\u5C0F","link":"#\u56FE\u6807\u5927\u5C0F","children":[]},{"level":2,"title":"\u56FE\u6807\u914D\u7F6E","slug":"\u56FE\u6807\u914D\u7F6E","link":"#\u56FE\u6807\u914D\u7F6E","children":[]}],"relativePath":"components/icon.md","lastUpdated":1669139797000}'),p={name:"components/icon.md"},r=t(`<h1 id="icon-\u56FE\u6807" tabindex="-1">Icon \u56FE\u6807 <a class="header-anchor" href="#icon-\u56FE\u6807" aria-hidden="true">#</a></h1><h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u7EC4\u4EF6\u5E93\u7684\u56FE\u6807 <code>svg</code> \u51FA\u81EA\u7B2C\u4E09\u65B9 <code>IconPark</code> \u7684 <code>svg</code> \u5E93</p><p>\u4F7F\u7528\u524D\u9700\u8981\u8FDB\u884C\u5B89\u88C5 <code>npm/yarn/pnpm</code></p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">use npm </span></span>
<span class="line"><span style="color:#A6ACCD;">npm install @thor-ui/icons</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">use yarn</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add @thor-ui/icons</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">use pnpm</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm install @thor-ui/icons</span></span>
<span class="line"></span></code></pre></div><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h2><p><code>script</code> \u4E2D\u5F15\u5165icons\u5305\uFF0C\u5E76\u4E14\u5C06\u5176\u4F5C\u4E3A <code>icon</code> props\u4F20\u5165</p>`,7),d=n("h2",{id:"\u56FE\u6807\u5927\u5C0F",tabindex:"-1"},[e("\u56FE\u6807\u5927\u5C0F "),n("a",{class:"header-anchor",href:"#\u56FE\u6807\u5927\u5C0F","aria-hidden":"true"},"#")],-1),h=n("p",null,[e("\u4F7F\u7528 "),n("code",null,"size"),e(" \u914D\u7F6E "),n("code",null,"Icon"),e(" \u7684\u5927\u5C0F\uFF0C\u4EA6\u53EF\u4F7F\u7528 "),n("code",null,"iconConfig"),e(" \u7684 "),n("code",null,"size"),e(" \u5C5E\u6027\u914D\u7F6E")],-1),u=n("h2",{id:"\u56FE\u6807\u914D\u7F6E",tabindex:"-1"},[e("\u56FE\u6807\u914D\u7F6E "),n("a",{class:"header-anchor",href:"#\u56FE\u6807\u914D\u7F6E","aria-hidden":"true"},"#")],-1),_=n("p",null,[e("\u4F7F\u7528 "),n("code",null,"iconConfig"),e(" \u914D\u7F6E "),n("code",null,"icon"),e(" \u7684\u6837\u5F0F")],-1);function m(C,f,g,A,v,y){const s=l("Repl");return c(),i("div",null,[r,o(s,{initCode:`
<template>
  <t-icon :icon="Config"/>
</template>
<script setup lang="ts">
import { Config } from "@thor-ui/icons"
<\/script>
`}),d,h,o(s,{initCode:`
<template>
  <t-icon :icon="Config" :size="30" />
</template>
<script setup lang="ts">
import { Config } from "@thor-ui/icons"
<\/script>
`}),u,_,o(s,{initCode:`
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
`})])}const b=a(p,[["render",m]]);export{x as __pageData,b as default};
