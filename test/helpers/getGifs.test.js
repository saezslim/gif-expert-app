import { getGifs } from "../../src/helpers/getGifs";
describe('Testing helper getGifs', () => {
  test('Debe devolver información de la API', async() => {
    const gifs = await getGifs()
    expect(gifs.length).toBeGreaterThan(0)
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
  })
})