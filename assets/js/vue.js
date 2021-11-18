const vue = new Vue({

    data: () => {
        return {
            players: [],
            searchKey: ""
        }
    },

    computed: {
        search() {
            playerName = this.searchKey;
            axios.get("http://localhost:3001/api/search/" + playerName)
                .then(res => {
                    console.log(res);
                    this.players = res.data.message
                })
                .catch(e => console.log(e));
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