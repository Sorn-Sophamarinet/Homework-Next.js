
'use client';

import { persistor, store } from "./stores"
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from 'react-redux';

export function Providers({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {children}
        </PersistGate>
    </Provider>
}

// HOW THIS WORKS:
// 1. We wrap our app with this Providers component
// 2. The Provider gives all child components access to the Redux store
// 3. Any component can now use useAppSelector to read data
// 4. Any component can now use useAppDispatch to send actions