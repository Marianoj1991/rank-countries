import { useContext } from 'react'
import { FilterContext } from '../context/FilterContext'


export function useFilters() {
  const context = useContext(FilterContext)

  if(context === undefined) {
    throw new Error('Try to access to FilterContext outside of it')
  }
  return context
}
