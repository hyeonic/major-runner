<template>
  <footer>
    <div class="footer-nav">
      <ul>
        <li>
          <router-link to="/login">
            sign in
          </router-link>
        </li>
        |
        <li>
          <router-link to="/site-map">
            site map
          </router-link>
        </li>
        |
        <li>
          <router-link to="/introdution">
            Introdution
          </router-link>
        </li>
      </ul>
    </div>
    <div class="logo">MajorRunner</div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  flex: 1;
  color: #2699fb;
  background-color: white;
  width: 100%;
  min-height: 5rem;
  padding: 1rem;
}

ul {
  text-align: center;
}

ul > li {
  display: inline-block;
}

.logo {
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  color: #2d76c9;
  font-family: Berlin Sans FB;
  margin: 1rem 0;
}

a {
  color: #2699fb;
}
</style>
