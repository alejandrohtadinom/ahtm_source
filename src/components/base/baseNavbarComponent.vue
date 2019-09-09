<template>
  <div class="navbar-container">
    <nav class=navbar>
      <ul class="nav-content">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="service">Servicios</router-link>
        </li>
        <li class="nav-item">
          <router-link to="about">Sobre mi</router-link>
        </li>
        <li class="nav-item">
          <router-link to="contact">Contacto</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
	export default {
		name: 'navbar'
	}
</script>
