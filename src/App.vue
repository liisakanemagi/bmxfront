<template>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <nav>
          <nav>
            <router-link to="/">Home</router-link> 
          </nav>
        </nav>
      </div>
      <div class="col">
      </div>
      <div class="col">
        <router-link to="/login">
        <nav>
          <button type="button" class="btn btn-secondary btn-sm">Logi sisse / registreeri</button>
        </nav>
        </router-link>
      </div>
    </div>
  </div>

  <router-view/>
</template>
<script setup lang="ts">
</script>