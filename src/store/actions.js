export default {
  setSearchFilters({ commit, state }, filters) {
    if (filters.searchText != state.searchText) {
      commit('setSearchText', filters.searchText)
    }
    if (filters.amountRangeMin !== state.amountRangeMin) {
      commit('setAmountRangeMin', filters.amountRangeMin)
    }
    if (filters.amountRangeMax !== state.amountRangeMax) {
      commit('setAmountRangeMax', filters.amountRangeMax)
    }
    if (filters.dateRangeMin != state.dateRangeMin) {
      commit('setDateRangeMin', filters.dateRangeMin)
    }
    if (filters.dateRangeMax != state.dateRangeMax) {
      commit('setDateRangeMax', filters.dateRangeMax)
    }
  }
}
