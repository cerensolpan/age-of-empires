import Vue from 'vue';
import Vuex from 'vuex'
import empires from "../json/empires.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filterAge: ["All", "Dark", "Feudal", "Castle", "Imperial"],
    currentFilter: "All",
    wood: 0,
    food: 0,
    gold: 0,
    isWood: false,
    isFood: false,
    isGold: false,
    units: [],
  },
  mutations: {
    SET_UNITS(state, data) {
      state.units = data;
    },
    SET_ISWOOD(state, data) {
      state.isWood = data;
    },
    SET_ISFOOD(state, data) {
      state.isFood = data;
    },
    SET_ISGOLD(state, data) {
      state.isGold = data;
    },
    SET_WOOD(state, data) {
      state.wood = data;
    },
    SET_FOOD(state, data) {
      state.food = data;
    },
    SET_GOLD(state, data) {
      state.gold = data;
    },


  },
  actions: {

    fetchUnits({
      commit
    }) {
      let empireUnits = [];
      if (this.state.currentFilter === 'All') {
        empireUnits = empires.units;
      } else {
        empireUnits = empires.units.filter(unit => unit.age === this.state.currentFilter)
      }

      if (this.state.isWood) empireUnits = empireUnits.filter(unit => {
        if (unit.cost && unit.cost.Wood) {
          return unit.cost.Wood.toString() <= this.state.wood
        }
      })
      if (this.state.isFood) empireUnits = empireUnits.filter(unit => {
        if (unit.cost && unit.cost.Food) {
          return unit.cost.Food.toString() <= this.state.food
        }
      })
      if (this.state.isGold) empireUnits = empireUnits.filter(unit => {
        if (unit.cost && unit.cost.Gold) {
          return unit.cost.Gold.toString() <= this.state.gold
        }
      })
      console.log(empireUnits)
      commit("SET_UNITS", empireUnits);
    },
  },
  modules: {},
})