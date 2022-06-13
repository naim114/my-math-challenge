import * as React from 'react';
import { ThemeProvider } from '@mui/system';
import theme from './theme';
import MathQuiz from './pages/MathQuiz';
import MyAppBar from './component/MyAppBar';

function App() {
  const [page, setPage] = React.useState(<MathQuiz />);

  return (
    <ThemeProvider theme={theme}>
      <MyAppBar
        onChange={(value) => setPage(value)}
      />
      {page}
    </ThemeProvider>
  );
}

export default App;
