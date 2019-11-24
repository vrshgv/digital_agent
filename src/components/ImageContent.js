import React from 'react';

class ImageContent extends React.Component{
    render(){
        return (
            <div className='container imagecontent'>
                <div className='row d-flext justify-content-around'>
                    <div className='col-md-6'>
                        <img className='img-fluid' src='/example.png'/>
                    </div>
                    <div className='col-md-6 float-right d-flex align-items-center'>
                        <div className='content_d text-left'>
                        <h2>Система <br />обработки жалоб</h2>
                        <p className='text-wrap text-left'>оавопр олрваполрапол рвлопрваолпрвалоп равлопр апрвалоппрвал аваорполп олр орл ор олр лор о рлоро рлвлоал овлдо влоалво даовдоалдводао лао о д влдаолдлв авар о</p>
                        </div>
                    </div>
                </div>
                <div className='row d-flext justify-content-around imagecontent'>
                    <div className='col-md-6 float-right d-flex align-items-center'>
                        <div className='content_d text-left'>
                        <h2>Детальная <br />аналитика оценок</h2>
                        <p className='text-wrap text-left'>оавопр олрваполрапол рвлополр лор о рлоро рлвлоал овлдо влоалво даовдоалдводао лао о д влдаолдлв авар о</p>
                        <ul className='text-left'>
                            <li>Аоволаоав аолао влаолвоаволв</li>
                            <li>Осмааолвава влаовл ло</li>
                            <li>Аоволаоав аолао влаолвоаволв</li>
                            <li>Осмааолвава влаовл ло</li>
                            <li>Аоволаоав аолао влаолвоаволв</li>
                        </ul>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img className='img-fluid' src='/example.png'/>
                    </div>
                </div>
                <div className='row d-flext justify-content-around'>
                    <div className='col-md-6'>
                        <img className='img-fluid' src='/example.png'/>
                    </div>
                    <div className='col-md-6 float-right d-flex align-items-center'>
                        <div className='content_d text-left'>
                        <h2>Автоматизация <br />бизнес-процессов</h2>
                        <p className='text-wrap text-left'>оавопр олрваполрапол рвлопрваолпрвалоп равлопр апрвалоппрвал аваорполп олр орл ор олр лор о рлоро рлвлоал овлдо влоалво даовдоалдводао лао о д влдаолдлв авар о</p>
                        </div>
                    </div>
                </div>
                <div className='row d-flext justify-content-around imagecontent'>
                    <div className='col-md-6 float-right d-flex align-items-center'>
                        <div className='content_d text-left'>
                        <h2>Контроль качества <br />работы сотрудников</h2>
                        <p className='text-wrap text-left'>оавопр олрваполрапол рвлополр лор о рлоро рлвлоал овлдо влоалво даовдоалдводао лао о д влдаолдлв авар о</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img className='img-fluid' src='/example.png'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageContent;