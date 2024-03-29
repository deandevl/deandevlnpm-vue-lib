<template>
  <div class="rangeComp">
    <div :class="rangeClass">
      <div 
        v-show="heading" 
        class="rangeComp_headerBox"
      >
        {{ heading }}
      </div>
      <input
        v-model="currentValue"
        class="rangeComp_input"
        type="range"
        :min="min"
        :max="max"
        :step="step"
        @change="valueChanged"
      >
    </div>
    <div 
      class="rangeComp_valueBox" 
      :style="valueBoxMargin"
    >
      {{ currentValue }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RangeComp',
    props: {
      heading: {
        type: String,
        default: null
      },
      rangeValue: {
        type: Number,
        default: 0
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      },
      headerPosition: {
        type: String,
        default: 'left'
      },
      cssVariables: {
        type: Object,
        default: () => {
          return null;
        }
      }
    },
    emits: {
      rangeCompValueChanged: null
    },
    data(){
      return {
        currentValue: this.rangeValue,
        rangeClass: 'rangeComp_headerBox__left',
        valueBoxMargin: {margin: '0 0 0 4px'}
      };
    },
    watch: {
      rangeValue(rangeValue){
        this.currentValue = rangeValue;
      }
    },
    mounted(){
      if(this.headerPosition === 'left'){
        this.valueBoxMargin = {margin: '2px 0 0 4px'};
        this.rangeClass = 'rangeComp_headerBox__left';
      }else if(this.headerPosition === 'above'){
        this.valueBoxMargin = {margin: '20px 0 0 4px'};
        this.rangeClass = 'rangeComp_headerBox__above';
      }else if(this.headerPosition === 'below'){
        this.valueBoxMargin = {margin: '-4px 0 0 4px'};
        this.rangeClass = 'rangeComp_headerBox__below';
      }

      if(this.cssVariables !== null){
        for(let key of Object.keys(this.cssVariables)){
          this.$el.style.setProperty(`--${key}`, this.cssVariables[key]);
        }
      }
    },
    methods: {
      valueChanged: function(){
        this.$emit('rangeCompValueChanged',this.currentValue);
      }
    }
  };
</script>

<style lang="less">
  :root {
    --range_comp_font_family: Verdana,serif;
    --range_comp_font_size: 1rem;

    --range_comp_heading_color: black;
    --range_comp_heading_font_size: 1rem;
    --range_comp_heading_font_weight: bold;

    --range_comp_thumb_background: radial-gradient(ellipse at center, #e4f5fc 0%,#6e6bff 66%);
    --range_comp_thumb_size: .45rem;

    --range_comp_track_width: 25rem;
    --range_comp_track_height: 1.4rem;
    --range_comp_track_border: solid 2px black;
    --range_comp_track_background: linear-gradient(to bottom, #969696 0, #969696 13%, #5f5f5f 33%, #1e1e1e 64%, #1e1e1e 100%);
    --range_comp_track_focus_background: #445;
    --range_comp_value_color: black;
  }

  .rangeComp {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: var(--range_comp_font_family);
    font-size: var(--range_comp_font_size);

    &_headerBox {
      align-self: center;
      color: var(--range_comp_heading_color);
      font-size: var(--range_comp_heading_font_size);
      font-weight: var(--range_comp_heading_font_weight);
      margin: .2rem;
    }

    &_headerBox__above {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &_headerBox__below {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }
    &_headerBox__left {
      display: flex;
      flex-direction: row;
    }

    &_input {
      -webkit-appearance: none;
      background: transparent;
      width: var(--range_comp_track_width);
      height: var(--range_comp_track_height);
      border: var(--range_comp_track_border);

      &::-webkit-slider-runnable-track {

        background: var(--range_comp_track_background);
        border: none;
        border-radius: 3px;
      }

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: none;
        height: var(--range_comp_thumb_size);
        width: var(--range_comp_thumb_size);
        border-radius: 50%;
        background: var(--range_comp_thumb_background);
        margin-top: -2px;
      }

      &:focus {
        outline: none !important;
      }
      &:focus::-webkit-slider-runnable-track {
        background: var(--range_comp_track_focus_background);
      }
    }

    &_valueBox {
      color: var(--range_comp_value_color);
    }
  }
</style>