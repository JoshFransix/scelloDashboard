<template>
  <div class="relative">
    <div>
      <h1
        class="
          text-[#6E6893] text-sm
          uppercase
          font-medium
          mb-3
          tracking-widest
        "
      >
        Table Heading
      </h1>
    </div>
    <div class="flex justify-between w-full items-center">
      <div class="flex z-10">
        <NuxtLink to="/Category/All">All</NuxtLink>
        <NuxtLink to="/Category/Paid">Paid</NuxtLink>
        <NuxtLink to="/Category/Unpaid">Unpaid</NuxtLink>
        <NuxtLink to="/Category/Overdue">Overdue</NuxtLink>
      </div>

      <div class="justify-self-end text-[#6E6893]">
        <h1>
          Total Payable amount:
          <strong class="text-[#6D5BD0] mx-1">${{ amount }}</strong
          >USD
        </h1>
      </div>
    </div>
    <div
      class="
        absolute
        bottom-0
        left-0
        bg-[#C6C2DE]
        rounded-sm
        h-[1px]
        w-full
        -z-10
      "
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: "",
    };
  },
  mounted() {
    const users = this.$store.state.data.users;
    let totalAmount = [];
    function sum(input) {
      let total = 0;
      for (var idx = 0; idx <= input.length - 1; idx++) {
        total += input[idx];
      }
      return total;
    }
    users.map((user) => {
      if (user.paymentStatus != "paid") {
        totalAmount.push(user.amountInCents);
      }
    });
    this.amount = sum(totalAmount).toFixed(2);
  },
};
</script>

<style scoped>
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
</style>