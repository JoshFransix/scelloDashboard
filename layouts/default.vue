<template>
  <v-app>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
* {
  font-family: "Poppins", sans-serif;
}

a {
  color: #6e6893;
  padding: 0.5rem 0;
  margin-right: 3rem;
}

a:not([aria-current="page"]),
a:not(.nuxt-link-exact-active),
a:not(.nuxt-link-active) {
  filter: grayscale(100%);
  transition: 0.3s ease-in-out;
  color: #bbb;
}

a[aria-current="page"],
a.nuxt-link-exact-active,
a.nuxt-link-active {
  position: relative;
  font-weight: bolder !important;
  transition: 0.3s ease-in-out;
  border-bottom: 2px solid #25213b;
}

.main-bg {
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background-color: #fff;
  margin-top: 2rem;
  padding: 1rem 0;
}

.chip {
  border-radius: 10px;
  padding: 0.1rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
}

.chip span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 0.4rem;
}

.active {
  background: #e6e6f2;
}

.active h1 {
  color: #4a4aff;
}
.active span {
  background: #4a4aff;
}
.inactive {
  background: #f2f0f9;
}

.inactive h1 {
  color: #6e6893;
}
.inactive span {
  background: #6e6893;
}

.paid {
  background: #cdffcd;
}
.paid h1 {
  color: #007f00;
}
.paid span {
  background: #007f00;
}
.unpaid {
  background: #ffeccc;
}
.unpaid h1 {
  color: #965e00;
}
.unpaid span {
  background: #965e00;
}
.overdue {
  background: #ffe0e0;
}
.overdue h1 {
  color: #d30000;
}
.overdue span {
  background: #d30000;
}
</style>
