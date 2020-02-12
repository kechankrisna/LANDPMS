(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Lands.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Lands.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      snackbar: false,
      isError: false,
      message: "",
      revenuesTypes: ["DEPOSIT", "PAID"],
      commissions: [],
      currentRevenue: {},
      currentExpense: {},
      currentLocation: {},
      currentReceiver: {},
      isEditLocation: false,
      revenues: [],
      locations: [],
      filterLocation: 0,
      users: [],
      clients: [],
      dateLandMenu: false,
      dateRevenueMenu: false,
      dateExpenseMenu: false,
      editedLand: {
        id: null,
        name: "",
        description: "",
        price: 0.0,
        location_id: null,
        user_id: null,
        commission_line_1: 0.0,
        commission_line_2: 0.0,
        commission_line_3: 0.0,
        commission_line_4: 0.0,
        sold_at: null
      },
      editedIndex: 0,
      landId: null,
      viewLand: {},
      dialogLand: false,
      dialogCategory: false,
      itemsPerPage: 10,
      footerprops: {
        "items-per-page-options": [5, 10, 15, 100]
      },
      search: "",
      selected: [],
      showSelect: true,
      totalLands: 0,
      lands: [],
      loading: true,
      options: {},
      headers: [{
        text: this.$t("form.name"),
        align: "left",
        sortable: true,
        value: "name"
      }, {
        text: this.$t("form.price"),
        value: "price",
        sortable: false
      }, {
        text: this.$t("form.sold_at"),
        value: "sold_at",
        sortable: false
      }, {
        text: this.$t("form.actions"),
        value: "action",
        sortable: false
      }]
    };
  },
  watch: {
    options: {
      handler: function handler() {
        var _this = this;

        // console.log(this.options);
        this.fetchLandFromServer().then(function (data) {
          _this.lands = data.items;
          _this.totalLands = data.total;
        });
      },
      deep: true
    },
    filterLocation: function filterLocation(value) {
      var _this2 = this;

      this.fetchLandFromServer().then(function (data) {
        _this2.products = data.items;
        _this2.totalProducts = data.total;
      });
    } // currentExpense: {
    //     handler(val){
    //         // console.log(val['user_id']);
    //         let amount = this.viewLand.commissions.filter( (com, i) => com.id == val['user_id'] )[0]['amount'];
    //         this.currentExpense.amount = amount;
    //     },
    //     deep: true
    // }

  },
  created: function created() {
    this.fetchLocations();
    this.fetchUsers();
    this.fetchClients();
  },
  methods: {
    fetchLandFromServer: function fetchLandFromServer() {
      var _this3 = this;

      this.loading = true;
      var url = "/api/lands/";

      if (typeof this.options.itemsPerPage == "number") {
        url += "?paginate=".concat(this.options.itemsPerPage);

        if (this.options.page) {
          console.log("page ".concat(this.options.page));
          url += "&&page=".concat(this.options.page);
        }
      }

      if (typeof this.options.sortBy[0] != "undefined") {
        url += "&&sortBy=".concat(this.options.sortBy[0]);
      }

      if (this.options.sortDesc.length > 0) {
        console.log(this.options.sortDesc);
        url += "&&sortDesc=".concat(this.options.sortDesc[0]);
      }

      if (this.filterLocation > 0) {
        url += "&&filerByField=location_id&&filerByValue=".concat(this.filterLocation);
      }

      if (typeof this.search[0] != "undefined") {
        url = "/api/lands/?search=".concat(this.search);
      }

      console.log("loaded");
      return new Promise(function (resolve, reject) {
        axios.get(url).then(function (result) {
          // console.log(result.data)
          var _this3$options = _this3.options,
              sortBy = _this3$options.sortBy,
              sortDesc = _this3$options.sortDesc,
              page = _this3$options.page,
              itemsPerPage = _this3$options.itemsPerPage;
          var items = [];

          if (typeof result.data.data != "undefined") {
            items = result.data.data; //!
          }

          var total = 0;

          if (typeof result.data.meta != "undefined") {
            total = result.data.meta.total; //!

            _this3.footerprops["items-per-page-options"] = [5, 10, 15, 100, total];
          } else {
            total = result.data.data.length;
            _this3.footerprops["items-per-page-options"] = [total];
          } // console.log(result.data.meta.total);


          _this3.loading = false;
          resolve({
            items: items,
            total: total
          });
        })["catch"](function (err) {
          console.log(err);
          reject(err);
        });
      });
    },
    initLand: function initLand() {
      this.editedLand = {
        id: null,
        name: "",
        description: "",
        price: 0.0,
        location_id: null,
        user_id: null,
        client_id: null,
        commission_line_1: 0.0,
        commission_line_2: 0.0,
        commission_line_3: 0.0,
        commission_line_4: 0.0,
        sold_at: moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD")
      };
      this.currentLocation = {};
      this.isEditLocation = false;
      this.viewLand = {};
      this.landId = null;
      this.dialogLand = true;
    },
    initLocation: function initLocation() {
      this.isEditLocation = !this.isEditLocation;
      this.currentLocation = {};
    },
    initExpense: function initExpense() {
      this.currentExpense.type = "COMMISSION";
      this.currentExpense.title = this.currentExpense.type;
      this.currentExpense.description = this.currentExpense.type;
      this.currentExpense.land_id = this.viewLand.id;
      this.currentExpense.user_id = null;
      this.currentExpense.amount = 0.0;
      this.currentExpense.id = null, this.currentExpense.paid_at = moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
    },
    initRevenue: function initRevenue() {
      this.currentRevenue.title = this.currentRevenue.type;
      this.currentRevenue.description = this.currentRevenue.type;
      this.currentRevenue.land_id = this.viewLand.id;
      this.currentRevenue.user_id = null;
      this.currentRevenue.amount = 0.0;
      this.currentRevenue.id = null, this.currentRevenue.received_at = moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
    },
    onSaveLand: function onSaveLand() {
      var _this4 = this;

      var _this$editedLand = this.editedLand,
          name = _this$editedLand.name,
          description = _this$editedLand.description,
          price = _this$editedLand.price,
          location_id = _this$editedLand.location_id,
          user_id = _this$editedLand.user_id,
          client_id = _this$editedLand.client_id,
          commission_line_1 = _this$editedLand.commission_line_1,
          commission_line_2 = _this$editedLand.commission_line_2,
          commission_line_3 = _this$editedLand.commission_line_3,
          commission_line_4 = _this$editedLand.commission_line_4,
          sold_at = _this$editedLand.sold_at;
      var land = {
        name: name,
        description: description,
        price: price,
        location_id: location_id,
        user_id: user_id,
        client_id: client_id,
        commission_line_1: commission_line_1,
        commission_line_2: commission_line_2,
        commission_line_3: commission_line_3,
        commission_line_4: commission_line_4,
        sold_at: sold_at
      };

      if (this.landId == null) {
        // console.log("create");
        axios.post("/api/lands", land).then(function (result) {
          // console.log(result);
          _this4.lands.push(result.data.data);

          _this4.snackbar = true;
          _this4.isError = false;
          _this4.message = _this4.$t("lands.created");
        })["catch"](function (error) {
          // console.log(error);
          _this4.snackbar = true;
          _this4.isError = true;
          _this4.message = error.response.data.message;
        });
      } else {
        // console.log('update');
        axios.put("/api/lands/".concat(this.landId), land).then(function (result) {
          // console.log(result.data.data);
          Object.assign(_this4.lands[_this4.editedIndex], result.data.data);
          _this4.snackbar = true;
          _this4.isError = false;
          _this4.message = _this4.$t("lands.updated");
        })["catch"](function (error) {
          // console.log(error);
          _this4.snackbar = true;
          _this4.isError = true;
          _this4.message = error.response.data.message;
        });
      }

      this.dialogLand = false; // console.log("saved");
    },
    onDeleteLand: function onDeleteLand(item) {
      var _this5 = this;

      var index = this.lands.indexOf(item);
      confirm("Are you sure you want to delete this user?") && axios["delete"]("/api/lands/".concat(item.id)).then(function (result) {
        // console.log(result);
        _this5.lands.splice(index, 1);

        _this5.snackbar = true;
        _this5.isError = false;
        _this5.message = _this5.$t("lands.deleted");
      })["catch"](function (error) {
        // console.log(error);
        _this5.snackbar = true;
        _this5.isError = true;
        _this5.message = error.response.data.message;
      }); // console.log(item);
    },
    onSearchLand: function onSearchLand() {
      var _this6 = this;

      this.fetchLandFromServer().then(function (data) {
        _this6.lands = data.items;
        _this6.totalLands = data.total;
      });
    },
    onCancelSearch: function onCancelSearch() {
      var _this7 = this;

      this.search = "";
      this.fetchLandFromServer().then(function (data) {
        _this7.lands = data.items;
        _this7.totalLands = data.total;
      });
    },
    cancel: function cancel() {
      this.dialogLand = false;
      this.initLand();
      console.log("canceled");
    },
    close: function close() {
      this.dialogLand = false;
      console.log("closed");
    },
    onEditLand: function onEditLand(land) {
      this.editedIndex = this.lands.indexOf(land);
      this.landId = land.id;
      this.editedLand = Object.assign({}, land);
      this.dialogLand = true;
      console.log(land);
    },
    onViewLand: function onViewLand(land) {
      var _this8 = this;

      axios.get("/api/lands/".concat(land.id)).then(function (result) {
        // console.log(result);
        _this8.viewLand = result.data.data;
      })["catch"](function (err) {
        console.log(err);
      });
      this.currentRevenue.received_at = moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
      this.currentExpense.paid_at = moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
    },
    onViewRevenue: function onViewRevenue(income) {
      this.currentRevenue = income;
    },
    onViewExpense: function onViewExpense(expense) {
      this.currentExpense = expense;
    },
    onSaveRevenue: function onSaveRevenue() {
      var _this9 = this;

      // console.log(this.viewLand);
      // console.log(this.currentRevenue);
      this.currentRevenue.title = this.currentRevenue.type;
      this.currentRevenue.description = this.currentRevenue.type;
      this.currentRevenue.land_id = this.viewLand.id; // console.log(this.currentRevenue);

      if (this.currentRevenue.id == null) {
        // console.log("create");
        axios.post("/api/incomes", this.currentRevenue).then(function (result) {
          // console.log(result);
          // this.viewLand.incomes.push(result.data.data);
          _this9.onViewLand(_this9.viewLand);

          _this9.initRevenue();

          _this9.snackbar = true;
          _this9.isError = false;
          _this9.message = _this9.$t("revenues.created");
        })["catch"](function (error) {
          _this9.snackbar = true;
          _this9.isError = true;
          _this9.message = error.response.data.message; // console.log(error);
        });
      } else {
        // console.log('update');
        axios.put("/api/incomes/".concat(this.currentRevenue.id), this.currentRevenue).then(function (result) {
          // console.log(result.data.data);
          _this9.onViewLand(_this9.viewLand);

          _this9.initRevenue();

          _this9.snackbar = true;
          _this9.isError = false;
          _this9.message = _this9.$t("revenues.updated");
        })["catch"](function (error) {
          // console.log(error);
          _this9.snackbar = true;
          _this9.isError = true;
          _this9.message = error.response.data.message;
        });
      }
    },
    onSaveExpense: function onSaveExpense() {
      var _this10 = this;

      // console.log(this.viewLand);
      // console.log(this.currentExpense);
      this.currentExpense.type = "COMMISSION";
      this.currentExpense.title = this.currentExpense.type;
      this.currentExpense.description = this.currentExpense.type;
      this.currentExpense.land_id = this.viewLand.id; // console.log(this.currentExpense);

      if (this.currentExpense.id == null) {
        // console.log("create");
        axios.post("/api/expenses", this.currentExpense).then(function (result) {
          // console.log(result);
          // this.viewLand.incomes.push(result.data.data);
          _this10.onViewLand(_this10.viewLand);

          _this10.initExpense();

          _this10.snackbar = true;
          _this10.isError = false;
          _this10.message = _this10.$t("expenses.created");
        })["catch"](function (error) {
          _this10.snackbar = true;
          _this10.isError = true;
          _this10.message = error.response.data.message; // console.log(error);
        });
      } else {
        // console.log('update');
        axios.put("/api/expenses/".concat(this.currentExpense.id), this.currentExpense).then(function (result) {
          // console.log(result.data.data);
          _this10.onViewLand(_this10.viewLand);

          _this10.initExpense();

          _this10.snackbar = true;
          _this10.isError = false;
          _this10.message = _this10.$t("epxenses.updated");
        })["catch"](function (error) {
          // console.log(error);
          _this10.snackbar = true;
          _this10.isError = true;
          _this10.message = error.response.data.message;
        });
      }
    },
    onViewLocation: function onViewLocation() {
      this.currentLocation.id = this.editedLand.location_id;
      this.isEditLocation = true;
      console.log(this.currentLocation.id);
    },
    onSaveLocation: function onSaveLocation() {
      var _this11 = this;

      if (this.currentLocation.id == null) {
        axios.post("/api/locations", this.currentLocation).then(function (result) {
          // console.log(result);
          _this11.fetchLocations();

          _this11.isEditLocation = false;
          _this11.snackbar = true;
          _this11.isError = false;
          _this11.message = _this11.$t("locations.created");
        })["catch"](function (error) {
          _this11.snackbar = true;
          _this11.isError = true;
          _this11.message = error.response.data.message; // console.log(error);
        });
      } else {
        axios.put("/api/locations/".concat(this.currentLocation.id), this.currentLocation).then(function (result) {
          // console.log(result.data.data);
          _this11.fetchLocations();

          _this11.isEditLocation = false;
          _this11.snackbar = true;
          _this11.isError = false;
          _this11.message = _this11.$t("locations.updated");
        })["catch"](function (error) {
          _this11.snackbar = true;
          _this11.isError = true;
          _this11.message = error.response.data.message; // console.log(error);
        });
      }
    },
    fetchLocations: function fetchLocations() {
      var _this12 = this;

      axios.get("/api/locations/selections").then(function (result) {
        console.log(result);
        _this12.locations = result.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    fetchUsers: function fetchUsers() {
      var _this13 = this;

      axios.get("/api/users/selections").then(function (result) {
        console.log(result);
        _this13.users = result.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    fetchClients: function fetchClients() {
      var _this14 = this;

      axios.get("/api/clients/selections").then(function (result) {
        console.log(result);
        _this14.clients = result.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    onChangeClient: function onChangeClient(id) {
      var client = this.clients.filter(function (client, index) {
        return client.id == id;
      })[0];
      this.editedLand.user_id = client.user_id;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VTooltip/VTooltip.sass":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vuetify/src/components/VTooltip/VTooltip.sass ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-tooltip {\n  display: none;\n}\n.v-tooltip--attached {\n  display: inline;\n}\n.v-tooltip__content {\n  background: rgba(97, 97, 97, 0.9);\n  color: #FFFFFF;\n  border-radius: 4px;\n  font-size: 14px;\n  line-height: 22px;\n  display: inline-block;\n  padding: 5px 16px;\n  position: absolute;\n  text-transform: initial;\n  width: auto;\n  opacity: 1;\n  pointer-events: none;\n}\n.v-tooltip__content--fixed {\n  position: fixed;\n}\n.v-tooltip__content[class*=-active] {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n.v-tooltip__content[class*=enter-active] {\n  transition-duration: 150ms;\n}\n.v-tooltip__content[class*=leave-active] {\n  transition-duration: 75ms;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Lands.vue?vue&type=template&id=11b77fa2&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Lands.vue?vue&type=template&id=11b77fa2& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
            { attrs: { cols: "12", lg: "6" } },
            [
              _c(
                "v-card",
                { staticClass: "border-top border-primary" },
                [
                  _c("v-data-table", {
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.lands,
                      options: _vm.options,
                      "server-items-length": _vm.totalLands,
                      loading: _vm.loading,
                      "items-per-page": _vm.itemsPerPage,
                      "footer-props": _vm.footerprops,
                      "show-select": _vm.showSelect,
                      "loading-text": "Loading... Please wait"
                    },
                    on: {
                      "update:options": function($event) {
                        _vm.options = $event
                      }
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "top",
                        fn: function() {
                          return [
                            _c(
                              "v-toolbar",
                              { attrs: { color: "white", flat: "" } },
                              [
                                _c(
                                  "v-toolbar-title",
                                  [
                                    _c("v-icon", { attrs: { size: 45 } }, [
                                      _vm._v("mdi-map")
                                    ]),
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(_vm.$t("lands").toUpperCase()) +
                                        "\n                            "
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("v-divider", {
                                  staticClass: "mx-4",
                                  attrs: { inset: "", vertical: "" }
                                }),
                                _vm._v(" "),
                                _c("v-spacer"),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "mb-2",
                                    attrs: {
                                      color: "primary",
                                      rounded: "",
                                      dark: ""
                                    },
                                    on: { click: _vm.initLand }
                                  },
                                  [
                                    _c("v-icon", [_vm._v("mdi-plus")]),
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(_vm.$t("New Land")) +
                                        "\n                            "
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-dialog",
                                  {
                                    attrs: { "max-width": "500px" },
                                    model: {
                                      value: _vm.dialogLand,
                                      callback: function($$v) {
                                        _vm.dialogLand = $$v
                                      },
                                      expression: "dialogLand"
                                    }
                                  },
                                  [
                                    _c(
                                      "v-card",
                                      [
                                        _c("v-card-title", [
                                          _c(
                                            "span",
                                            { staticClass: "headline" },
                                            [
                                              _vm._v(
                                                "\n                                            " +
                                                  _vm._s(
                                                    _vm.editedLand["id"] != null
                                                      ? _vm.$t("Edit Land")
                                                      : _vm.$t("New Land")
                                                  ) +
                                                  "\n                                        "
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "v-card-text",
                                          [
                                            _c(
                                              "v-container",
                                              [
                                                _c(
                                                  "v-row",
                                                  [
                                                    _c(
                                                      "v-col",
                                                      {
                                                        attrs: {
                                                          cols: "12",
                                                          sm: "12",
                                                          md: "12"
                                                        }
                                                      },
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            label: _vm.$t(
                                                              "form.name"
                                                            )
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedLand
                                                                .name,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedLand,
                                                                "name",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "\n                                                            editedLand.name\n                                                        "
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-col",
                                                      {
                                                        attrs: {
                                                          cols: "12",
                                                          sm: "12",
                                                          md: "12"
                                                        }
                                                      },
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            label: _vm.$t(
                                                              "form.description"
                                                            )
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedLand
                                                                .description,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedLand,
                                                                "description",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "\n                                                            editedLand.description\n                                                        "
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-col",
                                                      {
                                                        attrs: {
                                                          cols: "12",
                                                          sm: "12",
                                                          md: "12"
                                                        }
                                                      },
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            type: "number",
                                                            label: _vm.$t(
                                                              "form.price"
                                                            )
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedLand
                                                                .price,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedLand,
                                                                "price",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "\n                                                            editedLand.price\n                                                        "
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-col",
                                                      {
                                                        attrs: {
                                                          cols: "9",
                                                          sm: "9",
                                                          md: "9"
                                                        }
                                                      },
                                                      [
                                                        _c("v-select", {
                                                          attrs: {
                                                            clearable: "",
                                                            chips: "",
                                                            "menu-props": {
                                                              maxHeight: "400"
                                                            },
                                                            dense: "",
                                                            items:
                                                              _vm.locations,
                                                            label: _vm.$t(
                                                              "Location in"
                                                            ),
                                                            "item-text": "name",
                                                            "item-value": "id"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedLand
                                                                .location_id,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedLand,
                                                                "location_id",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "\n                                                            editedLand.location_id\n                                                        "
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-col",
                                                      {
                                                        attrs: {
                                                          cols: "3",
                                                          sm: "3",
                                                          md: "3"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-layout",
                                                          {
                                                            attrs: { flex: "" }
                                                          },
                                                          [
                                                            _c(
                                                              "v-btn",
                                                              {
                                                                attrs: {
                                                                  icon: ""
                                                                },
                                                                on: {
                                                                  click:
                                                                    _vm.initLocation
                                                                }
                                                              },
                                                              [
                                                                _c("v-icon", [
                                                                  _vm._v(
                                                                    "mdi-plus-circle-outline"
                                                                  )
                                                                ])
                                                              ],
                                                              1
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-btn",
                                                              {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "show",
                                                                    rawName:
                                                                      "v-show",
                                                                    value:
                                                                      _vm
                                                                        .editedLand
                                                                        .location_id !=
                                                                      null,
                                                                    expression:
                                                                      "\n                                                                editedLand.location_id !=\n                                                                    null\n                                                            "
                                                                  }
                                                                ],
                                                                attrs: {
                                                                  icon: ""
                                                                },
                                                                on: {
                                                                  click:
                                                                    _vm.onViewLocation
                                                                }
                                                              },
                                                              [
                                                                _c("v-icon", [
                                                                  _vm._v(
                                                                    "mdi-pencil"
                                                                  )
                                                                ])
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
                                                        directives: [
                                                          {
                                                            name: "show",
                                                            rawName: "v-show",
                                                            value:
                                                              _vm.isEditLocation,
                                                            expression:
                                                              "isEditLocation"
                                                          }
                                                        ],
                                                        attrs: {
                                                          cols: "9",
                                                          sm: "9",
                                                          md: "9"
                                                        }
                                                      },
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            label: _vm.$t(
                                                              "Location name"
                                                            )
                                                          },
                                                          model: {
                                                            value:
                                                              _vm
                                                                .currentLocation
                                                                .name,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.currentLocation,
                                                                "name",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "\n                                                            currentLocation.name\n                                                        "
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-col",
                                                      {
                                                        directives: [
                                                          {
                                                            name: "show",
                                                            rawName: "v-show",
                                                            value:
                                                              _vm.isEditLocation,
                                                            expression:
                                                              "isEditLocation"
                                                          }
                                                        ],
                                                        attrs: {
                                                          cols: "3",
                                                          sm: "3",
                                                          md: "3"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-btn",
                                                          {
                                                            attrs: {
                                                              rounded: ""
                                                            },
                                                            on: {
                                                              click:
                                                                _vm.onSaveLocation
                                                            }
                                                          },
                                                          [
                                                            _c("v-icon", [
                                                              _vm._v(
                                                                "\n                                                            mdi-content-save-edit-outline\n                                                        "
                                                              )
                                                            ]),
                                                            _vm._v(
                                                              "\n                                                        " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "form.save"
                                                                  )
                                                                ) +
                                                                "\n                                                    "
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
                                                        attrs: {
                                                          cols: "12",
                                                          sm: "12",
                                                          md: "12"
                                                        }
                                                      },
                                                      [
                                                        _c("v-select", {
                                                          attrs: {
                                                            clearable: "",
                                                            chips: "",
                                                            "menu-props": {
                                                              maxHeight: "400"
                                                            },
                                                            dense: "",
                                                            items: _vm.clients,
                                                            label: _vm.$t(
                                                              "Owned by"
                                                            ),
                                                            "item-text": "name",
                                                            "item-value": "id"
                                                          },
                                                          on: {
                                                            change:
                                                              _vm.onChangeClient
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedLand
                                                                .client_id,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedLand,
                                                                "client_id",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "\n                                                            editedLand.client_id\n                                                        "
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-col",
                                                      {
                                                        attrs: {
                                                          cols: "12",
                                                          sm: "12",
                                                          md: "12"
                                                        }
                                                      },
                                                      [
                                                        _c("v-select", {
                                                          attrs: {
                                                            readonly: "",
                                                            chips: "",
                                                            "menu-props": {
                                                              maxHeight: "400"
                                                            },
                                                            dense: "",
                                                            items: _vm.users,
                                                            label: _vm.$t(
                                                              "Referenced by"
                                                            ),
                                                            "item-text": "name",
                                                            "item-value": "id"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedLand
                                                                .user_id,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedLand,
                                                                "user_id",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "\n                                                            editedLand.user_id\n                                                        "
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-col",
                                                      {
                                                        attrs: {
                                                          cols: "12",
                                                          sm: "12",
                                                          md: "12"
                                                        }
                                                      },
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            type: "number",
                                                            label: _vm.$t(
                                                              "form.commission_line_1"
                                                            )
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedLand
                                                                .commission_line_1,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedLand,
                                                                "commission_line_1",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "\n                                                            editedLand.commission_line_1\n                                                        "
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-col",
                                                      {
                                                        attrs: {
                                                          cols: "12",
                                                          sm: "12",
                                                          md: "12"
                                                        }
                                                      },
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            type: "number",
                                                            label: _vm.$t(
                                                              "form.commission_line_2"
                                                            )
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedLand
                                                                .commission_line_2,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedLand,
                                                                "commission_line_2",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "\n                                                            editedLand.commission_line_2\n                                                        "
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-col",
                                                      {
                                                        attrs: {
                                                          cols: "12",
                                                          sm: "12",
                                                          md: "12"
                                                        }
                                                      },
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            type: "number",
                                                            label: _vm.$t(
                                                              "form.commission_line_3"
                                                            )
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedLand
                                                                .commission_line_3,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedLand,
                                                                "commission_line_3",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "\n                                                            editedLand.commission_line_3\n                                                        "
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-col",
                                                      {
                                                        attrs: {
                                                          cols: "12",
                                                          sm: "12",
                                                          md: "12"
                                                        }
                                                      },
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            type: "number",
                                                            label: _vm.$t(
                                                              "form.commission_line_4"
                                                            )
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedLand
                                                                .commission_line_4,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedLand,
                                                                "commission_line_4",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "\n                                                            editedLand.commission_line_4\n                                                        "
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-col",
                                                      {
                                                        attrs: {
                                                          cols: "12",
                                                          sm: "12",
                                                          md: "12"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-menu",
                                                          {
                                                            attrs: {
                                                              "close-on-content-click": false,
                                                              "nudge-right": 40,
                                                              transition:
                                                                "scale-transition",
                                                              "offset-y": "",
                                                              "min-width":
                                                                "290px"
                                                            },
                                                            scopedSlots: _vm._u(
                                                              [
                                                                {
                                                                  key:
                                                                    "activator",
                                                                  fn: function(
                                                                    ref
                                                                  ) {
                                                                    var on =
                                                                      ref.on
                                                                    return [
                                                                      _c(
                                                                        "v-text-field",
                                                                        _vm._g(
                                                                          {
                                                                            attrs: {
                                                                              "prepend-inner-icon":
                                                                                "mdi-calendar-check",
                                                                              label: _vm.$t(
                                                                                "Date"
                                                                              ),
                                                                              readonly:
                                                                                ""
                                                                            },
                                                                            model: {
                                                                              value:
                                                                                _vm
                                                                                  .editedLand
                                                                                  .sold_at,
                                                                              callback: function(
                                                                                $$v
                                                                              ) {
                                                                                _vm.$set(
                                                                                  _vm.editedLand,
                                                                                  "sold_at",
                                                                                  $$v
                                                                                )
                                                                              },
                                                                              expression:
                                                                                "\n                                                                    editedLand.sold_at\n                                                                "
                                                                            }
                                                                          },
                                                                          on
                                                                        )
                                                                      )
                                                                    ]
                                                                  }
                                                                }
                                                              ]
                                                            ),
                                                            model: {
                                                              value:
                                                                _vm.dateLandMenu,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.dateLandMenu = $$v
                                                              },
                                                              expression:
                                                                "\n                                                            dateLandMenu\n                                                        "
                                                            }
                                                          },
                                                          [
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-date-picker",
                                                              {
                                                                on: {
                                                                  input: function(
                                                                    $event
                                                                  ) {
                                                                    _vm.dateLandMenu = false
                                                                  }
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm
                                                                      .editedLand
                                                                      .sold_at,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.editedLand,
                                                                      "sold_at",
                                                                      $$v
                                                                    )
                                                                  },
                                                                  expression:
                                                                    "\n                                                                editedLand.sold_at\n                                                            "
                                                                }
                                                              }
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
                                                attrs: {
                                                  color: "blue darken-1",
                                                  text: ""
                                                },
                                                on: { click: _vm.close }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.$t("form.cancel"))
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  color: "blue darken-1",
                                                  text: ""
                                                },
                                                on: { click: _vm.onSaveLand }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                            " +
                                                    _vm._s(
                                                      _vm.$t("form.save")
                                                    ) +
                                                    "\n                                        "
                                                )
                                              ]
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
                                  "v-menu",
                                  {
                                    attrs: {
                                      "offset-y": "",
                                      bottom: "",
                                      left: ""
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "activator",
                                        fn: function(ref) {
                                          var on = ref.on
                                          return [
                                            _c(
                                              "v-btn",
                                              _vm._g(
                                                { attrs: { icon: "" } },
                                                on
                                              ),
                                              [
                                                _c("v-icon", [
                                                  _vm._v("mdi-menu-down")
                                                ])
                                              ],
                                              1
                                            )
                                          ]
                                        }
                                      }
                                    ])
                                  },
                                  [
                                    _vm._v(" "),
                                    _c(
                                      "v-list",
                                      [
                                        _c(
                                          "v-list-item",
                                          { attrs: { dense: "" } },
                                          [
                                            _c(
                                              "v-list-item-icon",
                                              [
                                                _c("v-icon", [
                                                  _vm._v(
                                                    "mdi-file-excel-outline"
                                                  )
                                                ])
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item-content",
                                              { attrs: { left: "" } },
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v(
                                                    "\n                                                Exports Excel\n                                            "
                                                  )
                                                ])
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
                            ),
                            _vm._v(" "),
                            _c(
                              "v-row",
                              {
                                staticClass: "px-5",
                                attrs: { row: "", wrap: "" }
                              },
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", lg: "6", sm: "12" } },
                                  [
                                    _c("v-select", {
                                      attrs: {
                                        items: _vm.locations,
                                        "item-value": "id",
                                        label: _vm.$t("Filter location"),
                                        "item-text": "name"
                                      },
                                      model: {
                                        value: _vm.filterLocation,
                                        callback: function($$v) {
                                          _vm.filterLocation = $$v
                                        },
                                        expression: "filterLocation"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", lg: "6", sm: "12" } },
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: "Search",
                                        "single-line": ""
                                      },
                                      on: {
                                        keyup: function($event) {
                                          if (
                                            !$event.type.indexOf("key") &&
                                            _vm._k(
                                              $event.keyCode,
                                              "enter",
                                              13,
                                              $event.key,
                                              "Enter"
                                            )
                                          ) {
                                            return null
                                          }
                                          return _vm.onSearchLand($event)
                                        }
                                      },
                                      scopedSlots: _vm._u([
                                        {
                                          key: "append",
                                          fn: function() {
                                            return [
                                              _vm.search != null
                                                ? _c(
                                                    "v-btn",
                                                    {
                                                      staticClass: "pa-0 ma-0",
                                                      attrs: {
                                                        small: "",
                                                        icon: ""
                                                      },
                                                      on: {
                                                        click:
                                                          _vm.onCancelSearch
                                                      }
                                                    },
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v("mdi-close")
                                                      ])
                                                    ],
                                                    1
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass: "pa-0 ma-0",
                                                  attrs: {
                                                    small: "",
                                                    icon: ""
                                                  },
                                                  on: {
                                                    click: _vm.onSearchLand
                                                  }
                                                },
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("mdi-crosshairs")
                                                  ])
                                                ],
                                                1
                                              )
                                            ]
                                          },
                                          proxy: true
                                        }
                                      ]),
                                      model: {
                                        value: _vm.search,
                                        callback: function($$v) {
                                          _vm.search = $$v
                                        },
                                        expression: "search"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "item.selected",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("v-simple-checkbox", {
                              attrs: { color: "green" },
                              model: {
                                value: item.selected,
                                callback: function($$v) {
                                  _vm.$set(item, "selected", $$v)
                                },
                                expression: "item.selected"
                              }
                            })
                          ]
                        }
                      },
                      {
                        key: "item.name",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c(
                              "v-icon",
                              {
                                staticClass: "mr-5",
                                attrs: { color: "accent" }
                              },
                              [_vm._v("mdi-map-marker")]
                            ),
                            _vm._v(" "),
                            _c("span", { staticClass: "caption" }, [
                              _vm._v(_vm._s(item.name))
                            ])
                          ]
                        }
                      },
                      {
                        key: "item.action",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c(
                              "v-icon",
                              {
                                staticClass: "mr-2",
                                attrs: { small: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.onViewLand(item)
                                  }
                                }
                              },
                              [_vm._v("mdi-eye")]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-icon",
                              {
                                staticClass: "mr-2",
                                attrs: { small: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.onEditLand(item)
                                  }
                                }
                              },
                              [_vm._v("mdi-pencil")]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-icon",
                              {
                                attrs: { small: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.onDeleteLand(item)
                                  }
                                }
                              },
                              [_vm._v("mdi-trash-can-outline")]
                            )
                          ]
                        }
                      }
                    ]),
                    model: {
                      value: _vm.selected,
                      callback: function($$v) {
                        _vm.selected = $$v
                      },
                      expression: "selected"
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
            "v-col",
            { attrs: { cols: "12", lg: "3" } },
            [
              _c(
                "v-card",
                { staticClass: "border-top border-blue" },
                [
                  _c("v-card-title", { attrs: { "primary-title": "" } }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.$t("Price and Payments").toUpperCase()) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  Object.entries(_vm.viewLand).length !== 0
                    ? _c(
                        "v-card-text",
                        [
                          _c("v-divider", { staticClass: "pa-0 ma-0" }),
                          _vm._v(" "),
                          _c(
                            "v-list",
                            [
                              _vm.viewLand.price != null
                                ? _c(
                                    "v-list-item",
                                    [
                                      _c(
                                        "v-list-item-action",
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-cash-usd-outline")
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-list-item-content",
                                        [
                                          _c("v-list-item-title", [
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "font-weight-bold blue--text"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.viewLand.price)
                                                )
                                              ]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("v-list-item-subtitle", [
                                            _vm._v(_vm._s(_vm.$t("Price")))
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.viewLand.due != null
                                ? _c(
                                    "v-list-item",
                                    [
                                      _c(
                                        "v-list-item-action",
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-cash-usd-outline")
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-list-item-content",
                                        [
                                          _c("v-list-item-title", [
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "font-weight-bold red--text"
                                              },
                                              [_vm._v(_vm._s(_vm.viewLand.due))]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("v-list-item-subtitle", [
                                            _vm._v(_vm._s(_vm.$t("Due")))
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("v-divider", { staticClass: "pa-0 ma-0" }),
                              _vm._v(" "),
                              _vm._l(_vm.viewLand.incomes, function(
                                income,
                                index
                              ) {
                                return _c(
                                  "v-list-item",
                                  { key: index, attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-action",
                                      [
                                        _c("v-icon", [
                                          _vm._v("mdi-cash-usd-outline")
                                        ])
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c(
                                          "v-list-item-title",
                                          { staticClass: "green--text" },
                                          [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(income.amount) +
                                                "\n                                    "
                                            ),
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: { icon: "" },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.onViewRevenue(
                                                      income
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-icon",
                                                  { attrs: { size: 18 } },
                                                  [_vm._v("mdi-pencil")]
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("v-list-item-subtitle", [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(_vm.$t("Type")) +
                                              ":\n                                    " +
                                              _vm._s(income.type) +
                                              "\n                                "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-item-subtitle",
                                          [
                                            _c(
                                              "v-tooltip",
                                              {
                                                attrs: { bottom: "" },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "activator",
                                                      fn: function(ref) {
                                                        var on = ref.on
                                                        return [
                                                          _c(
                                                            "span",
                                                            _vm._g(
                                                              {
                                                                attrs: {
                                                                  color:
                                                                    "primary",
                                                                  dark: ""
                                                                }
                                                              },
                                                              on
                                                            ),
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.$t("Date")
                                                                ) +
                                                                  ":\n                                                " +
                                                                  _vm._s(
                                                                    income.received_at
                                                                  )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                        " +
                                                    _vm._s(
                                                      _vm.$t("Last updated")
                                                    ) +
                                                    ":\n                                        " +
                                                    _vm._s(income.updated_at) +
                                                    "\n                                    "
                                                )
                                              ]
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
                              }),
                              _vm._v(" "),
                              _c("v-divider", { staticClass: "pa-0 ma-0" })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list",
                            [
                              _vm._l(_vm.viewLand.expenses, function(
                                expense,
                                index
                              ) {
                                return _c(
                                  "v-list-item",
                                  { key: index, attrs: { dense: "" } },
                                  [
                                    _c(
                                      "v-list-item-action",
                                      [
                                        _c("v-icon", [
                                          _vm._v("mdi-cash-usd-outline")
                                        ])
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c(
                                          "v-list-item-title",
                                          { staticClass: "red--text" },
                                          [
                                            _vm._v(
                                              "\n                                    - " +
                                                _vm._s(expense.amount) +
                                                "\n                                    "
                                            ),
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: { icon: "" },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.onViewExpense(
                                                      expense
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-icon",
                                                  { attrs: { size: 18 } },
                                                  [_vm._v("mdi-pencil")]
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("v-list-item-subtitle", [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(_vm.$t("Type")) +
                                              ":\n                                    " +
                                              _vm._s(expense.type) +
                                              "\n                                "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-item-subtitle",
                                          [
                                            _c(
                                              "v-tooltip",
                                              {
                                                attrs: { bottom: "" },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "activator",
                                                      fn: function(ref) {
                                                        var on = ref.on
                                                        return [
                                                          _c(
                                                            "span",
                                                            _vm._g(
                                                              {
                                                                attrs: {
                                                                  color:
                                                                    "primary",
                                                                  dark: ""
                                                                }
                                                              },
                                                              on
                                                            ),
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.$t("Date")
                                                                ) +
                                                                  ":\n                                                " +
                                                                  _vm._s(
                                                                    expense.paid_at
                                                                  )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                )
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                        " +
                                                    _vm._s(
                                                      _vm.$t("Last updated")
                                                    ) +
                                                    ":\n                                        " +
                                                    _vm._s(expense.updated_at) +
                                                    "\n                                    "
                                                )
                                              ]
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
                              }),
                              _vm._v(" "),
                              _c("v-divider", { staticClass: "pa-0 ma-0" })
                            ],
                            2
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          Object.entries(_vm.viewLand).length !== 0
            ? _c(
                "v-col",
                { attrs: { cols: "12", lg: "3" } },
                [
                  Object.entries(_vm.viewLand).length !== 0
                    ? _c(
                        "v-card",
                        { staticClass: "border-top border-accent" },
                        [
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-row",
                                {
                                  staticClass: "mx-1",
                                  attrs: { row: "", wrap: "" }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "captain font-weight-bold blue--text"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(_vm.$t("revenues")) +
                                          "\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { icon: "" },
                                      on: { click: _vm.initRevenue }
                                    },
                                    [
                                      _c("v-icon", [
                                        _vm._v("mdi-plus-circle-outline")
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                { attrs: { row: "", wrap: "" } },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          type: "number",
                                          "prepend-inner-icon": "mdi-cash",
                                          label: _vm.$t("form.amount")
                                        },
                                        model: {
                                          value: _vm.currentRevenue.amount,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.currentRevenue,
                                              "amount",
                                              $$v
                                            )
                                          },
                                          expression: "currentRevenue.amount"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "6" } },
                                    [
                                      _c(
                                        "v-menu",
                                        {
                                          attrs: {
                                            "close-on-content-click": false,
                                            "nudge-right": 40,
                                            transition: "scale-transition",
                                            "offset-y": "",
                                            "min-width": "290px"
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "activator",
                                                fn: function(ref) {
                                                  var on = ref.on
                                                  return [
                                                    _c(
                                                      "v-text-field",
                                                      _vm._g(
                                                        {
                                                          attrs: {
                                                            "prepend-inner-icon":
                                                              "mdi-calendar-check",
                                                            label: _vm.$t(
                                                              "Date"
                                                            ),
                                                            readonly: ""
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.currentRevenue
                                                                .received_at,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.currentRevenue,
                                                                "received_at",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "\n                                                currentRevenue.received_at\n                                            "
                                                          }
                                                        },
                                                        on
                                                      )
                                                    )
                                                  ]
                                                }
                                              }
                                            ],
                                            null,
                                            false,
                                            2000983951
                                          ),
                                          model: {
                                            value: _vm.dateRevenueMenu,
                                            callback: function($$v) {
                                              _vm.dateRevenueMenu = $$v
                                            },
                                            expression: "dateRevenueMenu"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("v-date-picker", {
                                            on: {
                                              input: function($event) {
                                                _vm.dateRevenueMenu = false
                                              }
                                            },
                                            model: {
                                              value:
                                                _vm.currentRevenue.received_at,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.currentRevenue,
                                                  "received_at",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "currentRevenue.received_at"
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
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c("v-select", {
                                        staticClass: "py-0 my-0",
                                        attrs: {
                                          items: _vm.revenuesTypes,
                                          label: _vm.$t("Revenue type")
                                        },
                                        model: {
                                          value: _vm.currentRevenue.type,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.currentRevenue,
                                              "type",
                                              $$v
                                            )
                                          },
                                          expression: "currentRevenue.type"
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
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { rounded: "", color: "text" },
                                  on: { click: _vm.initRevenue }
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.$t("form.cancel")) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { rounded: "", color: "success" },
                                  on: { click: _vm.onSaveRevenue }
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.$t("form.save")) +
                                      "\n                        "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  Object.entries(_vm.viewLand).length !== 0
                    ? _c(
                        "v-card",
                        { staticClass: "mt-2 border-top border-accent" },
                        [
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-row",
                                {
                                  staticClass: "mx-1",
                                  attrs: { row: "", wrap: "" }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "captain font-weight-bold red--text"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(_vm.$t("expenses")) +
                                          "\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { icon: "" },
                                      on: { click: _vm.initExpense }
                                    },
                                    [
                                      _c("v-icon", [
                                        _vm._v("mdi-plus-circle-outline")
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                { attrs: { row: "", wrap: "" } },
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          type: "number",
                                          "prepend-inner-icon": "mdi-cash",
                                          label: _vm.$t("form.amount")
                                        },
                                        model: {
                                          value: _vm.currentExpense.amount,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.currentExpense,
                                              "amount",
                                              $$v
                                            )
                                          },
                                          expression: "currentExpense.amount"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "6" } },
                                    [
                                      _c(
                                        "v-menu",
                                        {
                                          attrs: {
                                            "close-on-content-click": false,
                                            "nudge-right": 40,
                                            transition: "scale-transition",
                                            "offset-y": "",
                                            "min-width": "290px"
                                          },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "activator",
                                                fn: function(ref) {
                                                  var on = ref.on
                                                  return [
                                                    _c(
                                                      "v-text-field",
                                                      _vm._g(
                                                        {
                                                          attrs: {
                                                            "prepend-inner-icon":
                                                              "mdi-calendar-check",
                                                            label: _vm.$t(
                                                              "Date"
                                                            ),
                                                            readonly: ""
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.currentExpense
                                                                .paid_at,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.currentExpense,
                                                                "paid_at",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "currentExpense.paid_at"
                                                          }
                                                        },
                                                        on
                                                      )
                                                    )
                                                  ]
                                                }
                                              }
                                            ],
                                            null,
                                            false,
                                            3120281046
                                          ),
                                          model: {
                                            value: _vm.dateExpenseMenu,
                                            callback: function($$v) {
                                              _vm.dateExpenseMenu = $$v
                                            },
                                            expression: "dateExpenseMenu"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("v-date-picker", {
                                            on: {
                                              input: function($event) {
                                                _vm.dateExpenseMenu = false
                                              }
                                            },
                                            model: {
                                              value: _vm.currentExpense.paid_at,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.currentExpense,
                                                  "paid_at",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "currentExpense.paid_at"
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
                                    "v-col",
                                    { attrs: { cols: "6" } },
                                    [
                                      _c("v-select", {
                                        staticClass: "py-0 my-0",
                                        attrs: {
                                          items: _vm.viewLand.commissions,
                                          "item-text": "name",
                                          "item-value": "id",
                                          label: _vm.$t("Commission Level")
                                        },
                                        model: {
                                          value: _vm.currentExpense.user_id,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.currentExpense,
                                              "user_id",
                                              $$v
                                            )
                                          },
                                          expression: "currentExpense.user_id"
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
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { rounded: "", color: "text" },
                                  on: { click: _vm.initExpense }
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.$t("form.cancel")) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { rounded: "", color: "success" },
                                  on: { click: _vm.onSaveExpense }
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.$t("form.save")) +
                                      "\n                        "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { color: _vm.isError ? "error" : "success" },
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [
          _vm._v("\n        " + _vm._s(_vm.message) + "\n        "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { text: "" },
              on: {
                click: function($event) {
                  _vm.snackbar = !_vm.snackbar
                }
              }
            },
            [_vm._v("close")]
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

/***/ "./node_modules/vuetify/lib/components/VTooltip/VTooltip.js":
/*!******************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VTooltip/VTooltip.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_components_VTooltip_VTooltip_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VTooltip/VTooltip.sass */ "./node_modules/vuetify/src/components/VTooltip/VTooltip.sass");
/* harmony import */ var _src_components_VTooltip_VTooltip_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VTooltip_VTooltip_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_activatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/activatable */ "./node_modules/vuetify/lib/mixins/activatable/index.js");
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/colorable */ "./node_modules/vuetify/lib/mixins/colorable/index.js");
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/delayable */ "./node_modules/vuetify/lib/mixins/delayable/index.js");
/* harmony import */ var _mixins_dependent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/dependent */ "./node_modules/vuetify/lib/mixins/dependent/index.js");
/* harmony import */ var _mixins_detachable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/detachable */ "./node_modules/vuetify/lib/mixins/detachable/index.js");
/* harmony import */ var _mixins_menuable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/menuable */ "./node_modules/vuetify/lib/mixins/menuable/index.js");
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/toggleable */ "./node_modules/vuetify/lib/mixins/toggleable/index.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
 // Mixins







 // Helpers




/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_10__["default"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_delayable__WEBPACK_IMPORTED_MODULE_3__["default"], _mixins_dependent__WEBPACK_IMPORTED_MODULE_4__["default"], _mixins_detachable__WEBPACK_IMPORTED_MODULE_5__["default"], _mixins_menuable__WEBPACK_IMPORTED_MODULE_6__["default"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_7__["default"]).extend({
  name: 'v-tooltip',
  props: {
    closeDelay: {
      type: [Number, String],
      default: 0
    },
    disabled: Boolean,
    fixed: {
      type: Boolean,
      default: true
    },
    openDelay: {
      type: [Number, String],
      default: 0
    },
    openOnHover: {
      type: Boolean,
      default: true
    },
    tag: {
      type: String,
      default: 'span'
    },
    transition: String,
    zIndex: {
      default: null
    }
  },
  data: () => ({
    calculatedMinWidth: 0,
    closeDependents: false
  }),
  computed: {
    calculatedLeft() {
      const {
        activator,
        content
      } = this.dimensions;
      const unknown = !this.bottom && !this.left && !this.top && !this.right;
      const activatorLeft = this.attach !== false ? activator.offsetLeft : activator.left;
      let left = 0;

      if (this.top || this.bottom || unknown) {
        left = activatorLeft + activator.width / 2 - content.width / 2;
      } else if (this.left || this.right) {
        left = activatorLeft + (this.right ? activator.width : -content.width) + (this.right ? 10 : -10);
      }

      if (this.nudgeLeft) left -= parseInt(this.nudgeLeft);
      if (this.nudgeRight) left += parseInt(this.nudgeRight);
      return `${this.calcXOverflow(left, this.dimensions.content.width)}px`;
    },

    calculatedTop() {
      const {
        activator,
        content
      } = this.dimensions;
      const activatorTop = this.attach !== false ? activator.offsetTop : activator.top;
      let top = 0;

      if (this.top || this.bottom) {
        top = activatorTop + (this.bottom ? activator.height : -content.height) + (this.bottom ? 10 : -10);
      } else if (this.left || this.right) {
        top = activatorTop + activator.height / 2 - content.height / 2;
      }

      if (this.nudgeTop) top -= parseInt(this.nudgeTop);
      if (this.nudgeBottom) top += parseInt(this.nudgeBottom);
      return `${this.calcYOverflow(top + this.pageYOffset)}px`;
    },

    classes() {
      return {
        'v-tooltip--top': this.top,
        'v-tooltip--right': this.right,
        'v-tooltip--bottom': this.bottom,
        'v-tooltip--left': this.left,
        'v-tooltip--attached': this.attach === '' || this.attach === true || this.attach === 'attach'
      };
    },

    computedTransition() {
      if (this.transition) return this.transition;
      return this.isActive ? 'scale-transition' : 'fade-transition';
    },

    offsetY() {
      return this.top || this.bottom;
    },

    offsetX() {
      return this.left || this.right;
    },

    styles() {
      return {
        left: this.calculatedLeft,
        maxWidth: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_8__["convertToUnit"])(this.maxWidth),
        minWidth: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_8__["convertToUnit"])(this.minWidth),
        opacity: this.isActive ? 0.9 : 0,
        top: this.calculatedTop,
        zIndex: this.zIndex || this.activeZIndex
      };
    }

  },

  beforeMount() {
    this.$nextTick(() => {
      this.value && this.callActivate();
    });
  },

  mounted() {
    if (Object(_util_helpers__WEBPACK_IMPORTED_MODULE_8__["getSlotType"])(this, 'activator', true) === 'v-slot') {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_9__["consoleError"])(`v-tooltip's activator slot must be bound, try '<template #activator="data"><v-btn v-on="data.on>'`, this);
    }
  },

  methods: {
    activate() {
      // Update coordinates and dimensions of menu
      // and its activator
      this.updateDimensions(); // Start the transition

      requestAnimationFrame(this.startTransition);
    },

    deactivate() {
      this.runDelay('close');
    },

    genActivatorListeners() {
      const listeners = _mixins_activatable__WEBPACK_IMPORTED_MODULE_1__["default"].options.methods.genActivatorListeners.call(this);

      listeners.focus = e => {
        this.getActivator(e);
        this.runDelay('open');
      };

      listeners.blur = e => {
        this.getActivator(e);
        this.runDelay('close');
      };

      listeners.keydown = e => {
        if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_8__["keyCodes"].esc) {
          this.getActivator(e);
          this.runDelay('close');
        }
      };

      return listeners;
    },

    genTransition() {
      const content = this.genContent();
      if (!this.computedTransition) return content;
      return this.$createElement('transition', {
        props: {
          name: this.computedTransition
        }
      }, this.showLazyContent(() => [content]));
    },

    genContent() {
      return this.$createElement('div', this.setBackgroundColor(this.color, {
        staticClass: 'v-tooltip__content',
        class: {
          [this.contentClass]: true,
          menuable__content__active: this.isActive,
          'v-tooltip__content--fixed': this.activatorFixed
        },
        style: this.styles,
        attrs: this.getScopeIdAttrs(),
        directives: [{
          name: 'show',
          value: this.isContentActive
        }],
        ref: 'content'
      }), this.getContentSlot());
    }

  },

  render(h) {
    return h(this.tag, {
      staticClass: 'v-tooltip',
      class: this.classes
    }, [this.genTransition(), this.genActivator()]);
  }

}));
//# sourceMappingURL=VTooltip.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VTooltip/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VTooltip/index.js ***!
  \***************************************************************/
/*! exports provided: VTooltip, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VTooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VTooltip */ "./node_modules/vuetify/lib/components/VTooltip/VTooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VTooltip", function() { return _VTooltip__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_VTooltip__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/src/components/VTooltip/VTooltip.sass":
/*!********************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VTooltip/VTooltip.sass ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--8-2!../../../../sass-loader/dist/cjs.js??ref--8-3!./VTooltip.sass */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VTooltip/VTooltip.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/pages/Lands.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Lands.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Lands_vue_vue_type_template_id_11b77fa2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lands.vue?vue&type=template&id=11b77fa2& */ "./resources/js/pages/Lands.vue?vue&type=template&id=11b77fa2&");
/* harmony import */ var _Lands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lands.vue?vue&type=script&lang=js& */ "./resources/js/pages/Lands.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDatePicker */ "./node_modules/vuetify/lib/components/VDatePicker/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");
/* harmony import */ var vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! vuetify/lib/components/VTooltip */ "./node_modules/vuetify/lib/components/VTooltip/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Lands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Lands_vue_vue_type_template_id_11b77fa2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Lands_vue_vue_type_template_id_11b77fa2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
































_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__["VDataTable"],VDatePicker: vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_9__["VDatePicker"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_11__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__["VIcon"],VLayout: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VLayout"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItem"],VListItemAction: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemAction"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemContent"],VListItemIcon: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemIcon"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemSubtitle"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemTitle"],VMenu: vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_14__["VMenu"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_15__["VSelect"],VSimpleCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_16__["VSimpleCheckbox"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_17__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_18__["VTextField"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_19__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_19__["VToolbarTitle"],VTooltip: vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_20__["VTooltip"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Lands.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Lands.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Lands.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Lands.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Lands.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Lands.vue?vue&type=template&id=11b77fa2&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Lands.vue?vue&type=template&id=11b77fa2& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lands_vue_vue_type_template_id_11b77fa2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Lands.vue?vue&type=template&id=11b77fa2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Lands.vue?vue&type=template&id=11b77fa2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lands_vue_vue_type_template_id_11b77fa2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lands_vue_vue_type_template_id_11b77fa2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);