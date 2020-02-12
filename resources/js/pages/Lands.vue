<template>
    <v-app class="px-3">
        <v-row>
            <v-col cols="12" lg="6">
                <v-card class="border-top border-primary">
                    <v-data-table
                        v-model="selected"
                        :headers="headers"
                        :items="lands"
                        :options.sync="options"
                        :server-items-length="totalLands"
                        :loading="loading"
                        :items-per-page="itemsPerPage"
                        :footer-props="footerprops"
                        :show-select="showSelect"
                        loading-text="Loading... Please wait"
                    >
                        <template v-slot:top>
                            <v-toolbar color="white" flat>
                                <v-toolbar-title>
                                    <v-icon :size="45">mdi-map</v-icon>
                                    {{ $t("lands").toUpperCase() }}
                                </v-toolbar-title>
                                <v-divider
                                    class="mx-4"
                                    inset
                                    vertical
                                ></v-divider>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="primary"
                                    rounded
                                    dark
                                    class="mb-2"
                                    @click="initLand"
                                >
                                    <v-icon>mdi-plus</v-icon>
                                    {{ $t("New Land") }}
                                </v-btn>
                                <v-dialog
                                    v-model="dialogLand"
                                    max-width="500px"
                                >
                                    <v-card>
                                        <v-card-title>
                                            <span class="headline">
                                                {{
                                                    editedLand["id"] != null
                                                        ? $t("Edit Land")
                                                        : $t("New Land")
                                                }}
                                            </span>
                                        </v-card-title>

                                        <v-card-text>
                                            <v-container>
                                                <v-row>
                                                    <v-col
                                                        cols="12"
                                                        sm="12"
                                                        md="12"
                                                    >
                                                        <v-text-field
                                                            v-model="
                                                                editedLand.name
                                                            "
                                                            :label="
                                                                $t('form.name')
                                                            "
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col
                                                        cols="12"
                                                        sm="12"
                                                        md="12"
                                                    >
                                                        <v-text-field
                                                            v-model="
                                                                editedLand.description
                                                            "
                                                            :label="
                                                                $t(
                                                                    'form.description'
                                                                )
                                                            "
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col
                                                        cols="12"
                                                        sm="12"
                                                        md="12"
                                                    >
                                                        <v-text-field
                                                            type="number"
                                                            v-model="
                                                                editedLand.price
                                                            "
                                                            :label="
                                                                $t('form.price')
                                                            "
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col
                                                        cols="9"
                                                        sm="9"
                                                        md="9"
                                                    >
                                                        <v-select
                                                            clearable
                                                            chips
                                                            :menu-props="{
                                                                maxHeight: '400'
                                                            }"
                                                            dense
                                                            :items="locations"
                                                            v-model="
                                                                editedLand.location_id
                                                            "
                                                            :label="
                                                                $t(
                                                                    'Location in'
                                                                )
                                                            "
                                                            item-text="name"
                                                            item-value="id"
                                                        >
                                                        </v-select>
                                                    </v-col>
                                                    <v-col
                                                        cols="3"
                                                        sm="3"
                                                        md="3"
                                                    >
                                                        <v-layout flex>
                                                            <v-btn
                                                                @click="
                                                                    initLocation
                                                                "
                                                                icon
                                                            >
                                                                <v-icon
                                                                    >mdi-plus-circle-outline</v-icon
                                                                >
                                                            </v-btn>
                                                            <v-btn
                                                                v-show="
                                                                    editedLand.location_id !=
                                                                        null
                                                                "
                                                                @click="
                                                                    onViewLocation
                                                                "
                                                                icon
                                                            >
                                                                <v-icon
                                                                    >mdi-pencil</v-icon
                                                                >
                                                            </v-btn>
                                                        </v-layout>
                                                    </v-col>

                                                    <v-col
                                                        cols="9"
                                                        sm="9"
                                                        md="9"
                                                        v-show="isEditLocation"
                                                    >
                                                        <v-text-field
                                                            :label="
                                                                $t(
                                                                    'Location name'
                                                                )
                                                            "
                                                            v-model="
                                                                currentLocation.name
                                                            "
                                                        ></v-text-field>
                                                    </v-col>
                                                    <v-col
                                                        cols="3"
                                                        sm="3"
                                                        md="3"
                                                        v-show="isEditLocation"
                                                    >
                                                        <v-btn
                                                            @click="
                                                                onSaveLocation
                                                            "
                                                            rounded
                                                        >
                                                            <v-icon>
                                                                mdi-content-save-edit-outline
                                                            </v-icon>
                                                            {{
                                                                $t("form.save")
                                                            }}
                                                        </v-btn>
                                                    </v-col>

                                                    <v-col
                                                        cols="12"
                                                        sm="12"
                                                        md="12"
                                                    >
                                                        <v-select
                                                            clearable
                                                            chips
                                                            :menu-props="{
                                                                maxHeight: '400'
                                                            }"
                                                            dense
                                                            :items="clients"
                                                            v-model="
                                                                editedLand.client_id
                                                            "
                                                            :label="
                                                                $t('Owned by')
                                                            "
                                                            item-text="name"
                                                            item-value="id"
                                                            @change="
                                                                onChangeClient
                                                            "
                                                        ></v-select>
                                                    </v-col>

                                                    <v-col
                                                        cols="12"
                                                        sm="12"
                                                        md="12"
                                                    >
                                                        <v-select
                                                            readonly
                                                            chips
                                                            :menu-props="{
                                                                maxHeight: '400'
                                                            }"
                                                            dense
                                                            :items="users"
                                                            v-model="
                                                                editedLand.user_id
                                                            "
                                                            :label="
                                                                $t(
                                                                    'Referenced by'
                                                                )
                                                            "
                                                            item-text="name"
                                                            item-value="id"
                                                        ></v-select>
                                                    </v-col>

                                                    <v-col
                                                        cols="12"
                                                        sm="12"
                                                        md="12"
                                                    >
                                                        <v-text-field
                                                            type="number"
                                                            v-model="
                                                                editedLand.commission_line_1
                                                            "
                                                            :label="
                                                                $t(
                                                                    'form.commission_line_1'
                                                                )
                                                            "
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col
                                                        cols="12"
                                                        sm="12"
                                                        md="12"
                                                    >
                                                        <v-text-field
                                                            type="number"
                                                            v-model="
                                                                editedLand.commission_line_2
                                                            "
                                                            :label="
                                                                $t(
                                                                    'form.commission_line_2'
                                                                )
                                                            "
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col
                                                        cols="12"
                                                        sm="12"
                                                        md="12"
                                                    >
                                                        <v-text-field
                                                            type="number"
                                                            v-model="
                                                                editedLand.commission_line_3
                                                            "
                                                            :label="
                                                                $t(
                                                                    'form.commission_line_3'
                                                                )
                                                            "
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col
                                                        cols="12"
                                                        sm="12"
                                                        md="12"
                                                    >
                                                        <v-text-field
                                                            type="number"
                                                            v-model="
                                                                editedLand.commission_line_4
                                                            "
                                                            :label="
                                                                $t(
                                                                    'form.commission_line_4'
                                                                )
                                                            "
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col
                                                        cols="12"
                                                        sm="12"
                                                        md="12"
                                                    >
                                                        <v-menu
                                                            v-model="
                                                                dateLandMenu
                                                            "
                                                            :close-on-content-click="
                                                                false
                                                            "
                                                            :nudge-right="40"
                                                            transition="scale-transition"
                                                            offset-y
                                                            min-width="290px"
                                                        >
                                                            <template
                                                                v-slot:activator="{
                                                                    on
                                                                }"
                                                            >
                                                                <v-text-field
                                                                    prepend-inner-icon="mdi-calendar-check"
                                                                    :label="
                                                                        $t(
                                                                            'Date'
                                                                        )
                                                                    "
                                                                    v-model="
                                                                        editedLand.sold_at
                                                                    "
                                                                    readonly
                                                                    v-on="on"
                                                                ></v-text-field>
                                                            </template>
                                                            <v-date-picker
                                                                v-model="
                                                                    editedLand.sold_at
                                                                "
                                                                @input="
                                                                    dateLandMenu = false
                                                                "
                                                            ></v-date-picker>
                                                        </v-menu>
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                        </v-card-text>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                color="blue darken-1"
                                                text
                                                @click="close"
                                                >{{ $t("form.cancel") }}</v-btn
                                            >
                                            <v-btn
                                                color="blue darken-1"
                                                text
                                                @click="onSaveLand"
                                            >
                                                {{ $t("form.save") }}
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>

                                <v-menu offset-y bottom left>
                                    <template v-slot:activator="{ on }">
                                        <v-btn icon v-on="on">
                                            <v-icon>mdi-menu-down</v-icon>
                                        </v-btn>
                                    </template>
                                    <v-list>
                                        <v-list-item dense>
                                            <v-list-item-icon>
                                                <v-icon
                                                    >mdi-file-excel-outline</v-icon
                                                >
                                            </v-list-item-icon>
                                            <v-list-item-content left>
                                                <v-list-item-title>
                                                    Exports Excel
                                                </v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-toolbar>

                            <v-row row wrap class="px-5">
                                <v-col cols="12" lg="6" sm="12">
                                    <v-select
                                        :items="locations"
                                        item-value="id"
                                        v-model="filterLocation"
                                        :label="$t('Filter location')"
                                        item-text="name"
                                    >
                                    </v-select>
                                </v-col>

                                <v-col cols="12" lg="6" sm="12">
                                    <v-text-field
                                        v-model="search"
                                        label="Search"
                                        single-line
                                        v-on:keyup.enter="onSearchLand"
                                    >
                                        <template v-slot:append>
                                            <v-btn
                                                v-if="search != null"
                                                @click="onCancelSearch"
                                                small
                                                icon
                                                class="pa-0 ma-0"
                                            >
                                                <v-icon>mdi-close</v-icon>
                                            </v-btn>
                                            <v-btn
                                                @click="onSearchLand"
                                                small
                                                icon
                                                class="pa-0 ma-0"
                                            >
                                                <v-icon>mdi-crosshairs</v-icon>
                                            </v-btn>
                                        </template>
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </template>

                        <template v-slot:item.selected="{ item }">
                            <v-simple-checkbox
                                color="green"
                                v-model="item.selected"
                            ></v-simple-checkbox>
                        </template>

                        <template v-slot:item.name="{ item }">
                            <v-icon class="mr-5" color="accent"
                                >mdi-map-marker</v-icon
                            >
                            <span class="caption">{{ item.name }}</span>
                        </template>

                        <template v-slot:item.action="{ item }">
                            <v-icon small class="mr-2" @click="onViewLand(item)"
                                >mdi-eye</v-icon
                            >
                            <v-icon small class="mr-2" @click="onEditLand(item)"
                                >mdi-pencil</v-icon
                            >
                            <v-icon small @click="onDeleteLand(item)"
                                >mdi-trash-can-outline</v-icon
                            >
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>

            
            <v-col cols="12" lg="3">
                <v-card class="border-top border-blue">
                    <v-card-title primary-title>
                        {{ $t("Price and Payments").toUpperCase() }}
                    </v-card-title>

                    <v-card-text v-if="Object.entries(viewLand).length !== 0">
                        <v-divider class="pa-0 ma-0"></v-divider>
                        <v-list>
                            <v-list-item v-if="viewLand.price != null">
                                <v-list-item-action>
                                    <v-icon>mdi-cash-usd-outline</v-icon>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        <span
                                            class="font-weight-bold blue--text"
                                            >{{ viewLand.price }}</span
                                        >
                                    </v-list-item-title>
                                    <v-list-item-subtitle>{{
                                        $t("Price")
                                    }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item v-if="viewLand.due != null">
                                <v-list-item-action>
                                    <v-icon>mdi-cash-usd-outline</v-icon>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        <span
                                            class="font-weight-bold red--text"
                                            >{{ viewLand.due }}</span
                                        >
                                    </v-list-item-title>
                                    <v-list-item-subtitle>{{
                                        $t("Due")
                                    }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-divider class="pa-0 ma-0"></v-divider>

                            <v-list-item
                                v-for="(income, index) in viewLand.incomes"
                                :key="index"
                                dense
                            >
                                <v-list-item-action>
                                    <v-icon>mdi-cash-usd-outline</v-icon>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title class="green--text">
                                        {{ income.amount }}
                                        <v-btn
                                            @click="onViewRevenue(income)"
                                            icon
                                        >
                                            <v-icon :size="18"
                                                >mdi-pencil</v-icon
                                            >
                                        </v-btn>
                                    </v-list-item-title>
                                    <v-list-item-subtitle>
                                        {{ $t("Type") }}:
                                        {{ income.type }}
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle>
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on }">
                                                <span
                                                    color="primary"
                                                    dark
                                                    v-on="on"
                                                    >{{ $t("Date") }}:
                                                    {{
                                                        income.received_at
                                                    }}</span
                                                >
                                            </template>
                                            {{ $t("Last updated") }}:
                                            {{ income.updated_at }}
                                        </v-tooltip>
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-divider class="pa-0 ma-0"></v-divider>
                        </v-list>

                        <v-list>
                            <v-list-item
                                v-for="(expense, index) in viewLand.expenses"
                                :key="index"
                                dense
                            >
                                <v-list-item-action>
                                    <v-icon>mdi-cash-usd-outline</v-icon>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title class="red--text">
                                        - {{ expense.amount }}
                                        <v-btn
                                            @click="onViewExpense(expense)"
                                            icon
                                        >
                                            <v-icon :size="18"
                                                >mdi-pencil</v-icon
                                            >
                                        </v-btn>
                                    </v-list-item-title>
                                    <v-list-item-subtitle>
                                        {{ $t("Type") }}:
                                        {{ expense.type }}
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle>
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on }">
                                                <span
                                                    color="primary"
                                                    dark
                                                    v-on="on"
                                                    >{{ $t("Date") }}:
                                                    {{ expense.paid_at }}</span
                                                >
                                            </template>
                                            {{ $t("Last updated") }}:
                                            {{ expense.updated_at }}
                                        </v-tooltip>
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                            <v-divider class="pa-0 ma-0"></v-divider>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" lg="3" v-if="Object.entries(viewLand).length !== 0" >
                
                    <v-card
                        class="border-top border-accent"
                        v-if="Object.entries(viewLand).length !== 0"
                    >
                        <v-card-text>
                            <v-row row wrap class="mx-1">
                                <span
                                    class="captain font-weight-bold blue--text"
                                >
                                    {{ $t("revenues") }}
                                </span>
                                <v-spacer></v-spacer>
                                <v-btn @click="initRevenue" icon>
                                    <v-icon>mdi-plus-circle-outline</v-icon>
                                </v-btn>
                            </v-row>
                            <v-row row wrap>
                                <v-col cols="6">
                                    <v-text-field
                                        type="number"
                                        prepend-inner-icon="mdi-cash"
                                        :label="$t('form.amount')"
                                        v-model="currentRevenue.amount"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-menu
                                        v-model="dateRevenueMenu"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="290px"
                                    >
                                        <template v-slot:activator="{ on }">
                                            <v-text-field
                                                prepend-inner-icon="mdi-calendar-check"
                                                :label="$t('Date')"
                                                v-model="
                                                    currentRevenue.received_at
                                                "
                                                readonly
                                                v-on="on"
                                            ></v-text-field>
                                        </template>
                                        <v-date-picker
                                            v-model="currentRevenue.received_at"
                                            @input="dateRevenueMenu = false"
                                        ></v-date-picker>
                                    </v-menu>
                                </v-col>
                                <v-col cols="12">
                                    <v-select
                                        class="py-0 my-0"
                                        :items="revenuesTypes"
                                        v-model="currentRevenue.type"
                                        :label="$t('Revenue type')"
                                    ></v-select>
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn rounded @click="initRevenue" color="text">
                                {{ $t("form.cancel") }}
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                                rounded
                                @click="onSaveRevenue"
                                color="success"
                            >
                                {{ $t("form.save") }}
                            </v-btn>
                        </v-card-actions>
                    </v-card>

                    <v-card
                        class="mt-2 border-top border-accent"
                        v-if="Object.entries(viewLand).length !== 0"
                    >
                        <v-card-text>
                            <v-row row wrap class="mx-1">
                                <span
                                    class="captain font-weight-bold red--text"
                                >
                                    {{ $t("expenses") }}
                                </span>
                                <v-spacer></v-spacer>
                                <v-btn @click="initExpense" icon>
                                    <v-icon>mdi-plus-circle-outline</v-icon>
                                </v-btn>
                            </v-row>
                            <v-row row wrap>
                                <v-col cols="6">
                                    <v-text-field
                                        type="number"
                                        prepend-inner-icon="mdi-cash"
                                        :label="$t('form.amount')"
                                        v-model="currentExpense.amount"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-menu
                                        v-model="dateExpenseMenu"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="290px"
                                    >
                                        <template v-slot:activator="{ on }">
                                            <v-text-field
                                                prepend-inner-icon="mdi-calendar-check"
                                                :label="$t('Date')"
                                                v-model="currentExpense.paid_at"
                                                readonly
                                                v-on="on"
                                            ></v-text-field>
                                        </template>
                                        <v-date-picker
                                            v-model="currentExpense.paid_at"
                                            @input="dateExpenseMenu = false"
                                        ></v-date-picker>
                                    </v-menu>
                                </v-col>

                                <v-col cols="6">
                                    <v-select
                                        class="py-0 my-0"
                                        :items="viewLand.commissions"
                                        item-text="name"
                                        item-value="id"
                                        v-model="currentExpense.user_id"
                                        :label="$t('Commission Level')"
                                    ></v-select>
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn rounded @click="initExpense" color="text">
                                {{ $t("form.cancel") }}
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn rounded @click="onSaveExpense" color="success">
                                {{ $t("form.save") }}
                            </v-btn>
                        </v-card-actions>
                    </v-card>
            </v-col>

        </v-row>

        <v-snackbar :color="isError ? 'error' : 'success'" v-model="snackbar">
            {{ message }}
            <v-spacer></v-spacer>
            <v-btn text @click="snackbar = !snackbar">close</v-btn>
        </v-snackbar>
    </v-app>
</template>

<script>
import moment from "moment";
export default {
    data() {
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
            headers: [
                {
                    text: this.$t("form.name"),
                    align: "left",
                    sortable: true,
                    value: "name"
                },
                {
                    text: this.$t("form.price"),
                    value: "price",
                    sortable: false
                },
                {
                    text: this.$t("form.sold_at"),
                    value: "sold_at",
                    sortable: false
                },
                {
                    text: this.$t("form.actions"),
                    value: "action",
                    sortable: false
                }
            ]
        };
    },
    watch: {
        options: {
            handler() {
                // console.log(this.options);
                this.fetchLandFromServer().then(data => {
                    this.lands = data.items;
                    this.totalLands = data.total;
                });
            },
            deep: true
        },
        filterLocation(value) {
            this.fetchLandFromServer().then(data => {
                this.products = data.items;
                this.totalProducts = data.total;
            });
        }
        // currentExpense: {
        //     handler(val){
        //         // console.log(val['user_id']);
        //         let amount = this.viewLand.commissions.filter( (com, i) => com.id == val['user_id'] )[0]['amount'];
        //         this.currentExpense.amount = amount;
        //     },
        //     deep: true
        // }
    },

    created() {
        this.fetchLocations();
        this.fetchUsers();
        this.fetchClients();
    },

    methods: {
        fetchLandFromServer() {
            this.loading = true;
            var url = `/api/lands/`;

            if (typeof this.options.itemsPerPage == "number") {
                url += `?paginate=${this.options.itemsPerPage}`;
                if (this.options.page) {
                    console.log(`page ${this.options.page}`);
                    url += `&&page=${this.options.page}`;
                }
            }
            if (typeof this.options.sortBy[0] != "undefined") {
                url += `&&sortBy=${this.options.sortBy[0]}`;
            }

            if (this.options.sortDesc.length > 0) {
                console.log(this.options.sortDesc);
                url += `&&sortDesc=${this.options.sortDesc[0]}`;
            }

            if (this.filterLocation > 0) {
                url += `&&filerByField=location_id&&filerByValue=${this.filterLocation}`;
            }

            if (typeof this.search[0] != "undefined") {
                url = `/api/lands/?search=${this.search}`;
            }

            console.log("loaded");

            return new Promise((resolve, reject) => {
                axios
                    .get(url)
                    .then(result => {
                        // console.log(result.data)

                        const {
                            sortBy,
                            sortDesc,
                            page,
                            itemsPerPage
                        } = this.options;
                        let items = [];
                        if (typeof result.data.data != "undefined") {
                            items = result.data.data; //!
                        }
                        let total = 0;
                        if (typeof result.data.meta != "undefined") {
                            total = result.data.meta.total; //!
                            this.footerprops["items-per-page-options"] = [
                                5,
                                10,
                                15,
                                100,
                                total
                            ];
                        } else {
                            total = result.data.data.length;
                            this.footerprops["items-per-page-options"] = [
                                total
                            ];
                        }

                        // console.log(result.data.meta.total);

                        this.loading = false;
                        resolve({
                            items,
                            total
                        });
                    })
                    .catch(err => {
                        console.log(err);
                        reject(err);
                    });
            });
        },

        initLand() {
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
                sold_at: moment().format("YYYY-MM-DD")
            };
            this.currentLocation = {};
            this.isEditLocation = false;
            this.viewLand = {};
            this.landId = null;
            this.dialogLand = true;
        },

        initLocation() {
            this.isEditLocation = !this.isEditLocation;
            this.currentLocation = {};
        },

        initExpense() {
            this.currentExpense.type = "COMMISSION";
            this.currentExpense.title = this.currentExpense.type;
            this.currentExpense.description = this.currentExpense.type;
            this.currentExpense.land_id = this.viewLand.id;
            this.currentExpense.user_id = null;
            this.currentExpense.amount = 0.0;
            (this.currentExpense.id = null),
                (this.currentExpense.paid_at = moment().format("YYYY-MM-DD"));
        },

        initRevenue() {
            this.currentRevenue.title = this.currentRevenue.type;
            this.currentRevenue.description = this.currentRevenue.type;
            this.currentRevenue.land_id = this.viewLand.id;
            this.currentRevenue.user_id = null;
            this.currentRevenue.amount = 0.0;
            (this.currentRevenue.id = null),
                (this.currentRevenue.received_at = moment().format(
                    "YYYY-MM-DD"
                ));
        },

        onSaveLand() {
            const {
                name,
                description,
                price,
                location_id,
                user_id,
                client_id,
                commission_line_1,
                commission_line_2,
                commission_line_3,
                commission_line_4,
                sold_at
            } = this.editedLand;
            let land = {
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

                axios
                    .post(`/api/lands`, land)
                    .then(result => {
                        // console.log(result);
                        this.lands.push(result.data.data);
                        this.snackbar = true;
                        this.isError = false;
                        this.message = this.$t("lands.created");
                    })
                    .catch(error => {
                        // console.log(error);
                        this.snackbar = true;
                        this.isError = true;
                        this.message = error.response.data.message;
                    });
            } else {
                // console.log('update');
                axios
                    .put(`/api/lands/${this.landId}`, land)
                    .then(result => {
                        // console.log(result.data.data);
                        Object.assign(
                            this.lands[this.editedIndex],
                            result.data.data
                        );
                        this.snackbar = true;
                        this.isError = false;
                        this.message = this.$t("lands.updated");
                    })
                    .catch(error => {
                        // console.log(error);
                        this.snackbar = true;
                        this.isError = true;
                        this.message = error.response.data.message;
                    });
            }

            this.dialogLand = false;
            // console.log("saved");
        },

        onDeleteLand(item) {
            const index = this.lands.indexOf(item);
            confirm("Are you sure you want to delete this user?") &&
                axios
                    .delete(`/api/lands/${item.id}`)
                    .then(result => {
                        // console.log(result);
                        this.lands.splice(index, 1);
                        this.snackbar = true;
                        this.isError = false;
                        this.message = this.$t("lands.deleted");
                    })
                    .catch(error => {
                        // console.log(error);
                        this.snackbar = true;
                        this.isError = true;
                        this.message = error.response.data.message;
                    });

            // console.log(item);
        },

        onSearchLand() {
            this.fetchLandFromServer().then(data => {
                this.lands = data.items;
                this.totalLands = data.total;
            });
        },
        onCancelSearch() {
            this.search = "";
            this.fetchLandFromServer().then(data => {
                this.lands = data.items;
                this.totalLands = data.total;
            });
        },

        cancel() {
            this.dialogLand = false;
            this.initLand();
            console.log("canceled");
        },
        close() {
            this.dialogLand = false;
            console.log("closed");
        },
        onEditLand(land) {
            this.editedIndex = this.lands.indexOf(land);
            this.landId = land.id;
            this.editedLand = Object.assign({}, land);
            this.dialogLand = true;
            console.log(land);
        },
        onViewLand(land) {
            axios
                .get(`/api/lands/${land.id}`)
                .then(result => {
                    // console.log(result);
                    this.viewLand = result.data.data;
                })
                .catch(err => {
                    console.log(err);
                });
            this.currentRevenue.received_at = moment().format("YYYY-MM-DD");
            this.currentExpense.paid_at = moment().format("YYYY-MM-DD");
        },

        onViewRevenue(income) {
            this.currentRevenue = income;
        },

        onViewExpense(expense) {
            this.currentExpense = expense;
        },

        onSaveRevenue() {
            // console.log(this.viewLand);
            // console.log(this.currentRevenue);
            this.currentRevenue.title = this.currentRevenue.type;
            this.currentRevenue.description = this.currentRevenue.type;
            this.currentRevenue.land_id = this.viewLand.id;
            // console.log(this.currentRevenue);

            if (this.currentRevenue.id == null) {
                // console.log("create");

                axios
                    .post(`/api/incomes`, this.currentRevenue)
                    .then(result => {
                        // console.log(result);
                        // this.viewLand.incomes.push(result.data.data);
                        this.onViewLand(this.viewLand);
                        this.initRevenue();

                        this.snackbar = true;
                        this.isError = false;
                        this.message = this.$t("revenues.created");
                    })
                    .catch(error => {
                        this.snackbar = true;
                        this.isError = true;
                        this.message = error.response.data.message;

                        // console.log(error);
                    });
            } else {
                // console.log('update');
                axios
                    .put(
                        `/api/incomes/${this.currentRevenue.id}`,
                        this.currentRevenue
                    )
                    .then(result => {
                        // console.log(result.data.data);
                        this.onViewLand(this.viewLand);
                        this.initRevenue();

                        this.snackbar = true;
                        this.isError = false;
                        this.message = this.$t("revenues.updated");
                    })
                    .catch(error => {
                        // console.log(error);
                        this.snackbar = true;
                        this.isError = true;
                        this.message = error.response.data.message;
                    });
            }
        },

        onSaveExpense() {
            // console.log(this.viewLand);
            // console.log(this.currentExpense);
            this.currentExpense.type = "COMMISSION";
            this.currentExpense.title = this.currentExpense.type;
            this.currentExpense.description = this.currentExpense.type;
            this.currentExpense.land_id = this.viewLand.id;
            // console.log(this.currentExpense);

            if (this.currentExpense.id == null) {
                // console.log("create");

                axios
                    .post(`/api/expenses`, this.currentExpense)
                    .then(result => {
                        // console.log(result);
                        // this.viewLand.incomes.push(result.data.data);
                        this.onViewLand(this.viewLand);
                        this.initExpense();

                        this.snackbar = true;
                        this.isError = false;
                        this.message = this.$t("expenses.created");
                    })
                    .catch(error => {
                        this.snackbar = true;
                        this.isError = true;
                        this.message = error.response.data.message;

                        // console.log(error);
                    });
            } else {
                // console.log('update');
                axios
                    .put(
                        `/api/expenses/${this.currentExpense.id}`,
                        this.currentExpense
                    )
                    .then(result => {
                        // console.log(result.data.data);
                        this.onViewLand(this.viewLand);
                        this.initExpense();

                        this.snackbar = true;
                        this.isError = false;
                        this.message = this.$t("epxenses.updated");
                    })
                    .catch(error => {
                        // console.log(error);
                        this.snackbar = true;
                        this.isError = true;
                        this.message = error.response.data.message;
                    });
            }
        },

        onViewLocation() {
            this.currentLocation.id = this.editedLand.location_id;
            this.isEditLocation = true;
            console.log(this.currentLocation.id);
        },
        onSaveLocation() {
            if (this.currentLocation.id == null) {
                axios
                    .post(`/api/locations`, this.currentLocation)
                    .then(result => {
                        // console.log(result);
                        this.fetchLocations();
                        this.isEditLocation = false;

                        this.snackbar = true;
                        this.isError = false;
                        this.message = this.$t("locations.created");
                    })
                    .catch(error => {
                        this.snackbar = true;
                        this.isError = true;
                        this.message = error.response.data.message;
                        // console.log(error);
                    });
            } else {
                axios
                    .put(
                        `/api/locations/${this.currentLocation.id}`,
                        this.currentLocation
                    )
                    .then(result => {
                        // console.log(result.data.data);
                        this.fetchLocations();
                        this.isEditLocation = false;

                        this.snackbar = true;
                        this.isError = false;
                        this.message = this.$t("locations.updated");
                    })
                    .catch(error => {
                        this.snackbar = true;
                        this.isError = true;
                        this.message = error.response.data.message;
                        // console.log(error);
                    });
            }
        },

        fetchLocations() {
            axios
                .get(`/api/locations/selections`)
                .then(result => {
                    console.log(result);
                    this.locations = result.data;
                })
                .catch(err => {
                    console.log(err);
                });
        },

        fetchUsers() {
            axios
                .get(`/api/users/selections`)
                .then(result => {
                    console.log(result);
                    this.users = result.data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        fetchClients() {
            axios
                .get(`/api/clients/selections`)
                .then(result => {
                    console.log(result);
                    this.clients = result.data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        onChangeClient(id) {
            var client = this.clients.filter(
                (client, index) => client.id == id
            )[0];
            this.editedLand.user_id = client.user_id;
        }
    }
};
</script>
