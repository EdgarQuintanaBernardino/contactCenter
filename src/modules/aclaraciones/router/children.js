
const children =[
    {
     path:'robin',
     name:'robin',
    component:()=>import('@/modules/aclaraciones/modules/robin/views/Robin_Page.vue')
    },    
    {
        path:'operaciones_tarjeta_fisica_virtual',
        name:'operaciones',
       component:()=>import('@/modules/aclaraciones/modules/tarjeta_fisica_virtual/views/T_Fisica_Virtual_Page.vue')
    },
    {
            path:'/cargando',
            component:()=>import('@/modules/ui/views/Loading.vue'),
            name:"cargando"
     }
];
export default children;