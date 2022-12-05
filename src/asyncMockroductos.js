const productos = [
    {
        id:'1',
        name:"Disco de estado solido WD",
        description:'Disco de mayor velocidad y mayor capacidad',
        category:'SSD',
        price:'$1500',
        img:'../images/Disco_de_estado_solido_wd.png'
    },
    {
        id:'2',
        name:"Disco de estado solido Kingston",
        description:'Disco de mayor velocidad y menor capacidad',
        category:'SSD',
        price:'$2000',
        img:'../images/Disco_de_estado_solido_Kingston.png'
    },
    {
        id:'3',
        name:"Memoria RAM Crucial de 32 gb",
        description:'Memoria de mayor velocidad',
        category:'MemRam',
        price:'$5000',
        img:'../images/Memoria_ram_crucial_1.png'
    },
    {
        id:'4',
        name:"Memoria RAM Siemens de 8 gb",
        description:'Memoria de menor velocidad',
        category:'MemRam',
        price:'$5000',
        img:'../images/Memoria_ram_sodimm_1.png'
    }
];

export const getProductos1=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(productos)
        },2000)
    })
}
export const getProductos1byid=(id)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(productos.find( prod=> prod.id === id))
        },2000)
    })
}
export const getCategorybyid=(categoryId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(productos.filter( prod=> prod.category === categoryId))
        },2000)
    })
}