import { filterData, orderData,orderDataDesc,scoreData } from '../src/data.js';

describe('filterData', () => {

  it('deberia filtrar por director', () => {
    // preparar el escenario
    const data = [
      {director:'Hayao Miyazaki'},
      {director:'Isao Takahata'},
      {director:'Akira Toriyama'},
      {director:'Hayao Miyazaki'},
      {director:'Isao Takahata'},
      {director:'Hayao Miyazaki'}
    ];

    const resultExpected = [
      {director:'Hayao Miyazaki'},
      {director:'Hayao Miyazaki'},
      {director:'Hayao Miyazaki'}
    ];

    const resultReal = filterData(data,'director','Hayao Miyazaki');

  
    expect(resultReal).toEqual(resultExpected);
  });

  it('deberia filtrar por pelicula', () => {
    
    const data = [
      {title:'Grave of the Fireflies'},
      {title:'Only Yesterday'},
      {title:'Akira Toriyama'},
      {title:'Grave of the Fireflies'},
      {title:'Spirited Away'},
      {title:'Grave of the Fireflies'}
    ];

    const resultExpected = [
      {title:'Grave of the Fireflies'},
      {title:'Grave of the Fireflies'},
      {title:'Grave of the Fireflies'}
    ];


    const resultReal = filterData(data,'title','Grave of the Fireflies');

    expect(resultReal).toEqual(resultExpected);
  });

});

describe('orderData ', () => {

  it('deberia ordenar por año ascendente', () => {
    
    const data = [
      {release_date:'1986'},
      {release_date:'1996'},
      {release_date:'2002'},
      {release_date:'1997'},
      {release_date:'1989'},
      {release_date:'1988'},
    ];
    const resultExpected = [
      {release_date:'1986'},
      {release_date:'1988'},
      {release_date:'1989'},
      {release_date:'1996'},
      {release_date:'1997'},
      {release_date:'2002'}
     

    ];

    
    const resultReal =orderData(data);

    expect(resultReal).toEqual(resultExpected);
  });

});

describe('orderDataDesc', () => {

  it('deberia ordenar por año descendente', () => {
    
    const data = [
      {release_date:'1986'},
      {release_date:'1996'},
      {release_date:'2002'},
      {release_date:'1997'},
      {release_date:'1989'},
      {release_date:'1988'},
    ];

    const resultExpected = [
      {release_date:'2002'},
      {release_date:'1997'},
      {release_date:'1996'},
      {release_date:'1989'},
      {release_date:'1988'},
      {release_date:'1986'}

    ];

    const resultReal =orderDataDesc(data);

    expect(resultReal).toEqual(resultExpected);
  });

});

describe('scoreData', () => {

  it('deberia ordenar por año decendente', () => {
    
    const data = [
      {rt_score:'97'},
      {rt_score:'96'},
      {rt_score:'94'},
      {rt_score:'100'},
      {rt_score:'75'}
    ];

    const resultExpected = [
      {rt_score:'100'},
      {rt_score:'97'},
      {rt_score:'96'},
      {rt_score:'94'}

    ];

    const resultReal =scoreData(data);

    expect(resultReal).toEqual(resultExpected);
  });

});


  
