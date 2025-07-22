import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux"
import type { RootState, AppDispatch } from "./stores"


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// WHY DO WE NEED THESE?
// - They give us autocomplete when coding
// - They prevent typing mistakes
// - They make our code safer and easier to write