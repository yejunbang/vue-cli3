<template>
  <div>
    <header>
      <slot name='header'>这是默认header</slot>
    </header>
    <main>
      <slot :users='users'>暂无内容</slot>
      <slot :users='users' name='main'>暂无内容</slot>
    </main>
    <footer>
      <slot name='footer'>这是默认footer</slot>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Ts extends Vue {
  users = [
    { name: "pogba1", age: 20 },
    { name: "pogba2", age: 30 },
    { name: "pogba3", age: 40 }
  ];
}
</script>