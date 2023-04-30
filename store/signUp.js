export const state = () => ({
  dataPatients: [],
  singleData: [],
});
export const mutations = {
  getPatient(state, data) {
    state.dataPatients = data;
  },
  getsingleData(state, data) {
    state.singleData = data;
  },
};

export const actions = {
  async register({ commit }, form) {
    await this.$axios
      .post("http://localhost:7000/create-staff", form)
      .then(() => {
        this.$toast.success("ລົງທະບຽນສຳເລັດ");
        // this.router.push("/login");
      });
  },
};
