export const state = () => ({

})

export const mutations={

}

export const actions = {
    async login({commit},form) {
        await this.$axios.post('https://api.itcapital.la/login', form).then((data) => {
          this.$cookies.set('token', data.data.token)
          this.$router.push('/')
        })
      },
}