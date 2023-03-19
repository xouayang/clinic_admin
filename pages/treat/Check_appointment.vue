<template>
  <div>
    <v-card>
      <v-toolbar color="#9155FD">
        <v-toolbar-title style="color: white" class="ml-6"
          >ກວດການັດໝາຍ</v-toolbar-title
        >
        <template #extension>
          <v-tabs
            color="white"
            fixed-tabs
            slider-color="white"
            v-model="tab"
          >
            <v-tab
              v-for="item in items"
              :key="item"
              :value="item"
              style="color: white"
            >
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
      <v-window v-model="tab">
        <v-window-item v-for="item in items" :key="item">
          <v-card flat>
            <div class="mt-3 container">
             
              <v-divider></v-divider>
            </div>
          </v-card>
        </v-window-item>
      </v-window>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Check_appointment",
  data() {
    return {
      tab: null,
      items: ["ລາຍການນັດໝໍ", "ນັດໝາຍໝໍ"],
      check_appointment :false,
    };
  },
  methods: {
    
  },
  mounted() {
     
  },
};
</script>