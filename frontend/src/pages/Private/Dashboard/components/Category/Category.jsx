import Box from '@mui/material/Box'
import { List } from '../List'
import { Item } from '../Item'
import { Header } from '../Header'
import { Footer } from '../Footer'

export default function Category () {
  return (
    <Box
      sx={{
        bgcolor: '#B8C1EA',
        maxHeight: theme => `calc(100vh - ${theme.components.Header.height} - 32px)`,
        overflowY: 'hidden',
        height: 'fit-content',
        my: 2,
        px: 1,
        boxShadow: '0px 1px 4px #000a'
      }}
    >
      <Header />
      <List>
        <Item>1 Item</Item>
        <Item>2 Item</Item>
        <Item>3 Item</Item>
      </List>
      <Footer/>
    </Box>
  )
}
