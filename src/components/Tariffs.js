import React from 'react';

class Tariffs extends React.Component{
    state={isToggleOn: true};

    handleClick=(event)=>{
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
          }));        
    }
    render(){
        return(
            <div className='container tariffscontent'>
                <div className='row' id='tariffs'>
                    <div className='col text-center'>
                        <h4>Выберите тариф</h4>
                        <p className='mt-2 text-wrap content_p w-100 mt-3'>Дайте своему бизнесу качественное развитие</p>
                        <div className='toggle-content'>
                            <label className='tog-l pr-4'>ЕЖЕМЕСЯЧНО</label>
                            <label className="switch" >
                            <input type="checkbox" onClick={this.handleClick} checked={this.state.isToggleOn} className="default"/>
                            <span className="slider round"></span>
                            </label>
                            <label className='tog-l pl-4 tog-l-2'>ЗА 6 МЕСЯЦЕВ</label>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card light">
                            <div className="card-body text-center">
                            <h5 className="card-title">Light</h5>
                            {this.state.isToggleOn ? <p className="card-text mt-4">5 250 <i className="fas fa-tenge"></i></p>:<p className="card-text mt-4">7 500 <i className="fas fa-tenge"></i></p>}
                            <small class="text-muted">в месяц за точку*</small>
                                {this.state.isToggleOn===true &&
                                <p className='economy_p mt-3'><b>Вы экономите 13 500 </b><i className="fas fa-tenge"></i></p> 
                                }
                            <ul className='text-left mt-4'>
                                <li>Приложение для пользователя</li>
                                <li>Приложение для администратора</li>
                                <li className='text-muted'>Аналитика в приложении</li>
                                <li className='text-muted'>Аналитика в десктопе</li>
                            </ul>
                            <a className="btn my-2 px-3 w-75" href="#form">Выбрать LIGHT</a> 
                            </div>
                            
                        </div>
                        <div className='text-muted footer my-3'>
                            * При подключении пакета LIGHT, в указанную стоимость
входит однаразовая  выгрузка аналитики, последующая
выгрузка – 2 000 a за точку.
                            </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card standart">
                            <div className="card-body text-center">
                            <h5 className="card-title">Standart</h5>
                            {this.state.isToggleOn ? <p className="card-text mt-4">8 750 <i className="fas fa-tenge"></i></p>:<p className="card-text mt-4">12 500 <i className="fas fa-tenge"></i></p>}
                            <small className="text-muted">в месяц за точку</small>
                                {this.state.isToggleOn===true &&
                                <p className='economy_p mt-3'><b>Вы экономите 26 500 </b><i className="fas fa-tenge"></i></p> 
                                }                            
                                <ul className='text-left mt-4'>
                                <li>Приложение для пользователя</li>
                                <li>Приложение для администратора</li>
                                <li>Аналитика в приложении</li>
                                <li className='text-muted'>Аналитика в десктопе</li>
                            </ul>
                            <a className="btn my-2 px-3 w-75" href="#form">Выбрать STANDART</a> 
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="card premium">
                            <div class="card-body text-center">
                            <h5 className="card-title">Premium</h5>
                            {this.state.isToggleOn ? <p className="card-text mt-4">14 350 <i className="fas fa-tenge"></i></p>:<p className="card-text mt-4">20 500 <i className="fas fa-tenge"></i></p>}
                            <small className="text-muted">в месяц за точку</small>
                                {this.state.isToggleOn===true &&
                                <p className='economy_p mt-3'><b>Вы экономите 36 900 </b><i className="fas fa-tenge"></i></p> 
                                }                            
                                <ul className='text-left mt-4'>
                                <li>Приложение для пользователя</li>
                                <li>Приложение для администратора</li>
                                <li>Аналитика в приложении</li>
                                <li>Аналитика в десктопе</li>
                            </ul>
                            <a className="btn my-2 px-3 w-75 text-wrap" href="#form">Выбрать PREMIUM</a> 
                            </div>
                        </div>
                    </div>
                    
                    </div> 
                </div>
        );
    }
}

export default Tariffs;