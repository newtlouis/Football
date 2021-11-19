const vue = new Vue({

    data: () => {
        return {
            players: [],
            searchKey: "",
            inputType: "",
            countryList:[],
            countryOption: []
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
        },
        searchInputType(param){
            this.inputType = param;
        }
    },

    mounted() {
        axios.get("http://localhost:3001/api/search/")
            .then(res => this.players = res.data.message)
            .then(()=> {
                for(let player of this.players){
                    if(!this.countryList.includes(player.player.nationality)){
                        this.countryList.push(player.player.nationality)
                    }
                }
            })
            .catch(e => console.log(e));

            setTimeout(()=>{
                let arr = this.countryList.sort();
                for(let i =0; i< arr.length; i++){
                    this.countryOption.push({
                        name: arr[i],
                        id: arr[i]
                    })
                }
            }, 500);
    }
}).$mount("#vue-app");