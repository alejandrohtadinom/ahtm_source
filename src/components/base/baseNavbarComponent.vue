<template>
  <div class="navbar">
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="service">Servicios</router-link>
        </li>
        <li>
          <router-link to="about">Sobre mi</router-link>
        </li>
        <li>
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
