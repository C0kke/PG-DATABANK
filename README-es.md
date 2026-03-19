# DataBank — Guía rápida (español)

DataBank es una aplicación educativa full‑stack que simula operaciones bancarias y un sistema de detección de fraude. Está pensada para practicar conceptos de backend, frontend y bases de datos.

**Tecnologías principales**
- Backend: NestJS (TypeScript).
- Frontend: React + Vite (TypeScript).
- Bases de datos: MongoDB (documentos) y Neo4j (grafo).
- Contenerización: Docker + docker-compose.

**¿Para qué usa cada base de datos?**
- MongoDB: almacena usuarios, cuentas, tarjetas y registros de transacciones.
- Neo4j: modela relaciones entre entidades (ej.: transferencias) y permite detectar patrones de fraude con consultas Cypher.

**Archivos clave para revisar**
- Configuración de bases: [backend-data-bank/src/database/database.module.ts](backend-data-bank/src/database/database.module.ts)
- Servicio Neo4j: [backend-data-bank/src/database/neo4j/neo4j.service.ts](backend-data-bank/src/database/neo4j/neo4j.service.ts)
- Dependencias backend: [backend-data-bank/package.json](backend-data-bank/package.json)
- Dependencias frontend: [frontend-data-bank/package.json](frontend-data-bank/package.json)
- Orquestación: [docker-compose.yml](docker-compose.yml)

**Ejecutar el proyecto (rápido)**
1) Con Docker (recomendado para empezar):

```bash
docker-compose up --build
```

Esto levantará Neo4j (puertos 7474/7687), MongoDB (mapeado según `docker-compose.yml`) y el backend.

2) Ejecutar backend localmente (sin Docker):

```bash
cd backend-data-bank
npm install
npm run start:dev
```

3) Ejecutar frontend localmente:

```bash
cd frontend-data-bank
npm install
npm run dev
```

**Seeder (datos de ejemplo)**
Si quieres datos de prueba:

```bash
cd backend-data-bank
npm install
npm run seed
```

**Consejos para estudiantes**
- Empieza leyendo `database.module.ts` para ver cómo se conectan MongoDB y Neo4j.
- Levanta sólo el backend primero y prueba endpoints con Postman o los archivos `.http` en la carpeta `http request/`.
- Observa cómo el sistema usa Neo4j para detectar patrones (busca en `fraud-system/`).

Si quieres, puedo:
- Añadir una sección de «Ejercicios para la clase» con tareas prácticas.
- Generar diagramas simples de arquitectura.
- Crear un `README-es.md` más largo con pasos detallados para Windows.

---
