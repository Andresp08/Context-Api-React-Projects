
import Card from '@mui/material/card'
import CardActions from '@mui/material/cardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { borderBottom } from '@mui/system'

const Noticia = ({noticia}) => {

    const { urlToImage, url, title, description, source } = noticia;

    return (
        <Grid item md={6} lg={4}>
            <Card>
                {urlToImage && (
                    <CardMedia
                        component='img'
                        alt={`Imagen de la noticia ${title}`}
                        image={urlToImage}
                        height={'250'}
                    />
                )}
                <CardContent>
                    <Typography variant='body1' color='error'>
                        {source.name}
                    </Typography>
                    <Typography variant='h6' component='div'>
                        {title}
                    </Typography>
                    <Typography variant='body2'>
                        {description}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Link
                        href={url}
                        target='_blank'
                        variant='button'
                        width={'60%'}
                        margin= {'0 auto'}
                        textAlign='center'
                        padding={'1px 3px'}
                        color='#0E185F'
                        boxShadow= {'0px 10px 40px rgba(3,19,23, 0.35)'}
                        sx={{
                            textDecoration:'none',
                        }}
                    >
                        Leer Noticia
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Noticia