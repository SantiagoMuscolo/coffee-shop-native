import { AMERICANO, MACCHIATO, FLAT_WHITE, MILK_CHOCOLATE, MILK_COFFEE, AFFOGATO, ESPRESSO, ICE_LATTE, CAPUCCINO, MOCHA } from "../assets"

export default [
    {
      "nombre": "Americano",
      "descripcion": "Una taza de café negro diluido con agua caliente, similar en fuerza al café filtrado.",
      "origen": "Estados Unidos",
      "intensidad": "Media",
      "category": 2,
      "sabor": ["Suave", "Simple"],
      "preparacion": "5-8 mins",
      "imagen": AMERICANO
    },
    {
      "nombre": "Macchiato",
      "descripcion": "Un espresso con una pequeña cantidad de leche vaporizada o espuma de leche.",
      "origen": "Italia",
      "intensidad": "Alta",
      "category": 2,
      "sabor": ["Intenso", "Lechoso"],
      "preparacion": "15-18 mins",
      "imagen": MACCHIATO
    },
    {
      "nombre": "Flat White",
      "descripcion": "Similar a un latte pero con menos leche vaporizada y más espresso, creando una bebida más fuerte y concentrada.",
      "origen": "Australia",
      "intensidad": "Alta",
      "category": 0,
      "sabor": ["Rico", "Suave"],
      "preparacion": "8-12 mins",
      "imagen": FLAT_WHITE
    },
    {
      "nombre": "Café con Leche",
      "descripcion": "Una mezcla de café y leche caliente, típicamente a partes iguales.",
      "origen": "España",
      "intensidad": "Media",
      "category": 2,
      "sabor": ["Equilibrado", "Lechoso"],
      "preparacion": "12-18 mins",
      "imagen": MILK_COFFEE
    },
    {
      "nombre": "Affogato",
      "descripcion": "Una bola de helado de vainilla cubierto con un solo tiro de espresso caliente.",
      "origen": "Italia",
      "intensidad": "Media",
      "category": 1,
      "sabor": ["Dulce", "Refrescante"],
      "preparacion": "25-28 mins",
      "imagen": AFFOGATO
    },
    {
        "nombre": "Espresso",
        "descripcion": "Una pequeña cantidad de agua caliente se fuerza a través de granos de café finamente molidos para producir un espresso concentrado y sabroso.",
        "origen": "Italia",
        "intensidad": "Alta",
        "category": 2,
        "sabor": ["Fuerte", "Amargo"],
        "preparacion": "15-18 mins",
        "imagen": ESPRESSO
      },
      {
        "nombre": "Latte",
        "descripcion": "Un espresso suave con leche vaporizada y espuma de leche.",
        "origen": "Europa",
        "intensidad": "Media",
        "category": 1,
        "sabor": ["Suave", "Cremoso"],
        "preparacion": "15-28 mins",
        "imagen": ICE_LATTE
      },
      {
        "nombre": "Chocolate con leche",
        "descripcion": "Una mezcla de chocolate derretido y leche, a veces endulzada y aromatizada.",
        "origen": "Varios",
        "intensidad": "Baja",
        "category": 3,
        "sabor": ["Dulce", "Cremoso"],
        "preparacion": "5-8 mins",
        "imagen": MILK_CHOCOLATE
      },
      {
        "nombre": "Cappuccino",
        "descripcion": "Espresso mezclado con leche vaporizada y una capa espumosa de leche.",
        "origen": "Italia",
        "intensidad": "Media",
        "category": 0,
        "sabor": ["Equilibrado", "Espumoso"],
        "preparacion": "5-8 mins",
        "imagen": CAPUCCINO
      },
      {
        "nombre": "Mocha",
        "descripcion": "Una mezcla de espresso, chocolate y leche vaporizada, coronada con espuma de leche.",
        "origen": "Estados Unidos",
        "intensidad": "Media",
        "category": 0,
        "sabor": ["Dulce", "Chocolateado"],
        "preparacion": "15-18 mins",
        "imagen": MOCHA
      }
  ]
  