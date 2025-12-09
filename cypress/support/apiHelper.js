const BASE_URL = 'https://petstore.swagger.io/v2';

export const apiHelper = {
  createPet: (pet) => cy.request('POST', `${BASE_URL}/pet`, pet),
  getPetById: (id) => cy.request('GET', `${BASE_URL}/pet/${id}`),
  updatePet: (pet) => cy.request('PUT', `${BASE_URL}/pet`, pet),
  deletePet: (id) => cy.request('DELETE', `${BASE_URL}/pet/${id}`),
  getPetFail: (id) => cy.request({ method: 'GET', url: `${BASE_URL}/pet/${id}`, failOnStatusCode: false })
};
