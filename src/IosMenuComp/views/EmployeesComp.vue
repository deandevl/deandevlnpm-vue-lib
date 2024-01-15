<template>
  <div id="content">
    <person-comp
      v-for="(employee,index) in employees"
      :key="index"
      :img-source-url="employee.picture.medium"
      :first-name="employee.name.first"
      :last-name="employee.name.last"
      :birth-date="employee.dob.date"
      :age="employee.dob.age"
      :location-city="employee.location.city"
      :location-state="employee.location.state"
    />
  </div>
</template>

<script>
  import PersonComp from '../components/PersonComp.vue';
  export default {
    name: 'EmployeesComp',
    components: {
      PersonComp
    },
    props: {
      numberOfEmployees: {
        type: Number,
        default: 1
      }
    },
    data: function(){
      return {
        employees: null
      };
    },
    mounted() {
      try {
        const config = {
          method: 'GET',
          mode: 'cors'
        };
        const url = 'https://randomuser.me/api/?results=' + this.numberOfEmployees.toString();
        const req = new Request(url, config);
        fetch(req, config).then((response) => {
          if (response.ok) {
            return response.text();
          }
          throw new Error(response.statusText);
        }).then(resp_str => {
          const employees_obj = JSON.parse(resp_str);
          this.employees = employees_obj.results;
        });
      } catch (error) {
        console.log(error.message);
        return [];
      }
    }
  };
</script>