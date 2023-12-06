import React from 'react'
import './HomeScreen.css';
import Nav from '../Nav';
import Banner from '../Banner';
import Row from '../Row';
import requests from '../Requests';

function HomeScreen() {
    return (
        <div className="HomeScreen">
            <Nav />

            <Banner />

            <Row
                title='넷플릭스 오리지널'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row
                title='한국 드라마'
                fetchUrl={requests.fetchKoreanDramas}
                isLargeRow
            />
            <Row
                title='인기'
                fetchUrl={requests.fetchTopRated}
            />
            <Row
                title='액션 영화'
                fetchUrl={requests.fetchActionMovies}
            />
            <Row
                title='코미디 영화'
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row
                title='공포 영화'
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row
                title='다큐맨터리'
                fetchUrl={requests.fetchDocumentaries}
            />
        </div>
    )
}

export default HomeScreen;