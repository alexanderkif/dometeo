<template>
  <q-page class="flex flex-center full-width q-pa-md text-subtitle1 text-justify" style="max-width: 1280px;">
    <div class="full-width" style="max-width: 1024px">
      <div class="q-pa-md text-center">Что и где нужно купить, а что можно найти бесплатно</div>
      <div class="full-width flex flex-center q-pa-md">
        <q-img
          class="rounded-borders"
          src="../statics/schema-min.png"
          spinner-color="secondary"
        ></q-img>
      </div>
      <div class="q-pa-md">Купить:
        <ol>
          <li>плату
            <a href="https://s.click.aliexpress.com/e/_ePopIU" target="_blank" class="text-blue-grey-10">
              <span> Wemos D1 Mini V3.0 </span>
              <q-img
                src="../statics/wemos.png"
                spinner-color="secondary"
                style="max-width: 100px"
                contain
              ></q-img>
            </a>
          </li>
          <li>датчик температуры, влажности и давления
            <a href="https://s.click.aliexpress.com/e/_etQNTm" target="_blank" class="text-blue-grey-10">
              <span> BME 280 </span>
              <q-img
                src="../statics/bme280.png"
                spinner-color="secondary"
                style="max-width: 100px"
                contain
              ></q-img>
            </a>
            <span> (или другие нужные вам датчики)</span>
          </li>
          <li>
            <a href="https://s.click.aliexpress.com/e/_eLK6kT" target="_blank" class="text-blue-grey-10">
              <span> аккумулятор 18650 </span>
              <q-img
                src="../statics/18650.png"
                spinner-color="secondary"
                style="max-height: 100px; max-width: 100px"
                contain
              ></q-img>
            </a>
          </li>
          <li>
            <a href="https://s.click.aliexpress.com/e/_etuV9Z" target="_blank" class="text-blue-grey-10">
              <span> держатель для аккумулятора 18650 </span>
              <q-img
                src="../statics/18650holder.png"
                spinner-color="secondary"
                style="max-height: 100px; max-width: 100px"
                contain
              ></q-img>
            </a>
            <span> для удобства и возможности горячей замены на случай длительного отсутствия солнечных дней </span>
          </li>
          <li>
            <a href="https://s.click.aliexpress.com/e/_etk1jA" target="_blank" class="text-blue-grey-10">
              <span>солнечную панель </span>
              <q-img
                src="../statics/solar.png"
                spinner-color="secondary"
                style="max-width: 100px"
                contain
              ></q-img>
            </a>
            <span> (или две для последовательного включения с целью увеличения напряжения, если много пасмурных дней)</span>
          </li>
        </ol>
      </div>
      <div class="q-pa-md">Cопротивление 125 кОм (подключен ко входу A0), и три сопротивления 10 кОм, транзисторы и диод проще купить в
        ближайшем магазине радиодеталей. Полевые транзисторы P0603BDG также можно выпаять из неисправных материнских плат.</div>
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
