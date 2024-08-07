/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

//  TYPES
import { TArtist, TCategory, TEvent } from "../types/Slices";

export const EventSlice = createSlice({
  name: "EventSlice",
  initialState: {
    value: {
      trendingEvents: [] as Array<TEvent>,
      latestEvents: [] as Array<TEvent>,
      categories: [] as Array<TCategory>,
      artists: [] as Array<TArtist>,
    },
  },
  reducers: {
    setTrendingEvents: (state, action) => {
      state.value.trendingEvents = action.payload;
    },
    setLatestEvents: (state, action) => {
      state.value.latestEvents = action.payload;
    },
    setCategories: (state, action) => {
      state.value.categories = action.payload;
    },
    setArtists: (state, action) => {
      state.value.artists = action.payload;
    },
  },
});

export const { setTrendingEvents, setLatestEvents, setCategories, setArtists } =
  EventSlice.actions;
