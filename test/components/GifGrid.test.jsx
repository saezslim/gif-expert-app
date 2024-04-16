import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components"
import { useFetchGifs } from "../../src/hooks"

jest.mock('../../src/hooks/useFetchGifs')

describe('Testing <GifGrid />', () => {
  const category = 'Goku'

  test('Debe mostrar su estado inicial.', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    }) /**Esto emula lo que traería el customHook useFetchGifs */
    render( <GifGrid category={category} />)
    expect(screen.getByText(category)) /**Busca el texto. */
  })

  test('Debe mostrar imágenes cuando se cargue el useFetchGifs', () => {

    const gifs = [
      {
        id: 'ABC',
        title: 'Goku',
        url: 'https://localhost/goku.jpg'
      },
      {
        id: 'ABCD',
        title: 'Gohan',
        url: 'https://localhost/gohan.jpg'
      }
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    }) /**Esto emula lo que traería el customHook useFetchGifs */

    render(<GifGrid category={category} />)
    expect(screen.getAllByRole('img').length).toBe(2) /**Evaluamos si efectivamente trae ambas imágenes */
  })
})