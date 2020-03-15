<template>
  <q-page class="flex flex-center full-width q-pa-md" style="max-width: 1280px;">
    <div style="max-width: 1024px">
      <div class="text-justify text-subtitle1 q-pa-sm">
        What's going on?
      </div>
      <div class="text-justify text-subtitle1 q-pa-sm">
        How it works. Step by step.
      </div>
      <div class="text-justify text-subtitle1 q-pa-sm">
        Упрощенно процесс с датчиком открытия двери выглядит так:
        <br/>
        1. Пока дверь закрыта ардуина периодично отправляет единички, когда открыта - нули.
        <br/>
        2. Программа на сервере принимает эти данные, добавляет к ним текущее время и складывает
        в базу данных.
        <br/>
        3. Все.
      </div>
      <div class="text-justify text-subtitle1 q-pa-sm">
        А так можно посмотреть данные:
        <br/>
        1. Программе на сервере отправляем запрос, например такой: "отправь нам состояние двери
        с 20.00 31.12.2019 по 08.00 01.01.2020 с шагом 30 минут".
        <br/>
        2. Прогорамма забирает эти данные из базы данных и отправляет нам. По примеру следующее:
        "20.00 31.12.2019 - закрыта, 20.30 31.12.2019 - закрыта, 21.00 31.12.2019 - открыта,
        21.30 31.12.2019 - закрыта, ..., 08.00 01.01.2020 - закрыта".
        <br/>
        3. Мы смотрим на данные, возможно в виде графика, и видим, что дверь открывалась между
        20.30 - 21.00 31.12.2019.
        <br/>
        4. Если нужно конкретней, то повторяем запрос за меньший период и с меньшим шагом.
        <br/>
        5. Все.
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
