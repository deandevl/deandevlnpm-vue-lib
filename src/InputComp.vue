<template>
  <div class="inputComp">
    <div :class="compute_container_class()">
      <div v-show="heading" class="inputComp_headerBox" :style="header_style">
        {{ heading }}
      </div>
      <input
        v-model="currentValue"
        class="inputComp_input"
        :size="inputSize"
        :type="inputType"
        :style="input_box_style"
        :placeholder="placeholder"
        :checked="inputChecked"
        @change="valueChanged"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "InputComp",
  props: {
    heading: {
      type: String,
      default: null,
    },
    // eslint-disable-next-line vue/require-prop-types
    inputValue: {
      default: null,
    },
    inputChecked: {
      type: Boolean,
      default: false,
    },
    inputType: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "Enter a value",
    },
    inputSize: {
      type: String,
      default: "40",
    },
    headerPosition: {
      type: String,
      default: "left",
    },
    singleBorder: {
      type: Boolean,
      default: false,
    },
    cssVariables: {
      type: Object,
      default: () => {
        return null;
      },
    },
  },
  emits: {
    inputCompValueChanged: null,
  },
  data() {
    return {
      currentValue: this.inputValue,
    };
  },
  computed: {
    header_style: function () {
      let header_margin = null;
      if (this.headerPosition === "left") {
        header_margin = "margin-right: 5px;";
      } else if (this.headerPosition === "below") {
        header_margin = "margin-top: 2px;";
      }
      return header_margin;
    },
    input_box_style: function () {
      let box_style = null;
      if (this.singleBorder) {
        box_style = "border: none; border-bottom: 1px solid;";
      } else {
        box_style = "border: 1px solid;";
      }

      if (this.inputType === "number") {
        box_style = `${box_style}width: ${this.inputSize}px;`;
      }
      return box_style;
    },
  },
  watch: {
    inputValue(inputValue) {
      this.currentValue = inputValue;
    },
  },
  mounted() {
    if (this.cssVariables !== null) {
      for (let key of Object.keys(this.cssVariables)) {
        this.$el.style.setProperty(`--${key}`, this.cssVariables[key]);
      }
    }
  },
  methods: {
    valueChanged: function () {
      this.$emit("inputCompValueChanged", this.currentValue);
    },
    compute_container_class: function () {
      if (this.headerPosition === "left") {
        return "inputComp_containerBox__left";
      } else if (this.headerPosition === "above") {
        return "inputComp_containerBox__top";
      } else if (this.headerPosition === "below") {
        return "inputComp_containerBox__below";
      }
    },
  },
};
</script>

<style scoped>
  :root {
    --input_comp_width: 10rem;
    --input_comp_font_family: Verdana, serif;
    --input_comp_heading_color: black;
    --input_comp_heading_font_size: 1rem;
    --input_comp_heading_font_weight: bold;
    --input_comp_input_font_size: 0.8rem;
    --input_comp_input_font_weight: normal;
    --input_comp_input_color: black;
    --input_comp_input_background: transparent;
    --input_comp_input_border_color: black;
    --input_comp_input_placeholder_color: black;
    --input_comp_input_focus_outline: yellow;
    --input_comp_input_focus_background: white;
  }
  .inputComp {
    width: var(--input_comp_width);
    font-family: var(--input_comp_font_family);
  }
  .inputComp_containerBox__above {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .inputComp_containerBox__below {
    display: flex;
    flex-direction: column-reverse;
  }
  .inputComp_containerBox__left {
    display: flex;
    flex-direction: row;
  }
  .inputComp_headerBox {
    align-self: center;
    text-align: center;
    color: var(--input_comp_heading_color);
    font-size: var(--input_comp_heading_font_size);
    font-weight: var(--input_comp_heading_font_weight);
  }
  .inputComp_input {
    color: var(--input_comp_input_color);
    background: var(--input_comp_input_background);
    border-color: var(--input_comp_input_border_color);
    font-size: var(--input_comp_input_font_size);
    font-weight: var(--input_comp_input_font_weight);
    padding: 0.4rem;
  }
  .inputComp_input:focus {
    outline-color: var(--input_comp_input_focus_outline);
    background-color: var(--input_comp_input_focus_background);
  }
  .inputComp_input:invalid {
    background-color: red;
  }
  .inputComp_input::-webkit-input-placeholder {
    color: var(--input_comp_input_placeholder_color);
  }
</style>
