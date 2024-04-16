import { render, screen } from "@testing-library/react"
import { LoadingScreen } from "../../src/components"

describe('Testing <LoadingScreen />', () => {
  test('Debe mostrar el estado inicial "Cargando..."', () => {
    render(<LoadingScreen />)
    const loading = screen.getByText('Cargando...')
    expect(loading.innerHTML).toBe('Cargando...')
  })
})