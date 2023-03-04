<template>
    <v-app>
      <div class="backgruond"></div>
      <v-main class="d-flex justify-center align-center">
        <v-col cols="10" lg="4" class="mx-auto">
          <v-card class="pa-4">
            <div class="text-center">
              <v-avatar size="100" color="indigo lighten-4">
                <v-img src="/image/adminlogo.png" size="40"></v-img>
              </v-avatar>
              <h2 class="indigo--text">Admin Page</h2>
            </div>
            <v-form @submit.prevent="submitHandler" ref="form">
              <v-card-text>
                <v-text-field
                  v-model="telephone"
                  :rules="numberRules"
                  type="Number"
                  label="Phone Number"
                  placeholder="XXXXXXXX"
                  prepend-inner-icon="mdi-account"
                  required
                />
                <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        :type="passwordShow?'text':'password'"
                        label="Password"
                        placeholder="Password"
                        prepend-inner-icon="mdi-key"
                        :append-icon="passwordShow ? 'mdi-eye':'mdi-eye-off'"
                        @click:append="passwordShow = !passwordShow"
                        required
                />
                <v-switch label="Remember me" color="indigo"></v-switch>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn type="reset" color="error">
                  <span class="white--text px-8">Cancel</span>
                </v-btn>
                <v-btn :loading="loading" type="submit" color="blue">
                  <span class="white--text px-8">Login</span>
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-main>
    </v-app>
  </template>
  <script>
  export default {
    layout: 'blank',
    data: () => ({
      loading:false,
      snackbar:false,
      passwordShow:false,
      telephone: '',
      numberRules: [
        v => !!v || 'Number is required',
        v => (v && v.length >= 8) || 'Phone number must be 8 character or more!',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 3) || 'Password must be 6  characters or more!',
      ],
    }),
    methods:{
      submitHandler(){
        if (this.$refs.form.validate()){
            this.loading = true
            this.$store.dispatch('user/login', {
                telephone: this.telephone,
                password: this.password,
            })
           setTimeout(()=> {
             this.loading = false
           //  this.snackbar = true
          },500)          
        }
      }
    }
  };
  </script>
  <style>
    .backgruond{
      background-image: url(/image/bg.jpg);
      height: 100%;
      width: 100%;
      display: block;
      position: absolute;
      top: 0;
      background-size: cover;
    }
  </style>