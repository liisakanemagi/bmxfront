<template>
  <h1>Lisa sõidukoht</h1>
  <div class="row justify-content-center mt-4" >
    <div class="col col-3">
      <div class="form-floating mb-3">
        <input v-model="location.locationName" type="text" class="form-control" placeholder="Nimi">
        <label>Nimi</label>
      </div>
      <div class="form-floating mb-3">
        <input v-model="location.locationAddress" type="text" class="form-control" placeholder="Aadress">
        <label>Aadress</label>
      </div>
      <div class="form-floating mb-3">
        <textarea v-model="location.locationDescription" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
        <label for="floatingTextarea2">Kirjeldus</label>
      </div>
      <div class="dropdown mb-3">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Sõidukoha tüüp
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
      <div class="dropdown mb-3">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Maakond
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
      <div class="form-floating mb-3">
        <input v-model="location.locationAddress" type="text" class="form-control" placeholder="Aadress">
        <label>Pikkuskraad</label>
      </div>
      <div class="form-floating mb-3">
        <input v-model="location.locationAddress" type="text" class="form-control" placeholder="Aadress">
        <label>Laiuskraad</label>
      </div>
      <button
              class="btn btn-secondary btn-sm" :disabled="isPostingData">
        <span v-if="isPostingData" class="spinner-border spinner-border-sm btn-sm" aria-hidden="true"></span>
        <span class="btn btn-secondary btn-sm">Lisa</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewLocationView',
  data() {
    return {

      isPostingData:true,

      location: {
        locationTypeId: 0,
        countyId: 0,
        locationName: '',
        locationAddress: '',
        locationLng: 0,
        locationLat: 0,
        locationDescription: ''
      },

      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },
  methods: {



  },
  mounted() {
  }
}
</script>