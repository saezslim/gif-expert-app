import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('Testing <GifItem />', () => {
  const title = 'Hola prueba'
  const url = 'http://urldepruebas.cl/'
  test('Debe hacer match con el snapshot.', () => {
    const {container} = render( <GifItem title={title} url={url} /> )
    expect(container).toMatchSnapshot()
  })

  test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifItem title={title} url={url} />)
    const {src, alt} = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })
})