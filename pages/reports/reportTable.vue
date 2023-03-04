<template>
    <div>
      <v-card v-if="!show">
        <v-card-title>
          <!-- search button------------------------------- -->
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            v-model="searchTerm"
            label="ຄົ້ນຫາ"
            outlined
            hide-details
            dense
            small
            @input="search"
          />
        </v-card-title>
        <!-- datatable-------------------------- -->
        <v-data-table :headers="headers" :items="items">
          <template #[`item.actions`]>
            <div>
              <v-btn text  @click="show = true">
                <v-icon v-ripple color="green" >mdi-eye</v-icon>
              </v-btn>
            </div>
          </template>
        </v-data-table>
      </v-card>
      <!--show story detail ------------------------------->
      <v-card class="pt-2" v-if="show">
        <div class="d-flex align-center">
          <h2 class="pa-5">ລາຍລະອຽດ</h2>
          <v-spacer></v-spacer>
          <v-btn text color="red"  @click="show = false"
            ><v-icon>mdi-close</v-icon> close</v-btn
          >
        </div>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    prepend-inner-icon="mdi-magnify"
                    v-model="searchTerm"
                    label="ຄົ້ນຫາ"
                    outlined
                    hide-details
                    dense
                    small
                    @input="searchDetail"
                  />
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-card>
                <!------------- table dialog show view detail -->
                <v-data-table :headers="header" :items="item"></v-data-table>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ItcLotteryAdminReportTable',
  
    data() {
      return {
        showDialog: false,
        show:false,
        headers: [
          { text: "ລຳດັບ", value: "ລຳດັບ" },
          { text: "ເລກສ່ຽງ", value: "ເລກສ່ຽງ" },
          { text: "ງວດທີ່", value: "ງວດທີ່" },
          { text: "ລັງວັນ", value: "ລັງວັນ" },
          { text: "ວັນທີອອກ", value: "ວັນທີອອກ" },
          { text: "ໝາຍເຫດ", value: "ໝາຍເຫດ" },
          { text: "ຜູ້ເພີ່ມ", value: "ຜູ້ເພີ່ມ" },
          { text: "Actios", value: "actions" },
        ],
        items: [
          {
            ລຳດັບ: "1",
            ເລກສ່ຽງ: "888666",
            ງວດທີ່: "3-2-2023",
            ລັງວັນ: "1,000,000ກິບ",
            ວັນທີອອກ: "3-1-2023",
            ໝາຍເຫດ: "ຫ້າມກາຍເວລາ",
            ຜູ້ເພີ່ມ: "ທ ເຊັງວ່າງ",
            action: "view",
          },
        ],
        // objects of story detail 
        header: [
        { text: "ລຳດັບ", value: "ລຳດັບ" },
          { text: "ເລກສ່ຽງ", value: "ເລກສ່ຽງ" },
          { text: "ງວດທີ່", value: "ງວດທີ່" },
          { text: "ລັງວັນ", value: "ລັງວັນ" },
          { text: "ວັນທີອອກ", value: "ວັນທີອອກ" },
          { text: "ໝາຍເຫດ", value: "ໝາຍເຫດ" },
          { text: "ຜູ້ເພີ່ມ", value: "ຜູ້ເພີ່ມ" },
          { text: "ຖືກທັງໝົດ", value: "ຖືກທັງໝົດ" },
          { text: "ຜິດທັງໝົດ", value: "ຜິດທັງໝົດ" },
          { text: "ຜູ້ສ່ຽງທັງໝົດ", value: "ຜູ້ສ່ຽງທັງໝົດ" },
         
        ],
        item: [
          {
            ລຳດັບ: "1",
            ເລກສ່ຽງ: "888666",
            ງວດທີ່: "3-2-2023",
            ລັງວັນ: "1,000,000ກິບ",
            ວັນທີອອກ: "3-1-2023",
            ໝາຍເຫດ: "ຫ້າມກາຍເວລາ",
            ຜູ້ເພີ່ມ: "ທ ເຊັງວ່າງ",
            ຖືກທັງໝົດ: "50ຄົນ",
            ຜິດທັງໝົດ: "200ຄົນ",
            ຜູ້ສ່ຽງທັງໝົດ: "250",
           
          },
        ],
      };
    },
  
    mounted() {},
  };
  </script>
  
  <style lang="scss" scoped></style>