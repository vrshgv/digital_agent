import React from 'react';

class Footer extends React.Component{
    render(){
        return(
<footer className="page-footer">
  <div classNameName="container text-center text-md-left footercontent">
    <div className="row mt-3">
      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        <img alt='Digital Agent' src='/logo2.png'/>
        <p className='footer_p mt-4'>Эффективный способ решения проблем клиентов с помощью обратной связи.</p>
        <div className='pt-6'><small>© 2019. Digital Agent. Все права защищены.</small></div>
      </div>

      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="text-uppercase">Разделы</h6>
        <p className='mt-4'><a href="#benefits">Преимущества</a></p>
        <p><a href="#tariffs">Цены</a></p>
      </div>

      <div className="col-md-3 no-h col-lg-3 col-xl-3 mx-auto mb-4">
        <p><a href="#">Правила использования</a></p>
        <p><a href="#">Политика конфиденциальности</a></p>
        <p><a href="#">Публичная оферта</a></p>
      </div>

      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase">Контакты</h6>
          <p className='mt-4'><a className='tel' href='tel:+77273152149'>+7 727 315 21 49</a></p>
          <p><a className='tel' href='tel:+77075166681'>+7 707 516 66 81</a></p>
          <p><a target='_blank' href='https://2gis.kz/almaty/search/%D0%BC%D0%BA%D1%80.%20%D0%A1%D0%B0%D0%BC%D0%B0%D0%BB-2%2C%20%D0%B4.%2058%20%20%20%D0%B1%D0%BB%D0%BE%D0%BA%20%D0%90/geo/9430047374993466/76.951204%2C43.229209?m=76.951383%2C43.22924%2F15.96'>г. Алматы, мкр. Самал-2, д. 58
              БЦ “Сәтті”, блок А, 13-этаж </a></p>
          <a className="fb-ic" href='#'><i className="fab fa-facebook-f mr-4"> </i></a>
          <a className="tw-ic" href='#'><i className="fab fa-twitter mr-4"> </i></a>
          <a className="ins-ic" href='#'> <i className="fab fa-instagram"> </i></a>
      </div>
      </div>
  </div>

</footer>
        );
    }
}

export default Footer;