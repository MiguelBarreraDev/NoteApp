import Box from '@mui/material/Box'
import { List } from '../List'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Note } from '../Note'

export default function Category ({ name, notes }) {
  return (
    <Box
      sx={CategoryStyles}
      display='flex'
      flexDirection='column'
    >
      <Header title={name}/>
      <List>
        {notes?.slice().reverse().map((note, index) => <Note
          key={index}
          note={note}
          categoryName={name}
        />)}
      </List>
      <Footer categoryName={name}/>
    </Box>
  )
}

const CategoryStyles = {
  bgcolor: 'primary.lightHard',
  maxHeight: theme => `calc(100vh - ${theme.components.Header.height} - 32px)`,
  overflowY: 'hidden',
  height: 'fit-content',
  my: 2,
  px: 1,
  boxShadow: '0px 2px 4px #0005',
  minWidth: 300,
  maxWidth: 300,
  overflowX: 'hidden'
}
