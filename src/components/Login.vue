<template>
<form @submit.prevent="handleSubmit">
      <error v-if="error" :error="error" />
      <!--<img alt="Vue logo" src="./assets/logo.png">-->
      <h3>Login</h3>
<div class="form-group">
<label>Email</label>
<input type="email" class="form-control" v-model="email" placeholder="Email"/>
</div>

<div class="form-group">
<label>Password</label>
<input type="password" class="form-control" v-model="password" placeholder="Password"/>
</div>

<button class="btn btn-primary btn-block">Login</button>

<p class="forgot-password text-right">
<router-link to="forgot">Forgot password?</router-link>
</p>
</form>
</template>

<script>
import axios from 'axios'
import Error from './Error.vue'
export default {
    name:'LOGIN',
    components:{
        Error
    },
    data(){
        return{
        email:'',
        password:'',
        error:''
        }
    },
    methods:{
        async handleSubmit()
        { try{
           const response=await axios.post('login',
           {
           email:this.email,
           password:this.password
           });
           localStorage.setItem('token',response.data.token);
           this.$store.dispatch('user',response.data.user);
           this.$router.push('/');
           }catch(e){
               this.error='Invalid username/password!'
           }
        }
    }
}
</script>