import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filterProducts: [],
  filters: {
    category: "all",
    sort: "name",
    searchTerm: "",
  },
  loading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filterProducts = action.payload;
    },

    setFilters: (state, action) => {
      state.filters = {
        category: action.payload.category || state.filters.category,
        sort: action.payload.sort || state.filters.sort,
        searchTerm: action.payload.searchTerm || state.filters.searchTerm,
      };

      const filter = state.products
        .filter((product) => {
          const matchesSearch = product.name
            .toLowerCase()
            .includes(state.filters.searchTerm.toLowerCase());
          const matchesCategory =
            state.filters.category === "all" ||
            product.category === state.filters.category;
          return matchesSearch && matchesCategory;
        })
        .sort((a, b) => {
          if (state.filters.sort === "name")
            return a.name.localeCompare(b.name);
          if (state.filters.sort === "price") return a.price - b.price;
          return 0;
        });

      state.filterProducts = filter;
    },

    resetFilters: (state) => {
      state.filters = {
        category: "all",
        sort: "name",
        searchTerm: "",
      };
      state.filterProducts = state.products;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setProducts, setLoading } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
