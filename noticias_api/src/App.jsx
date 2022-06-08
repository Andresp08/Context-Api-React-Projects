
import { Container, Grid, Typography } from '@mui/material';
import Formulario from './componets/Formulario';
import ListadoNoticias from './componets/ListadoNoticias';
import { NoticasProvider } from './context/NoticiasProvider';

function App() {

    return (
      <NoticasProvider>
        <Container>
          <header>
            <Typography 
              align = 'center'
              marginY={5}
              component='h1'
              variant='h4'
            >
              Buscador de Noticias
            </Typography>
          </header>

          <Grid 
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
          >
            <Grid item xs={12} md={6}>
              <Formulario/>
            </Grid>
          </Grid>


          <ListadoNoticias/>

        </Container>
      </NoticasProvider>
    )
}

export default App
