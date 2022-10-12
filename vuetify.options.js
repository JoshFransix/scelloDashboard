import FilterIcon from "~/components/Icons/FilterIcon.vue"
import ArrowIcon from "~/components/Icons/ArrowIcon.vue"
import InfoIcon from "~/components/Icons/InfoIcon.vue"

export default {
  theme: {
    themes: {
      light: {
        primary: '#6D5BD0',
        secondary: '#b0bec5',
        basic: '#fff',
        accent: '#8c9eff',
        // error: '#b71c1c',
        error: '#dc143c',
      }
    }
  },
  icons: {
    values: {
      filterIcon: {
        component: FilterIcon
      },
      arrowIcon: {
        component: ArrowIcon
      },
      infoIcon: {
        component: InfoIcon
      }
    }
  }
}