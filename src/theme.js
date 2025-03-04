import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { cyan, deepOrange, orange, teal } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  trello:{
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },

  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#88a2ff' },
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        primary: { main: '#707c72' },
        secondary: orange
      }
    }
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        // Name of the slot
        root: ({theme}) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem'
        })
      }
    },
    MuiOutlinedInput:{
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontsize: '0.875rem',
            '.MuiOutlinedInput-notchedOutline': {
              bordercolor: theme.palette.primary.light
            },
            '&:hover':{
              borderColor: theme.palette.primary.main
            },
            '& fieldset':{
              borderWidth: '1px !important'
            }
          }
        }
      }
    }
  }
})

export default theme