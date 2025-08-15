# electivos-backend

electivos-backend

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

# Documentación de Entidades - Sistema de Gestión de Cursos Electivos

Este documento describe las entidades principales del sistema, sus campos, tipos de datos y relaciones.

---

## 1. **Student**

Representa a un estudiante del colegio.

| Campo     | Tipo   | Descripción                        |
| --------- | ------ | ---------------------------------- |
| id        | string | Identificador único del estudiante |
| name      | string | Nombre completo                    |
| level     | string | Nivel o curso al que pertenece     |
| email     | string | Correo electrónico                 |
| createdAt | Date   | Fecha de creación                  |
| updatedAt | Date   | Fecha de última actualización      |

---

## 2. **Teacher**

Representa a un profesor.

| Campo     | Tipo   | Descripción                      |
| --------- | ------ | -------------------------------- |
| id        | string | Identificador único del profesor |
| name      | string | Nombre completo                  |
| email     | string | Correo electrónico               |
| createdAt | Date   | Fecha de creación                |
| updatedAt | Date   | Fecha de última actualización    |

---

## 3. **Course**

Representa un curso electivo.

| Campo             | Tipo    | Descripción                              |
| ----------------- | ------- | ---------------------------------------- |
| id                | string  | Identificador único del curso            |
| name              | string  | Nombre del curso                         |
| description       | string  | Descripción del curso                    |
| capacity          | number  | Cupo máximo del curso                    |
| currentEnrollment | number  | Número actual de estudiantes inscritos   |
| periodId          | string  | ID del período al que pertenece el curso |
| teacherId         | string  | ID del profesor asignado                 |
| teacherName       | string  | Nombre del profesor asignado             |
| isActive          | boolean | Indica si el curso está activo           |
| createdAt         | Date    | Fecha de creación                        |
| updatedAt         | Date    | Fecha de última actualización            |

**Relaciones:**

- Pertenece a un período (`Period`)
- Relacionado con estudiantes mediante `StudentCourse`
- Puede tener asistencia registrada en `Attendance`

---

## 4. **Period**

Representa un período de inscripción o académico.

| Campo     | Tipo    | Descripción                      |
| --------- | ------- | -------------------------------- |
| id        | string  | Identificador único del período  |
| name      | string  | Nombre del período               |
| startDate | Date    | Fecha de inicio                  |
| endDate   | Date    | Fecha de término                 |
| isActive  | boolean | Indica si el período está activo |
| createdAt | Date    | Fecha de creación                |
| updatedAt | Date    | Fecha de última actualización    |

**Relaciones:**

- Cursos (`Course`) pertenecen a un período
- Inscripciones y asistencia están vinculadas al período

---

## 5. **StudentCourse**

Entidad intermedia que vincula estudiantes con cursos.

| Campo     | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| id        | string | Identificador único           |
| studentId | string | ID del estudiante             |
| courseId  | string | ID del curso                  |
| periodId  | string | ID del período                |
| createdAt | Date   | Fecha de creación             |
| updatedAt | Date   | Fecha de última actualización |

**Relaciones:**

- Many-to-Many entre `Student` y `Course`
- Permite controlar solapamiento de horarios y máximo de cursos

---

## 6. **Enrollment**

Registro de intentos de inscripción y estados (pendiente, aprobado, rechazado).

| Campo     | Tipo   | Descripción                                                |
| --------- | ------ | ---------------------------------------------------------- |
| id        | string | Identificador único                                        |
| studentId | string | ID del estudiante                                          |
| courseId  | string | ID del curso                                               |
| periodId  | string | ID del período                                             |
| status    | string | Estado de la inscripción (`pending / approved / rejected`) |
| createdAt | Date   | Fecha de creación                                          |
| updatedAt | Date   | Fecha de última actualización                              |

---

## 7. **Attendance**

Registra la asistencia de estudiantes y profesores por sesión de curso.

| Campo             | Tipo    | Descripción                                                |
| ----------------- | ------- | ---------------------------------------------------------- |
| id                | string  | Identificador único                                        |
| courseId          | string  | ID del curso                                               |
| periodId          | string  | ID del período                                             |
| date              | Date    | Fecha de la sesión                                         |
| teacherPresent    | boolean | Indica si el profesor asistió                              |
| studentAttendance | array   | Array de objetos `{ studentId: string; present: boolean }` |
| notes             | string  | Observaciones adicionales                                  |
| createdAt         | Date    | Fecha de creación                                          |
| updatedAt         | Date    | Fecha de última actualización                              |

**Relaciones:**

- Vinculada a `Course`, `Period`, `Student` y `Teacher`

---

## **Resumen de Relaciones Clave**

- **Student ↔ Course** → `StudentCourse` (Many-to-Many)
- **Course ↔ Period** → Cada curso pertenece a un período (Many-to-One)
- **Attendance ↔ Course / Student / Teacher** → Registro de asistencia por sesión
- **Enrollment ↔ Student / Course / Period** → Flujo de inscripción con estados

---
