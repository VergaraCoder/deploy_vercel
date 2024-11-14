COMANDOS PARA DESPLIEGE EN VERCEL .

1- PARA INSTALAR LA CLI DE VERCEL Y PODER VISUALIZAR TODO EN VERCEL INSTALAMOS 
# npm install -g vercel

2- PARA VISUALIZAR LOS PROYECTOS QUE TENEMOS ACTIVOS USAMOS 
# vercel projects ls

3- UNA VEZ PODAMOS VER LOS PROYECTOS ACTIVOS SI QUEREMOS PAUSAR O DETENER EL PROYECTO DESPLEGADO HACEMOS 
# vercel rm NOMBRE_DEL_PROYECTO



________________________

PASOS PARA HACER DESPLIEGE EN VERCEL

1-ENTRAR EN LA WEB Y HACER EL CORRESPODIENETE LOGIN

LINK --->  https://vercel.com/login

2- ENTRAR EN LA SECCION DE OVERvIEW Y DARLE DONDE DICE :

- Add new -- project -- importar el repo deseado y poner las variables de entorno

_____________________________



CONFIGURACION INTERNA DEL BACK END 

1-DEBEMOS CREAR UN ARCHIVO LLAMADO <vercel.json> EN LA RAIZ DEL PROYECTO Y PONER LA SIGUIENTE CONFIGURACION

  {
    "version": 2,
    "builds": [
      { "src": "src/main.ts", "use": "@vercel/node" }
    ],
    "routes": [
      { "src": "/(.*)",
       "dest": "src/main.ts",
       "methods":[
        "GET",
        "POST",
        "PUT",
        "DELETE"
       ]
    }
    ]
  }
  
2- SUBIR TODOS ESTOS CAMBIOS A LA RAMA "master" o "main" PARA QUE LOS CAMBIOS PERSISTAN 

_____________________________



ALTERNATIVAS :

¿ POR ALGUNA RAZON NO DA EL DESPLIEGUE ?
SOLUCION: inicializa en npm run build 



