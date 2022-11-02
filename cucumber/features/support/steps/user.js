const { Given } = require('@cucumber/cucumber')

Given('I am a guest user', function () {})

Given('I am a user', async function () {
  await this.page.evaluateOnNewDocument(() => {
    localStorage.setItem('auth.tokens', JSON.stringify({
      accessToken:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJmcm9udGVuZCIsImp0aSI6Ijg3MWMyYTc5Y2Q2YjJlY2ViNzVjNWY4N2U2ND' +
        'I4ZTFiMDJmNDJhNDI1YzBiMzU0YzZjMjhmNTI1ZmU2MmFhOGE2MjQ3ZTM1OWE3Y2RlZGMzIiwiaWF0IjoxNjY3Mzg4NzMzLjY0ODA5MSwib' +
        'mJmIjoxNjY3Mzg4NzMzLjY0ODA5NCwiZXhwIjozMzIyNDI5NzUzMy42Mzk4MTYsInN1YiI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAw' +
        'MDAwMDAwMDAwMSIsInNjb3BlcyI6WyJjb21tb24iXSwicm9sZSI6InVzZXIifQ.rcyAo3EhqHegiFoROApko3599Zhpue1vaZoXwItz6mNr' +
        'VQUpx9ntnlu-bonZsUvQnW70uH1I97zfGQ2qAbQ4Q9Nv3DpsRWpI-SfKZzCwnEqnLvxUs9USoz2Dgc7HsAnr8kiMjgtb8Rp0VuLXeLxKMyj' +
        'DQ72QY2GqSulkcHlE0gL77fdJ7FjHRHE8SXPuT4trJ7M-N-u3PX0R9ZHr1SS5zc-nQcC3mEoYNIy7U6sGyKKJaQQRUHI73dwAiHnUL9ozK_' +
        'vj0VHif2i0_IP21N1J3atCkrrhCpH4BBVqNOeZrXf2K9xFlcm-16j2-483TnhJJpDlGa38HnJGlStT-NadRw',
      expires: new Date().getTime() + 36000000,
      refreshToken: ''
    }))
  })
})
