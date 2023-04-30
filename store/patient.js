export const state = () => ({
    dataPatients : [],
    singleData: []
     
   })
   export const mutations = {
      getPatient(state,data) {
          state.dataPatients = data
      },
      getsingleData(state, data) {
        state.singleData = data
      }
   }
   
   export const actions = {
    async patientInfo({commit}) {
        await  this.$axios.get('http://localhost:7000/get-patients').then(patients => {
               commit("getPatient", patients.data)
          })
      },
      async deleteData({commit}, params) {
        await this.$axios.get('http://localhost:7000/delete-patients', {params}).then(() => {
           alert("Success") 
        })
      }
   }