(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BarChart.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BarChart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

var reactiveProp = vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp;
/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Bar"],
  mixins: [reactiveProp],
  props: ['chartData', 'options'],
  mounted: function mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HorizontalBar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/HorizontalBar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

var reactiveProp = vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp;
/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["HorizontalBar"],
  mixins: [reactiveProp],
  props: ['chartData', 'options'],
  mounted: function mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LineChart.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LineChart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

var reactiveProp = vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp;
/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  mixins: [reactiveProp],
  props: ['chartData', 'options'],
  mounted: function mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LineChart_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/LineChart.vue */ "./resources/js/components/LineChart.vue");
/* harmony import */ var _components_BarChart_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/BarChart.vue */ "./resources/js/components/BarChart.vue");
/* harmony import */ var _components_HorizontalBar_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/HorizontalBar.vue */ "./resources/js/components/HorizontalBar.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LineChart: _components_LineChart_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    BarChart: _components_BarChart_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    HorizontalBar: _components_HorizontalBar_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      types: ["BAR", "LINE"],
      type: "LINE",
      currentTab: 0,
      datas: null,
      range: true,
      showCurrent: true,
      pickers: [],
      pickedString: "",
      startDate: null,
      endDate: null,
      min: null,
      max: new Date().toISOString().substr(0, 10),
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: new Date().toISOString().substr(0, 10),
      calenderMenu: false,
      rangeSidebar: null,
      rangeSidebars: [],
      locations: [],
      location: 0,
      user: 0,
      users: [],
      tabTypes: ["sales", "revenues", "expenses"],
      lastestUsers: [],
      lastestClients: []
    };
  },
  mounted: function mounted() {
    this.init();
    this.fetchLocations();
    this.fetchUsers();
    this.fetchReports();
    this.fetchLatestUser();
    this.fetchLatestClient();
  },
  methods: {
    init: function init() {
      this.startDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("YYYY-MM-DD");
      this.endDate = moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
      this.pickedString = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.startDate).format("MMM DD, YYYY") + " - " + moment__WEBPACK_IMPORTED_MODULE_0___default()(this.endDate).format("MMM DD, YYYY");
      this.pickers = [this.startDate, this.endDate];
      this.rangeSidebars = [{
        text: this.$t("Today"),
        from: moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD"),
        to: moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD")
      }, {
        text: this.$t("Yesterday"),
        from: moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "days").format("YYYY-MM-DD"),
        to: moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD")
      }, {
        text: this.$t("This week"),
        from: moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("week").format("YYYY-MM-DD"),
        to: moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD")
      }, {
        text: this.$t("Last week"),
        from: moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(14, "days").format("YYYY-MM-DD"),
        to: moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(7, "days").format("YYYY-MM-DD")
      }, {
        text: this.$t("This month"),
        from: moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf("month").format("YYYY-MM-DD"),
        to: moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD")
      }, {
        text: this.$t("Last month"),
        from: moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "month").startOf("month").format("YYYY-MM-DD"),
        to: moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(1, "month").endOf("month").format("YYYY-MM-DD")
      }, {
        text: this.$t("Last 7 days"),
        from: moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(6, "days").format("YYYY-MM-DD"),
        to: moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD")
      }, {
        text: this.$t("Last 30 days"),
        from: moment__WEBPACK_IMPORTED_MODULE_0___default()().subtract(29, "days").format("YYYY-MM-DD"),
        to: moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD")
      }];
    },
    //!DateRange Picker function
    onChange: function onChange(durations) {
      if (durations.length == 2) {
        if (moment__WEBPACK_IMPORTED_MODULE_0___default()(durations[0]) > moment__WEBPACK_IMPORTED_MODULE_0___default()(durations[1])) {
          this.pickers = durations.reverse(); //!
        }

        this.startDate = this.pickers[0];
        this.endDate = this.pickers[1];
        this.pickedString = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.startDate).format("MMM DD, YYYY") + " - " + moment__WEBPACK_IMPORTED_MODULE_0___default()(this.endDate).format("MMM DD, YYYY");
        console.log(durations);
        this.fetchReports();
      }
    },
    onDone: function onDone() {
      console.log("onDone");
      this.calenderMenu = false;
    },
    onCancel: function onCancel() {
      console.log("onCancel");
      this.calenderMenu = false;
    },
    onSelectRange: function onSelectRange(date) {
      this.startDate = date.from;
      this.endDate = date.to;
      this.pickers = [date.from, date.to];
      this.pickedString = moment__WEBPACK_IMPORTED_MODULE_0___default()(this.startDate).format("MMM DD, YYYY") + " - " + moment__WEBPACK_IMPORTED_MODULE_0___default()(this.endDate).format("MMM DD, YYYY");
      console.log(date.from, date.to);
      this.fetchReports();
    },
    onNext: function onNext() {
      console.log("onNext");
    },
    onPrevious: function onPrevious() {
      console.log("onPrevious");
    },
    onChangeLocation: function onChangeLocation() {
      console.log(this.location);
      this.fetchReports();
    },
    fetchReports: function fetchReports() {
      var _this = this;

      var reportType = this.tabTypes[this.currentTab];
      var url = "/api/reports?from=".concat(this.startDate, "&to=").concat(this.endDate, "&location_id=").concat(this.location, "&user_id=").concat(this.user, "&reportType=").concat(reportType);
      axios.get(url).then(function (result) {
        console.log(result.data);
        var datas = result.data;
        _this.datas = {
          labels: datas[0],
          datasets: [{
            label: _this.$t(reportType),
            fill: false,
            backgroundColor: "red",
            data: datas[1]
          }]
        };
      })["catch"](function (err) {
        console.log(err);
      });
    },
    fetchUsers: function fetchUsers() {
      var _this2 = this;

      axios.get("/api/users/selections").then(function (result) {
        console.log(result);
        _this2.users = [{
          id: 0,
          name: "All Users"
        }].concat(_toConsumableArray(result.data));
      })["catch"](function (err) {
        console.log(err);
      });
    },
    fetchLocations: function fetchLocations() {
      var _this3 = this;

      axios.get("/api/locations/selections").then(function (result) {
        console.log(result);
        _this3.locations = [{
          id: 0,
          name: "All Locations"
        }].concat(_toConsumableArray(result.data));
      })["catch"](function (err) {
        console.log(err);
      });
    },
    fetchLatestUser: function fetchLatestUser() {
      var _this4 = this;

      axios.get("/api/users/latest").then(function (result) {
        console.log(result);
        _this4.lastestUsers = result.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    fetchLatestClient: function fetchLatestClient() {
      var _this5 = this;

      axios.get("/api/clients/latest").then(function (result) {
        console.log(result);
        _this5.lastestClients = result.data;
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard.vue?vue&type=template&id=82704d4a&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Dashboard.vue?vue&type=template&id=82704d4a& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { staticClass: "px-3" },
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            {
              staticStyle: { "max-height": "60px" },
              attrs: { cols: "12", lg: "4", sm: "12", "max-width": "500" }
            },
            [
              _c(
                "v-menu",
                {
                  ref: "calenderMenu",
                  attrs: {
                    "close-on-content-click": false,
                    transition: "scale-transition",
                    "max-width": "500px"
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function(ref) {
                        var on = ref.on
                        return [
                          _c(
                            "v-text-field",
                            _vm._g(
                              {
                                staticClass: "centered-input",
                                attrs: { solo: "", readonly: "" },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "prepend-inner",
                                      fn: function() {
                                        return [
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass: "pa-0 ma-0",
                                              staticStyle: {
                                                border: "1px solid grey"
                                              },
                                              attrs: {
                                                text: "",
                                                icon: "",
                                                color: "text"
                                              },
                                              on: { click: _vm.onPrevious }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-chevron-left")
                                              ])
                                            ],
                                            1
                                          )
                                        ]
                                      },
                                      proxy: true
                                    },
                                    {
                                      key: "append",
                                      fn: function() {
                                        return [
                                          _c(
                                            "v-btn",
                                            {
                                              staticClass: "pa-0 ma-0",
                                              staticStyle: {
                                                border: "1px solid grey"
                                              },
                                              attrs: {
                                                text: "",
                                                icon: "",
                                                color: "text"
                                              },
                                              on: { click: _vm.onNext }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-chevron-right")
                                              ])
                                            ],
                                            1
                                          )
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ],
                                  null,
                                  true
                                ),
                                model: {
                                  value: _vm.pickedString,
                                  callback: function($$v) {
                                    _vm.pickedString = $$v
                                  },
                                  expression: "pickedString"
                                }
                              },
                              on
                            )
                          )
                        ]
                      }
                    }
                  ]),
                  model: {
                    value: _vm.calenderMenu,
                    callback: function($$v) {
                      _vm.calenderMenu = $$v
                    },
                    expression: "calenderMenu"
                  }
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-card-text",
                        { staticClass: "ma-0 pa-0" },
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                {
                                  staticClass: "py-0",
                                  staticStyle: {
                                    "border-right": "1px solid #e6e6e6"
                                  },
                                  attrs: { cols: "12", sm: "8" }
                                },
                                [
                                  _c("v-date-picker", {
                                    staticStyle: { "box-shadow": "none" },
                                    attrs: {
                                      "no-title": "",
                                      success: "",
                                      landscape: "",
                                      max: _vm.max,
                                      range: _vm.range,
                                      "show-current": _vm.showCurrent,
                                      "full-width": ""
                                    },
                                    on: { change: _vm.onChange },
                                    model: {
                                      value: _vm.pickers,
                                      callback: function($$v) {
                                        _vm.pickers = $$v
                                      },
                                      expression: "pickers"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-layout",
                                    [
                                      _c(
                                        "v-row",
                                        { staticClass: "px-3" },
                                        [
                                          _c(
                                            "v-col",
                                            {
                                              staticClass: "py-0",
                                              attrs: { cols: "6" }
                                            },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  "prepend-inner-icon":
                                                    "mdi-calendar",
                                                  label: _vm.$t("Start date"),
                                                  id: "start_date",
                                                  title: _vm.$t("Start date"),
                                                  readonly: ""
                                                },
                                                model: {
                                                  value: _vm.startDate,
                                                  callback: function($$v) {
                                                    _vm.startDate = $$v
                                                  },
                                                  expression: "startDate"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            {
                                              staticClass: "py-0",
                                              attrs: { cols: "6" }
                                            },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  "prepend-inner-icon":
                                                    "mdi-calendar",
                                                  label: _vm.$t("End date"),
                                                  id: "end_date",
                                                  title: _vm.$t("End date"),
                                                  readonly: ""
                                                },
                                                model: {
                                                  value: _vm.endDate,
                                                  callback: function($$v) {
                                                    _vm.endDate = $$v
                                                  },
                                                  expression: "endDate"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass:
                                    "pa-0 d-none d-lg-block d-md-block d-md-flex",
                                  attrs: { cols: "12", sm: "4" }
                                },
                                [
                                  _c(
                                    "v-list",
                                    { attrs: { dense: "" } },
                                    [
                                      _c(
                                        "v-list-item-group",
                                        {
                                          attrs: { color: "primary" },
                                          model: {
                                            value: _vm.rangeSidebar,
                                            callback: function($$v) {
                                              _vm.rangeSidebar = $$v
                                            },
                                            expression: "rangeSidebar"
                                          }
                                        },
                                        _vm._l(_vm.rangeSidebars, function(
                                          item,
                                          i
                                        ) {
                                          return _c(
                                            "v-list-item",
                                            {
                                              key: i,
                                              on: {
                                                click: function($event) {
                                                  return _vm.onSelectRange(item)
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "v-list-item-content",
                                                [
                                                  _c("v-list-item-title", {
                                                    domProps: {
                                                      textContent: _vm._s(
                                                        item.text
                                                      )
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        }),
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider", { staticClass: "pa-0 ma-0" })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { text: "", color: "black" },
                              on: { click: _vm.onCancel }
                            },
                            [_vm._v("CANCEL")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { text: "", color: "primary" },
                              on: { click: _vm.onDone }
                            },
                            [_vm._v("DONE")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            {
              staticStyle: { "max-height": "60px" },
              attrs: { cols: "12", lg: "3", sm: "12" }
            },
            [
              _c("v-select", {
                attrs: {
                  items: _vm.locations,
                  label: "Select location",
                  "item-text": "name",
                  "item-value": "id",
                  solo: ""
                },
                on: { change: _vm.fetchReports },
                model: {
                  value: _vm.location,
                  callback: function($$v) {
                    _vm.location = $$v
                  },
                  expression: "location"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            {
              staticStyle: { "max-height": "60px" },
              attrs: { cols: "12", lg: "3", sm: "12" }
            },
            [
              _c("v-select", {
                attrs: {
                  items: _vm.users,
                  label: "Select user",
                  "item-text": "name",
                  "item-value": "id",
                  solo: ""
                },
                on: { change: _vm.fetchReports },
                model: {
                  value: _vm.user,
                  callback: function($$v) {
                    _vm.user = $$v
                  },
                  expression: "user"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            {
              staticStyle: { "max-height": "60px" },
              attrs: { cols: "12", lg: "2", sm: "12" }
            },
            [
              _c("v-select", {
                attrs: { solo: "", items: _vm.types, label: "Chart Type" },
                model: {
                  value: _vm.type,
                  callback: function($$v) {
                    _vm.type = $$v
                  },
                  expression: "type"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "12" } },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-tabs",
                    {
                      on: { change: _vm.fetchReports },
                      model: {
                        value: _vm.currentTab,
                        callback: function($$v) {
                          _vm.currentTab = $$v
                        },
                        expression: "currentTab"
                      }
                    },
                    _vm._l(_vm.tabTypes, function(tab, index) {
                      return _c("v-tab", { key: index }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.$t(tab).toUpperCase()) +
                            "\n                    "
                        )
                      ])
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c("line-chart", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.type == "LINE",
                            expression: "type == 'LINE'"
                          }
                        ],
                        attrs: { height: 150, "chart-data": _vm.datas }
                      }),
                      _vm._v(" "),
                      _c("bar-chart", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.type == "BAR",
                            expression: "type == 'BAR'"
                          }
                        ],
                        attrs: { height: 150, "chart-data": _vm.datas }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "6" } },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", { attrs: { "primary-title": "" } }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.$t("users")) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c("v-simple-table", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function() {
                              return [
                                _c("thead", [
                                  _c("tr", [
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(_vm.$t("form.name")) +
                                          "\n                                    "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(_vm.$t("form.email")) +
                                          "\n                                    "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(_vm.$t("form.phone")) +
                                          "\n                                    "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(_vm.$t("form.created_at")) +
                                          "\n                                    "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(_vm.$t("form.updated_at")) +
                                          "\n                                    "
                                      )
                                    ])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(_vm.lastestUsers, function(user) {
                                    return _c("tr", { key: user.id }, [
                                      _c("td", [_vm._v(_vm._s(user.name))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(user.name))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(user.phone))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            user.created_at
                                              ? _vm
                                                  .moment(user.created_at)
                                                  .format("YYYY-MM-DD")
                                              : ""
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            user.updated_at
                                              ? _vm
                                                  .moment(user.updated_at)
                                                  .format("YYYY-MM-DD")
                                              : ""
                                          )
                                        )
                                      ])
                                    ])
                                  }),
                                  0
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", lg: "6" } },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", { attrs: { "primary-title": "" } }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.$t("clients")) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c("v-simple-table", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function() {
                              return [
                                _c("thead", [
                                  _c("tr", [
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(_vm.$t("form.name")) +
                                          "\n                                    "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(_vm.$t("form.email")) +
                                          "\n                                    "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(_vm.$t("form.phone")) +
                                          "\n                                    "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(_vm.$t("form.created_at")) +
                                          "\n                                    "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("th", { staticClass: "text-left" }, [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(_vm.$t("form.updated_at")) +
                                          "\n                                    "
                                      )
                                    ])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(_vm.lastestClients, function(client) {
                                    return _c("tr", { key: client.id }, [
                                      _c("td", [_vm._v(_vm._s(client.name))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(client.name))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(client.phone))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            client.created_at
                                              ? _vm
                                                  .moment(client.created_at)
                                                  .format("YYYY-MM-DD")
                                              : ""
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            client.updated_at
                                              ? _vm
                                                  .moment(client.updated_at)
                                                  .format("YYYY-MM-DD")
                                              : ""
                                          )
                                        )
                                      ])
                                    ])
                                  }),
                                  0
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/BarChart.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/BarChart.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarChart.vue?vue&type=script&lang=js& */ "./resources/js/components/BarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _BarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/BarChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/BarChart.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/BarChart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BarChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/HorizontalBar.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/HorizontalBar.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalBar.vue?vue&type=script&lang=js& */ "./resources/js/components/HorizontalBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _HorizontalBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/HorizontalBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/HorizontalBar.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/HorizontalBar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HorizontalBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/LineChart.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/LineChart.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineChart.vue?vue&type=script&lang=js& */ "./resources/js/components/LineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/LineChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/LineChart.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/LineChart.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LineChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/Dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_82704d4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=82704d4a& */ "./resources/js/pages/Dashboard.vue?vue&type=template&id=82704d4a&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/pages/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDatePicker */ "./node_modules/vuetify/lib/components/VDatePicker/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ "./node_modules/vuetify/lib/components/VTabs/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_82704d4a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_82704d4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */

























_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VDatePicker: vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_8__["VDatePicker"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__["VIcon"],VLayout: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VLayout"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItem"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemContent"],VListItemGroup: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemGroup"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemTitle"],VMenu: vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_12__["VMenu"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_13__["VSelect"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_14__["VSimpleTable"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VSpacer"],VTab: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_15__["VTab"],VTabs: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_15__["VTabs"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_16__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Dashboard.vue?vue&type=template&id=82704d4a&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Dashboard.vue?vue&type=template&id=82704d4a& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_82704d4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=82704d4a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard.vue?vue&type=template&id=82704d4a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_82704d4a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_82704d4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);