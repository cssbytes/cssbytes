import { bytes, byte, createByte, updateByte, deleteByte } from './bytes'

describe('bytes', () => {
  scenario('returns all bytes', async (scenario) => {
    const result = await bytes()

    expect(result.length).toEqual(Object.keys(scenario.byte).length)
  })

  scenario('returns a single byte', async (scenario) => {
    const result = await byte({ id: scenario.byte.one.id })

    expect(result).toEqual(scenario.byte.one)
  })

  scenario('creates a byte', async (scenario) => {
    const result = await createByte({
      input: {
        userId: 'scenario.byte.two.userId',
        css: 'String',
        xml: 'String',
        js: 'String',
      },
    })

    expect(result.userId).toEqual('scenario.byte.two.userId')
    expect(result.css).toEqual('String')
    expect(result.xml).toEqual('String')
    expect(result.js).toEqual('String')
  })

  scenario('updates a byte', async (scenario) => {
    const original = await byte({ id: scenario.byte.one.id })
    const result = await updateByte({
      id: original.id,
      input: { userId: 'scenario.byte.two.userId' },
    })

    expect(result.userId).toEqual('scenario.byte.two.userId')
  })

  scenario('deletes a byte', async (scenario) => {
    const original = await deleteByte({ id: scenario.byte.one.id })
    const result = await byte({ id: original.id })

    expect(result).toEqual(null)
  })
})
