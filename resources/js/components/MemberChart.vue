<template>
  <div>
    <organization-chart pan zoom :datasource="datas"></organization-chart>
  </div>
</template>

<script>
  import Vue from 'vue'
  import OrganizationChart from 'vue-organization-chart'
  import 'vue-organization-chart/dist/orgchart.css'

  export default {
    // props:['id'],
    components: {
      OrganizationChart
    },
    data () {
      return {
        datas: {}
      }
    },
    created() {
      this.initData();
    },
    methods: {
      initData(){
        var url = `/api/users/1/members`;
        axios.get(url).then((result) => {
          console.log(result.data);
          this.datas = result.data.data;
        }).catch((err) => {
          console.log(err);
        });
      }
    },
  }
</script>