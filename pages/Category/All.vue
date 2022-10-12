<template>
  <div :key="update">
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
            <strong class="text-[#6D5BD0] mx-1">${{ amount.toFixed(2) }}</strong
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

    <div class="main-bg">
      <div class="relative px-4">
        <div class="flex justify-between items-center w-max">
          <div
            class="
              flex
              items-center
              w-max
              px-2.5
              py-1.5
              border border-slate-200
              rounded-md
              cursor-pointer
              mr-6
            "
          >
            <v-icon size="20px">$filterIcon</v-icon>
            <span class="ml-2">Filter</span>
          </div>
          <div
            class="
              bg-[#F4F2FF]
              rounded-md
              px-4
              py-2
              w-[380px]
              flex
              items-center
              text-[#8B83BA]
            "
          >
            <i class="fas fa-search"></i>
            <input
              type="text"
              class="ml-3 appearance-none outline-none w-full"
              placeholder="Search Users by Name, Email or Date"
              v-model="search"
            />
          </div>
        </div>
        <div class="absolute top-2 right-4">
          <span
            @click="markPaid"
            class="cursor-pointer py-2 px-3 bg-[#6D5BD0] rounded-md text-white"
            >PAY DUES</span
          >
        </div>
      </div>
      <div>
        <v-data-iterator
          :items="items"
          item-key="id"
          :search="search"
          class="rounded-xl"
          :page.sync="page"
          :items-per-page.sync="itemsPerPage"
          @page-count="pageCount = $event"
        >
          <template slot="no-data"
            ><h1
              class="
                mt-8
                w-full
                bg-white
                pb-16
                pt-8
                text-slate-400
                flex
                justify-center
                items-center
                md:text-sm
                sm:text-xs
              "
            >
              Fetching Results.....
            </h1></template
          >
          <template slot="no-results"
            ><h1
              class="
                mt-8
                w-full
                bg-white
                pb-16
                pt-8
                text-slate-400
                flex
                justify-center
                items-center
                md:text-sm
                sm:text-xs
              "
            >
              There's no result for this search...
            </h1></template
          >
          <template v-slot:default="props">
            <div class="mt-5">
              <v-expansion-panels accordion v-model="moreContent">
                <v-expansion-panel :readonly="true">
                  <v-expansion-panel-header
                    class="bg-[#f4f2ff] py-0"
                    expand-icon=""
                  >
                    <div
                      class="
                        flex
                        items-center
                        font-semibold
                        w-full
                        text-sm text-[#6E6893]
                      "
                    >
                      <div class="w-[130px]">
                        <v-checkbox
                          primary
                          v-model="generalCheckbox"
                        ></v-checkbox>
                      </div>
                      <h1 class="w-[360px]">NAME</h1>
                      <h1 class="w-[500px]">USER STATUS</h1>
                      <h1 class="w-[300px]">PAYMENT STATUS</h1>
                      <div class="w-[200px] flex justify-between">
                        <h1>AMOUNT</h1>
                        <span>
                          <i
                            class="
                              fa-solid fa-ellipsis-vertical
                              text-[#6E6893] text-lg
                              cursor-pointer
                            "
                          ></i>
                        </span>
                      </div>
                    </div>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel v-for="item in props.items" :key="item.id">
                  <v-expansion-panel-header expand-icon="" class="py-0">
                    <div class="flex items-center w-full text-sm">
                      <div class="flex items-center w-[130px]">
                        <v-checkbox
                          primary
                          @change="getItem($event, item.id)"
                        ></v-checkbox>
                        <v-icon>$arrowIcon</v-icon>
                      </div>
                      <div class="flex flex-col w-[360px]">
                        <h1 class="font-semibold">{{ item.name }}</h1>
                        <h1 class="text-[#6E6893] text-sm mt-2">
                          {{ item.email }}
                        </h1>
                      </div>
                      <div class="flex flex-col w-[500px]">
                        <div :class="`${item.userStatus} chip w-max`">
                          <span></span>
                          <h1>{{ item.userStatus }}</h1>
                        </div>
                        <h1 class="text-[#6E6893] text-xs mt-2">
                          Last login: {{ item.lastLogin }}
                        </h1>
                      </div>
                      <div class="flex flex-col w-[300px]">
                        <div :class="`${item.paymentStatus} chip w-max`">
                          <span></span>
                          <h1>{{ item.paymentStatus }}</h1>
                        </div>
                        <h1 class="text-[#6E6893] text-xs mt-2">
                          Paid on: {{ item.paidOn }}
                        </h1>
                      </div>
                      <div class="flex justify-between w-[200px]">
                        <div>
                          <h1 class="font-semibold">${{ item.centsAmount }}</h1>
                          <h1 class="text-[#6E6893] text-xs mt-1">USD</h1>
                        </div>
                        <div>
                          <span class="text-[#6E6893] text-sm">View More</span>
                        </div>
                        <div>
                          <span
                            ><i
                              class="
                                fa-solid fa-ellipsis-vertical
                                text-[#6E6893] text-lg
                                cursor-pointer
                              "
                            ></i
                          ></span>
                        </div>
                      </div>
                    </div>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div class="bg-[#F4F2FF]">
                      <div
                        class="
                          flex
                          items-center
                          text-[#6E6893] text-sm
                          font-semibold
                          py-4
                          border border-[#ccc] border-solid
                          rounded-t-md
                          bg-[#F2F0F9]
                          px-24
                        "
                      >
                        <h1 class="w-[200px]">DATE</h1>
                        <h1 class="w-[400px]">USER ACTIVITY</h1>
                        <div class="w-[700px] flex items-center">
                          <h1 class="mr-1">DETAILS</h1>
                          <v-icon>$infoIcon</v-icon>
                        </div>
                      </div>
                      <div
                        class="
                          flex
                          justify-between
                          items-center
                          border border-[#ccc] border-solid
                          rounded-b-md
                          text-[#6E6893] text-xs
                          px-24
                          py-3
                        "
                        v-for="(activity, index) in item.activities"
                        :key="index"
                      >
                        <h1 class="w-[200px] pr-3">
                          {{ activity.activityDate }}
                        </h1>
                        <h1 class="w-[400px] pr-5">
                          {{ activity.activityDone }}
                        </h1>
                        <h1 class="w-[700px] pr-3">
                          {{ activity.activityDetail }}
                        </h1>
                      </div>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </template>
        </v-data-iterator>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 900,
      update: 0,
      generalCheckbox: false,
      moreContent: false,
      search: "",
      selectedItem: "",
      page: 1,
      pageCount: 3,
      itemsPerPage: 5,
      keys: ["NAME", "USER STATUS", "PAYMENT STATUS", "AMOUNT"],
      items: [],
    };
  },
  async fetch() {
    await this.getUsers();
  },
  methods: {
    async getUsers() {
      await this.$store.dispatch("data/getUsers");
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
        let activityDate;
        let activityDone;
        let activityDetail;
        let activities = [];
        let name;

        // function newDate(value) {
        //   let date = new Date(value);
        //   let newDate = date.toLocaleString("default", {
        //     month: "short",
        //     year: "numeric",
        //     day: "numeric",
        //   });
        //   return newDate;
        // }

        function newDate(value) {
          const months = [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JULY",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC",
          ];

          const day = new Date(value).getDate();
          const month = months[new Date(value).getUTCMonth()];
          const year = new Date(value).getFullYear();
          return `${day}/${month}/${year}`;
        }

        user.activities.map((activity) => {
          activities.push({
            activityDate: newDate(activity.date),
            activityDone: activity.userActivity,
            activityDetail: activity.details,
          });
        });
        name = `${user.firstName} ${user.lastName}`;
        this.items.push({
          id: user.id,
          name: name,
          email: user.email,
          lastLogin: newDate(user.lastLogin),
          userStatus: user.userStatus,
          paymentStatus: user.paymentStatus,
          centsAmount: user.amountInCents,
          paidOn: newDate(user.paidOn),
          activities: activities,
        });
      });
      this.amount = sum(totalAmount);
    },
    getItem(event, id) {
      if (event === true) {
        this.selectedItem = id;
      }
    },
    async markPaid() {
      await this.$axios
        .$patch(`/mark-paid/${this.selectedItem}`)
        .then((response) => {
          this.getUsers();
          this.update++;
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    filteredKeys() {
      return this.keys.filter((key) => key !== "Name");
    },
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
  },
};
</script>

<style scoped>
</style>

