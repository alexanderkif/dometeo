<template>
  <q-page class="flex flex-center full-width q-pa-md" style="max-width: 1280px;">
    <div style="max-width: 1024px">
      <div class="full-width flex flex-center q-pa-md">
        <q-img
          class="rounded-borders"
          src="../statics/how.png"
          spinner-color="secondary"
          style="max-width: 631px"
          contain
        ></q-img>
      </div>
      <div class="text-justify text-subtitle1 q-pa-sm">Хотите контролировать датчики метеоданных или света, открытие дверей или окон,
            включение электроприборов или уровень углекислого газа в течение ночи? Хотелось
            бы иметь графики этих событий для контроля или анализа за определенный период?</div>
      <div class="flex flex-center row justify-center">
        <q-img
          class="col-7"
          src="../statics/mobile-hor-menu-ip.png"
          spinner-color="secondary"
          style="max-width: 529px"
        ></q-img>
        <q-img
          class="col-5 q-mt-lg q-ml-lg"
          src="../statics/mobile-vert-lg.png"
          spinner-color="secondary"
          style="max-width: 385px"
        ></q-img>
      </div>
      <div class="text-justify text-subtitle1 q-pa-sm">А может собираетесь построить зависимость температуры в помещениях вашего
            энергосберегающего умного дома от направления ветра и температуры снаружи?</div>
      <div class="text-justify text-subtitle1 q-pa-sm">Или хотите узнать, закрытие какой из межкомнатных дверей останавливает конвекцию
            воздуха внутри дома и уменьшает затраты на отопление?</div>
      <div class="full-width flex flex-center q-pa-md">
        <q-img
          src="../statics/desktop-tv.png"
          spinner-color="secondary"
          style="max-width: 801px;"
        ></q-img>
      </div>
      <div class="text-justify text-subtitle1 q-pa-sm">Или вы хотите легко и играючи познакомить себя или вашего ребенка с современным
            веб-программированием и микроконтроллерами ардуино?</div>
      <div class="text-justify text-subtitle1 q-pa-sm">Если спаять пару датчиков и немного их запрограммировать,
        то можно записать показания этих датчиков в базу данных для анализа,
        ну или просто наблюдать и делать прогнозы</div>
      <div class="full-width flex flex-center q-pa-md">
        <q-img
          class="rounded-borders"
          src="../statics/schema-min.png"
          spinner-color="secondary"
        ></q-img>
      </div>
      <div class="text-justify text-subtitle1 q-pa-sm">Вы приблизитесь к пониманию, если повторите этот проект наружной автономной Wi-Fi
            метеостанции или реализуете задумку со своими датчиками.</div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
</style>

<script>

export default {
  name: 'Home',
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
