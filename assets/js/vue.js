const vue = new Vue({

    data: () => {
        return {
            players: [],
        }
    },

    methods: {
        removeItem(id) {
            this.$delete(this.players, id);
        }
    },

    mounted() {
        axios.get("http://localhost:3001/api/search/")
            .then(res => this.players = res.data.message)
            .catch(e => console.log(e));
    }
}).$mount("#vue-app");