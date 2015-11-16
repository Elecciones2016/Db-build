# Diccionario de datos

## Senadores

![modelo de datos - new page](https://cloud.githubusercontent.com/assets/5105812/11173694/66b565d6-8bf8-11e5-9f15-0eac2c0ed97c.png)


A continuación se presenta un ejemplo para cada colección de la base de datos. Es necesario considerar

* _no se han considerado todos los datos para el caso de arreglos_
* **_los datos son reales_**
* _la base de datos no es necesariamente igual que la API o los archivos `.json` generados_

### Sesion

    {
      "_id" : 123124342,
      "legislatura" : 363,
      "numero" : 69,
      "tipo" : "ordinaria",
      "fecha" : ISODate("2015-11-11")
    }

### Comision

    {
      "_id" : 123123123,
      "nombre" : "de Educación y Cultura",
      "senadores" : [
          5002921,
          1111111,
          2222222,
          4444444
        ],
      "presidente" : {
        "nombre" : "Quintana Leal, Jaime",
        "rut" : 33333333
      },
      "secretario" : {
        "nombre" : "Vives , Francisco",
        "rut" : 6666666
      }
    }

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
            "comision_id" : 123123123,
            "total" : 25,
            "asiste" : 21,
            "justifica" : null
          },
          {
            "legislatura" : 363,
            "total" : 71,
            "asiste" : 68,
            "justifica" : 0
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
