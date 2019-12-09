import React from 'react';

class Benefits extends React.Component{
    render(){
        return(
                <div className='container benefitscontent' id='benefits'>
                        <div className='row'>
                            <div className='col text-center'>
                                <p className='h4'>Преимущества</p>
                                <p className='mt-3 text-wrap content_p'>Каждый лояльный клиент приводит еще новых двух.<br />
Своевременное реагирование на проблемы, позволит решить их в<br /> зародыше. </p>
                            </div>
                        </div>
                </div>
        );
    }
}

export default Benefits;