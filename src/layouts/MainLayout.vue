<template>
  <q-layout view="hhh Lpr Lfr">

    <q-header elevated class="bg-green text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="text-center">
          Автономная WiFi метеостанция на солнечной энергии
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered :width="240" content-class="bg-green-2">
      <div class="q-my-md q-mx-md flex flex-center"
        v-for="(button,index) in buttons"
        :key="index"
      >
        <q-btn :color="button.color" push class="btn-fixed-width" :to="button.link"
          v-if="button.link.indexOf('http')==-1">
          <div class="row items-center fit no-wrap">
            <q-icon left :name="button.icon" />
            <div class="text-center full-width">
              {{ button.top }}<br>{{ button.bottom }}
            </div>
          </div>
        </q-btn>
        <q-btn :color="button.color" push class="btn-fixed-width" type="a" :href="button.link"
          v-else target="_blank">
          <div class="row items-center fit no-wrap">
            <q-icon left :name="button.icon" />
            <div class="text-center full-width">
              {{ button.top }}<br>{{ button.bottom }}
            </div>
          </div>
        </q-btn>
      </div>
    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered :width="222"
      content-class="bg-blue-grey-5 text-center text-white">
      <div class="q-my-md">
        <a href="https://s.click.aliexpress.com/e/_etk1jA" target="_blank" class="text-white">
          <q-img
            src="../statics/solar.png"
            spinner-color="secondary"
          ></q-img>
          <span style="display:block;">Solar panels</span>
        </a>
      </div>
      <div class="q-my-md">
        <a href="https://s.click.aliexpress.com/e/_ePopIU" target="_blank" class="text-white">
          <q-img
            src="../statics/wemos.png"
            spinner-color="secondary"
          ></q-img>
          <span style="display:block;">Wemos D1 Mini V3.0</span>
        </a>
      </div>
      <div class="q-my-md">
        <a href="https://s.click.aliexpress.com/e/_etQNTm" target="_blank" class="text-white">
          <q-img
            src="../statics/bme280.png"
            spinner-color="secondary"
          ></q-img>
          <span style="display:block;">BME280</span>
        </a>
      </div>
      <div class="q-my-md">
        <a href="https://s.click.aliexpress.com/e/_eKAB6y?bz=190*240" target="_blank">
          <img width="190" height="240" src="//ae01.alicdn.com/kf/Hd17c09784a674481bcfd3eecdeb4795fU.png"/>
        </a>
      </div>
      <div class="q-my-md">
        <a href="https://s.click.aliexpress.com/e/_eOsb0M" target="_blank" class="text-white">
          <img src="//ae01.alicdn.com/kf/HTB19_q9yhuTBuNkHFNRq6A9qpXa9/Raspberry-Pi-3-Model-B-Raspberry-Pi-Raspberry-Pi3-B-Pi-3-Pi-3B-With-WiFi.jpg_220x220.jpg"/>
          <span style="display:block;">Raspberry Pi 3 WiFi & Bluetooth</span>
        </a>
      </div>
      <div class="q-my-md">
        <a href="https://s.click.aliexpress.com/e/_etfnOy?bz=190*240" target="_blank">
          <img width="190" height="240" src="https://ae01.alicdn.com/kf/HTB1AVA_elsmBKNjSZFs761XSVXaP/EN_190_240.png"/>
        </a>
      </div>
    </q-drawer>

    <q-page-container class="flex flex-center bg-blue-grey-1">
      <router-view class="text-blue-grey-10" />
    </q-page-container>

    <q-footer elevated class="bg-blue-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      right: false,
      buttons: [
        {
          color: 'red',
          icon: 'important_devices',
          link: '/',
          top: 'что здесь',
          bottom: 'происходит?'
        },
        {
          color: 'orange',
          icon: 'help',
          link: '/how',
          top: 'как это',
          bottom: 'работает?'
        },
        {
          color: 'yellow',
          icon: 'phonelink',
          link: 'https://alexanderkif.github.io/meteo-front',
          top: 'посмотреть',
          bottom: 'пример'
        },
        {
          color: 'lime',
          icon: 'map',
          link: '/steps',
          top: 'посмотреть',
          bottom: 'все шаги'
        },
        {
          color: 'green',
          icon: 'attach_money',
          link: '/buy',
          top: 'какие детали',
          bottom: 'мне нужны?'
        },
        {
          color: 'teal',
          icon: 'cloud_queue',
          link: '',
          top: 'Подробнее',
          bottom: 'про backend'
        },
        {
          color: 'cyan',
          icon: 'memory',
          link: '/arduino',
          top: 'Подробнее',
          bottom: 'про arduino'
        },
        {
          color: 'deep-purple',
          icon: 'phone_android',
          link: '',
          top: 'Подробнее',
          bottom: 'про frontend'
        },
        {
          color: 'purple',
          icon: 'build',
          link: 'https://s.click.aliexpress.com/e/_ePFeIy',
          top: 'какие еще',
          bottom: 'есть датчики?'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-fixed-width {
  width: 200px;
}
</style>
