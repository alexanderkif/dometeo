<template>
  <q-page class="flex flex-center full-width q-pa-md text-subtitle1 text-justify" style="max-width: 1280px;">
    <div class="full-width" style="max-width: 1024px">
      <div class="full-width flex flex-center q-pa-md">
        <q-img
          class="rounded-borders"
          src="../statics/HowPOST.svg"
          spinner-color="secondary"
          style="max-width: 640px"
          contain
        ></q-img>
      </div>
      <div class="q-pa-md">
        Упрощенно процесс записи в базу данных состояния двери (открыта/закрыта) выглядит так:
        <ol>
          <li>Ардуина периодично соединяется по WiFi с интернетом и отправляет POST запрос на бекенд с данными состояния двери.
            Например, пока дверь закрыта отправляет в данных единичку, когда открыта - ноль.</li>
          <li>Программа на сервере принимает эти данные, добавляет к ним текущее время и складывает в базу данных.</li>
          <li>Все.</li>
        </ol>
      </div>
      <div class="full-width flex flex-center q-pa-md">
        <q-img
          class="rounded-borders"
          src="../statics/HowFront.svg"
          spinner-color="secondary"
          style="max-width: 640px"
          contain
        ></q-img>
      </div>
      <div class="q-pa-md">
        Чтобы посмотреть данные, в браузере нужно перейти по адресу фронтенда, после чего в браузер загрузится Javascript приложение.
        Есть возможность сохранить это Frontend приложение на свой компьютер или телефон и в дальнейшем этот шаг не выполнять.
      </div>
      <div class="full-width flex flex-center q-pa-md">
        <q-img
          class="rounded-borders"
          src="../statics/HowGetData.svg"
          spinner-color="secondary"
          style="max-width: 640px"
          contain
        ></q-img>
      </div>
      <div class="q-pa-md">
        Теперь из браузерного Javascript приложения можно получать данные с Backend:
        <ol>
          <li>Backend приложению на сервере отправляем запрос, например такой: "отправь нам состояние двери с 20.00 31.12.2019 по 08.00
            01.01.2020 с шагом 30 минут".</li>
          <li>Backend приложение забирает эти данные из базы данных и отправляет нам. По примеру выше следующее: "20.00 31.12.2019 - закрыта,
            20.30 31.12.2019 - закрыта, 21.00 31.12.2019 - открыта, 21.30 31.12.2019 - закрыта, ..., 08.00 01.01.2020 - закрыта".</li>
          <li>Мы смотрим на данные, возможно в виде графика, и видим, что дверь открывалась между 20.30 - 21.00 31.12.2019.</li>
          <li>Если нужно узнать точнее, то повторяем запрос за меньший период и с меньшим шагом.</li>
          <li>Все.</li>
        </ol>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
</style>

<script>

export default {
  name: 'HowItWorks',
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
