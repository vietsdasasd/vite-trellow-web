import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
import { Height } from '@mui/icons-material'

// Create a theme instance.
const theme = extendTheme({
  trello:{
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },

  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#3598db' },
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
    MuiCssBaseline:{
      styleOverrides:{
        body:{
          '*::-webkit-scrollbar':{
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb':{
            backgroundColor: '#95afc0',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover':{
            backgroundColor: '#4834d4',
            borderRadius: '8px'
          }
        }
      }
    },
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
        root: ({ theme }) => ({
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