import { apiHelper } from '../support/apiHelper';

describe('Petstore API Tests', () => {
  let petId;

  beforeEach(() => {
    cy.fixture('petData').as('petData');
  });

  it('Create a new pet', function () {
    apiHelper.createPet(this.petData.pet1).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(this.petData.pet1.id);
      expect(response.body.name).to.eq(this.petData.pet1.name);
      expect(response.body.status).to.eq(this.petData.pet1.status);
      petId = response.body.id;
    });
  });

  it('Get the pet by ID', function () {
    apiHelper.getPetById(petId).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(petId);
      expect(response.body.name).to.eq(this.petData.pet1.name);
      expect(response.body.status).to.eq(this.petData.pet1.status);
    });
  });

  it('Update the pet', function () {
    apiHelper.updatePet(this.petData.petUpdate).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(this.petData.petUpdate.name);
      expect(response.body.status).to.eq(this.petData.petUpdate.status);
    });
  });

  it('Delete the pet', () => {
    apiHelper.deletePet(petId).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('Get deleted pet should fail', () => {
    apiHelper.getPetFail(petId).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
