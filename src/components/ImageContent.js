import React from 'react';

class ImageContent extends React.Component{
    render(){
        return (
            <div className='container imagecontent'>
                <div className='row d-flext justify-content-around'>
                    <div className='col-md-6 order-lg-1 order-sm-2'>
                        <img className='img-fluid' src='/graphic1.svg'/>
                    </div>
                    <div className='col-md-6 order-lg-2 order-sm-1 float-right d-flex align-items-center'>
                        <div className='content_d text-left'>
                        <h2>Система <br />обработки жалоб</h2>
                        <p className='text-wrap text-left'>В течение 5-ти минут вы должны перезвонить клиенту и узнать причину проблемы. Клиент должен чувствовать что вам не безразлично его мнение.</p>
                        </div>
                    </div>
                </div>
                <div className='row d-flex justify-content-around imagecontent_r'>
                    <div className='col-md-6 order-lg-1 order-sm-1 float-right d-flex align-items-center'>
                        <div className='content_d text-left'>
                        <h2>Детальная <br />аналитика оценок</h2>
                        <p className='text-wrap text-left'>Менеджеры и руководители бизнеса получают детальную аналитику в режиме реального времени.</p>
                        <ul className='text-left'>
                            <li>Отработанные жалобы</li>
                            <li>Не отработанные жалобы</li>
                            <li>Данные ответственного лица</li>
                            <li>Рейтинг заведения / филиала</li>
                            <li>Детальную жалобу / оценку</li>
                        </ul>
                        </div>
                    </div>
                    <div className='col-md-6 order-lg-2 order-sm-2'>
                        <img className='img-fluid' src='/graphic2.svg'/>
                    </div>
                </div>
                <div className='row mt-6 d-flext justify-content-around imagecontent_r'>
                    <div className='col-md-6 order-lg-1 order-sm-2'>
                        <img className='img-fluid' src='/graphic3.svg'/>
                    </div>
                    <div className='col-md-6 order-lg-2 order-sm-1 float-right d-flex align-items-center'>
                        <div className='content_d text-left'>
                        <h2>Автоматизация <br />бизнес-процессов</h2>
                        <p className='text-wrap text-left'>Системный и прозрачный процесс взаимодействия между бизнесом и клиентом помогает улучшить бизнес процесс в  организации и мотивировать предоставлять качественные услуги.</p>
                        </div>
                    </div>
                </div>
                <div className='row d-flext justify-content-around imagecontent imagecontent_r'>
                    <div className='col-md-6 order-lg-1 order-sm-1 float-right d-flex align-items-center'>
                        <div className='content_d text-left'>
                        <h2>Контроль качества <br />работы сотрудников</h2>
                        <p className='text-wrap text-left'>Детальная аналитика сотрудника по качеству их предоставленных услуг и данные которые помогут принять множество бизнес решений.</p>
                        </div>
                    </div>
                    <div className='col-md-6 order-2 order-md-2'>
                        <img className='img-fluid' src='/graphic4.svg'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageContent;