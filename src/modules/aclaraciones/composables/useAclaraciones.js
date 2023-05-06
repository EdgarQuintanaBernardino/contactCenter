import {useAclaracionesStore} from '@/modules/aclaraciones/store/AclaracionesStore';
import {useRouter} from 'vue-router';
const useAclaraciones=()=>{
const router=useRouter();
const aclaracionesStore=useAclaracionesStore();

const getComents=async()=>{
    const data= await aclaracionesStore.getDataDummy();
    aclaracionesStore.setTableOptions('data',data);  
    aclaracionesStore.setTableOptions('columns',aclaracionesStore.columnsComents);
    aclaracionesStore.setTableOptions('title','Coments');
    aclaracionesStore.set('loading',false);
  
}
const getPost=async()=>{
    const data= await aclaracionesStore.getDataPost();
    aclaracionesStore.setTableOptions('data',data);  
    aclaracionesStore.setTableOptions('columns',aclaracionesStore.columnsPosts);
    aclaracionesStore.setTableOptions('title','Post');
    aclaracionesStore.set('loading',false);
      
}
const changePost=async()=>{
    aclaracionesStore.set('loading',true);
    aclaracionesStore.set('typeLoading','hourglass');
    await getPost().then(e=>router.push({name:'operaciones'}));   
}
const changeComents=async()=>{
    aclaracionesStore.set('loading',true);
    aclaracionesStore.set('typeLoading','cube');
    await getComents().then(e=>router.push({name:'robin'}));   
}
return{
    getPost,getComents,changePost,changeComents
}
}
export default useAclaraciones;
