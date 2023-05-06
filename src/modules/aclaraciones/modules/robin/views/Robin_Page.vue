
<script setup>
  import Table from '../../../../ui/components/Table.vue';
  const agregar=()=>{
    console.log("agregar desde robin")
  }
</script>
<template>  
    <h1>Robin Page</h1>  
    <Table @add="agregar">
      <template v-slot:btnAdd>
        <button @click.Prevent="agregar"> button agregar</button>
      </template>
    </Table>
</template>