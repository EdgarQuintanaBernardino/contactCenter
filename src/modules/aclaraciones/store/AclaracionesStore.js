import { defineStore } from 'pinia'
import { GetComents,GetPost } from '../services/servicios';
export const useAclaracionesStore = defineStore({
    id:"Aclaraciones",
    state:()=>({
         columnsComents:[
            {
              name:'postId',
              label:'Post Id',
              field:'postId',
            },
            {
              name:'id',
              label:'Id',
              field:'id',
            },
            {
              name:'name',
              label:'Name',
              field:'name',
            },
            {
              name:'email',
              label:'Correo',
              field:'email',
            },
            {
              name:'body',
              label:'contenido',
              field:'body',
            }    
          ],
          columnsPosts:[
            {
              name:'userId',
              label:'User Id',
              field:'userId'
            },
            {
              name:'id',
              label:'Id',
              field:'id'
            },
            {
              name:'title',
              label:'Titulo',
              field:'title'
            },
            {
              name:'body',
              label:'contenido',
              field:'body'
            }    
          ],
          loading:false,
          typeLoading:'cube',  
        tableOptions:{
            data:[],
            columns:[],
            actions:['Ver Detalles'],
            title:'',
        },
    
        btnAdd:{
            label:'Nuevo Ticket',
            bgColor:'primary',
            color:'white',          
        },

    }),
    getters:{
        getTableOptions:(state)=>{
            return state.tableOptions;
        },
        getLoading:(state)=>{
          return state.loading;
        },
        getLoadingType:(state)=>{
          return state.typeLoading;
        }
    },
    actions:{
        setTableOptions(name,payload){
            this.tableOptions[name]=payload;
        },
        async getDataDummy(){
           return await GetComents().then(e=>e);                          
        },
        async getDataPost(){
            return await GetPost().then(e=>e);                           
         },
         set(key,payload){
          this[key]=payload;
         }

    }
})