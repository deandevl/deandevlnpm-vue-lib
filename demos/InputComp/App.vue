<template>
  <div class="demo_container">
    <button @click="set_job">
      Set Job to 'Janitor'
    </button>
    <button @click="show_values">
      Show Current Values (at the console)
    </button>
    <input-comp
      heading="Enter your job"
      header-position="below"
      placeholder="Enter job here"
      input-size="40"
      :input-value="current_job"
      :css-variables="css_variables"
      @input-comp-value-changed="value => {current_job = value}"
    />

    <input-comp
      heading="Enter your name"
      placeholder="Enter name here"
      input-size="70"
      header-position="below"
      :input-value="current_name"
      :single-border="single_border"
      :css-variables="css_variables"
      @input-comp-value-changed="value => {current_name = value}"
    />

    <input-comp
      heading="Enter your address"
      placeholder="Enter address here"
      input-size="90"
      header-position="above"
      :input-value="current_address"
      :css-variables="css_variables_wide"
      @input-comp-value-changed="value => {current_address = value}"
    />

    <input-comp
      heading="Enter your age:"
      placeholder="Enter age here"
      input-type="number"
      input-size="40"
      :input-value="current_age"
      :css-variables="css_variables_wide"
      @input-comp-value-changed="value => {current_age = value}"
    />

    <input-comp
      heading="Enter your birth date:"
      input-type="date"
      :input-value="current_birth_date"
      :css-variables="css_variables_extra_wide"
      :single-border="single_border"
      @input-comp-value-changed="value => {current_birth_date = value}"
    />

    <input-comp
      heading="Do you smoke?"
      input-type="checkbox"
      :input-checked="current_smoker"
      :css-variables="css_variables_wide"
      @input-comp-value-changed="value => {current_smoker = value}"
    />

    <input-comp
      heading="Time you eat dinner?"
      input-type="time"
      :input-value="current_dinner_time"
      :css-variables="css_variables_wide"
      @input-comp-value-changed="value => {current_dinner_time = value}"
    />

    <input-comp
      heading="Month/Year of Collage Graduation:"
      input-type="month"
      :input-value="current_graduation"
      :css-variables="css_variables_extra_wide"
      @input-comp-value-changed="value => {current_graduation = value}"
    />

    <input-comp
      heading="Select your favorite color:"
      input-type="color"
      :input-value="current_color"
      :css-variables="css_variables_wide"
      @input-comp-value-changed="value => {current_color = value}"
    />

    <input-comp
      heading="Your email address:"
      input-type="email"
      input-size="40"
      :input-value="current_email"
      :css-variables="css_variables_extra_wide"
      @input-comp-value-changed="value => {current_email = value}"
    />
  </div>
</template>

<script>
  import {InputComp} from '@deandevlnpm/vue-lib';

  export default {
    name: 'App',
    components: {
      InputComp
    },
    data: function() {
      return {
        single_border: true,

        current_job: 'Pipe Fitter',
        current_name: null,
        current_address: null,
        current_age: 56,
        current_birth_date: null,
        current_smoker: true,
        current_dinner_time: '17:30:00',
        current_graduation: '1972-08',
        current_color: '#6770d8',
        current_email: null,

        css_variables: {
          input_comp_heading_color: 'white',
          input_comp_input_color: 'white',
          input_comp_input_border_color: 'white',
          input_comp_input_placeholder_color: 'white',
          input_comp_input_focus_background: 'black'
        },
        css_variables_wide: {
          input_comp_heading_color: 'white',
          input_comp_input_color: 'white',
          input_comp_input_border_color: 'white',
          input_comp_input_placeholder_color: 'white',
          input_comp_input_focus_background: 'black',
          input_comp_width: '20rem'
        },
        css_variables_extra_wide: {
          input_comp_heading_color: 'white',
          input_comp_input_color: 'white',
          input_comp_input_border_color: 'white',
          input_comp_input_placeholder_color: 'white',
          input_comp_input_focus_background: 'black',
          input_comp_width: '30rem'
        }
      };
    },
    methods: {
      show_values: function(){
        console.log(`--------Current Values---------\n
      ---Job: ${this.current_job}\n
      ---Name: ${this.current_name}\n
      ---Address: ${this.current_address}\n
      ---Age: ${this.current_age}\n
      ---Birth Date: ${this.current_birth_date}\n
      ---Smoker?: ${this.current_smoker}\n
      ---Eat Dinner Time: ${this.current_dinner_time}\n
      ---Graduation Date: ${this.current_graduation}\n
      ---Favorite Color: ${this.current_color}\n
      ---Email address: ${this.current_email}\n
      `);
      },
      // set the value of component InputComp for job to 'Janitor'
      set_job: function(){
        this.current_job = 'Janitor';
      }
    }
  };
</script>

<style>
  .demo_container {
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    background-color: black;
    padding: 20px;
  }
  button {
    width: 260px;
    height: 22px;
  }
</style>