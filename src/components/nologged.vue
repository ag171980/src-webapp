<template>
    <div class="container  alert alert-danger mt-3 text-center" role="alert">
        Solo usuarios registrados pueden visualizar esta pestaña.
        Usted no se encuentra registrado, por favor ingrese con su cuenta
        <router-link to="/" >aqui</router-link>
        , o cree una cuenta 
        <router-link to="/register" >aqui</router-link>
      </div>
</template>