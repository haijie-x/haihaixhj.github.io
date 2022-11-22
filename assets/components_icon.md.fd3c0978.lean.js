import{_ as a,c as i,a as o,e as t,b as n,d as e,o as c,r as l}from"./app.fc0b2da1.js";const x=JSON.parse('{"title":"Icon","description":"","frontmatter":{"title":"Icon"},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD","link":"#\u4ECB\u7ECD","children":[]},{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528","link":"#\u57FA\u672C\u4F7F\u7528","children":[]},{"level":2,"title":"\u56FE\u6807\u5927\u5C0F","slug":"\u56FE\u6807\u5927\u5C0F","link":"#\u56FE\u6807\u5927\u5C0F","children":[]},{"level":2,"title":"\u56FE\u6807\u914D\u7F6E","slug":"\u56FE\u6807\u914D\u7F6E","link":"#\u56FE\u6807\u914D\u7F6E","children":[]}],"relativePath":"components/icon.md","lastUpdated":1669139797000}'),p={name:"components/icon.md"},r=t("",7),d=n("h2",{id:"\u56FE\u6807\u5927\u5C0F",tabindex:"-1"},[e("\u56FE\u6807\u5927\u5C0F "),n("a",{class:"header-anchor",href:"#\u56FE\u6807\u5927\u5C0F","aria-hidden":"true"},"#")],-1),h=n("p",null,[e("\u4F7F\u7528 "),n("code",null,"size"),e(" \u914D\u7F6E "),n("code",null,"Icon"),e(" \u7684\u5927\u5C0F\uFF0C\u4EA6\u53EF\u4F7F\u7528 "),n("code",null,"iconConfig"),e(" \u7684 "),n("code",null,"size"),e(" \u5C5E\u6027\u914D\u7F6E")],-1),u=n("h2",{id:"\u56FE\u6807\u914D\u7F6E",tabindex:"-1"},[e("\u56FE\u6807\u914D\u7F6E "),n("a",{class:"header-anchor",href:"#\u56FE\u6807\u914D\u7F6E","aria-hidden":"true"},"#")],-1),_=n("p",null,[e("\u4F7F\u7528 "),n("code",null,"iconConfig"),e(" \u914D\u7F6E "),n("code",null,"icon"),e(" \u7684\u6837\u5F0F")],-1);function m(C,f,g,A,v,y){const s=l("Repl");return c(),i("div",null,[r,o(s,{initCode:`
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
