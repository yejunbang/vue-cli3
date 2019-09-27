<template>
  <div>
    test
    <ts></ts>
    <slot-parent></slot-parent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Ts from "../components/ts.test.vue";
import SlotParent from "../components/slot.parent.vue";

@Component({
  components: {
    Ts,
    SlotParent
  }
})
export default class TsTest extends Vue {}
</script>