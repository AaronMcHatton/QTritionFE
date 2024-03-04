import { Paper, Box, CssBaseline } from '@mui/material'
import theme from './theme'
import { ThemeProvider } from 'styled-components'
import { PrimarySearchAppBar } from './components/Global'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Paper>
          <PrimarySearchAppBar />
          <Box></Box>
        </Paper>
      </CssBaseline>
    </ThemeProvider>
  )
}
