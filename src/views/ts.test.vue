<template>
  <div>
    test
    <ts></ts>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from "vue-property-decorator";
  import Ts from "../components/ts.test.vue";

  @Component({
    components: {
      Ts
    }
  })
  export default class TsTest extends Vue {}
</script>