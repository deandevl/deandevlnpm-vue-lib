<template>
  <div class='demo_container'>
    <infinite-scroller-comp
      :css-variables="cssVariables"
      @reached-bottom="add_person"
    >
      <div>
        <person-comp
          v-for="(person,index) in persons"
          :key="index"
          :img-source-url="person.picture.large"
          :first-name="person.name.first"
          :last-name="person.name.last"
          :birth-date="person.dob.date"
          :age="person.dob.age"
          :location-city="person.location.city"
          :location-state="person.location.state"
        >
        </person-comp>
      </div>
    </infinite-scroller-comp>
  </div>
</template>

<script>
  import {InfiniteScrollerComp} from '@deandevlnpm/vue-lib';
  import PersonComp from './PersonComp.vue';

  export default {
    name: 'App',
    components: {
      PersonComp,
      InfiniteScrollerComp
    },
    data: function() {
      return {
        url: 'https://randomuser.me/api/',
        persons: null,
        cssVariables: {
          scroller_height: '35rem'
        }
      };
    },
    mounted() {
      this.persons = [];
      try {
        const config = {
          method: 'GET',
          mode: 'cors'
        };
        for(let i = 0; i < 5; i++){
          fetch(this.url,config).then(response => {
            if(response.ok){
              return response.text();
            }
            throw new Error(response.statusText);
          }).then(resp_str => {
            const person_obj = JSON.parse(resp_str);
            this.persons.push(person_obj.results[0]);
          });
        }
      }catch(error){
        console.log(error.message);
      }
    },
    methods: {
      add_person(at_bottom){
        if(at_bottom){
          const config = {
            method: 'GET',
            mode: 'cors'
          };
          fetch(this.url,config).then((response) =>{
            if(response.ok){
              return response.text();
            }
            throw new Error(response.statusText);
          }).then((resp_str) => {
            const person_obj = JSON.parse(resp_str);
            this.persons.push(person_obj.results[0]);
          }).catch((error) => {
            console.log(error.message);
          });
          console.log('Reached bottom -- added a new person');
        }
      }
    }
  };
</script>