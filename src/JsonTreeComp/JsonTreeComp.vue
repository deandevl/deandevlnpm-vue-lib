<template>
  <div>
    <div ref="divslot">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'JsonTreeComp',
    props: {
      jsonObj: {
        default: null,
        type: Object
      },
      title: {
        type: String,
        default: null
      },
      indent: {
        type: Number,
        default: 16
      },
      cssVariables: {
        type: Object,
        default: () => {
          return null;
        }
      }
    },
    data(){
      return {
        content_ele: null
      };
    },
    watch: {
      jsonObj: function(){
        if(this.jsonObj !== null){
          this.render_elements(this.content_ele,this.jsonObj,this.indent);
        }
      }
    },
    mounted(){
      const top_node = this.$refs.divslot.children[0];
      top_node.className ='jsontreeComp';
      const title_ele = document.createElement('div');
      title_ele.innerHTML = this.title;
      title_ele.className = 'jsontreeComp_titleBox';
      top_node.appendChild(title_ele);

      this.content_ele = document.createElement('div');
      this.content_ele.className = 'jsontreeComp_contentBox';
      top_node.appendChild(this.content_ele);

      if(this.cssVariables !== null){
        for(let key of Object.keys(this.cssVariables)){
          this.$el.parentElement.style.setProperty(`--${key}`, this.cssVariables[key]);
        }
      }
    },
    methods: {
      render_elements: function(parent_node,obj,indent){
        for(const key in obj){
          if((obj[key] instanceof Object) && !(obj[key] instanceof Array)){
            const ele_start = document.createElement('div');
            ele_start.className = 'jsontreeComp_icon__closed';
            ele_start.style = `margin-left: ${indent}px;`;
            ele_start.innerHTML = ` ${key}: {`;
            ele_start.onclick = this.click_handler;
            parent_node.appendChild(ele_start);

            const ele_content = document.createElement('div');
            ele_content.className = 'jsontreeComp_box__hideit';
            ele_start.appendChild(ele_content);

            this.render_elements(ele_content,obj[key],indent+this.indent);

            const ele_end = document.createElement('div');
            ele_end.style = `margin-left: ${indent}px;`;
            ele_end.innerHTML = '}';
            parent_node.appendChild(ele_end);
          }else if(obj[key] instanceof Array){
            const ele_start = document.createElement('div');
            ele_start.className = 'jsontreeComp_icon__closed';
            ele_start.style = `margin-left: ${indent}px;`;
            ele_start.innerHTML = ` ${key}: [`;
            ele_start.onclick = this.click_handler;
            parent_node.appendChild(ele_start);

            const ele_content = document.createElement('div');
            ele_content.className = 'jsontreeComp_box__hideit';
            ele_start.appendChild(ele_content);

            this.render_elements(ele_content,obj[key],indent+this.indent);

            const ele_end = document.createElement('div');
            ele_end.style = `margin-left: ${indent}px;`;
            ele_end.innerHTML = ']';
            parent_node.appendChild(ele_end);
          }else {
            const ele = document.createElement('div');
            ele.style = `margin-left: ${indent}px;`;
            ele.innerHTML = `${key}: ${obj[key]}`;
            parent_node.appendChild(ele);
          }
        }

      },
      click_handler: function(e){
        e.stopPropagation();
        e.preventDefault();
        if(e.currentTarget.classList.contains('jsontreeComp_icon__closed')){
          e.currentTarget.classList.remove('jsontreeComp_icon__closed');
          e.currentTarget.classList.add('jsontreeComp_icon__open');
        }else{
          e.currentTarget.classList.remove('jsontreeComp_icon__open');
          e.currentTarget.classList.add('jsontreeComp_icon__closed');
        }
        if(e.currentTarget.childNodes[1].classList.contains('jsontreeComp_box__hideit')){
          e.currentTarget.childNodes[1].classList.remove('jsontreeComp_box__hideit');
        }else{
          e.currentTarget.childNodes[1].classList.add('jsontreeComp_box__hideit');
        }
      }
    }
  };
</script>

<style lang="less">
  :root {
    --jsontree_comp_font_family: Verdana,serif;
    --jsontree_comp_font_size: 1rem;
    --jsontree_comp_color: black;
    --jsontree_comp_background: transparent;
    --jsontree_comp_down_icon: '\21D3';
    --jsontree_comp_title_color: yellow;
  }
  .jsontreeComp {
    font-family: var(--jsontree_comp_font_family);
    font-size: var(--jsontree_comp_font_size);
    background: var(--jsontree_comp_background);
    display: flex;
    flex-direction: column;
    align-items: center;

    &_titleBox {
      color: var(--jsontree_comp_title_color);
      font-weight: bold;
      margin-bottom: .75rem;
    }

    &_contentBox {
      color: var(--jsontree_comp_color);
      overflow-y: auto;
      overflow-x: hidden;

      &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: #F5F5F5;
      }
      &::-webkit-scrollbar {
        height: 12px;
        width: 12px;
        background-color: transparent;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #D62929;
      }
    }

    &_icon__closed::before {
      content: var(--jsontree_comp_down_icon);
      display: inline-block;
      color: var(--jsontree_comp_color);
      transform: rotate(-90deg);
      transition: 400ms linear all;
      margin-right: .2rem;
      font-size: 1rem;
      cursor: pointer;
    }

    &_icon__open::before {
      content: var(--jsontree_comp_down_icon);
      display: inline-block;
      color: var(--jsontree_comp_color);
      transition: 400ms linear all;
      margin-right: .2rem;
      font-size: 1rem;
      cursor: pointer;
    }

    &_box__hideit {
      display: none;
    }
  }
</style>
