import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Testing <GifExpertApp />', () => {
  test('Snapshot should be the same', () => {
    const {container} = render(<GifExpertApp />)
    screen.debug()
    expect(container).toMatchSnapshot()
  })
  test('Should have an initial value', () => {
    const inputVal = 'Goku'
    render(<GifExpertApp />)
  })
})