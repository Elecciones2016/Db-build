# Diccionario de datos

## Senadores

![senadores](https://cloud.githubusercontent.com/assets/5105812/11071729/13c41736-87c1-11e5-869c-c4ff3f0a4ef8.png)

A continuación se presenta un ejemplo para cada colección de la base de datos. Es necesario considerar

* _no se han considerado todos los datos para el caso de arreglos_
* **_los datos son reales_**
* _la base de datos no es necesariamente igual que la API o los archivos `.json` generados_

### Sesion
### Comision
### Senadores

    {
      "_id" : 5002921,
      "nombre" : "Allamand Zavala, Andrés",
      "rut" : "5002921-2",
      "region" : "Región Metropolitana ",
      "circunscripcion" : 7,
      "telefono" : "(56-32) 2504701",
      "mail" : "allamand@senado.cl",
      "asistencia" : [
          {
            "fecha" : ISODate("2015-11-11"),
            "lugar" : "Sala de Sesiones (Valparaiso)",
            "sala" : "Sesion 69 Legislatura 363",
            "comision" : null
          },
          {
            "fecha" : ISODate("2015-11-11"),
            "lugar" : "Sala N° 8, (Valparaíso)",
            "sala" : null,
            "comision" : "de Educación y Cultura"
          },
          {
            ...
          }
        ],
      "votos" : [
          {
            "fecha" : ISODate("2015-11-10"),
            "tema" : "Indicación para reemplazar la letra b) del artículo único propuesto por la Comisión de Salud",
            "voto" : "Si",
            "partido" : "Si"
          },
          {
            ...
          }
        ],
      "campaign" : {
          "gastos" : [
            {
              "estado" : "Aprobada",
              "proveedor" : {
                "rut" : "84383200-8",
                "nombre" : "PROCOM PUBLICIDAD VI A PUBLICA LIMITADA"
              },
              "fecha" : ISODate("2013-11-19"),
              "documento" : {
                "tipo" : "FA",
                "descripcion" : "Factura Afecta a IVA",
                "numero" : 92716
              },
              "descripcion" : "Propaganda",
              "glosa" : "PUBLICIDAD CONTRATADA EN VIA PUBLICA CAMPAÑA ELECCIONES PARL",
              "monto" : 392700
            },
            {
              ...
            }
          ],
          "ingresos" : [
            {
              "estado" : "Aprobada",
              "proveedor" : {
                "rut" : null,
                "nombre" : ""
              },
              "fecha" : null,
              "documento" : {
                "tipo" : null,
                "descripcion" : "",
                "numero" : 0
              },
              "descripcion" : "Aportes Reservado",
              "glosa" : "APORTES RESERVADO",
              "monto" : 493385936
            },
            {
              ...
            }
          ]
        },
      "elecciones" : {
        "votos" : 240483,
        "padron" : 2682475,
        "poblacion" : 3563424,
        "porcentaje-padron" : 8.9649670547,
        "porcentaje-poblacion" : 6.7486496134
      }

    }

### Partido
