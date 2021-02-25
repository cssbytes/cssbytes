import { tags, tag, createTag, updateTag, deleteTag } from './tags'

describe('tags', () => {
  scenario('returns all tags', async (scenario) => {
    const result = await tags()

    expect(result.length).toEqual(Object.keys(scenario.tag).length)
  })

  scenario('returns a single tag', async (scenario) => {
    const result = await tag({ id: scenario.tag.one.id })

    expect(result).toEqual(scenario.tag.one)
  })

  scenario('creates a tag', async (scenario) => {
    const result = await createTag({
      input: { slug: 'String3738898' },
    })

    expect(result.slug).toEqual('String3738898')
  })

  scenario('updates a tag', async (scenario) => {
    const original = await tag({ id: scenario.tag.one.id })
    const result = await updateTag({
      id: original.id,
      input: { slug: 'String22745332' },
    })

    expect(result.slug).toEqual('String22745332')
  })

  scenario('deletes a tag', async (scenario) => {
    const original = await deleteTag({ id: scenario.tag.one.id })
    const result = await tag({ id: original.id })

    expect(result).toEqual(null)
  })
})
