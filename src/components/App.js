import React from 'react';
import NavBar from './NavBar';
import VideoContent from './VideoContent';
import Benefits from './Benefits';
import ImageContent from './ImageContent';
import Tariffs from './Tariffs';
import Bonuses from './Bonuses';

class App extends React.Component{

    render(){
        return(
        <div className='container-fluid'>
            <NavBar />
            <VideoContent />
            <Benefits />
            <ImageContent />
            <Tariffs />
            <Bonuses />
        </div>
        );
    }
}

export default App;