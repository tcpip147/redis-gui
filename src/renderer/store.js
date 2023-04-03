import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        [counterSlice.name]: counterSlice.reducer,
        [themeSlice.name]: themeSlice.reducer,
    }
});
