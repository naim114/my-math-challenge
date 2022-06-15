import * as React from 'react';
import { ThemeProvider } from '@mui/system';
import theme from './theme';
import MathQuiz from './pages/MathQuiz';
import MyAppBar from './component/MyAppBar';
import { AppBar, Link } from '@mui/material';

function App() {
  // TODO add music
  const [page, setPage] = React.useState(<MathQuiz />);

  return (
    <ThemeProvider theme={theme}>
      <MyAppBar
        onChange={(value) => setPage(value)}
      />
      {page}
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, backgroundColor: '#f0f0f0', color: 'black' }}>
        <Link href="https://github.com/naim114" style={{ padding: 10, textAlign: 'right', textDecoration: 'none', color: 'black' }}>
          Created by naim114
        </Link>
      </AppBar>
    </ThemeProvider>
  );
}

export default App;
