import React from 'react';

 class VideoContent extends React.Component{

    render(){
        return (
            <div className='container videocontent'>
                <div className='row'>
                            <div className="col-md-5">
                                <div className='content_d text-left'>
                                    <p className='mb-3 title'>Lorem ipsum podpsodspod</p>
                                    <h1 className='text_h1'>Больше <br />лояльных <br />клиентов</h1>
                                    <p className='mb-4 videocontent_p'>Fkfklfk fjdjfld fdldkld <br />djfkdjf dkjfkdjfkd jk</p>
                                </div>
                                <a className="btn my-2 px-3" href="#">Получить PRO</a>                        </div>
                            <div className="col-md-7 pr-0 mr-0">
                                <div class="embed-responsive px-0 mx-0 embed-responsive-16by9">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" ></iframe>
                                </div>
                            </div>
                    
                </div>
            </div>
        );
    }
 }

 export default VideoContent;