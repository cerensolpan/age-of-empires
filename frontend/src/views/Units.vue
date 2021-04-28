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
      console.log(this.currentFilter);
    },
  },
  created() {
    this.fetchUnits();
  },
};
</script>

<template>
  <div class="units">
    <h1>Units Page</h1>
    <div class="age">
      <div>
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
      <button @click="fetchUnits()">bas</button>
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
          v-model="updateGold"
        />
        <span>{{ gold }}</span>
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
          <td>{{ unit.cost }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 50%;
}
button {
  background: #74b6cc;
  border: none;
  color: #fff;
  padding: 10px;
  margin: 5px;
}
button.active {
  background: #0089ba;
}
.unitWrap {
  list-style-type: none;
  padding: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
}
.unit {
  padding: 10px;
  margin: 1% 0;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 45%;
  text-align: left;
}
h2.title {
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0;
}
.language {
  display: block;
  font-size: 0.9rem;
}
.tableList {
  border-collapse: collapse;
}
.tableList th,
.tableList td {
  border: 1px solid rgb(165, 162, 162);
}
</style>
