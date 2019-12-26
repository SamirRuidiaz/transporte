<template>
  <div class="login">
    <b-container class="bv-example-row bv-example-row-flex-cols">
      <b-row align-v="center" align-h="center">
          <b-col cols="4">
            <b-form @submit="onSubmit">
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1">

                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.name"
                  required
                  placeholder="Enter name"></b-form-input>
              </b-form-group>

              <b-button type="submit" variant="primary">Submit</b-button>

              <a>
                <router-link to="/platform/dashboard">Dasboard</router-link>
              </a>
            </b-form>
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      form: {
        email: '',
        name: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>

<style lang="scss">
  .bv-example-row-flex-cols .row {
    min-height: 35rem;
    background-color: rgba(255,0,0,.1);
  }
</style>
