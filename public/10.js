(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Clients.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Clients.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      snackbar: false,
      isError: false,
      message: "",
      clientselections: [],
      editedClient: {
        id: null,
        name: "",
        email: "",
        phone: "",
        user_id: null
      },
      viewClient: {
        lands: [],
        user: null
      },
      filterByUser: 0,
      editedIndex: 0,
      clientId: null,
      dialogClient: false,
      dialogCategory: false,
      itemsPerPage: 10,
      footerprops: {
        "items-per-page-options": [5, 10, 15, 100]
      },
      search: "",
      selected: [],
      showSelect: true,
      totalClients: 0,
      clients: [],
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
        this.fetchClientFromServer().then(function (data) {
          _this.clients = data.items;
          _this.totalClients = data.total;
        });
      },
      deep: true
    }
  },
  methods: {
    fetchClientFromServer: function fetchClientFromServer() {
      var _this2 = this;

      this.loading = true;
      var url = "/api/clients/";

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

      console.log(this.filterByUser);

      if (this.filterByUser > 0) {
        url += "&&filerByField=user_id&&filerByValue=".concat(this.filterByUser);
      }

      if (typeof this.search[0] != "undefined") {
        url = "/api/clients/?search=".concat(this.search);
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
    initClient: function initClient() {
      this.editedClient = {
        id: null,
        name: "",
        email: "",
        phone: "",
        user_id: null
      };
      this.viewClient = {
        lands: [],
        user: null
      };
      this.filterByUser = 0, this.clientId = null;
      this.dialogClient = true;
      this.fetchClientSelections();
    },
    onSaveClient: function onSaveClient() {
      var _this3 = this;

      var _this$editedClient = this.editedClient,
          name = _this$editedClient.name,
          email = _this$editedClient.email,
          phone = _this$editedClient.phone,
          user_id = _this$editedClient.user_id;
      var client = {
        name: name,
        email: email,
        phone: phone,
        user_id: user_id
      };

      if (this.clientId == null) {
        // console.log("create");
        axios.post("/api/clients", client).then(function (result) {
          // console.log(result);
          _this3.clients.push(result.data.data);

          _this3.snackbar = true;
          _this3.isError = false;
          _this3.message = _this3.$t('clients.created');
        })["catch"](function (error) {
          // console.log(error);
          _this3.snackbar = true;
          _this3.isError = true;
          _this3.message = error.response.data.message;
        });
      } else {
        // console.log('update');
        axios.put("/api/clients/".concat(this.clientId), client).then(function (result) {
          // console.log(result.data.data);
          Object.assign(_this3.clients[_this3.editedIndex], result.data.data);
          _this3.snackbar = true;
          _this3.isError = false;
          _this3.message = _this3.$t('clients.updated');
        })["catch"](function (error) {
          console.log(error.response);
          _this3.snackbar = true;
          _this3.isError = true;
          _this3.message = error.response.data.message;
        });
      }

      this.dialogClient = false; // console.log("saved");
    },
    deleteItem: function deleteItem(item) {
      var _this4 = this;

      var index = this.clients.indexOf(item);
      confirm("Are you sure you want to delete this client?") && axios["delete"]("/api/clients/".concat(item.id)).then(function (result) {
        // console.log(result);
        _this4.clients.splice(index, 1);

        _this4.snackbar = true;
        _this4.isError = false;
        _this4.message = _this4.$t('clients.deleted');
      })["catch"](function (error) {
        // console.log(error);
        _this4.snackbar = true;
        _this4.isError = true;
        _this4.message = error.response.data.message;
      });
      console.log(item);
    },
    onSearchClient: function onSearchClient() {
      var _this5 = this;

      this.fetchClientFromServer().then(function (data) {
        _this5.clients = data.items;
        _this5.totalClients = data.total;
      });
    },
    onCancelSearch: function onCancelSearch() {
      var _this6 = this;

      this.search = "";
      this.fetchClientFromServer().then(function (data) {
        _this6.clients = data.items;
        _this6.totalClients = data.total;
      });
    },
    cancel: function cancel() {
      this.dialogClient = false;
      this.initClient();
      console.log("canceled");
    },
    close: function close() {
      this.dialogClient = false;
      console.log("closed");
    },
    editItem: function editItem(client) {
      this.editedIndex = this.clients.indexOf(client);
      this.clientId = client.id;
      this.editedClient = Object.assign({}, client);
      this.dialogClient = true;
      console.log(client);
      this.fetchClientSelections();
    },
    viewItem: function viewItem(client) {
      var _this7 = this;

      axios.get("/api/clients/".concat(client.id)).then(function (result) {
        console.log(result);
        _this7.viewClient = result.data.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    fetchClientSelections: function fetchClientSelections() {
      var _this8 = this;

      axios.get("/api/users/selections").then(function (result) {
        console.log(result);
        _this8.clientselections = result.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    onFilterByUser: function onFilterByUser(id) {
      var _this9 = this;

      this.filterByUser = id;
      console.log(id);
      this.fetchClientFromServer().then(function (data) {
        _this9.clients = data.items;
        _this9.totalClients = data.total;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Clients.vue?vue&type=template&id=19314ae2&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Clients.vue?vue&type=template&id=19314ae2& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
            { attrs: { cols: "12", lg: "9" } },
            [
              _c(
                "v-card",
                { staticClass: "border-top border-primary" },
                [
                  _c("v-data-table", {
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.clients,
                      options: _vm.options,
                      "server-items-length": _vm.totalClients,
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
                                        "\n                                    mdi-account-multiple\n                                "
                                      )
                                    ]),
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(_vm.$t("client")) +
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
                                    on: { click: _vm.initClient }
                                  },
                                  [
                                    _c("v-icon", [_vm._v("mdi-plus")]),
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(_vm.$t("New Client"))
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
                                      value: _vm.dialogClient,
                                      callback: function($$v) {
                                        _vm.dialogClient = $$v
                                      },
                                      expression: "dialogClient"
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
                                                  _vm.editedClient["id"] != null
                                                    ? _vm.$t("Edit Client")
                                                    : _vm.$t("New Client")
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
                                                              _vm.editedClient
                                                                .name,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedClient,
                                                                "name",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "\n                                                            editedClient.name\n                                                        "
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
                                                              _vm.editedClient
                                                                .email,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedClient,
                                                                "email",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "\n                                                            editedClient.email\n                                                        "
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
                                                              _vm.editedClient
                                                                .phone,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedClient,
                                                                "phone",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "\n                                                            editedClient.phone\n                                                        "
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
                                                              _vm.clientselections,
                                                            label: _vm.$t(
                                                              "Reference by"
                                                            ),
                                                            "item-text": "name",
                                                            "item-value": "id"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedClient
                                                                .user_id,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedClient,
                                                                "user_id",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "\n                                                            editedClient.user_id\n                                                        "
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
                                                on: { click: _vm.onSaveClient }
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
                                      return _vm.onSearchClient($event)
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
                                              on: { click: _vm.onSearchClient }
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
            { attrs: { cols: "12", lg: "3" } },
            [
              _c(
                "v-card",
                { staticClass: "border-top border-blue" },
                [
                  _c("v-card-title", { attrs: { "primary-title": "" } }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.$t("Referenced by").toUpperCase()) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _vm.viewClient.user != null
                        ? _c(
                            "v-chip",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.onFilterByUser(
                                    _vm.viewClient.user.id
                                  )
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.viewClient.user.name) +
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
                        _vm._s(_vm.$t("Lands").toUpperCase()) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _vm.viewClient.lands.length > 0
                        ? _c(
                            "v-list",
                            _vm._l(_vm.viewClient.lands, function(land, index) {
                              return _c(
                                "v-list-item",
                                { key: index },
                                [
                                  _c(
                                    "v-list-item-content",
                                    [
                                      _c(
                                        "v-list-item-title",
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { size: 15 } },
                                            [_vm._v(" mdi-map-marker ")]
                                          ),
                                          _vm._v(
                                            " " +
                                              _vm._s(land.name) +
                                              "\n                                "
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-list-item-subtitle",
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { size: 15 } },
                                            [_vm._v(" mdi-currency-usd ")]
                                          ),
                                          _vm._v(
                                            " " +
                                              _vm._s(land.price) +
                                              "\n                                "
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

/***/ "./resources/js/pages/Clients.vue":
/*!****************************************!*\
  !*** ./resources/js/pages/Clients.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Clients_vue_vue_type_template_id_19314ae2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Clients.vue?vue&type=template&id=19314ae2& */ "./resources/js/pages/Clients.vue?vue&type=template&id=19314ae2&");
/* harmony import */ var _Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Clients.vue?vue&type=script&lang=js& */ "./resources/js/pages/Clients.vue?vue&type=script&lang=js&");
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
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Clients_vue_vue_type_template_id_19314ae2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Clients_vue_vue_type_template_id_19314ae2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */





























_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__["VChip"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_11__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__["VIcon"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItem"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemContent"],VListItemIcon: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemIcon"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemSubtitle"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemTitle"],VMenu: vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_14__["VMenu"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_15__["VSelect"],VSimpleCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_16__["VSimpleCheckbox"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_17__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_18__["VTextField"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_19__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_19__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Clients.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Clients.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/Clients.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Clients.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Clients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Clients.vue?vue&type=template&id=19314ae2&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/Clients.vue?vue&type=template&id=19314ae2& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_template_id_19314ae2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Clients.vue?vue&type=template&id=19314ae2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Clients.vue?vue&type=template&id=19314ae2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_template_id_19314ae2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_template_id_19314ae2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);