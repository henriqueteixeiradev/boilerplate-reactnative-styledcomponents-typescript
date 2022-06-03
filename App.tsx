import { ThemeProvider } from "styled-components";
import { Teste } from "components/Teste";
import theme from "styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Teste />
    </ThemeProvider>
  );
}
