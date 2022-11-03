import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { getMovies } from '../../data/api/movieApi';


class Movies extends React.Component{

    state = {
        movies: []
    }

    componentDidMount(){
       
        getMovies().then((resp) => {
            this.setState({
                movies: resp
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    render(){
        return(
            <Box 
                className="movies-comp cust-box"
                component='div'>
                <Typography 
                    className="txt-center comp-title"
                    variant='h1' 
                    component='div'>
                        Movies
                </Typography>
                <Container>
                    <Row>
                        {
                            this.state.movies.map((movie) => {
                                return(
                                    <Col className='movie-col' key={movie.imdbID} lg={3} md={4} sm={6} xs={12} >
                                        <Card className="movie-card">
                                            <div className='card-content'>
                                                <CardMedia
                                                    className='img'
                                                    component='img'
                                                    height='140'
                                                    image={movie.Poster}
                                                    alt={movie.Title + ' Poster'}/>
                                                <CardContent>
                                                    <Typography 
                                                        className="movie-title"
                                                        gutterBottom 
                                                        variant='h5' 
                                                        component='div'>
                                                        {movie.Title}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel excepturi, 
                                                        enim modi dolore aliquam officiis rem quibusdam inventore accusantium consequuntur?
                                                    </Typography>
                                                </CardContent>
                                            </div>
                                            <div className='btm-overflow-cover'></div>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </Box>
        )
    }

}

export default Movies;