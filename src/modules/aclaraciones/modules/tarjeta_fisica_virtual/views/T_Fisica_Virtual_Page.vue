<script setup>
  import Table from '../../../../ui/components/Table.vue';
  const agregar=()=>{
    console.log("agregar desde tarjeta virtual")
  }
</script>
<template>  
    <h1>Tarjeta Fisica</h1>  
    <Table @add="agregar"/>
</template>
