import {useAclaracionesStore} from '@/modules/aclaraciones/store/AclaracionesStore';
const useUi=()=>{
    const aclaracionesStore=useAclaracionesStore();
    const columns= aclaracionesStore.getTableOptions.columns;
    const rows=aclaracionesStore.getTableOptions.data;
    const title=aclaracionesStore.getTableOptions.title;
      return {
        columns,
        rows,title,
      }
    }
    export default useUi;