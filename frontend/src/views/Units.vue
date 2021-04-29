<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Units",
  computed: {
    ...mapState([
      "units",
      "filterAge",
      "currentFilter",
      "wood",
      "food",
      "gold",
      "isWood",
      "isFood",
      "isGold",
    ]),
    isWoodCheckbox: {
      get() {
        return this.$store.state.isWood;
      },
      set(value) {
        this.$store.commit("SET_ISWOOD", value);
      },
    },
    isFoodCheckbox: {
      get() {
        return this.$store.state.isFood;
      },
      set(value) {
        this.$store.commit("SET_ISFOOD", value);
      },
    },
    isGoldCheckbox: {
      get() {
        return this.$store.state.isGold;
      },
      set(value) {
        this.$store.commit("SET_ISGOLD", value);
      },
    },
    updateWood: {
      get() {
        return this.$store.state.wood;
      },
      set(value) {
        this.$store.commit("SET_WOOD", value);
      },
    },
    updateFood: {
      get() {
        return this.$store.state.food;
      },
      set(value) {
        this.$store.commit("SET_FOOD", value);
      },
    },
    updateGold: {
      get() {
        return this.$store.state.gold;
      },
      set(value) {
        this.$store.commit("SET_GOLD", value);
      },
    },
  },
  methods: {
    ...mapActions(["fetchUnits"]),
    changeFilter(filter) {
      this.$store.state.currentFilter = filter;
    },
  },
  created() {
    this.fetchUnits();
  },
};
</script>

<template>
  <div class="units">
    <h2>Units Page</h2>
    <div class="filter">
      <div class="age">
        <button
          v-for="(entry, index) in filterAge"
          :item="entry"
          :key="index"
          @click="changeFilter(entry)"
          :class="{ active: entry == currentFilter }"
        >
          {{ entry }}
        </button>
      </div>
      <div class="costs">
        <span>Costs</span>
        <div>
          <input type="checkbox" id="wood" v-model="isWoodCheckbox" />
          <label for="wood">Wood</label>
          <input
            id="volume-control"
            type="range"
            min="0"
            max="200"
            value="0"
            :disabled="!isWoodCheckbox"
            v-model="updateWood"
          />
          <span>{{ wood }}</span>
        </div>
        <div>
          <input type="checkbox" id="food" v-model="isFoodCheckbox" />
          <label for="food">Food</label>
          <input
            id="volume-control"
            type="range"
            min="0"
            max="200"
            value="0"
            :disabled="!isFoodCheckbox"
            v-model="updateFood"
          />
          <span>{{ food }}</span>
        </div>
        <div>
          <input
            type="checkbox"
            id="gold"
            value="Gold"
            v-model="isGoldCheckbox"
          />
          <label for="wood">Gold</label>
          <input
            id="volume-control"
            type="range"
            min="0"
            max="200"
            value="0"
            :disabled="!isGoldCheckbox"
            v-model="updateGold"
          />
          <span>{{ gold }}</span>
        </div>
      </div>

      <div class="filter-button">
        <button @click="fetchUnits()" style="background-color:#242b3b">
          Filter
        </button>
      </div>
    </div>

    <table class="tableList" style="width:100%">
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Age</th>
        <th>Costs</th>
      </tr>
      <tr v-for="unit in units" :item="unit" :key="unit.id" class="unit">
        <td>{{ unit.id }}</td>
        <td>{{ unit.name }}</td>
        <td>{{ unit.age }}</td>
        <td>
          <span v-if="unit.cost && unit.cost.Wood"
            >Wood: {{ unit.cost.Wood }}</span
          >
          <span v-if="unit.cost && unit.cost.Food"
            >Food: {{ unit.cost.Food }}</span
          >
          <span v-if="unit.cost && unit.cost.Gold"
            >Gold: {{ unit.cost.Gold }}</span
          >
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.units {
  font-weight: bold;
}
h2 {
  color: #242b3b;
}
button {
  background: #74b6cc;
  border: none;
  color: #fff;
  padding: 10px;
  margin: 5px;
  width: 70px;
  height: 40px;
  border-radius: 14px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
button.active {
  background: #0089ba;
}
h2.title {
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0;
}
.filter {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.age,
.costs,
.filter-button {
  margin-bottom: 10px;
}
label {
  margin-right: 10px;
}
.tableList {
  border-collapse: collapse;
}
.tableList th,
.tableList td {
  border: 1px solid rgb(165, 162, 162);
}
th {
  font-size: 19px;
  color: black;
}
span {
  margin-right: 10px;
}
</style>
