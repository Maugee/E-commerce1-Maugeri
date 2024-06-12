const productos = [
    {
        id: "q1",
        nombre: "pizza",
        descripcion: "grande, marron, jamon",
        stock: 6,
        categoria: "pizza",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfsBI7wmPiLZMdDVCCufKT2J0gBjr_M9zlnA&s",
        precio: 600, 
    },
    {
        id: "w2",
        nombre: "lomo",
        descripcion: "carne, huevo, mayonesa",
        stock: 4,
        categoria: "lomo",
        imagen: "https://cdn.batitienda.com/baticloud/images/product_0b76ed54cd9f48e381e0663ef815c981_637502031612469862_0_m.png",
        precio: 400,
    },
    {
        id: "e3",
        nombre: "hamburguesa",
        descripcion: "xxl, bacon, cheddar",
        stock: 10,
        categoria: "hamburguesa",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/640px-Cheeseburger.jpg",
        precio: 500,
    },
    {
        id: "r4",
        nombre: "empanadas",
        descripcion: "arabe, jyq",
        stock: 20,
        categoria: "empanada",
        imagen: "https://cuk-it.com/wp-content/uploads/2020/05/empanadas-criollas-ig03.webp",
        precio: 300,
    }
]  

const obtenerProductos = ()=>{
    return new Promise((resolve, reject)=>{
    
    setTimeout(()=>{
        resolve(productos)
    }, 2000)
    })
}

export { obtenerProductos }