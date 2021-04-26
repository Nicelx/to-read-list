import { useContext } from 'react'
import { SnackbarContext} from './SnackBar'

export const useSnackBar = () => {
  const { openSnackbar, closeSnackbar } = useContext(SnackbarContext)


  function open(text = '') {
    openSnackbar(text)
    setTimeout(closeSnackbar, 1000)
  }

  return [open, closeSnackbar]
}