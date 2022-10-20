const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
  });

  it('Verifica se o retorno da função é um array', () => {
    expect(Array.isArray(productDetails())).toBe(true);
  });

  it('Verifica se o array retornado pela função contém dois itens dentro', () => {
    expect(Object.values(productDetails()).length).toBe(2);
  });

  it('Verifica os dois itens dentro do array retornado pela função são objetos', () => {
    expect(typeof productDetails()[0] && typeof productDetails()[1]).toBe('object');
  });
  
  it('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    expect(Object.keys(productDetails('Alcool gel', 'Máscara'))[0]).not.toEqual(Object.keys(productDetails('Alcool gel', 'Máscara'))[1]);
    expect(Object.values(productDetails('Alcool gel', 'Máscara'))[0]).not.toEqual(Object.values(productDetails('Alcool gel', 'Máscara'))[1]);
  });
  
  it('Verifica se os dois productIds terminam com 123', () => {
    expect(Object.values(productDetails('Alcool gel', 'Máscara'))[0].details.productId).toEqual('Alcool gel123')
    expect(Object.values(productDetails('Alcool gel', 'Máscara'))[1].details.productId).toEqual('Máscara123')
  });
});
