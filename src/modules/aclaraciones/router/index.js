import children from './children';
const aclaraciones={
    path:'/aclaraciones',
    meta:{label:'Aclaraciones'},
    name:'aclaraciones',
    component:()=>import('@/modules/aclaraciones/views/AclaracionesPage.vue'),
    children,
}
export default aclaraciones;