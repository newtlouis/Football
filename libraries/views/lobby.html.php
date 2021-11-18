<div id="vue-app" class="lobby-container">
  <ul>
    <li class="name">
      <i class="fas fa-search"></i>
      <input v-model="searchKey"  @keyup.enter="search" type="search" class="search" placeholder="Entrez le nom d'un joueur...">
    </li>

    <li class="country">
      <i class="fas fa-globe-europe"></i>
    </li>

    <li class="grapes">
      <i class="fas fa-wine-glass-alt"></i>
    </li>
  </ul>

  <div class="list-container">
    <div v-for="player, id in players" :key="id" class="wine-list">
      <div class="wine-card">
        <div class="card-header">
          <h2>{{player.player.name}}</h2>
          <i @click="removeItem(id)" class="fas fa-times"></i>
        </div>
        <div class="container">
          <div class="text-container">
            <div class="buttons">
              <h4>{{player.player.age}} ans</h4>
              <h4>{{player.player.weight}}</h4>
              <h4>{{player.player.height}}</h4>
              <h4>{{player.statistics[0].goals.total}} buts</h4>
            </div>
            <div class="location">
              <i class="fas fa-map-marker-alt"></i>
              <span>{{player.player.nationality}}</span>
            </div>
          </div>
          <img :src="(player.player.photo)" alt="">
        </div>

      </div>
    </div>
  </div>
</div>