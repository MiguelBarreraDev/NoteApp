import Box from '@mui/material/Box'
import EditIcon from '@mui/icons-material/DriveFileRenameOutline'

export default function Opendialog ({ handleClick }) {
  return (
    <Box
      sx={{
        height: '24px',
        color: '#777',
        ':hover': {
          color: '#555'
        },
        cursor: 'pointer'
      }}
      onClick={handleClick}
    >
      <EditIcon />
    </Box>
  )
}
