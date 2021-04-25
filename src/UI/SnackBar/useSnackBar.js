import React from 'react'
import { useContext } from 'react'
import { SnackbarContext} from './SnackBar'

// Custom hook to trigger the snackbar on function components
export const useSnackBar = () => {
  const { openSnackbar, closeSnackbar } = useContext(SnackbarContext)


  function open(text = '') {
    openSnackbar(text)
    setTimeout(closeSnackbar, 1000)
  }

  // Returns methods in hooks array way
  return [open, closeSnackbar]
}