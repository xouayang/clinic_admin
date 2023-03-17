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
            stacked
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
              <div>
               
              </div>
              <v-divider></v-divider>
            </div>
          </v-card>
        </v-window-item>
      </v-window>
    </v-card>
    <!-- <v-card>
      <v-toolbar color="#9155FD">
        <v-toolbar-title style="color: white" class="ml-6"
          >ກວດການັດໝາຍ</v-toolbar-title
        >
        <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="end">
          <v-tab v-for="item in items" :key="item" :value="item">{{
            item
          }}</v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item v-for="item in items" :key="item">
            <v-container fluid>
              <v-row>
                <v-col cols="12" md="4"> </v-col>
              </v-row>
            </v-container>
          </v-window-item>
        </v-window>
      </v-toolbar>
    </v-card> -->
  </div>
</template>

<script>
export default {
  name: "Check_appointment",
  data() {
    return {
      tab: null,
      items: ["ນັດໝາຍຜ່ານອອນລາຍ", "ກວດສອບສຳເລັດ", "ປະຕິເສດ"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>