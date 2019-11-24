import React from 'react';

class Bonuses extends React.Component{
    render(){
        return(
            <div className='container bonuses benefitscontent'>
                        <div className='row'>
                            <div className='col text-center'>
                                <h4>Бонусы и дополнительные услуги</h4>
                                <p className='mt-4 text-wrap content_p'>Помимо основных функций в сервисе, ко всем тарифам мы бесплатно предоставляем бонусные услуги</p>
                            </div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-md-4'>
                            <img src='/bonus-1.svg' className='mx-auto d-block'></img>
                            <p className='bonus_h text-center mt-4'>Аналитика на ТВ-экране</p>
                            <p className='bonus_p text-wrap'>Real-time аналитика в широком в специальном формате для просмотра на Smart TV.</p>
                            </div>
                            <div className='col-md-4'>
                            <img src='/bonus-1.svg' className='mx-auto d-block'></img>
                            <p className='bonus_h text-center mt-4'>Аналитика non-clients организаций</p>
                            <p className='bonus_p text-wrap'>Возможность выгрузки аналитики других организаций из приложения. При условии, что организация не является корпоративными клиентами Digital Agent.</p>
                            </div>
                            <div className='col-md-4'>
                            <img src='/bonus-1.svg' className='mx-auto d-block'></img>
                            <p className='bonus_h text-center mt-4'>Рекламная продукция</p>
                            <p className='bonus_p text-wrap'>Разработка дизайна нашими специалистами и распечатка ролл апов, стендов и иной рекламной продукции Digital Agent.</p>
                            </div>
                        </div>
            </div>
        );
    }
}

export default Bonuses;