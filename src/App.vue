<template>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <nav>
          <router-link to="/">Home</router-link>

        </nav>
      </div>
      <div class="col">
        <nav>

        </nav>
      </div>
      <div class="col">
        <nav>
          <router-link to="/login">
        <button type="button" class="btn btn-secondary btn-sm">Logi sisse / registreeri</button>
          </router-link>
        </nav>
      </div>
    </div>
  </div>

  <router-view/>
</template>
<script setup lang="ts">
</script>