import aclaraciones from "@/modules/aclaraciones/router";
const configRoutes=()=>{
    return [
        {
        ...aclaraciones,
         },
         //improvisado aqui debe de ir otros modulos completos
         {
            path:'/',
            component:()=>import('../views/HomeView.vue')
         }
    ];
};
export default configRoutes;