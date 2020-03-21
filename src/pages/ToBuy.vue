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
      <div class="q-pa-md">
        Купить:
      </div>
      <div class="q-pa-md">
        <q-btn
          v-for="(good, index) in goods"
          :key="index"
          flat
          class="full-width"
          type="a"
          target="_blank"
          style="height: 100px;"
          :href="good.link"
          >
          <div class="row items-center fit no-wrap">
            <div style="width: 120px;">
              <img :src="good.img" style="max-height: 90px; max-width: 120px;" />
            </div>
            <div>
              <div class="text-left text-bold full-width q-pl-lg">
                {{ good.title }}
              </div>
              <div class="text-left text-lowercase full-width q-pl-lg">
                {{ good.text }}
              </div>
            </div>
          </div>
        </q-btn>
      </div>
      <div class="q-pa-md">Cопротивление 125 кОм (подключен ко входу A0), и три сопротивления 10 кОм, 3 транзистора P0603BDG
        и любой диод проще купить в ближайшем магазине радиодеталей. Полевые транзисторы P0603BDG также можно выпаять
        из неисправных материнских плат.</div>
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
      goods: [
        {
          link: 'https://s.click.aliexpress.com/e/_ePopIU',
          img: '../statics/wemos.png',
          title: 'Wemos D1 Mini V3.0',
          text: 'плата контроллер'
        },
        {
          link: 'https://s.click.aliexpress.com/e/_etQNTm',
          img: '../statics/bme280.png',
          title: 'BME 280',
          text: 'датчик температуры, влажности и давления'
        },
        {
          link: 'https://s.click.aliexpress.com/e/_eLK6kT',
          img: '../statics/18650.png',
          title: 'аккумулятор 18650',
          text: 'можно взять из старого ноутбука'
        },
        {
          link: 'https://s.click.aliexpress.com/e/_etuV9Z',
          img: '../statics/18650holder.png',
          title: 'держатель для аккумулятора 18650',
          text: 'для удобства и возможности горячей замены на случай длительного отсутствия солнечных дней'
        },
        {
          link: 'https://s.click.aliexpress.com/e/_etk1jA',
          img: '../statics/solar.png',
          title: 'солнечную панель',
          text: 'или две для последовательного включения с целью увеличения напряжения, если много пасмурных дней'
        }
      ]
    }
  },
  created () {
    this.visible = true
  },
  methods: {}
}
</script>
