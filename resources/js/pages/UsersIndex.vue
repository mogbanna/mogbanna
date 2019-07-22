<template>
  <div class="users">
    <div class="loading" v-if="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}
        <p>{{ error }}</p>

        <p>
            <button @click.prevent="fetchData">
                Try Again
            </button>
        </p>
    </div>

<!-- Using object deconstruction to take only the props- much more concise and readable -->
    <ul v-if="users">
      <li v-for="{ name, email } in users" :key="name">
        <strong>Name:</strong>
        {{ name }},
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            loading: false,
            users: null,
            errors: null
        };
    },
    //fetch asynchronous data DURING the component created hook
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.error = this.users = null;
            this.loading = true;
            //using axios library to make http request to my laravel API
            //the request returns a collection of paginated user data in 
            //the form of response.data
            axios
                .get('/api/users')
                .then(response => {
                    //set user data
                    this.loading = false;
                    this.users = response.data.data;
                }).catch(error => {
                    this.loading = false;
                    this.error = error.response.data.message || error.message;
                });
        }
    }
}
</script>