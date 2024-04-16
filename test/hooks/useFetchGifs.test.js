import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Testing Hook useFetchGifs', () => {
  test('Debe regresar el estado inicial', () => {

    const { result } = renderHook( () => useFetchGifs('Goku'))
    const {images, isLoading} = result.current
    /**Esto solo evalúa el estado inicial del Hook */

    expect(isLoading).toBeTruthy()
    expect(images.length).toBe(0) /**Esperamos ninguna imagen */
  })

  test('Debe regresar un arreglo de imágenes y un false', async() => {

    const { result } = renderHook( () => useFetchGifs('Goku'))
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      {
        timeout: 3000
      }
    )
    /** Esperamos a que se cumpla la condición del expect
     * Le podemos asignar manualmente un intervalo de 3 segundos de espera
     */
    const {images, isLoading} = result.current

    expect(isLoading).toBeFalsy()
    expect(images.length).toBeGreaterThan(0) 
    /**Esperamos que al menos exista una imagen */
  })
})