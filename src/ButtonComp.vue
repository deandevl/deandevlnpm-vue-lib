<template>
  <div class="buttonComp" @click="div_clicked($event)">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ButtonComp",
  props: {
    cssVariables: {
      type: Object,
      default: null,
    },
  },
  emits: {
    buttonCompClicked: null,
  },
  mounted() {
    if (this.cssVariables !== null) {
      for (let key of Object.keys(this.cssVariables)) {
        this.$el.style.setProperty(`--${key}`, this.cssVariables[key]);
      }
    }
  },
  methods: {
    div_clicked: function (event) {
      this.$emit("buttonCompClicked", event);
    },
  },
};
</script>

<style scoped>
  :root {
    --button_comp_font_family: Verdana, serif;
    --button_comp_font_size: 1rem;
    --button_comp_background: linear-gradient(
        to bottom,
        #969696 0,
        #969696 13%,
        #5f5f5f 33%,
        #1e1e1e 64%,
        #1e1e1e 100%
    );
    --button_comp_color: rgba(255, 255, 255, 0.901961);
    --button_comp_box_shadow: 4px 4px 6px 1px rgba(0, 0, 0, 0.4),
    2px 2px 2px 0 rgba(0, 0, 0, 0.2);
    --button_comp_hover_background: linear-gradient(
        to bottom,
        #969696 0,
        #1e1e1e 100%
    );
  }
  .buttonComp {
    width: max-content;
    height: max-content;
    text-align: center;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 5px;
    font-family: var(--button_comp_font_family);
    font-size: var(--button_comp_font_size);
    background: var(--button_comp_background);
    color: var(--button_comp_color);
    box-shadow: var(--button_comp_box_shadow);
  }
  .buttonComp:hover {
    background: var(--button_comp_hover_background);
  }
</style>
