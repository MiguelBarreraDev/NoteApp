import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { forwardRef } from 'react'

const Item = forwardRef((props, ref) => (
  <Paper
    ref={ref}
    sx={{
      borderRadius: 1,
      minHeight: 100
    }}
    elevation={2}
  >
    {props.children}
  </Paper>
))

const List = forwardRef((props, ref) => (
  <Stack
    ref={ref}
    spacing={1}
    sx={{
      borderRadius: 0,
      overflowY: 'auto',
      maxHeight: theme => `calc(100vh - ${theme.components.Header.height} - 113px)`,
      minWidth: 280,
      bgcolor: 'transparent',
      pb: 1
    }}
  >
    {props.children}
  </Stack>
))

Item.displayName = 'Item'
List.displayName = 'List'

export default function Dashboard () {
  return (
    <Box
      sx={{
        width: '100%',
        height: theme => `calc(100vh - ${theme.components.Header.height})`,
        display: 'flex',
        justifyContent: 'flex-start',
        gap: 2,
        pl: 2
      }}
    >
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
        <Box sx={{ py: 1 }}>
          <Typography>
            TODO
          </Typography>
        </Box>
        <List>
          <Item>1 Item</Item>
          <Item>2 Item</Item>
          <Item>3 Item</Item>
        </List>
        <Box
          display='flex'
          justifyContent='center'
          sx={{
            py: 1
          }}
        >
          <Typography variant='button'>
            + Add new note
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: '#B8C1EA',
          overflowY: 'hidden',
          maxHeight: theme => `calc(100vh - ${theme.components.Header.height} - 32px)`,
          height: 'fit-content',
          my: 2,
          px: 1,
          boxShadow: '0px 1px 4px #000a'
        }}
      >
        <Box sx={{ py: 1 }}>
          Hola
        </Box>
        <List>
          <Item>1 Item</Item>
          <Item>2 Item</Item>
          <Item>3 Item</Item>
          <Item>1 Item</Item>
          <Item>2 Item</Item>
          <Item>3 Item</Item>
          <Item>1 Item</Item>
          <Item>2 Item</Item>
          <Item>3 Item</Item>
          <Item>1 Item</Item>
          <Item>2 Item</Item>
          <Item>7 Item</Item>
        </List>
        <Box
          display='flex'
          justifyContent='center'
          sx={{
            py: 1
          }}
        >
          <Typography variant='button'>
            + Add new note
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: '#B8C1EA',
          overflowY: 'hidden',
          maxHeight: theme => `calc(100vh - ${theme.components.Header.height} - 16px)`,
          height: 'fit-content',
          my: 2,
          px: 1,
          boxShadow: '0px 1px 4px #000a'
        }}
      >
        <Box sx={{ py: 1 }}>
          Hola
        </Box>
        <List>
          <Item>1 Item</Item>
          <Item>1 Item</Item>
          <Item>1 Item</Item>
          <Item>1 Item</Item>
          <Item>2 Item</Item>
          <Item>3 Item</Item>
        </List>
        <Box
          display='flex'
          justifyContent='center'
          sx={{
            py: 1
          }}
        >
          <Typography variant='button'>
            + Add new note
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
