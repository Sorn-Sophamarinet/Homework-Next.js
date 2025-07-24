'use client'

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { productsApi } from './api/productsApi'
import cartReducer from './features/cartSlice'


const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"], 
}

const rootReducer = combineReducers({
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer, // Handles product data from API
})

const persistedReducer = persistReducer(persistConfig, rootReducer) 
export const store = configureStore({
    reducer: persistedReducer,
    // Middleware helps our APIs work properly (like helpers)
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(
            productsApi.middleware, // Helper for product API
        ),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch 