<template>
  <div>
    ts comonents
    <input @keyup.enter="add" />
    <ul>
      <li v-for='f in features' :key='f.id'>{{f}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue,
    Emit
  } from "vue-property-decorator";

  interface Feature {
    id: number;
    name: string;
  }

  @Component
  export default class Ts extends Vue {
    features: Feature[] = [{
      id: 0,
      name: 'haahahh'
    }, {
      id: 1,
      name: 'testest'
    }]

    @Emit()// 如果@Emit()，没写，则事件名为add，@Emit('abc')， 事件名为abc，方法的return 为事件的参数
    add(e: any) {
      this.features.push({
        id: this.features.length,
        name: e.target.value
      })
      e.target.value = ''
      return '78'
    }

    mounted() {
      console.log('this is mounted')
    }

    private _foo = 'foo';
    protected bar = 'bar';
    name = 'name'; // 不写可见性，则为public
    readonly mua = 'mua';

    // 在constructor加上private修饰符，提升为类的属性
    // constructor(private tua = 'tua') {
    //   // super()
    // }
  }
</script>