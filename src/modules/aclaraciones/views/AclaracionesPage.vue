
<template>
    <div class="q-pa-md q-gutter-sm">
        <q-btn         
        color="purple" 
         icon="my_location" 
         label="Robin" 
         @click.Prevent="changeComents"
        />       
         <q-btn         
         color="secondary" 
         icon="navigation" 
         label="Tarjeta Fisica"
         @click.Prevent="changePost"
         />
        </div> 
      
       <div  v-if="store.getLoading" class="flex flex-center">         
         <q-spinner-gears color="cyan"  size="5.5em" v-if="store.getLoadingType=='cube'"/> 
         <q-spinner-hourglass color="purple" size="4em" v-if="store.getLoadingType=='hourglass'"   />        
       </div>
          <router-view v-else></router-view>
      

</template>
<script>
import useAclaraciones from '@/modules/aclaraciones/composables/useAclaraciones';
import {useAclaracionesStore} from '@/modules/aclaraciones/store/AclaracionesStore';
const store=useAclaracionesStore();
export default {
  setup(){
    return{
      ...useAclaraciones(),
      store,
    }
  },
}
</script>