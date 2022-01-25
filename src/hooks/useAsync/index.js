import { useReducer, useEffect, useCallback } from 'react'
import { LOADING, SUCCESS, ERROR, CLEAR } from '@utils/constants/reducerKey'

const initialState = {
  loading: false,
  data: null,
  error: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        loading: true,
        data: null,
        error: null,
      }
    case SUCCESS:
      return {
        loading: false,
        data: action.data,
        error: null,
      }
    case ERROR:
      return {
        loading: false,
        data: null,
        error: action.error,
      }

    case CLEAR:
      return initialState
    default:
      return state
  }
}

const useAsync = (callback, immediate = false) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const execute = useCallback(async () => {
    dispatch({ type: LOADING })

    try {
      const data = await callback()
      dispatch({ type: SUCCESS, data })
      return true
    } catch (error) {
      dispatch({ type: ERROR, error })
    }
  }, [callback])

  useEffect(() => {
    immediate && execute()
    return () => dispatch({ type: CLEAR })
  }, [immediate, execute])

  return { ...state, execute }
}

export default useAsync
