import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

class App extends React.Component{
	state = {
		isLoading: true,
		movies: []
	};
	getMovies = async() => {
		/*
		const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
		console.log(movies.data.data.movies);
		*/
		const {data: {data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
		this.setState({movies:movies,isLoading:false});
	}
	componentDidMount(){
		this.getMovies();
	}

	render(){
		const {isLoading, movies} = this.state;
		return(
			<section className="container">
				{isLoading ? (
					<div className="loader">
						<div className="loader__text">Loading...</div>
					</div>
				) : (
					<div className="movies">
						{movies.map((movie,index) => {
							//console.log(movie);
							return <Movie key={index} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} />
						})}
					</div>
				)
				}
			</section>
		);
	}
}

export default App;
