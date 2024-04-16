import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Testing <AddCategory />', () => {
  test('Debe cambiar el valor de la caja de texto', () => {
    render(<AddCategory onNewCategory={() => {}}/>) // Debe recibir si o si una función, por el prop type
    const input = screen.getByRole('textbox') // Traemos el input que necesitamos testear
    fireEvent.input(input, {target: {value: 'Goku'}})// Disparamos el evento que controla la funcionalidad
    //screen.debug()
    expect(input.value).toBe('Goku')
  })

  test('Debe de llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Goku'
    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={onNewCategory} />)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form') // Para encontrarlo debemos asegurarnos de que el elemento tenga un aria-label = form
    fireEvent.input(input, {target: {value: inputValue}})
    fireEvent.submit(form)
    //screen.debug() /**Comprobamos la lógica del submit */
    expect(input.value).toBe('')

    expect(onNewCategory).toHaveBeenCalled()
    expect(onNewCategory).toHaveBeenCalledTimes(1)
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)
  })
  test('No debe llamar el onNewCategory si el input está vacio', () => {
    //const inputValue = '' /**No es necesario manipular el input, porque solo al hacer submit se envia un vacio. */
    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={onNewCategory} />)
   // const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

   // fireEvent.input(input,{target: {value: inputValue}})
    fireEvent.submit(form)

    expect(onNewCategory).toHaveBeenCalledTimes(0)
  })
})