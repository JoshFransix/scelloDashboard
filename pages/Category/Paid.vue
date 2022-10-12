<template>
  <div :key="update">
    <div>
      <Nav />
    </div>

    <div class="main-bg">
      <div class="relative px-4">
        <div class="flex justify-between items-center w-max">
          <v-menu
            v-model="filterMenu"
            bottom
            :nudge-bottom="50"
            origin="center center"
            transition="slide-y-reverse-transition"
            :close-on-content-click="false"
            elevation="1px"
            rounded="50px"
          >
            <template v-slot:activator="{ on, attrs }">
              <div
                v-bind="attrs"
                v-on="on"
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
            </template>
            <div class="relative px-3 py-4 bg-white font-bold w-[220px]">
              <!-- <div
                @click="filterMenu = false"
                class="
                  absolute
                  top-2
                  right-2
                  border border-black
                  rounded-full
                  p-0
                  cursor-pointer
                  h-max
                "
              >
                <v-icon small color="#000" class="p-0">mdi-close</v-icon>
              </div> -->
              <div>
                <h1 class="text-[#6E6893] text-xs mb-3">SORT BY:</h1>
                <label
                  :for="filterOptions[index]"
                  v-for="(item, index) in filterOptions"
                  :key="index"
                  class="
                    text-[#25213B] text-sm
                    flex
                    font-light
                    items-center
                    justify-between
                    px-2
                    hover:bg-[#F2F0F9]
                    rounded-md
                    py-0
                    cursor-pointer
                  "
                >
                  <span>{{ filterOptions[index] }}</span>
                  <v-radio-group v-model="filterRadios" @change="sortUsers">
                    <v-radio
                      class="py-0"
                      :id="filterOptions[index]"
                      color="primary"
                      :value="filterOptions[index]"
                    ></v-radio>
                  </v-radio-group>
                </label>
              </div>
            </div>
          </v-menu>
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
              border border-transparent
              transition
              hover:border hover:border-[#6D5BD0] hover:text-[#6D5BD0]
              focus:border-[#6D5BD0] focus:text-[#6D5BD0]
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
      filterMenu: false,
      amount: 900,
      update: 0,
      generalCheckbox: false,
      filterRadios: null,
      moreContent: false,
      search: "",
      selectedItem: "",
      page: 1,
      pageCount: 3,
      itemsPerPage: 5,
      filterOptions: ["First Name", "Last Name", "Email"],
      items: [],
    };
  },
  async fetch() {
    await this.getUsers();
  },
  methods: {
    sortUsers() {
      console.log(this.filterRadios);
      this.filterMenu = false;
      this.items = this.items.sort((a, b) => {
        if (this.filterRadios == "First Name" && a.firstName < b.firstName) {
          return -1;
        } else if (
          this.filterRadios == "Last Name" &&
          a.lastName < b.lastName
        ) {
          return -1;
        } else if (this.filterRadios == "Email" && a.email < b.email) {
          return -1;
        } else {
          return 0;
        }
      });
    },
    async getUsers() {
      this.items = [];
      await this.$store.dispatch("data/getUsers");
      const users = this.$store.state.data.users;
      users.map((user) => {
        let activityDate;
        let activityDone;
        let activityDetail;
        let activities = [];
        let name;

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
        if (user.paymentStatus == "paid") {
          this.items.push({
            id: user.id,
            name: name,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            lastLogin: newDate(user.lastLogin),
            userStatus: user.userStatus,
            paymentStatus: user.paymentStatus,
            centsAmount: user.amountInCents / 100,
            paidOn: newDate(user.paidOn),
            activities: activities,
          });
        }
      });
      this.update++;
    },
    getItem(event, id) {
      if (event === true) {
        this.selectedItem = id;
      }
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

