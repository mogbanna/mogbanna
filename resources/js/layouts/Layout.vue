<template>
    <div>
        <h1>Welcome to my page</h1>
        <p>
            <router-link :to="{ name: 'about' }">About</router-link>
            <router-link :to="{ name: 'projects' }">Projects</router-link>
            <router-link :to="{ name:'users.index' }">Users</router-link>
        </p>
        

<div class="container">
            <router-view></router-view>
        </div>

    </div>
</template>
<script>
export default {
    
}
</script>


