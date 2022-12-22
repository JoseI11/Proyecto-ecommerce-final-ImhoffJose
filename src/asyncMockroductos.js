const productos = [
    {
        id:'1',
        name:"Disco sólido interno Western Digital WD Green WDS240G2G0A 240GB verde",
        description:'Útil para guardar programas y documentos con su capacidad de 240 GB, resistente a fuertes golpes, almacenamiento de 2.5 ,Interfaz de conexión: SATA III,apto para PC y Notebook',
       
        category:'SSD',
        price:'7653',
        stock:25,
        img:'../images/Disco_de_estado_solido_wd.png'
    },
    {
        id:'2',
        name:"Disco sólido interno Kingston SA400S37/240G 240GB gris",
        description:' Con tecnología 3D NAND,util para guardar programas y documentos con su capacidad de 240 GB, resistente a fuertes golpes,almacenamiento de 2.5, interfaz de conexión: SATA III, apto para PC y Notebook. ',
        category:'SSD',
        price:'6499',
        stock:25,
        img:'../images/Disco_de_estado_solido_Kingston.png'
    },
    {
        id:'3',
        name:'Disco sólido interno Gigabyte GP-GSTFS31120GNTD 120GB negro',
        description:'Con tecnología 3D NAND,útil para guardar programas y documentos con su capacidad de 120 GB, resistente a fuertes golpes, tamaño de 2.5 ,es compatible con Windows 10,interfaz de conexión: SATA III,apto para PC y Notebook',
        category:'SSD',
        price:'6750',
        stock:25,
        img:'../images/Disco_gigabyte.png'
    },
    {
        id:'4',
        name:"Memoria RAM color verde 32GB 1 Crucial CT32G4SFD832A",
        description:'Optimizá el rendimiento de tu máquina con la tecnología DDR4,memoria con formato SODIMM,alcanza una velocidad de 3200 MHz,apta para notebooks cuenta con una tasa de transferencia de 25600 MB/s.',
        category:'MemRam',
        price:'49.900',
        stock:25,
        img:'../images/Memoria_ram_crucial_1.png'
    },
    {
        id:'5',
        name:"Memoria Ram 6ES7648-3AK00-0PA0 SIEMENS 8 gb",
        description:'Memoria de menor velocidad',
        category:'MemRam',
        price:'54822',
        stock:25,
        img:'../images/Memoria_ram_sodimm_1.png'
    },
    {
        id:'6',
        name:'Memoria Notebook Sodimm Ddr4 Corsair Vengeance 8gb 3200mhz',
        description:'Optimizá el rendimiento de tu máquina con la tecnología DDR4 SDRAM, memoria con formato SODIMM,alcanza una velocidad de 3200 MHz,apta para notebooks,línea Vengeance',
        category:'MemRam',
        price:'13.117',
        stock:25,
        img:'../images/Memoria_ram_vengeance_1.png'
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