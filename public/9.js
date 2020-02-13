(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Users.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Users.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      userselections: [],
      editedUser: {
        id: null,
        name: "",
        email: "",
        phone: "",
        active: false,
        isAdmin: false,
        reference_id: null
      },
      viewUser: {
        references: [],
        reference: null
      },
      editedIndex: 0,
      userId: null,
      dialogUser: false,
      dialogCategory: false,
      itemsPerPage: 10,
      footerprops: {
        "items-per-page-options": [5, 10, 15, 100]
      },
      search: "",
      selected: [],
      showSelect: true,
      totalUsers: 0,
      users: [],
      loading: true,
      options: {},
      headers: [{
        text: this.$t("form.name"),
        align: "left",
        sortable: true,
        value: "name"
      }, {
        text: this.$t("form.email"),
        value: "email",
        sortable: false
      }, {
        text: this.$t("form.phone"),
        value: "phone",
        sortable: false
      }, {
        text: this.$t("form.active"),
        value: "active",
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
        this.fetchUserFromServer().then(function (data) {
          _this.users = data.items;
          _this.totalUsers = data.total;
        });
      },
      deep: true
    }
  },
  methods: {
    fetchUserFromServer: function fetchUserFromServer() {
      var _this2 = this;

      this.loading = true;
      var url = "/api/users/";

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

      if (typeof this.search[0] != "undefined") {
        url = "/api/users/?search=".concat(this.search);
      }

      console.log("loaded");
      return new Promise(function (resolve, reject) {
        axios.get(url).then(function (result) {
          // console.log(result.data)
          var _this2$options = _this2.options,
              sortBy = _this2$options.sortBy,
              sortDesc = _this2$options.sortDesc,
              page = _this2$options.page,
              itemsPerPage = _this2$options.itemsPerPage;
          var items = [];

          if (typeof result.data.data != "undefined") {
            items = result.data.data; //!
          }

          var total = 0;

          if (typeof result.data.meta != "undefined") {
            total = result.data.meta.total; //!

            _this2.footerprops["items-per-page-options"] = [5, 10, 15, 100, total];
          } else {
            total = result.data.data.length;
            _this2.footerprops["items-per-page-options"] = [total];
          } // console.log(result.data.meta.total);


          _this2.loading = false;
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
    initUser: function initUser() {
      this.editedUser = {
        id: null,
        name: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
        active: false,
        isAdmin: false,
        reference_id: null
      };
      this.viewUser = {
        references: [],
        reference: null
      };
      this.userId = null;
      this.dialogUser = true;
      this.fetchUserSelections();
    },
    onSaveUser: function onSaveUser() {
      var _this3 = this;

      var _this$editedUser = this.editedUser,
          name = _this$editedUser.name,
          email = _this$editedUser.email,
          phone = _this$editedUser.phone,
          password = _this$editedUser.password,
          password_confirmation = _this$editedUser.password_confirmation,
          active = _this$editedUser.active,
          isAdmin = _this$editedUser.isAdmin,
          reference_id = _this$editedUser.reference_id;
      var user = {
        name: name,
        email: email,
        phone: phone,
        password: password,
        password_confirmation: password_confirmation,
        active: active,
        isAdmin: isAdmin,
        reference_id: reference_id
      };

      if (this.userId == null) {
        // console.log("create");
        axios.post("/api/users", user).then(function (result) {
          // console.log(result);
          _this3.users.push(result.data.data);

          _this3.snackbar = true;
          _this3.isError = false;
          _this3.message = _this3.$t('users.created');
        })["catch"](function (error) {
          // console.log(error);
          _this3.snackbar = true;
          _this3.isError = true;
          _this3.message = error.response.data.message;
        });
      } else {
        // console.log('update');
        axios.put("/api/users/".concat(this.userId), user).then(function (result) {
          // console.log(result.data.data);
          Object.assign(_this3.users[_this3.editedIndex], result.data.data);

          _this3.lands.push(result.data.data);

          _this3.snackbar = true;
          _this3.isError = false;
          _this3.message = _this3.$t('users.created');
        })["catch"](function (error) {
          // console.log(error);
          _this3.snackbar = true;
          _this3.isError = true;
          _this3.message = error.response.data.message;
        });
      }

      this.dialogUser = false; // console.log("saved");
    },
    deleteItem: function deleteItem(item) {
      var _this4 = this;

      var index = this.users.indexOf(item);
      confirm("Are you sure you want to delete this user?") && axios["delete"]("/api/users/".concat(item.id)).then(function (result) {
        console.log(result);

        _this4.users.splice(index, 1);

        _this4.snackbar = true;
        _this4.isError = false;
        _this4.message = _this4.$t('users.deleted');
      })["catch"](function (error) {
        // console.log(error);
        _this4.snackbar = true;
        _this4.isError = true;
        _this4.message = error.response.data.message;
      }); // console.log(item);
    },
    onSearchUser: function onSearchUser() {
      var _this5 = this;

      this.fetchUserFromServer().then(function (data) {
        _this5.users = data.items;
        _this5.totalUsers = data.total;
      });
    },
    onCancelSearch: function onCancelSearch() {
      var _this6 = this;

      this.search = "";
      this.fetchUserFromServer().then(function (data) {
        _this6.users = data.items;
        _this6.totalUsers = data.total;
      });
    },
    cancel: function cancel() {
      this.dialogUser = false;
      this.initUser();
      console.log("canceled");
    },
    close: function close() {
      this.dialogUser = false;
      console.log("closed");
    },
    editItem: function editItem(user) {
      this.editedIndex = this.users.indexOf(user);
      this.userId = user.id;
      this.editedUser = Object.assign({}, user);
      this.dialogUser = true;
      console.log(user);
      this.fetchUserSelections();
    },
    viewItem: function viewItem(user) {
      var _this7 = this;

      axios.get("/api/users/".concat(user.id)).then(function (result) {
        console.log(result);
        _this7.viewUser = result.data.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    fetchUserSelections: function fetchUserSelections() {
      var _this8 = this;

      axios.get("/api/users/selections").then(function (result) {
        console.log(result);
        _this8.userselections = result.data;
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VSwitch/VSwitch.sass":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vuetify/src/components/VSwitch/VSwitch.sass ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".theme--light.v-input--switch .v-input--switch__thumb {\n  color: #FFFFFF;\n}\n.theme--light.v-input--switch .v-input--switch__track {\n  color: rgba(0, 0, 0, 0.38);\n}\n.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb {\n  color: #fafafa !important;\n}\n.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track {\n  color: rgba(0, 0, 0, 0.12) !important;\n}\n\n.theme--dark.v-input--switch .v-input--switch__thumb {\n  color: #bdbdbd;\n}\n.theme--dark.v-input--switch .v-input--switch__track {\n  color: rgba(255, 255, 255, 0.3);\n}\n.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb {\n  color: #424242 !important;\n}\n.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track {\n  color: rgba(255, 255, 255, 0.1) !important;\n}\n\n.v-input--switch__track, .v-input--switch__thumb {\n  background-color: currentColor;\n  pointer-events: none;\n  transition: inherit;\n}\n.v-input--switch__track {\n  border-radius: 8px;\n  width: 36px;\n  height: 14px;\n  left: 2px;\n  position: absolute;\n  opacity: 0.6;\n  right: 2px;\n  top: calc(50% - 7px);\n}\n.v-input--switch__thumb {\n  border-radius: 50%;\n  top: calc(50% - 10px);\n  height: 20px;\n  position: relative;\n  width: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-input--switch .v-input--selection-controls__input {\n  width: 38px;\n}\n.v-input--switch .v-input--selection-controls__ripple {\n  top: calc(50% - 24px);\n}\n.v-input--switch.v-input--dense .v-input--switch__thumb {\n  width: 18px;\n  height: 18px;\n}\n.v-input--switch.v-input--dense .v-input--switch__track {\n  height: 12px;\n  width: 32px;\n}\n.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track {\n  height: 22px;\n  width: 44px;\n  top: calc(50% - 12px);\n  left: -3px;\n}\n.v-input--switch.v-input--dense .v-input--selection-controls__ripple {\n  top: calc(50% - 22px);\n}\n.v-input--switch.v-input--is-dirty.v-input--is-disabled {\n  opacity: 0.6;\n}\n.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple {\n  left: -14px;\n}\n.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple {\n  left: -12px;\n}\n.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,\n.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb {\n  transform: translate(20px, 0);\n}\n.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple {\n  right: -14px;\n}\n.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple {\n  right: -12px;\n}\n.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,\n.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb {\n  transform: translate(-20px, 0);\n}\n.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.v-input--switch--inset .v-input--switch__track,\n.v-input--switch--inset .v-input--selection-controls__input {\n  width: 48px;\n}\n.v-input--switch--inset .v-input--switch__track {\n  border-radius: 14px;\n  height: 28px;\n  left: -4px;\n  opacity: 0.32;\n  top: calc(50% - 14px);\n}\n.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,\n.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb {\n  transform: translate(0, 0) !important;\n}\n.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,\n.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb {\n  transform: translate(-6px, 0) !important;\n}\n.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,\n.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb {\n  transform: translate(20px, 0) !important;\n}\n.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,\n.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb {\n  transform: translate(-26px, 0) !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Users.vue?vue&type=template&id=91a5db62&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Users.vue?vue&type=template&id=91a5db62& ***!
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
            { attrs: { cols: "12", lg: "8" } },
            [
              _c(
                "v-card",
                { staticClass: "border-top border-primary" },
                [
                  _c("v-data-table", {
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.users,
                      options: _vm.options,
                      "server-items-length": _vm.totalUsers,
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
                                      _vm._v(
                                        "\n                                    mdi-folder-account-outline\n                                "
                                      )
                                    ]),
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(_vm.$t("user")) +
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
                                    on: { click: _vm.initUser }
                                  },
                                  [
                                    _c("v-icon", [_vm._v("mdi-plus")]),
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(_vm.$t("New User"))
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
                                      value: _vm.dialogUser,
                                      callback: function($$v) {
                                        _vm.dialogUser = $$v
                                      },
                                      expression: "dialogUser"
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
                                                _vm._s(
                                                  _vm.editedUser["id"] != null
                                                    ? _vm.$t("Edit User")
                                                    : _vm.$t("New User")
                                                )
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
                                                              _vm.editedUser
                                                                .name,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedUser,
                                                                "name",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "\n                                                            editedUser.name\n                                                        "
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
                                                            type: "email",
                                                            label: _vm.$t(
                                                              "form.email"
                                                            )
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedUser
                                                                .email,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedUser,
                                                                "email",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "\n                                                            editedUser.email\n                                                        "
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
                                                              "form.phone"
                                                            )
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedUser
                                                                .phone,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedUser,
                                                                "phone",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "\n                                                            editedUser.phone\n                                                        "
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
                                                            type: "password",
                                                            label: _vm.$t(
                                                              "form.password"
                                                            )
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedUser
                                                                .password,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedUser,
                                                                "password",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "\n                                                            editedUser.password\n                                                        "
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
                                                            type: "password",
                                                            label: _vm.$t(
                                                              "form.password_confirmation"
                                                            )
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedUser
                                                                .password_confirmation,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedUser,
                                                                "password_confirmation",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "\n                                                            editedUser.password_confirmation\n                                                        "
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
                                                            chips: "",
                                                            "menu-props": {
                                                              maxHeight: "400"
                                                            },
                                                            dense: "",
                                                            items:
                                                              _vm.userselections,
                                                            label: _vm.$t(
                                                              "reference by"
                                                            ),
                                                            "item-text": "name",
                                                            "item-value": "id"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedUser
                                                                .reference_id,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedUser,
                                                                "reference_id",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "\n                                                            editedUser.reference_id\n                                                        "
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
                                                          cols: "6",
                                                          sm: "6",
                                                          md: "6"
                                                        }
                                                      },
                                                      [
                                                        _c("v-switch", {
                                                          attrs: {
                                                            label: _vm.$t(
                                                              "form.active"
                                                            )
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedUser
                                                                .active,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedUser,
                                                                "active",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "\n                                                            editedUser.active\n                                                        "
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
                                                          cols: "6",
                                                          sm: "6",
                                                          md: "6"
                                                        }
                                                      },
                                                      [
                                                        _c("v-switch", {
                                                          attrs: {
                                                            label: _vm.$t(
                                                              "form.admin"
                                                            )
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedUser
                                                                .isAdmin,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedUser,
                                                                "isAdmin",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "\n                                                            editedUser.isAdmin\n                                                        "
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
                                                on: { click: _vm.onSaveUser }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.$t("form.save"))
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
                                                  _vm._v(
                                                    "\n                                            mdi-menu-down\n                                        "
                                                  )
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
                                                    "\n                                                mdi-file-excel-outline\n                                            "
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
                              "v-col",
                              { attrs: { cols: "4" } },
                              [
                                _c("v-text-field", {
                                  attrs: { label: "Search", "single-line": "" },
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
                                      return _vm.onSearchUser($event)
                                    }
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "append",
                                      fn: function() {
                                        return [
                                          _vm.search != ""
                                            ? _c(
                                                "v-btn",
                                                {
                                                  staticClass: "pa-0 ma-0",
                                                  attrs: {
                                                    small: "",
                                                    icon: ""
                                                  },
                                                  on: {
                                                    click: _vm.onCancelSearch
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
                                              attrs: { small: "", icon: "" },
                                              on: { click: _vm.onSearchUser }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v(" mdi-crosshairs ")
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
                        key: "item.active",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("v-icon", [
                              _vm._v(
                                " " +
                                  _vm._s(
                                    item.active == 1 || item.active == true
                                      ? "mdi-account-check"
                                      : "mdi-account-off-outline"
                                  ) +
                                  "  "
                              )
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
                                    return _vm.viewItem(item)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            mdi-eye\n                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-icon",
                              {
                                staticClass: "mr-2",
                                attrs: { small: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.editItem(item)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            mdi-pencil\n                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-icon",
                              {
                                attrs: { small: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.deleteItem(item)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            mdi-trash-can-outline\n                        "
                                )
                              ]
                            )
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
                                attrs: { color: "primary" }
                              },
                              [
                                _vm._v(
                                  "\n                            mdi-account-circle-outline\n                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", { staticClass: "caption" }, [
                              _vm._v(_vm._s(item.name))
                            ])
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
            { attrs: { cols: "12", lg: "4" } },
            [
              _c(
                "v-card",
                { staticClass: "border-top border-blue" },
                [
                  _c("v-card-title", { attrs: { "primary-title": "" } }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.$t("referenced_by").toUpperCase()) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _vm.viewUser.reference != null
                        ? _c(
                            "v-chip",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.viewItem(_vm.viewUser.reference)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.viewUser.reference.name) +
                                  "\n                    "
                              )
                            ]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                { staticClass: "border-top border-blue mt-3" },
                [
                  _c("v-card-title", { attrs: { "primary-title": "" } }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.$t("references").toUpperCase()) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _vm.viewUser.references.length > 0
                        ? _c(
                            "v-list",
                            _vm._l(_vm.viewUser.references, function(
                              user,
                              index
                            ) {
                              return _c(
                                "v-list-item",
                                { key: index },
                                [
                                  _c(
                                    "v-list-item-content",
                                    [
                                      _c("v-list-item-title", [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(user.name) +
                                            "\n                                "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("v-list-item-subtitle", [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(user.phone) +
                                            "\n                                "
                                        )
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            }),
                            1
                          )
                        : _vm._e()
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

/***/ "./node_modules/vuetify/lib/components/VSwitch/VSwitch.js":
/*!****************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSwitch/VSwitch.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/styles/components/_selection-controls.sass */ "./node_modules/vuetify/src/styles/components/_selection-controls.sass");
/* harmony import */ var _src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_styles_components_selection_controls_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/components/VSwitch/VSwitch.sass */ "./node_modules/vuetify/src/components/VSwitch/VSwitch.sass");
/* harmony import */ var _src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSwitch_VSwitch_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_selectable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/selectable */ "./node_modules/vuetify/lib/mixins/selectable/index.js");
/* harmony import */ var _VInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../VInput */ "./node_modules/vuetify/lib/components/VInput/index.js");
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/touch */ "./node_modules/vuetify/lib/directives/touch/index.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../transitions */ "./node_modules/vuetify/lib/components/transitions/index.js");
/* harmony import */ var _VProgressCircular_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../VProgressCircular/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
// Styles

 // Mixins


 // Directives

 // Components


 // Helpers


/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (_mixins_selectable__WEBPACK_IMPORTED_MODULE_2__["default"].extend({
  name: 'v-switch',
  directives: {
    Touch: _directives_touch__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    inset: Boolean,
    loading: {
      type: [Boolean, String],
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return { ..._VInput__WEBPACK_IMPORTED_MODULE_3__["default"].options.computed.classes.call(this),
        'v-input--selection-controls v-input--switch': true,
        'v-input--switch--flat': this.flat,
        'v-input--switch--inset': this.inset
      };
    },

    attrs() {
      return {
        'aria-checked': String(this.isActive),
        'aria-disabled': String(this.disabled),
        role: 'switch'
      };
    },

    // Do not return undefined if disabled,
    // according to spec, should still show
    // a color when disabled and active
    validationState() {
      if (this.hasError && this.shouldValidate) return 'error';
      if (this.hasSuccess) return 'success';
      if (this.hasColor !== null) return this.computedColor;
      return undefined;
    },

    switchData() {
      return this.setTextColor(this.loading ? undefined : this.validationState, {
        class: this.themeClasses
      });
    }

  },
  methods: {
    genDefaultSlot() {
      return [this.genSwitch(), this.genLabel()];
    },

    genSwitch() {
      return this.$createElement('div', {
        staticClass: 'v-input--selection-controls__input'
      }, [this.genInput('checkbox', { ...this.attrs,
        ...this.attrs$
      }), this.genRipple(this.setTextColor(this.validationState, {
        directives: [{
          name: 'touch',
          value: {
            left: this.onSwipeLeft,
            right: this.onSwipeRight
          }
        }]
      })), this.$createElement('div', {
        staticClass: 'v-input--switch__track',
        ...this.switchData
      }), this.$createElement('div', {
        staticClass: 'v-input--switch__thumb',
        ...this.switchData
      }, [this.genProgress()])]);
    },

    genProgress() {
      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_5__["VFabTransition"], {}, [this.loading === false ? null : this.$slots.progress || this.$createElement(_VProgressCircular_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__["default"], {
        props: {
          color: this.loading === true || this.loading === '' ? this.color || 'primary' : this.loading,
          size: 16,
          width: 2,
          indeterminate: true
        }
      })]);
    },

    onSwipeLeft() {
      if (this.isActive) this.onChange();
    },

    onSwipeRight() {
      if (!this.isActive) this.onChange();
    },

    onKeydown(e) {
      if (e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_7__["keyCodes"].left && this.isActive || e.keyCode === _util_helpers__WEBPACK_IMPORTED_MODULE_7__["keyCodes"].right && !this.isActive) this.onChange();
    }

  }
}));
//# sourceMappingURL=VSwitch.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSwitch/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSwitch/index.js ***!
  \**************************************************************/
/*! exports provided: VSwitch, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VSwitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VSwitch */ "./node_modules/vuetify/lib/components/VSwitch/VSwitch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VSwitch", function() { return _VSwitch__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_VSwitch__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/src/components/VSwitch/VSwitch.sass":
/*!******************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VSwitch/VSwitch.sass ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--8-2!../../../../sass-loader/dist/cjs.js??ref--8-3!./VSwitch.sass */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VSwitch/VSwitch.sass");

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

/***/ "./resources/js/pages/Users.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Users.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_91a5db62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=91a5db62& */ "./resources/js/pages/Users.vue?vue&type=template&id=91a5db62&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/pages/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vuetify/lib/components/VSwitch */ "./node_modules/vuetify/lib/components/VSwitch/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_91a5db62___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_91a5db62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */






























_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__["VChip"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_11__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__["VIcon"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItem"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemContent"],VListItemIcon: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemIcon"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemSubtitle"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemTitle"],VMenu: vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_14__["VMenu"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_15__["VSelect"],VSimpleCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_16__["VSimpleCheckbox"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_17__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VSpacer"],VSwitch: vuetify_lib_components_VSwitch__WEBPACK_IMPORTED_MODULE_18__["VSwitch"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_19__["VTextField"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_20__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_20__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Users.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Users.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Users.vue?vue&type=template&id=91a5db62&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Users.vue?vue&type=template&id=91a5db62& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_91a5db62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=91a5db62& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Users.vue?vue&type=template&id=91a5db62&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_91a5db62___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_91a5db62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);