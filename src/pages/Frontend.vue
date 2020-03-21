<template>
  <q-page class="flex flex-center full-width q-pa-md text-subtitle1 text-justify" style="max-width: 1280px;">
    <div class="full-width" style="max-width: 1024px">
      <div class="q-pa-md">
        В примере Frontend реализован на
        <a href="https://quasar.dev/" target="_blank" class="text-blue-grey-10">Quasar Framework</a>,
        основанном на <a href="https://vuejs.org/" target="_blank" class="text-blue-grey-10">Vue.js</a>.
      </div>
      <div class="q-pa-md">
        Вы можете написать свой вариант фронтенда. Вот варианты запросов к приложению бекенда:
        <ul>
          <li>
            <code>/data?start=START_DATE&finish=FINISH_DATE&tframe=TFRAME&step=STEP</code> - universal request to backend
          </li>
          <li>
            <code>/data</code> - to get 3 hours datasets
          </li>
          <li>
            <code>/</code> - to get lastDataset
          </li>
        </ul>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
</style>

<script>

export default {
  name: 'Backend',
  components: {},
  data () {
    return {
      visible: false
    }
  },
  created () {
    this.visible = true
  },
  methods: {}
}
</script>
