<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'button',
    },
  },
  render(createElement) {
    return createElement(
      this.tag,
      {
        class:
          'button font-playfair bg-red-theme p-2 font-bold border-2 border-transparent text-center text-white rounded',
      },
      [createElement('span', this.$slots.default)]
    )
  },
}
</script>

<style lang="less" scoped>
.button {
  pointer-events: auto;
  min-width: 80px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.5s;

  &:hover {
    @apply bg-white text-red-theme border-red-theme outline-none;
  }

  &:focus {
    @apply outline-none;
  }
}
</style>
