function simularVentasSemanales(nombreSemana, ventaDiariaBase, metaSemana) {
    console.log(`\n=== REPORTE DE VENTAS: ${nombreSemana} ===`);

    let totalVentas = 0;

    // 1. Ciclo FOR: Recorre 7 días de ventas acumuladas
    for (let dia = 1; dia <= 7; dia++) {
        let ventaDelDia = dia * ventaDiariaBase;
        totalVentas += ventaDelDia;
        console.log(`Día ${dia}: Venta = $${ventaDelDia.toLocaleString()} | Acumulado = $${totalVentas.toLocaleString()}`);
    }

    console.log(`Total acumulado en la semana: $${totalVentas.toLocaleString()}`);

    // 2. Condicional IF / ELSE IF / ELSE (3 Niveles de decisión)
    const ochentaPorCientoMeta = metaSemana * 0.8;

    if (totalVentas >= metaSemana) {
        console.log(`ESTADO: Meta cumplida ($${totalVentas.toLocaleString()} / $${metaSemana.toLocaleString()})`);
    } else if (totalVentas >= ochentaPorCientoMeta) {
        console.log(`ESTADO: Casi se logra ($${totalVentas.toLocaleString()} acumulados. Falta poco)`);
    } else {
        let cuantoFalta = metaSemana - totalVentas;
        console.log(`ESTADO: Falta bastante (Faltaron $${cuantoFalta.toLocaleString()} para la meta)`);
    }

    // 3. Ciclo WHILE con contador (Simulación de ventas extra hasta alcanzar bonificación)
    const metaExtra = metaSemana + 500000;
    let intentosExtra = 0;

    while (totalVentas < metaExtra) {
        totalVentas += 100000;
        intentosExtra++;
    }

    console.log(`Ventas extra requeridas para superar bonificación ($${metaExtra.toLocaleString()}): ${intentosExtra} ventas.`);
}


// CASO 1: Semana de Alta Demanda (Supera la meta de $1.000.000 COP)
simularVentasSemanales("Semana de Lanzamiento", 50000, 1000000);

// CASO 2: Semana Normal / Baja (No alcanza la meta de $2.500.000 COP)
simularVentasSemanales("Semana Regular", 30000, 2500000);


// 1. Declaración de dos arreglos paralelos (Nombres en plural y uso de const)
const productosGamer = [
    "Mouse Logitech G Pro X",
    "Teclado Aula F75 Max",
    "Mouse Attack Shark X11",
    "Teclado Wooting 80HE",
    "Mousepad Gamer XL"
];

const preciosGamer = [580000, 280000, 180000, 750000, 90000];

// 2. Modificación de arreglos: push (agregar) y pop (quitar)
productosGamer.push("Audífonos HyperX");
preciosGamer.push(350000); // Agrega al final

productosGamer.push("Silla Gamer Genérica");
preciosGamer.push(400000);

// Eliminamos el último elemento agregado para cumplir con el uso de pop
productosGamer.pop();
preciosGamer.pop();

// 3. Búsqueda con includes
const existeWooting = productosGamer.includes("Teclado Wooting 80HE");
console.log("¿Existe el teclado Wooting en inventario?:", existeWooting);

// 4. Filtrado con filter (Periféricos menores o iguales a $300,000 COP)
const preciosEconomicos = preciosGamer.filter(precio => precio <= 300000);
console.log("Precios económicos (<= 300000):", preciosEconomicos);

// 5. Transformación con map (Precios finales calculados con 19% IVA)
const preciosConIVA = preciosGamer.map(precio => Math.round(precio * 1.19));
console.log("Precios con IVA incluido (19%):", preciosConIVA);

// 6. Insertar la lista completa en la pantalla con forEach
const listaUI = document.getElementById("lista-inventario");

if (listaUI) {
    listaUI.innerHTML = ""; // Limpia el contenedor antes de renderizar
    productosGamer.forEach((producto, i) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.textContent = `${producto} — $${preciosGamer[i].toLocaleString()} COP (Con IVA: $${preciosConIVA[i].toLocaleString()} COP)`;
        listaUI.appendChild(li);
    });
}

// 7. Reto Extra: Pintar únicamente los productos filtrados en pantalla
const listaFiltradaUI = document.getElementById("lista-filtrada");

if (listaFiltradaUI) {
    listaFiltradaUI.innerHTML = "";
    productosGamer.forEach((producto, i) => {
        if (preciosGamer[i] <= 300000) {
            const li = document.createElement("li");
            li.className = "list-group-item list-group-item-success";
            li.textContent = `${producto} — $${preciosGamer[i].toLocaleString()} COP`;
            listaFiltradaUI.appendChild(li);
        }
    });
}




// 1. Función con validación booleana
function validarContrasena(clave) {
    return clave.length >= 6; // Retorna true si tiene 6 o más caracteres, false si no[cite: 62]
}

// 2. Función con 2 parámetros y return
function calcularDescuento(precio, porcentaje) {
    const rebaja = (precio * porcentaje) / 100;
    return precio - rebaja; // Retorna el precio con el descuento aplicado[cite: 62]
}

// 3. Función flecha
const aplicarIVA = precio => Math.round(precio * 1.19); // Retorna el precio mas 19% de IVA[cite: 60, 63]

// 4. Función que conecta y llama a otra función (incluye condicional if)
function registrarUsuarioGamer(usuario, clave) {
    // Llama a la función de validación booleana[cite: 63]
    if (!validarContrasena(clave)) {
        return `Error: La contraseña de ${usuario} es muy corta (mínimo 6 caracteres).`; //[cite: 63]
    }
    return `¡Bienvenido ${usuario}! Tu cuenta Gamer ha sido registrada con éxito.`; //[cite: 63]
}


console.log("=== SISTEMA DE FUNCIONES MUNDO GAMING ===");

// Prueba 1: Validación Booleana (2 casos)
console.log("Validar clave '12345':", validarContrasena("12345")); // false[cite: 62]
console.log("Validar clave 'gamerPass2026':", validarContrasena("gamerPass2026")); // true[cite: 62]

// Prueba 2: Función con 2 parámetros (2 casos)
console.log("Mouse Logitech ($580,000 con 10% desc.):", calcularDescuento(580000, 10)); // 522000[cite: 62]
console.log("Teclado Aula ($280,000 con 15% desc.):", calcularDescuento(280000, 15)); // 238000[cite: 62]

// Prueba 3: Función Flecha (2 casos)
console.log("Precio final con IVA ($100,000):", aplicarIVA(100000)); // 119000[cite: 63]
console.log("Precio final con IVA ($450,000):", aplicarIVA(450000)); // 535500[cite: 63]

// Prueba 4: Conexión entre funciones (2 casos)
console.log(registrarUsuarioGamer("Mateo", "abc")); // Caso fallido[cite: 63]
console.log(registrarUsuarioGamer("Carlos", "securePass123")); // Caso exitoso[cite: 63]

// 5. Aplicar .filter() sobre un array de al menos 4 elementos
const listaClaves = ["123", "passwordGamer", "sol", "admin2026", "xy"];
const clavesValidas = listaClaves.filter(clave => validarContrasena(clave)); // Filtra según la función de validación[cite: 63]

console.log("Lista completa de contraseñas:", listaClaves);
console.log("Contraseñas válidas filtradas (>= 6 caracteres):", clavesValidas); // ['passwordGamer', 'admin2026'][cite: 63]