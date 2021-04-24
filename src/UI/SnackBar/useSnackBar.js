  
import { useContext } from 'react'
import { SnackbarContext, defaultDuration} from './Snackbar'

// Custom hook to trigger the snackbar on function components
export const useSnackbar = () => {
  const { openSnackbar, closeSnackbar } = useContext(SnackbarContext)


  function open(text = '', duration = defaultDuration) {
    openSnackbar(text, duration, position, style, closeStyle)
  }

  // Returns methods in hooks array way
  return [open, closeSnackbar]
}