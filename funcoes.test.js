// unit tests das funçoes de funcoes.js

const { test } = require('@jest/globals')
const { solucaoPrimeiroGrau, solucaoSegundoGrau } = require('./funcoes')

// unit tests - solucaoPrimeiroGrau(a, b)

test('solucaoPrimeiroGrau tem a == 0', () => {
    expect(solucaoPrimeiroGrau(0, 2)).toBeNull();
})
test('solucaoPrimeiroGrau é -2.5', () => {
    expect(solucaoPrimeiroGrau(2, 5).x).toBe(-2.5);
})
test('solucaoPrimeiroGrau é -0.3', () => {
    expect(solucaoPrimeiroGrau(6, 2).x).toBe(-0.3333333333333333);
})
test('solucaoPrimeiroGrau é -4', () => {
    expect(solucaoPrimeiroGrau(2, 8).x).toBe(-4);
})
test('solucaoPrimeiroGrau é -0.8', () => {
    expect(solucaoPrimeiroGrau(5, 4).x).toBe(-0.8);
})

// unit tests - solucaoSegundoGrau(a, b, c)

test('solucaoSegundoGrau tem a == 0', () => {
    expect(solucaoSegundoGrau(0, 2, 3)).toBeNull;
})
test('solucaoSegundoGrau tem b == 0', () => {
    expect(solucaoSegundoGrau(2, 0, -3)).toMatchObject({x1: 1.224744871391589, x2: -1.224744871391589});
})
test('solucaoSegundoGrau tem c == 0', () => {
    expect(solucaoSegundoGrau(1, 2, 0)).toMatchObject({x1: 0, x2: -2});
})
test('solucaoSegundoGrau tem delta < 0', () => {
    expect(solucaoSegundoGrau(1, 2, 7)).toBeNull;
})
test('solucaoSegundoGrau tem delta == 0', () => {
    expect(solucaoSegundoGrau(1, 4, 4)).toMatchObject({x1: -2, x2: -2});
})
test('solucaoSegundoGrau tem delta > 0', () => {
    expect(solucaoSegundoGrau(1, 4, 3)).toMatchObject({x1: -1, x2: -3});
})