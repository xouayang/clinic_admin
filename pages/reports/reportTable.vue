<template>
  <div class="mt-3">
    <div class="ml-1 mb-3 font-weight-bold" style="color: #9155fd">ລາຍງານ</div>
    <v-card>
      <v-card-title>
        <!-- search button------------------------------- -->
        <v-select
          clearable
          outlined
          dense
          color="#9155FD"
          label="ເລືອກລາຍການລາຍງານ"
          :items="item"
        ></v-select>
      </v-card-title>
      <!-- datatable-------------------------- -->
      <v-data-table :headers="headers" :items="items"> </v-data-table>
    </v-card>

    <v-row class="col-12 mt-4">
      <v-col cols="12" md="12" sm="6" class="d-flex justify-end">
        <v-btn  color="#9155FD"> <span style="color:white">ພີມລາຍງານ
           <v-icon>mdi-printer-outline</v-icon>
          </span> </v-btn>
      </v-col>
    </v-row>
    <!--show story detail ------------------------------->
  </div>
</template>
  
  <script>
export default {
  name: "Report_Pages",

  data() {
    return {
      showDialog: false,
      show: false,
      headers: [
        
      ],
      items: [
        
      ],
      item: [
        "ລາຍງານສະຫຼຸບລາຍຮັບ",
        "ລາຍງານຂໍ້ມູນຢາ-ອຸປະກອນ",
        "ລາຍງານຂໍ້ມູນຄົນເຈັບ",
        "ລາຍງານຂໍ້ມູນການປີ່ນປົວ",
      ],
    };
  },


  mounted() {},
};
</script>
  
  <style lang="scss" scoped></style>