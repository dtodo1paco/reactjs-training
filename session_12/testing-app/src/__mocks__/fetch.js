export default function() {
  return Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 1,
          name: 'dtodo1paco'
        },
        {
          id: 2,
          name: 'ocap1odotd'
        }
      ])

  })
}
