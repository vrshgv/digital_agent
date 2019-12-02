import React from 'react';
import axios from 'axios';
class Form extends React.Component{
   // state={name:'', company:'', phoneOrEmail:''};

      // handleChange1 = event => {
      //   this.setState({ name: event.target.value });
      // }
      // handleChange2 = event => {
      //   this.setState({ company: event.target.value });
      // }
      // handleChange3 = event => {
      //   this.setState({ phoneOrEmail: event.target.value });
      // }
      // handleSubmit = event => {
      //   event.preventDefault();
    
      //   const user = {
      //     name: this.state.name,
      //     company:this.state.company,
      //     phoneOrEmail:this.state.phoneOrEmail
      //   };
    
      //   axios.post(`https://example.com`, { user })
      //     .then(res => {
      //       console.log(res);
      //       console.log(res.data);
      //     })
      // } 
    render(){
        return(
            <div className='container-fluid px-0 formcontent'>
                <div className='row'>
                    <div className='col-md-8 col-descr text-left'>
                        <div className='content mx-auto'>
                        <p className='ul_title'>Платформа для повышения лояльности клиентов через обратную связь</p>
                        <ul>
                            <li><h5 className='li_title'>Система обработки жалоб</h5><p className='li_content'>В течение 5-ти минут вы должны перезвонить клиенту и узнать причину проблемы. Клиент должен чувствовать что вам не безразлично его мнение.</p></li>
                            <li><h5 className='li_title'>Детальная аналитика оценок</h5><p className='li_content'>Менеджеры и руководители бизнеса получают детальную аналитику в режиме реального времени.</p></li>
                            <li><h5 className='li_title'>Автоматизация бизнес-процессов</h5><p className='li_content'>Системный и прозрачный процесс взаимодействия между бизнесом и клиентом помогает улучшить бизнес процесс в  организации и мотивировать предоставлять качественные услуги.</p></li>
                            <li><h5 className='li_title'>Контроль качества работы сотрудников</h5><p className='li_content'>Детальная аналитика сотрудника по качеству их предоставленных услуг и данные которые помогут принять множество бизнес решений.</p></li>
                        </ul>
                        </div>
                    </div>
                    <div className='col-md-4 col-form'  id='form'>
                      <div className='cover'></div>
                       {/*} 
                                               <p className='form_title'>Оставьте заявку<br />чтобы наш менеджер<br />связался с вами</p>
<form onSubmit={this.handleSubmit}>
                            <div class="form-group mt-4">
                                <label for="exampleInput">ВАШЕ ИМЯ</label>
                                <input type="text" onChange={this.handleChange1} class="form-control form-control-lg" id="exampleInput" name='name' required/>
                            </div>
                            <div class="form-group mt-4">
                                <label for="exampleInput2">ОРГАНИЗАЦИЯ</label>
                                <input type="text" onChange={this.handleChange2}class="form-control form-control-lg" id="exampleInput2" name='company' required/>
                            </div>
                            <div class="form-group mt-4">
                                <label for="exampleInput1">ЭЛЕКТРОННАЯ ПОЧТА ИЛИ ТЕЛЕФОН</label>
                                <input type="text" onChange={this.handleChange3} class="form-control form-control-lg" id="exampleInput1" name='phoneOrEmail'/>
                            </div>

                            <button type="submit" class="btn w-100 mt-4">Оставить заявку</button>
        </form> */}
<div class="powr-form-builder covered" id="0c1ea9c5_1575006467"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;