export default function (count = 27) {
  return {
    data () {
      return {
        displayPriority: 3
      }
    },
    mounted () {
      this.runDisplayPriority()
    },
    methods: {
      runDisplayPriority () {
        const step = () => {
          requestAnimationFrame(() => {
            this.displayPriority++
            if (this.displayPriority < count) {
              step()
            }
          })
        }
        step()
      },

      defer (priority) {
        return this.displayPriority >= priority
      }
    }
  }
}
