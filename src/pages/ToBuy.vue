<template>
  <q-page class="flex flex-center full-width q-pa-md text-subtitle1 text-justify" style="max-width: 1280px;">
    <div class="full-width" style="max-width: 1024px">
      <div class="q-pa-md text-center text-h6">{{ $t('buy.h1') }}</div>
      <div class="full-width flex flex-center q-pa-md">
        <q-img
          class="rounded-borders"
          src="../statics/schema-min.png"
          spinner-color="secondary"
        ></q-img>
      </div>
      <div class="q-pa-md text-h6">
        {{ $t('buy.h2') }}
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
                {{ $t(`buy.goods[${index}].title`) }}
              </div>
              <div class="text-left full-width q-pl-lg">
                {{ $t(`buy.goods[${index}].text`) }}
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
          img: './statics/wemos.png'
        },
        {
          link: 'https://s.click.aliexpress.com/e/_etQNTm',
          img: './statics/bme280.png'
        },
        {
          link: 'https://s.click.aliexpress.com/e/_eLK6kT',
          img: './statics/18650.png'
        },
        {
          link: 'https://s.click.aliexpress.com/e/_etuV9Z',
          img: './statics/18650holder.png'
        },
        {
          link: 'https://s.click.aliexpress.com/e/_etk1jA',
          img: './statics/solar.png'
        },
        {
          link: 'https://s.click.aliexpress.com/e/_etuu9n',
          img: './statics/resistor.png'
        },
        {
          link: 'https://s.click.aliexpress.com/e/_esxEPx',
          img: './statics/diod.png'
        },
        {
          link: 'https://s.click.aliexpress.com/e/_eMxe0N',
          img: './statics/mosfet.png'
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
