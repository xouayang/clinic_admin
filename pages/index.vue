<template>
  <div>
    <v-card>
      <!-- search button------------------------------- -->
      <v-card-title>
        <v-text-field
          prepend-inner-icon="mdi-magnify"
          v-model="searchTerm"
          label="ຄົ້ນຫາຕາມວັນທີ"
          outlined
          hide-details
          dense
          small
          @input="search"
        />
      </v-card-title>
      <!-- datatable-------------------------- -->
      <v-data-table :headers="headers" :items="items"></v-data-table>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "ItcLotteryAdminIndex",
  data() {
   
    return {
      searchTerm: "",
      headers: [
        { text: "ລຳດັບ", value: "ລຳດັບ" },
        { text: "ເລກທີງວດ", value: "ເລກທີງວດ" },
        { text: "ສະຖານະ", value: "ສະຖານະ" },
      ],
      items: [
        { ລຳດັບ: "1", ເລກທີງວດ: "3/1/2023", ສະຖານະ: "ໂສດ" },
        { ລຳດັບ: "1", ເລກທີງວດ: "3/1/2023", ສະຖານະ: "ໂສດ" },
        { ລຳດັບ: "1", ເລກທີງວດ: "3/1/2023", ສະຖານະ: "ໂສດ" },
        { ລຳດັບ: "1", ເລກທີງວດ: "3/1/2023", ສະຖານະ: "ໂສດ" },
        { ລຳດັບ: "1", ເລກທີງວດ: "3/1/2023", ສະຖານະ: "ໂສດ" },
      ],
    };
  },
  methods: {
    search() {
      // Perform search action here with this.searchTerm
    },
  },
};
</script>