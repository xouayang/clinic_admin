<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      width="290"
      
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="'A'+i"
          :to="item.to"
          router
          exact
          color="#9155FD"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- drop down menu -->
        <v-list-group
          v-for="(group, index) in menuItems"
          :key="'B'+index"
          :value="group.active"
          :prepend-icon="group.icon"
          no-action
          color="#9155FD"
          class="pt-3"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="pt-1">{{
                group.title
              }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(item, index) in group.nestMenu"
            :key="index"
            :to="item.to"
            router
            exact
            class="rounded-xl"
            
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group
          v-for="(group, index) in menuList"
          :key="'C'+index"
          :value="group.active"
          :prepend-icon="group.icon"
          no-action
          color="#9155FD"
          class="pt-3"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="pt-1">{{
                group.title
              }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(item, index) in group.nestList"
            :key="index"
            :to="item.to"
            router
            exact
            class="rounded-xl"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group
          v-for="(group, index) in menuList1"
          :key="'D'+index"
          :value="group.active"
          :prepend-icon="group.icon"
          no-action
          color="#9155FD"
          class="pt-3"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ group.title }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(item, index) in group.nestList1"
            :key="index"
            :to="item.to"
            router
            exact
            class="rounded-xl"
          >
            <v-list-item-content>
              <v-list-item-title class="pt-1">{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group
          v-for="(group, index) in menuList2"
          :key="'E'+index"
          :value="group.active"
          :prepend-icon="group.icon"
          no-action
          color="#9155FD"
          class="pt-3"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="pt-1">{{
                group.title
              }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(item, index) in group.nestList2"
            :key="index"
            :to="item.to"
            router
            exact
            class="rounded-xl"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group
          v-for="(group, index) in menuList3"
          :key="'F'+index"
          :value="group.active"
          :prepend-icon="group.icon"
          no-action
          color="#9155FD"
          class="pt-3"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="pt-1">{{
                group.title
              }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(item, index) in group.nestList3"
            :key="index"
            :to="item.to"
            router
            exact
            class="rounded-xl"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item
          v-for="(iconCog, i) in setting"
          :key="'I'+i"
          :to="iconCog.to"
          router
          exact
          color="#9155FD"
          class="mt-2"
        >
          <v-list-item-action>
            <v-icon>{{ iconCog.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ iconCog.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app elevation="1">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>

      <v-toolbar-title style="color:#9155FD">{{ title }}</v-toolbar-title>
      <v-spacer />
      <div v-ripple class="text-center px-3 cursor-pointer">
         <v-btn text rounded>  <span>ຜູ້ເຂົ້າໃໍຊ້ລະບົບ : XOUAYANG</span></v-btn>
      </div>
      <div v-ripple class="text-center px-3 cursor-pointer" @click="Logout">
        <v-btn text rounded>
          <v-icon color="#9155FD"> mdi-power</v-icon>
          ອອກຈາກລະບົບ
        </v-btn>
      </div>
    </v-app-bar>
    <v-main class="bgcolor">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app class="d-flex justify-center">
      <span>ຄີຣນິກ ດຣ ສະຖຽນ</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  //  middleware: 'auth',
  data() {
    return {
      sun: false,
      clipped: true,
      drawer: false,
      fixed: false,
      show: false,
      menuList: [
        {
          icon: "mdi-doctor",
          title: "ກວດພະຍາດ",
          nestList: [
            { title: "ກວດການັດໝາຍ", to: "/treat/Check_appointment" },
            { title: "ບັນທຶກຂໍ້ມູນພື້ນຖານ", to: "/treat/basic_record" },
            // { title: "ບັນທືກການປີ່ນປົວ", to: "" },
            // { title: "ອອກໃບສັ່ງຢາ", to: "" },
          ],
        },
      ],
      menuList1: [
        {
          icon: "mdi-medical-cotton-swab",
          // title: "ຈ່າຍຢາ",
          title: "ຂາຍຢາ",
          nestList1: [
            { title: "ກວດສອບໃບສັ່ງຢາ", to: "/prescription/check_prescription" },
            // { title: "ບັນທຶກການຈ່າຍຢາ", to: "" },
            // { title: "ຢືນຢັນການຈ່າຍຢາ", to: "" },
          ],
        },
      ],
      menuList2: [
        {
          icon: "mdi-cart-percent",
          title: "ຈັດຊື້",
          nestList2: [
            { title: "ກວດສອບຂໍ້ມູນຢາ-ອຸປະກອນ", to: "/orders" },
            // { title: "ບັນທຶກການສັ່ງຊື້", to: "" },
            // { title: "ພິມໃບບິນ", to: "" },
          ],
        },
      ],
      menuList3: [
        {
          icon: "mdi-import",
          title: "ນຳເຂົ້າ",
          nestList3: [
            { title: "ກວດສອບການສັ່ງຊື້", to: "/import" }
          ],
        },
      ],
      menuList4: [
        {
          icon: "mdi-chart-line",
          title: "ລາຍງານ",
          nestList4: [
            { title: "ລາຍງານສະຫຼຸບລາຍຮັບ", to: "" },
            { title: "ລາຍງານຂໍ້ມູນຢາ-ອຸປະກອນ", to: "" },
            { title: "ລາຍງານຂໍ້ມູນຄົນເຈັບ", to: "" },
            { title: "ລາຍງານຂໍ້ມູນການປີ່ນປົວ", to: "" },
          ],
        },
      ],
      menuItems: [
        {
          icon: "mdi-cogs",
          title: "ຈັດການຂໍ້ມູນ",
          nestMenu: [
            { title: "ຈັດການຂໍ້ມູນຄົນເຈັບ", to: "/manage/Manage_patient" },
            { title: "ຈັດການຂໍ້ມູນພະນັກງານ", to: "/manage/manage_information_staff" },
            { title: "ຈັດການຂໍ້ມູນຢາ-ອຸປະກອນ", to: "/manage/manage_drug_equipment" },
            { title: "ຈັດການລາຍການກວດ", to: "/manage/manage_checklists" },
            { title: "ຈັດການຂໍ້ມູນຜູ້ສະໜອງ", to: "/manage/Manage_supplier" },
            { title: "ຈັດການຂໍ້ມູນການນັດໝາຍ", to: "/manage/Manage_appointment" }
          ],
        },
      ],
       items: [
        {
          icon: "mdi-home-outline",
          title: "ໜ້າຫຼັກ",
          to: "/",
        },
      ],
      setting:[
                {
          icon: "mdi-chart-line",
          title: "ລາຍງານ",
          to: "/reports/reportTable",
        },
        {
          icon: "mdi-cog-outline",
          title: "ຕັ້ງຄ່າລະບົບ",
          to: "/setting",
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "ຄີຣນິກ ດຣ ສະຖຽນ",
    };
  },
  methods: {
    Logout() {
      this.$router.push("login");
    },
    Logout() {
      this.$cookies.remove("token"), this.$router.push("/login");
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  font-family: "Noto Serif Lao", serif;
}
.cursor-pointer {
  cursor: pointer !important;
}
.bgcolor {
  background-color: #eff3f6;
}
.appbarcolor {
  background: linear-gradient(
    68.6deg,
    rgb(252, 165, 241) 1.8%,
    rgb(181, 255, 255) 100.5%
  );
}
</style>
