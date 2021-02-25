import {
  stylesheets,
  stylesheet,
  createStylesheet,
  updateStylesheet,
  deleteStylesheet,
} from './stylesheets'

describe('stylesheets', () => {
  scenario('returns all stylesheets', async (scenario) => {
    const result = await stylesheets()

    expect(result.length).toEqual(Object.keys(scenario.stylesheet).length)
  })

  scenario('returns a single stylesheet', async (scenario) => {
    const result = await stylesheet({ id: scenario.stylesheet.one.id })

    expect(result).toEqual(scenario.stylesheet.one)
  })

  scenario('creates a stylesheet', async (scenario) => {
    const result = await createStylesheet({
      input: { userId: 'scenario.stylesheet.two.userId' },
    })

    expect(result.userId).toEqual('scenario.stylesheet.two.userId')
  })

  scenario('updates a stylesheet', async (scenario) => {
    const original = await stylesheet({ id: scenario.stylesheet.one.id })
    const result = await updateStylesheet({
      id: original.id,
      input: { userId: 'scenario.stylesheet.two.userId' },
    })

    expect(result.userId).toEqual('scenario.stylesheet.two.userId')
  })

  scenario('deletes a stylesheet', async (scenario) => {
    const original = await deleteStylesheet({ id: scenario.stylesheet.one.id })
    const result = await stylesheet({ id: original.id })

    expect(result).toEqual(null)
  })
})
