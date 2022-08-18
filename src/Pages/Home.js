import React from 'react'
import Header from '../Components/Header';
import Banner from '../Components/Banner'
import Rows from '../Components/Rows';
import requests from '../Request';

const Home = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Rows title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
        <Rows title='Top Rated' fetchUrl={requests.fetchTopRated}/>
        <Rows title='Trending' fetchUrl={requests.fetchTrending}/>
        <Rows title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
        <Rows title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
        <Rows title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
        <Rows title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
        <Rows title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default Home;