<template>
  <div class="q-pa-md">
    <slot name="btnAdd">
      <q-btn         
      color="dark" 
       icon="my_location" 
       label="Add" 
       @click.Prevent="$emit('add')"
        />
    </slot> 
    <q-table
      :title="title"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>
<script>
import useUi from '../composables/useUi';
export default {
  emits:['add'],
  setup () { 
    return{...useUi(),}
  }
}
</script>