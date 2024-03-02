import { Paper, Box, CssBaseline } from '@mui/material'
import theme from './theme'
import { ThemeProvider } from 'styled-components'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Paper>
          <Box>
            <h1>QTrition</h1>
          </Box>
        </Paper>
      </CssBaseline>
    </ThemeProvider>
  )
}
