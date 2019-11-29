import React from 'react';

 class VideoContent extends React.Component{

    render(){
        return (
            
            <div className='container-fluid mx-0 px-0 videocontent'>
                <div className='row'>
                            <div className="col-md-6 col-lg-5">
                                <div className='content_d pl-7 text-left'>
                                    <p className='mb-3 title'>Digital Agent <span><b>PRO</b></span></p>
                                    <h1 className='text_h1'>Больше <br />лояльных <br />клиентов</h1>
                                    <p className='mb-4 videocontent_p'>Система контроля и улучшения
                                            <br />качества ваших услуг</p>
                                            <a className="btn my-2 px-3" href="#form">Получить PRO</a>                        
                                </div>
                                </div>
                             <div className="col-md-6 col-lg-7 pr-0 mr-0">
                                 {/*
                                <div className='wrapper'>
                                <div class="embed-responsive px-0 mx-0 embed-responsive-16by9">
                                    <iframe class="pl-7 embed-responsive-item" src="http://player.vimeo.com/video/7396421?autoplay=1&loop=1&autopause=0&muted=1" width="853" height="480" frameborder="0" allow="autoplay; fullscreen" allowfullscreen ></iframe>
                                </div>
                                 </div> */}
                            </div>
                    
                </div>
            </div>
        );
    }
 }

 export default VideoContent;