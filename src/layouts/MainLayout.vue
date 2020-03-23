<template>
  <q-layout view="hhh Lpr Lfr">

    <q-header elevated class="bg-green text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="text-center">
          <q-avatar>
            <img src="../statics/app-logo-128x128.png">
          </q-avatar>
          Автономная WiFi метеостанция на солнечной энергии
        </q-toolbar-title>
        <LangSwitcher />

        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered :width="240" content-class="bg-green-2">
      <div class="q-my-md q-mx-md flex flex-center"
        v-for="(button,index) in buttons"
        :key="index"
      >
        <q-btn :color="button.color" push class="btn-fixed-width" :to="button.link"
          @click="activeColor=button.color; right=true"
          v-if="button.link.indexOf('http')==-1">
          <div class="row items-center fit no-wrap">
            <q-icon left :name="button.icon" />
            <div class="text-center full-width">
              {{ button.top }}<br>{{ button.bottom }}
            </div>
          </div>
          <div
            round
            v-if="activeColor==button.color"
            :class="`bg-${activeColor} shadow-1`"
            style="position:absolute; width: 10px; height: 10px; right: -15px; border-radius: 50%;"
          ></div>
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
      <Advertising />
    </q-drawer>

    <q-page-container :class="`flex flex-center bg-${activeColor}-1`">
      <router-view class="text-blue-grey-10" />
    </q-page-container>

    <q-footer elevated class="bg-blue-grey-8 text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title>
          &copy; Aleksandr Nikiforov, 2020
        </q-toolbar-title>
        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import Advertising from '../components/Advertising'
import LangSwitcher from '../components/LangSwitcher'

export default {
  components: {
    Advertising,
    LangSwitcher
  },
  data () {
    return {
      left: false,
      right: false,
      activeColor: 'red',
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
          color: 'green',
          icon: 'attach_money',
          link: '/buy',
          top: 'какие детали',
          bottom: 'мне нужны?'
        },
        {
          color: 'teal',
          icon: 'cloud_queue',
          link: '/backend',
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
          link: '/frontend',
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
  },
  created () {
    this.activeColor = this.buttons.filter(btn => btn.link === this.$route.path)[0].color
  }
}
</script>

<style lang="scss" scoped>
.btn-fixed-width {
  width: 200px;
}
</style>
