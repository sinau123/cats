<script>
import Tippy from 'tippy.js'

export default {
  name: 'Tippy',
  props: {
    // tippy.js config: https://atomiks.github.io/tippyjs/v6/all-props/
    config: {
      type: Object,
      default: () => ({
        placement: 'bottom',
        animation: 'scale',
        interactive: true,
        appendTo: () => document.body,
      }),
    },
  },
  data() {
    return {
      triggerEl: null,
      tippyEl: null,
    }
  },
  beforeDestroy() {
    if (!this.tippy) {
      return
    }

    this.tippy.destroy()
  },
  mounted() {
    this.triggerEl = this.$el.querySelector('[data-trigger]')
    this.tippyEl = this.$el.querySelector('[data-tippy]')

    this.setupPopper()
  },
  methods: {
    setupPopper() {
      if (this.tippy === undefined) {
        this.tippy = Tippy(this.triggerEl, {
          ...{ content: this.tippyEl },
          ...this.config,
        })
      }
    },
  },
  render() {
    return this.$scopedSlots.default({
      tippy: this.tippy,
    })
  },
}
</script>
