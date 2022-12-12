import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { MenuIcon } from '@/assets/images'
import ClearIcon from '@mui/icons-material/Clear'
import { useNotes } from '../../hooks'

export default function Header ({ categoryName }) {
  const { removeCategory } = useNotes()

  const handleRemoveCategory = async () => {
    await removeCategory({ name: categoryName })
  }

  return (
    <Box
      display='flex'
      alignItems='center'
      sx={{ py: 0.5, whiteSpace: 'no-wrap' }}
      justifyContent='space-between'
    >
      <Typography
        variant='h6'
        sx={{
          fontSize: '1.2em',
          fontWeight: 'bold',
          color: 'Text.light'
        }}
      >
        {categoryName}
      </Typography>
      <Box>
        <IconButton onClick={handleRemoveCategory}>
          <ClearIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
