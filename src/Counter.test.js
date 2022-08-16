import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

test('render first time counter ', () => {
  render(<Counter />);
  const count = screen.getByText('0');
  expect(count).toBeInTheDocument();
});

// validar que el usuario ingreso el email.
// al poner un string que no es de tipo email en el input de email
// que el formulario muestre el texto: "email no valido"

// validar que el usuario ingrese todos los datos.
// al hacer submit que el formulario muestre el texto: "todos los datos son requeridos"

test('test first click on counter ', () => {
  const { container } = render(<Counter />);
  const button = screen.getByTestId("plus");
  // simula un click en el boton
  fireEvent.click(button);
  const count = screen.getByTestId('countId');
  expect(count).toBeInTheDocument();
});

test('test two clicks on counter ', () => {
  const { container } = render(<Counter />);
  const button = screen.getByTestId("plus");
  fireEvent.click(button);
  fireEvent.click(button);
  const count = screen.getByTestId('countId');
  expect(count).toBeInTheDocument();
});

test('test 100 clicks on counter ', () => {
  render(<Counter />);
  const button = screen.getByTestId("plus");
  for (let index = 0; index < 100; index++) {
    fireEvent.click(button);
  }
  const count = screen.getByTestId('countId');
  expect(count.textContent).toBe('100');
});

test('test first click on less button ', () => {
  render(<Counter />);
  const button = screen.getByTestId("less");
  fireEvent.click(button);
  const count = screen.getByTestId('countId');
  expect(count.textContent).toBe('0');
});

test('test 25 click on plus and 10 clicks in less button ', () => {
  render(<Counter />);
  const lessButton = screen.getByTestId("less");
  const plusButton = screen.getByTestId("plus");
  for (let index = 0; index < 25; index++) {
    fireEvent.click(plusButton);
  }
  for (let index = 0; index < 10; index++) {
    fireEvent.click(lessButton);
  }
  const count = screen.getByTestId('countId');
  expect(count.textContent).toBe('15');
});

// Extra test that passes after updating the counter
test('one click on counter increases counter by two', () => {
  render (<Counter />);
  const plusButton = screen.getByTestId('plus');
  const count = screen.getByTestId('countId');
  fireEvent.click(plusButton);
  expect(count.textContent).toBe('2');
});
