<template>
  <q-page class="flex flex-center full-width q-pa-md text-subtitle1 text-justify" style="max-width: 1280px;">
    <div class="full-width" style="max-width: 1024px">
      <div class="q-pa-md text-center text-h6">Что и где нужно купить, а что можно найти бесплатно</div>
      <div class="full-width flex flex-center q-pa-md">
        <q-img
          class="rounded-borders"
          src="../statics/schema-min.png"
          spinner-color="secondary"
        ></q-img>
      </div>
      <div class="q-pa-md text-h6">
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
          style="min-height: 100px;"
          :href="good.link"
          no-caps
          >
          <div class="row items-center fit no-wrap">
            <div style="width: 120px;">
              <img :src="good.img" style="max-height: 90px; max-width: 120px;" />
            </div>
            <div>
              <div class="text-left text-bold text-uppercase full-width q-pl-lg">
                {{ good.title }}
              </div>
              <div class="text-left full-width q-pl-lg">
                {{ good.text }}
              </div>
            </div>
          </div>
        </q-btn>
      </div>
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
          img: './statics/wemos.png',
          title: 'Wemos D1 Mini V3.0',
          text: 'Основная плата-микроконтроллер со встроенным WiFi модулем.'
        },
        {
          link: 'https://s.click.aliexpress.com/e/_etQNTm',
          img: './statics/bme280.png',
          title: 'BME 280',
          text: 'Датчик температуры, влажности и давления.'
        },
        {
          link: 'https://s.click.aliexpress.com/e/_eLK6kT',
          img: './statics/18650.png',
          title: 'Аккумулятор 18650',
          text: 'Можно взять из старого ноутбука.'
        },
        {
          link: 'https://s.click.aliexpress.com/e/_etuV9Z',
          img: './statics/18650holder.png',
          title: 'Держатель для аккумулятора 18650',
          text: 'Для удобства и возможности горячей замены на случай длительного отсутствия солнечных дней.'
        },
        {
          link: 'https://s.click.aliexpress.com/e/_etk1jA',
          img: './statics/solar.png',
          title: 'Солнечная панель',
          text: 'Или две для последовательного включения с целью увеличения напряжения, если много пасмурных дней.'
        },
        {
          link: 'https://s.click.aliexpress.com/e/_etuu9n',
          img: './statics/resistor.png',
          title: 'Cопротивления (резисторы)',
          text: 'Один резистор на 120-130 кОм (у меня 125 кОм, подключен ко входу A0), и три сопротивления 10 кОм. Используйте последовательное и параллельное соединение резисторов.'
        },
        {
          link: 'https://s.click.aliexpress.com/e/_esxEPx',
          img: './statics/diod.png',
          title: 'Диод (любой)',
          text: 'Резисторы, диод и мосфеты можно купить в ближайшем магазине радиодеталей или выпаять из старых радио плат.'
        },
        {
          link: 'https://s.click.aliexpress.com/e/_eMxe0N',
          img: './statics/mosfet.png',
          title: 'MOSFET P0603BDG',
          text: 'Можно использовать любые другие полевые транзисторы с n-каналом и открытием 3V. Их также можно выпаять из неисправных материнских плат.'
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
