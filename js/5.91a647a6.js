(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0735":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("q-page",{staticClass:"flex flex-center full-width q-pa-md text-subtitle1 text-justify",staticStyle:{"max-width":"1280px"}},[i("div",{staticClass:"full-width",staticStyle:{"max-width":"1024px"}},[i("div",{staticClass:"q-pa-md"},[i("ol",[i("li",[t._v("Установите Arduino IDE")]),i("li",[t._v("Скачайте "),i("a",{attrs:{href:"https://github.com/alexanderkif/meteo/blob/master/arduino/MeteoBasicHttpsClient.ino"}},[t._v("скетч")])]),i("li",[t._v("Исправьте своими данными"),i("br"),i("code",[t._v('const String mySSID = "mySSID",'),i("br"),t._v('\n            myPass = "myPass",'),i("br"),t._v('\n            myKey = "mySuperKey",'),i("br"),t._v('\n            myUrl = "https://myproject.myaccount.now.sh/data";\n            ')])]),i("li",[t._v("Подключите плату Wemos D1 mini к компьютеру полным четырехпроводным проводом USB")]),i("li",[t._v("Прошейте плату Wemos D1 mini загруженным скетчем")]),i("li",[t._v("Плата сразу должна начать отправлять данные на сервер с Backend приложением")])])]),i("div",{staticClass:"q-pa-md text-center"},[t._v("Алгоритм работы программы, прошитой в Ардуино.")]),i("div",{staticClass:"full-width flex flex-center q-pa-md"},[i("q-img",{staticClass:"rounded-borders",staticStyle:{width:"15rem"},attrs:{src:e("80b1"),"spinner-color":"secondary"}})],1),i("div",{staticClass:"q-pa-md"},[t._v('\n      Далее нужно собрать схему для автономной работы и возможности установки метеостанции вне дома.\n      Где и какие детали взять смотрите в меню "КАКИЕ ДЕТАЛИ МНЕ НУЖНЫ?". Для сборки можно использовать\n      пайку или отладочные платы для беспаечного монтажа и соединительные провода для Arduino.\n    ')]),i("div",{staticClass:"q-pa-md"},[t._v("\n      Не забудьте установить перемычку D0-RST для выхода платы из режима глубокого сна.\n      На время прошивки платы не забывайте разрывать эту перемычку.\n    ")]),i("div",{staticClass:"full-width flex flex-center q-pa-md"},[i("q-img",{staticClass:"rounded-borders",attrs:{src:e("179f"),"spinner-color":"secondary"}})],1),i("div",{staticClass:"q-pa-md"},[t._v("\n      Плата стартует, отправляет данные и засыпает на 5 минут.\n      В целях экономии энергии батареи полевой транзистор на выводе D6 отключает питание датчика BME280.\n      Заряд аккумулятора 18650 контролируется входом A0. Если напряжение на батарее превышает 4.2V,\n      выход D7 разрывает цепь заряда аккумулятора от солнечной панели.\n    ")])])])},n=[],a={name:"Arduino",components:{},data:function(){return{visible:!1}},created:function(){this.visible=!0},methods:{}},c=a,l=e("2877"),r=e("eebe"),d=e.n(r),o=e("9989"),m=e("068f"),p=Object(l["a"])(c,i,n,!1,null,"40314440",null);s["default"]=p.exports;d()(p,"components",{QPage:o["a"],QImg:m["a"]})},"179f":function(t,s,e){t.exports=e.p+"img/schema-min.fcbad448.png"},"80b1":function(t,s,e){t.exports=e.p+"img/arduino.29c72afc.svg"}}]);