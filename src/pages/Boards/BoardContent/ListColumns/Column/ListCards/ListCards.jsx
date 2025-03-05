import Box from '@mui/material/Box'
import Card from './Card/Card'

function ListCards({ cards }) {
  return (
  /*list cards */
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      p: '0 5px',
      m: '0 5px',
      overflowX: 'hidden',
      overflowY: 'auto',
      maxHeight: (theme) => `calc(
            ${theme.trello.boardContentHeight} - 
            ${theme.spacing(5)} -
            ${theme.trello.columnHeader_height} -
            ${theme.trello.columnFooter_height}
          )`,
      '&::-webkit-scrollbar-thumb':{ backgroundColor: '#ced0da' },
      '&::-webkit-scrollbar-thumb:hover':{ backgroundColor: '#bfc2cf' }
    }}>

      {cards?.map(card => <Card key={card._id} card={card}/>)}

    </Box>
  /* end list cards */
  )
}

export default ListCards