import os
from tabulate import tabulate
import requests

def iniciar():
    os.system('cls')
    while True:
        print('Selecionar una opcion: ')
        print('1- Registrar movimiento')
        print('2- Ver todos los movimientos')
        print('3- Buscar un movimiento')
        print('4- Modificar movimientos')
        print('5- Eliminar movimiento')
        print('6- Salir')

        opcion = input('Ingrese una opcion: ')
        if opcion == '1':
            nuevo_movimiento()
        elif opcion == '2':
            mostrar_movimiento()
        elif opcion == '3':
            buscar_movimiento()
        elif opcion == '4':
            modi_movimiento()
        elif opcion == '5':
            eliminar_movimiento()
        elif opcion == '6':
            print('Gracias regrese pronto')
            break

def nuevo_movimiento():
    print('Ingreso')
    print('Gasto')
    tipo = input('Ingrese el tipo de movimiento: ')
  
    cantidad = input('Ingrese la cantidad: ')
    fecha = input('Ingrese la fecha: ')
    data = {'tipo':tipo, 'cantidad':cantidad,'fecha':fecha }
    respuesta = requests.post(url='http://localhost:3000/movimientos/registrar', data = data)
    print(respuesta.text)

iniciar()