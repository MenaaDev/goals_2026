

# =====================================================
# 1. int (ENTEROS - INMUTABLE)
# =====================================================
# - Números enteros
# - Precisión arbitraria (no hay overflow)
# - Inmutable

edad = 30
poblacion = 123456789012345678901234567890

print(edad)
print(poblacion)

# Inmutabilidad
x = 10
y = x
y = 20

print(x)  # 10
print(y)  # 20


# =====================================================
# 2. float (DECIMALES - INMUTABLE)
# =====================================================
# - Usa IEEE 754 (igual que JS)
# - Puede tener errores de precisión

precio = 99.99
total = 0.1 + 0.2

print(precio)
print(total)  # 0.30000000000000004

# Forma segura de trabajar decimales
total_seguro = round(0.1 + 0.2, 2)
print(total_seguro)


# =====================================================
# 3. str (TEXTO - INMUTABLE)
# =====================================================
# - Secuencia de caracteres Unicode
# - Inmutable

nombre = "Osmar"
saludo = f"Hola {nombre}"

print(nombre)
print(saludo)

# Intento de mutación (NO FUNCIONA)
# nombre[0] = "o"  # ❌ TypeError


# =====================================================
# 4. bool (BOOLEANOS)
# =====================================================
# - True / False
# - Subclase de int (True = 1, False = 0)

es_activo = True
es_admin = False

print(es_activo + es_admin)  # 1

# Truthy / Falsy en Python
# Falsy:
# False, 0, 0.0, "", None, [], {}, set()

if "false":
    print("Esto se ejecuta")


# =====================================================
# 5. None (AUSENCIA DE VALOR)
# =====================================================
# - Equivalente a null
# - Representa "nada"

usuario = None
print(usuario)

# Comparación correcta
print(usuario is None)  # True


# =====================================================
# 6. list (MUTABLE)
# =====================================================
# - Colección ordenada
# - Permite duplicados
# - Mutable

numeros = [1, 2, 3]
numeros.append(4)

print(numeros)

# Copia correcta (NO referencia)
nueva_lista = numeros.copy()
nueva_lista.append(5)

print(numeros)
print(nueva_lista)


# =====================================================
# 7. tuple (INMUTABLE)
# =====================================================
# - Colección ordenada
# - Inmutable
# - Más segura que list

coordenadas = (10, 20)
print(coordenadas)


# =====================================================
# 8. dict (MUTABLE)
# =====================================================
# - Pares clave-valor
# - Mutable

persona = {
    "nombre": "Osmar",
    "edad": 30
}

persona["edad"] = 31
print(persona)


# =====================================================
# 9. set (MUTABLE)
# =====================================================
# - Elementos únicos
# - No ordenados

numeros_unicos = {1, 2, 3, 3}
numeros_unicos.add(4)

print(numeros_unicos)


# =====================================================
# 10. PASO POR ASIGNACIÓN DE REFERENCIA
# =====================================================

def modificar_lista(lista):
    lista.append(99)

lista_original = [1, 2, 3]
modificar_lista(lista_original)

print(lista_original)  # [1, 2, 3, 99] 😱


# Forma segura (inmutable)
def modificar_lista_seguro(lista):
    return lista + [99]

lista_nueva = modificar_lista_seguro(lista_original)
print(lista_nueva)


# =====================================================
# 11. type() y isinstance()
# =====================================================

print(type(10))
print(type("hola"))

print(isinstance(10, int))
print(isinstance([], list))


# =====================================================
# 12. RESUMEN MENTAL (CLAVE)
# =====================================================

"""
INMUTABLES:
- int
- float
- bool
- str
- tuple
- None

MUTABLES:
- list
- dict
- set

REGLAS SENIOR:
- Nunca mutar argumentos sin avisar
- Usar copias para listas y dicts
- is None, no ==
- Python NO hace coerción peligrosa
"""
