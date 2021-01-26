import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from '../redux-part/exports'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
