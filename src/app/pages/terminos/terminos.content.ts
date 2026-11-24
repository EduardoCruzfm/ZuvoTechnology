import { LegalDocument } from '../../components/legal-layout/legal-document.model';

/**
 * TÉRMINOS Y CONDICIONES GENERALES DE USO — ZUVO TECHNOLOGY
 *
 * Fuente: terminos_y_condiciones_zuvo-v2.pdf (BORRADOR en revisión legal).
 * Para actualizar el texto, editar únicamente este archivo.
 * El texto en negrita del documento original se marca con **dobles asteriscos**.
 * Se omitió una nota en inglés al pie del PDF que no forma parte de los Términos.
 */
export const TERMINOS: LegalDocument = {
  heading: ['Términos y Condiciones Generales de Uso', 'Zuvo Technology'],

  intro: [
    'Los presentes Términos y Condiciones Generales (en adelante, los "Términos") regulan el acceso y uso de la aplicación móvil, sitio web y plataforma tecnológica (en adelante, la "Plataforma") provista por **Zuvo Technology** (en adelante, "Zuvo").',
    'Al registrarse y utilizar la Plataforma, usted (en adelante, el "Usuario", "Conductor" o "Profesional Médico", según corresponda) acepta de manera expresa, voluntaria e irrevocable la totalidad de las cláusulas aquí descritas. Si no está de acuerdo con estos Términos, deberá abstenerse de descargar, registrarse o utilizar la Plataforma.',
  ],

  sections: [
    {
      number: '1',
      title: 'Naturaleza de los Servicios y Multiplataforma',
      items: [
        '**Plataforma de Intermediación Tecnológica:** Zuvo es una empresa de tecnología que ofrece un ecosistema digital de intermediación. La Plataforma no es una empresa de transporte ni una institución prestadora de servicios de salud o medicina prepaga.',
        '**Servicios de Movilidad:** La Plataforma conecta a Usuarios que requieren traslados con proveedores independientes de transporte que operan por cuenta propia (en adelante, "Conductores"). Zuvo no presta servicios de transporte, no posee flota propia ni mantiene relación laboral con los Conductores.',
        '**Servicios de Telemedicina:** La Plataforma facilita un canal de comunicación remota para conectar a Usuarios pacientes con médicos independientes debidamente matriculados (en adelante, "Profesionales Médicos") para realizar teleconsultas.',
      ],
    },
    {
      number: '2',
      title: 'Términos Específicos para Profesionales Médicos (Telemedicina)',
      items: [
        '**Independencia y Autonomía Profesional:** Los Profesionales Médicos que utilizan la Plataforma actúan de manera totalmente independiente, autónoma y bajo su exclusiva responsabilidad civil, penal y administrativa. No existe relación de dependencia laboral, sociedad ni mandato entre Zuvo y los Profesionales Médicos.',
        '**Habilitación y Matrícula Vigente:** Para registrarse y ofrecer servicios de telemedicina en Zuvo, el Profesional Médico declara y garantiza contar con título universitario habilitante y matrícula profesional (nacional y/o provincial) vigente, activa y sin sanciones disciplinarias que le impidan ejercer la medicina en la República Argentina. Zuvo se reserva el derecho de verificar dicha documentación periódicamente y suspender cuentas ante cualquier irregularidad.',
        '**Criterio Médico Exclusivo:** El Profesional Médico conserva absoluta libertad e independencia de criterio clínico para diagnosticar, orientar, prescribir tratamientos o emitir recetas electrónicas conforme a la normativa vigente (Ley N° 27.553 de Recetas Electrónicas o Digitales y normas complementarias). Zuvo no interfiere, condiciona ni supervisa las decisiones médicas.',
        '**Alcance de la Teleconsulta y Limitaciones:** El Profesional Médico se compromete a evaluar en cada sesión si la consulta es apta para ser resuelta de forma remota. Ante cuadros de urgencia, emergencia médica o situaciones que requieran examen físico presencial, el Profesional Médico deberá derivar de inmediato al paciente a un centro asistencial presencial.',
        '**Deber de Confidencialidad y Secreto Médico:** El Profesional Médico está obligado a guardar estricto secreto profesional respecto de toda información clínica, diagnósticos, imágenes y datos sensibles a los que acceda mediante la Plataforma, utilizando entornos privados y seguros durante las videollamadas.',
        '**Honorarios y Facturación:** Los Profesionales Médicos percibirán los honorarios correspondientes por las consultas efectivamente realizadas, descontando las tarifas por uso de tecnología e intermediación acordadas con Zuvo. El Profesional Médico es único responsable por el cumplimiento de sus obligaciones tributarias, previsionales y emisión de comprobantes fiscales a los pacientes.',
      ],
    },
    {
      number: '3',
      title: 'Registro de Cuenta y Elegibilidad de Usuarios',
      items: [
        '**Capacidad Legal:** Para registrarse en la Plataforma se debe contar con al menos 18 años de edad y capacidad legal para contratar conforme a las leyes de la República Argentina.',
        '**Veracidad de los Datos:** El titular de la cuenta se compromete a suministrar información exacta, completa y actualizada (nombre completo, DNI, teléfono, correo electrónico y medio de pago válido).',
        '**Seguridad de Credenciales:** La cuenta es personal e intransferible. Cada Usuario, Conductor o Profesional Médico es responsable de mantener la confidencialidad de su contraseña y de toda actividad realizada desde su perfil.',
      ],
    },
    {
      number: '4',
      title: 'Condiciones Generales de Uso y Conducta',
      items: [
        '**Uso Lícito y Respetuoso:** Todos los integrantes de la comunidad Zuvo deben mantener un trato cordial y respetuoso. Queda estrictamente prohibido cualquier acto de violencia, acoso, discriminación o uso de la Plataforma para actividades ilícitas.',
        '**Prohibiciones en Movilidad:** En los servicios de transporte está prohibido trasladar sustancias ilegales, armas o materiales peligrosos. Los daños materiales o suciedad extraordinaria ocasionados por un Usuario en el vehículo podrán ser cobrados a su método de pago registrado.',
        '**Uso Adecuado de Telemedicina:** Los Usuarios pacientes se comprometen a brindar información veraz sobre sus síntomas y antecedentes clínicos, comprendiendo que la telemedicina no reemplaza una guardia médica ante emergencias con riesgo de vida.',
      ],
    },
    {
      number: '5',
      title: 'Tarifas, Pagos y Cancelaciones',
      items: [
        '**Cálculo de Tarifas:** En movilidad, el valor se calcula mediante algoritmos según distancia, tiempo, demanda y peajes. En telemedicina, el valor de la consulta se informará previamente al Usuario antes de confirmar el turno o la atención inmediata.',
        '**Medios de Pago:** Los pagos se procesan a través de tarjetas de crédito, débito, billeteras virtuales autorizadas o efectivo (cuando corresponda en movilidad).',
        '**Cancelaciones:** Zuvo podrá aplicar cargos por cancelación tardía o inasistencia tanto en viajes solicitados como en turnos médicos programados.',
      ],
    },
    {
      number: '6',
      title: 'Limitación de Responsabilidad',
      items: [
        '**Disponibilidad Tecnológica:** Zuvo procura mantener la Plataforma operativa de forma continua, pero no garantiza la ausencia absoluta de interrupciones técnicas, fallas de conectividad o disponibilidad inmediata de Conductores o Profesionales Médicos.',
        '**Responsabilidad por Prestaciones de Terceros:** Zuvo actúa únicamente como intermediario tecnológico. En consecuencia, no asume responsabilidad por daños, perjuicios, mala praxis médica, errores de diagnóstico o incidentes ocurridos durante la prestación del servicio de transporte o de atención médica, los cuales recaen exclusivamente sobre el Conductor o el Profesional Médico interviniente, sin perjuicio de los seguros obligatorios y de responsabilidad profesional que cada prestador debe mantener vigentes.',
      ],
    },
    {
      number: '7',
      title: 'Protección de Datos Personales (Ley N° 25.326 - Argentina)',
      paragraphs: [
        'En estricto cumplimiento de la **Ley N° 25.326 de Protección de Datos Personales** de la República Argentina, sus normas reglamentarias y disposiciones sobre datos sensibles de salud, se informa lo siguiente:',
      ],
      items: [
        '**Responsable de la Base de Datos:** Zuvo Technology es responsable del tratamiento y resguardo de los datos personales recolectados a través de la Plataforma.',
        '**Finalidad y Datos Sensibles:** Los datos personales se recaban para gestionar la intermediación de movilidad, coordinar consultas de telemedicina, procesar pagos y brindar soporte técnico. Los datos relativos a la salud tienen carácter de **datos sensibles** y cuentan con niveles reforzados de cifrado y confidencialidad, siendo accesibles únicamente para el paciente y el Profesional Médico interviniente.',
        '**Derechos de los Titulares (Derechos ARCO):** El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley N° 25.326. Asimismo, podrá solicitar la rectificación, actualización o supresión de sus datos cuando corresponda.',
        '**Órgano de Control:** La **Agencia de Acceso a la Información Pública (AAIP)**, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al cumplimiento de las normas sobre protección de datos personales.',
        '**Medidas de Seguridad:** Zuvo implementa protocolos técnicos y organizativos avanzados para garantizar la integridad, confidencialidad y seguridad de la información, evitando su adulteración, pérdida, consulta o tratamiento no autorizado.',
      ],
    },
    {
      number: '8',
      title: 'Modificaciones, Suspensión y Jurisdicción',
      items: [
        '**Actualizaciones:** Zuvo podrá modificar estos Términos en cualquier momento notificando a través de la Plataforma. El uso posterior implica la aceptación de las nuevas condiciones.',
        '**Suspensión de Cuentas:** Zuvo podrá suspender o cancelar definitivamente cuentas que incumplan estos Términos, sin derecho a indemnización.',
        '**Ley Aplicable y Jurisdicción:** Estos Términos se rigen por las leyes de la República Argentina. Ante cualquier controversia derivada de su interpretación o ejecución, las partes se someten a la jurisdicción de los Tribunales Ordinarios competentes de la Ciudad Autónoma de Buenos Aires.',
      ],
    },
  ],

  closing: ['Zuvo Technology — Plataforma de Movilidad y Telemedicina.'],
};
