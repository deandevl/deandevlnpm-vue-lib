<template>
  <div class="fileReadComp">
    <label class="fileReadComp_label">{{ readLabel }}
      <input
        class="fileReadComp_input"
        type="file"
        @change="value_changed($event)"
      >
    </label>
  </div>
</template>

<script>
  export default {
    name: 'FileReadComp',
    props: {
      readLabel: {
        type: String,
        default: null
      },
      readFile: {
        type: Boolean,
        default: false
      },
      cssVariables: {
        type: Object,
        default: () => {
          return null;
        }
      }
    },
    emits: {
      'fileReadCompFilenameChanged': null,
      'fileReadCompContentChanged': null
    },
    mounted(){
      if(this.cssVariables !== null){
        for(let key of Object.keys(this.cssVariables)){
          this.$el.style.setProperty(`--${key}`, this.cssVariables[key]);
        }
      }
    },
    methods: {
      value_changed: function(ev){
        const file = ev.target.files[0];
        //child to parent event
        this.$emit('fileReadCompFilenameChanged',file.name);
        if(this.readFile){
          const reader = new FileReader();
          reader.onload = (e) => {
            this.$emit('fileReadCompContentChanged',e.target.result);
          };
          reader.readAsText(file);
        }
      }
    }
  };
</script>

<style scoped>
  :root {
    --file_read_comp_font_family: Verdana, serif;
    --file_read_comp_label_font_size: 1rem;
    --file_read_comp_label_font_weight: normal;
    --file_read_comp_label_color: black;
    --file_read_comp_label_box_shadow: 4px 4px 6px 1px rgba(0, 0, 0, 0.4) , 2px 2px 2px 0 rgba(0,0,0,0.2);
    --file_read_comp_label_background: linear-gradient(to bottom, #969696 0, #969696 13%, #5f5f5f 33%, #1e1e1e 64%, #1e1e1e 100%);
    --file_read_comp_label_border_color: black;
    --file_read_comp_label_hover_background: linear-gradient(to bottom, #969696 0, #1e1e1e 100%);
  }
  .fileReadComp {
    font-family: var(--file_read_comp_font_family);
  }
  .fileReadComp_label {
    width: max-content;
    height: max-content;
    text-align: center;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 5px;
    color: var(--file_read_comp_label_color);
    background: var(--file_read_comp_label_background);
    border-color: var(--file_read_comp_label_border_color);
    box-shadow: var(--file_read_comp_label_box_shadow);
    font-size: var(--file_read_comp_label_font_size);
    font-weight: var(--file_read_comp_label_font_weight);
  }
  .fileReadComp_label:hover {
    background: var(--file_read_comp_label_hover_background);
  }
  .fileReadComp_input {
    display: none;
  }
</style>