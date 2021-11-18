const vue = new Vue({

    data: () => {
        return {
            players: [],
        }
    },

    methods: {
        removeItem(id){
            this.$delete(this.players, id);
        }
    },

    mounted() {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/players',
            params: {team: '33', season: '2020'},
            headers: {
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
                'x-rapidapi-key': '570ee44315msh453c11a4ef76cc2p1ae9c9jsned1df843a578'
            }
        };

        axios.request(options)
            .then(res => this.players = res.data.response)
            .catch(e => console.log(e));
    }
}).$mount("#vue-app");