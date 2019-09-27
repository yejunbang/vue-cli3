<template>
  <div>
    <slot-child>
      <template v-slot:header>
        <h1>h1 header来了</h1>
      </template>

      <template v-slot:default='slotProps'>
        {{ slotProps.users }}
      </template>

      <template v-slot:main='{ users }'>
        <ul>
          <li v-for='user in users'
              :key='user.name+user.age'>
            {{ user.name}} {{user.age}}
          </li>
        </ul>
      </template>

      <template #footer>
        <h1>新语法footer来了</h1>
      </template>
    </slot-child>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import SlotChild from "./slot.child.vue";

interface Feature {
  id: number;
  name: string;
}

@Component({
  components: {
    SlotChild
  }
})
export default class Ts extends Vue {}
</script>