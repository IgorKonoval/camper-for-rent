import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = state => state.campers.campers;
export const selectIsLoading = state => state.campers.isLoading;
export const selectError = state => state.campers.error;
export const selectFilters = state => state.campers.filters;
export const selectCampersFavorite = state => state.campers.favorite;

export const selectLocationFilter = createSelector(
  [selectFilters],
  filters => filters.equipment
);
