<template>
  <q-page class="full-width" style="max-width: 1280px;">
    <h5 class="text-center">Если спаять пару датчиков и немного запрограммировать,</h5>
    <div class="full-width flex flex-center q-px-md">
      <q-img
        class="rounded-borders"
        src="../statics/schema-min.png"
        spinner-color="secondary"
        style="max-width: 800px"
      ></q-img>
    </div>
    <h5 class="text-center">то можно записать показания этих датчиков в базу данных
      для анализа,</h5>
    <div class="full-width flex flex-center">
      <q-img
        src="../statics/desktop-tv.png"
        spinner-color="secondary"
        style="max-width: 800px"
      ></q-img>
    </div>
    <h5 class="text-center">ну или просто наблюдать и делать прогнозы</h5>
    <div class="flex flex-center row justify-center">
      <q-img
        class="col-7"
        src="../statics/mobile-hor-menu-ip.png"
        spinner-color="secondary"
        style="max-width: 500px"
      ></q-img>
      <q-img
        class="col-5 q-ml-lg"
        src="../statics/mobile-vert-lg.png"
        spinner-color="secondary"
        style="max-width: 300px"
      ></q-img>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
</style>

<script>

export default {
  name: 'ToBuy',
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
