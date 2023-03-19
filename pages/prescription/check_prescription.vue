<template>
  <div class="mt-2 ml-2">
    <div style="font-size: 20px">ຂາຍຢາ</div>
   <v-card class="mt-3">
     <v-row class="col-12">
      <v-col cols="12" md="5" sm="12">
        <v-text-field
          name="sale"
          label="ຂາຍຢາ"
          id="sale"
          outlined
          dense
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="5" sm="12">
        <v-select
          :items="items"
          v-model="value"
          label="ປະເພດ"
          dense
          outlined
        ></v-select>
      </v-col>
      <v-col cols="12" md="2" sm="12">
        <v-btn text color="black" rounded>
            <v-icon>mdi-barcode</v-icon>
        </v-btn>
      </v-col>
    </v-row>
   </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>