<template>
  <input type="date" v-model="selectedDateRef" />
  <button @click="handleClick">Chọn ngày</button>
  <div className="game-block" v-for="game in games" :key="game.id">
    <div className="team-score-block">
      <div>
        <div :class="renderLogo(game, false)"></div>
        <h2 className="team-name-text">{{ renderTeamName(game, false) }}</h2>
      </div>
      <div>
        <h4>{{ renderScore(game, false) }}</h4>
      </div>
    </div>
    <div className="game-information">
      <div className="game-date">{{ formatDate(game.date) }}</div>
      <div className="game-status">{{ game.status }}</div>
      <div>{{ renderPostSeason(game) }}</div>
      <div>{{ game.time }}</div>
    </div>
    <div className="team-score-block">
      <div>
        <div :class="renderLogo(game, true)"></div>
        <h2 className="team-name-text">{{ renderTeamName(game, true) }}</h2>
      </div>
      <div :class="toggleScoreClass(game, true)">
        <h4>{{ renderScore(game, true) }}</h4>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref  } from "vue"
import moment from 'moment'
const games = ref(null);
const selectedDateRef = ref(null)
const today = formatDate(new Date())
console.log('today', today)
fetch(
  "https://www.balldontlie.io/api/v1/games?start_date=2023-12-24&end_date=2024-01-07&seasons[]=2023&team_ids[]=10"
)
  .then((response) => response.json())
  .then((data1) => {
    games.value = data1.data
    games.value.sort((a, b) => {
    return new Date(a.date) - new Date(b.date)
  })
  console.log('games', games)
  })
  function handleClick() {
    const selectedDate = new Date(selectedDateRef.value);

      // Sắp xếp list theo ngày đã chọn
      games.value.sort("date", (a, b) => {
        return selectedDate - new Date(a.date) - (selectedDate - new Date(b.date));
      })
  }
  function renderScore(game, isHome) {
    if (game.period === 0) return null;
    else if (isHome) return game.home_team_score;
    else return game.visitor_team_score;
  }

  function renderPostSeason(game) {
    if (game.id === null || game.is === undefined) return null;
    if (game.postseason) return "Playoffs";
    return "Regular";
  }

  function renderTeamName(game, isHome) {
    if (isHome) {
      if (game.home_team === null || game.home_team === undefined) return null;
      return game.home_team.name;
    } else if (!isHome) {
      if (game.visitor_team === null || game.visitor_team === undefined)
        return null;
      return game.visitor_team.name;
    }
  }
  function formatDate(date) {
    return moment(date).format('DD/MM/YYYY')
  }
  function renderLogo(game, isHome) {
    let classes = "team-logo ";
    switch (renderTeamName(game, isHome)) {
      case "Hawks":
        return (classes += "hawks");
      case "Celtics":
        return (classes += "celtics");
      case "Nets":
        return (classes += "nets");
      case "Hornets":
        return (classes += "hornets");
      case "Bulls":
        return (classes += "bulls");
      case "Cavaliers":
        return (classes += "cavaliers");
      case "Mavericks":
        return (classes += "mavericks");
      case "Nuggets":
        return (classes += "nuggets");
      case "Pistons":
        return (classes += "pistons");
      case "Warriors":
        return (classes += "warriors");
      case "Rockets":
        return (classes += "rockets");
      case "Pacers":
        return (classes += "pacers");
      case "Clippers":
        return (classes += "clippers");
      case "Lakers":
        return (classes += "lakers");
      case "Grizzlies":
        return (classes += "grizzlies");
      case "Heat":
        return (classes += "heat");
      case "Bucks":
        return (classes += "bucks");
      case "Timberwolves":
        return (classes += "timberwolves");
      case "Pelicans":
        return (classes += "pelicans");
      case "Trail Blazers":
        return (classes += "blazers");
      case "Knicks":
        return (classes += "knicks");
      case "Thunder":
        return (classes += "thunder");
      case "Magic":
        return (classes += "magic");
      case "76ers":
        return (classes += "sixers");
      case "Suns":
        return (classes += "suns");
      case "Kings":
        return (classes += "kings");
      case "Spurs":
        return (classes += "spurs");
      case "Raptors":
        return (classes += "raptors");
      case "Jazz":
        return (classes += "jazz");
      case "Wizards":
        return (classes += "wizards");
      default:
        break;
    }
  }
  function toggleScoreClass(game, isHome) {
    let classes = "team-score ";
    if (game.status === "Final") {
      if (isHome && game.home_team_score > game.visitor_team_score) {
        return (classes += "green");
      } else if (isHome && game.home_team_score < game.visitor_team_score) {
        return (classes += "red");
      } else if (!isHome && game.home_team_score > game.visitor_team_score) {
        return (classes += "red");
      } else if (!isHome && game.home_team_score < game.visitor_team_score) {
        return (classes += "green");
      }
    }
    return classes;
  }
</script>
  
<style lang="css" scoped>
.games-today {
  gap: 20px;
}

.game-block {
  max-width: 450px;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--primaryColorNBA);
  box-shadow: inset 1px 1px 3px black, inset -1px -1px 3px black;
  padding: 20px;
  margin: 20px auto;
}

.team-score-block {
  width: 120px;
}

.game-information {
  width: 210px;
  padding: 0 10px;
}

.game-date {
  margin-top: 15px;
}

.game-status {
  margin-top: 10px;
  font-weight: bold;
}

.team-logo {
  width: 50px;
  height: 50px;
  margin: auto;
}

.team-name-text {
  font-weight: 600;
  font-size: 1.2rem;
}

.team-score {
  padding: 10px 0;
  font-size: 1.2rem;
  font-weight: 500;
}

.red {
  color: red;
}
.green {
  color: green;
}

/* Team Logo Classes */
/* ../assets/img/club-logo/hawks.png */
.hawks {
  background: url("../assets/img/club-logo/hawks.png") no-repeat;
  background-size: cover;
}
.celtics {
  background: url("../assets/img/club-logo/celtics.png") no-repeat;
  background-size: cover;
}
.nets {
  background: url("../assets/img/club-logo/nets.png") no-repeat;
  background-size: cover;
}
.hornets {
  background: url("../assets/img/club-logo/hornets.png") no-repeat;
  background-size: cover;
}
.bulls {
  background: url("../assets/img/club-logo/bulls.png") no-repeat;
  background-size: cover;
}
.cavaliers {
  background: url("../assets/img/club-logo/cavaliers.png") no-repeat;
  background-size: cover;
}
.mavericks {
  background: url("../assets/img/club-logo/mavericks.png") no-repeat;
  background-size: cover;
}
.nuggets {
  background: url("../assets/img/club-logo/nuggets.png") no-repeat;
  background-size: cover;
}
.pistons {
  background: url("../assets/img/club-logo/pistons.png") no-repeat;
  background-size: cover;
}
.warriors {
  background: url("../assets/img/club-logo/warriors.png") no-repeat;
  background-size: cover;
}
.rockets {
  background: url("../assets/img/club-logo/rockets.png") no-repeat;
  background-size: cover;
}
.pacers {
  background: url("../assets/img/club-logo/pacers.png") no-repeat;
  background-size: cover;
}
.clippers {
  background: url("../assets/img/club-logo/clippers.png") no-repeat;
  background-size: cover;
}
.lakers {
  background: url("../assets/img/club-logo/lakers.png") no-repeat;
  background-size: cover;
}
.grizzlies {
  background: url("../assets/img/club-logo/grizzlies.png") no-repeat;
  background-size: cover;
}
.heat {
  background: url("../assets/img/club-logo/heat.png") no-repeat;
  background-size: cover;
}
.bucks {
  background: url("../assets/img/club-logo/bucks.png") no-repeat;
  background-size: cover;
}
.timberwolves {
  background: url("../assets/img/club-logo/timberwolves.png") no-repeat;
  background-size: cover;
}
.pelicans {
  background: url("../assets/img/club-logo/pelicans.png") no-repeat;
  background-size: cover;
}
.knicks {
  background: url("../assets/img/club-logo/knicks.png") no-repeat;
  background-size: cover;
}
.thunder {
  background: url("../assets/img/club-logo/thunder.png") no-repeat;
  background-size: cover;
}
.magic {
  background: url("../assets/img/club-logo/magic.png") no-repeat;
  background-size: cover;
}
.sixers {
  background: url("../assets/img/club-logo/sixers.png") no-repeat;
  background-size: cover;
}
.suns {
  background: url("../assets/img/club-logo/suns.png") no-repeat;
  background-size: cover;
}
.blazers {
  background: url("../assets/img/club-logo/trailblazers.png") no-repeat;
  background-size: cover;
}
.kings {
  background: url("../assets/img/club-logo/kings.png") no-repeat;
  background-size: cover;
}
.spurs {
  background: url("../assets/img/club-logo/spurs.png") no-repeat;
  background-size: cover;
}
.raptors {
  background: url("../assets/img/club-logo/raptors.png") no-repeat;
  background-size: cover;
}
.jazz {
  background: url("../assets/img/club-logo/jazz.png") no-repeat;
  background-size: cover;
}
.wizards {
  background: url("../assets/img/club-logo/wizards.png") no-repeat;
  background-size: cover;
}
</style>