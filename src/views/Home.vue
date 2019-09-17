<template>
	<div class="home">
		<header class="header-container">
			<div class="header-rect"></div>
			<div class="header-rect-small header-rect-small-1"></div>
			<div class="header-rect-small header-rect-small-2"></div>
			<div class="header-rect-small header-rect-small-3"></div>
			<div class="header-rect-small header-rect-small-4"></div>
			<div class="header-sub">
				<h3 class="tag-line">Programmer // Developer // Thinker</h3>
				<div class="cta-container">
					<a class="cta" href="/about">Sobre mi</a>
					<a class="cta" href="/contact">Contacto</a>
				</div>
			</div>
			<div class="header-title">
				<h1 class="page-title">Alejandro H Tadino M</h1>
			</div>
		</header>
		<main>
			<section id="products">
				<div class="product">
					<img src="@/assets/img/svg/004-startup.svg" alt="">
					<h2>Posicionamiento web</h2>
				</div>
				<div class="product">
					<img src="@/assets/img/svg/012-laptop-1.svg" alt="">
					<h2>Aplicacioens en linea</h2>
				</div>
				<div class="product">
					<img src="@/assets/img/svg/006-user.svg" alt="">
					<h2>Asesorameinto tecnologico</h2>
				</div>
			</section>
			<section id="services">
				<div class="service">
					<figure>
						<img src="@/assets/img/card-1.jpg" alt="Photo by Carlos Muza on Unsplash">
						<figcaption>
							<h3 class="service-tag">Poscionamiento en la Web</h3>
							<p>
                  Posicione su negocio, producto o servicio en las primeras paginas de los buscadores y destaque entre su competencia.
              </p>
						</figcaption>
					</figure>
				</div>
				<div class="service">
					<figure>
						<img src="@/assets/img/card-2.jpg" alt="">
						<figcaption>
							<h3 class="service-tag">Diseño de aplicaciones</h3>
							<p>
                  Diseña tu pagina web a tu manera.
              </p>
						</figcaption>
					</figure>
				</div>
				<div class="service">
					<figure>
						<img src="@/assets/img/card-3.jpg" alt="">
						<figcaption>
							<h3 class="service-tag">Tu blog a tu manera</h3>
							<p>
                  Inicia tu carrera Blogger con el pie derecho, diseño, asesoramiento e instalacion de Wordpress, Joomla, Drupal, Blogger...
              </p>
						</figcaption>
					</figure>
				</div>
				<div class="service">
					<figure>
						<img src="@/assets/img/card-4.jpg" alt="">
						<figcaption>
							<h3 class="service-tag">Tu propia tienda en linea</h3>
							<p>
                  Tener tu propio negocio en linea nunca fue tan facil.
              </p>
						</figcaption>
					</figure>
				</div>
			</section>
			<section id="about">
          <div class="bio-img">
              <div class="about-img about-img about-img-1">
                  <img alt="" src="@/assets/img/bio-1.jpg"/>
              </div>
              <div class="about-img about-img-2">
                  <img alt="" src="@/assets/img/bio-2.jpg"/>
              </div>
              <div class="about-img about-img-3">
                  <img alt="" src="@/assets/img/bio-3.jpg"/>
              </div>
              <div class="about-img about-img-4">
                  <img alt="" src="@/assets/img/bio-4.jpg"/>
              </div>
              <div class="about-img about-img-5">
                  <img alt="" src="@/assets/img/bio-5.jpg"/>
              </div>
              <div class="about-img about-img-6">
                  <img alt="" src="@/assets/img/bio-6.jpg"/>
              </div>
              <div class="about-img about-img-7">
                  <img alt="" src="@/assets/img/bio-7.jpg"/>
              </div>
              <div class="about-img about-img-8">
                  <img alt="" src="@/assets/img/bio-8.jpg"/>
              </div>
              <div class="about-img about-img-9">
                  <img alt="" src="@/assets/img/bio-9.jpg"/>
              </div>
              <div class="about-img about-img-10">
                  <img alt="" src="@/assets/img/bio-10.jpg"/>
              </div>
              <div class="about-img about-img-11">
                  <img alt="" src="@/assets/img/bio-11.jpg"/>
              </div>
          </div>
          <div class="bio-main">
              <img alt="" src="@/assets/img/bio-main.jpg"/>
              <div class="about-text">
				          <h2>Alejandro H Tadino M</h2>
				          <p>
                    Hola, mi nombre es alejandro, soy un desarrollador y diseñador de aplicaciones web con mas de 10 años de experiencia en el campo de IT.
                    <br />
                    <br />
                    Me gusta desarrollar ideas y llevar a cabo proyectos para mis clientes que realmente ofrezcan una ventaja para su negocio o empresa en el mundo digital.
                    <br />
                    <br />
                    Para mi, cada proyecto es una alianza de la que podemos aprender nuevas estrategias para alcanzar las metas trazadas.
                  </p>
              </div>
          </div>
			</section>
			<section id="contact">
				<h2>contactos</h2>
        <div class="contact-sns">
            <h3>Redes</h3>
            twitter
            github
            gitlab
            linkedin
            facebook
            instagram
        </div>
        <div class="contact-form">
            <label for="full-name">Full Name</label>
            <input type="text" name="name" id="full-name" placeholder="Nombre" required="true">
            <label for="email-address">Correo</label>
            <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="true">
            <label for="message">Mensaje</label>
            <textarea rows="5" name="message" id="message" placeholder="" required=""></textarea>
            <input type="hidden" name="_subject" id="email-subject" value="Contacto desde alejandrohtadinom.com">
            <input type="button" value="Submit">
            </div>
			</section>
		</main>
	</div>
</template>

<script>

export default {
	name: 'home',
	components: {
	}
}
</script>
