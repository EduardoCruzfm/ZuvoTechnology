import { LegalDocument } from '../../components/legal-layout/legal-document.model';

/**
 * TÉRMINOS Y CONDICIONES GENERALES DE USO — ZUVO TECHNOLOGY
 *
 * Fuente: terminos_y_condiciones_zuvo-v2.pdf (BORRADOR en revisión legal), con dos
 * cambios pedidos por la empresa (SCRUM-166), provisorios hasta adaptar estos
 * Términos a los de la app:
 * - Sin telemedicina: por ahora no forma parte del servicio.
 * - Con envíos: la cláusula 2 y sus menciones en las cláusulas 1, 4, 5, 6 y 7 se
 *   redactaron para la web, según cómo funcionan los envíos en la app.
 * Para actualizar el texto, editar únicamente este archivo.
 * El texto en negrita del documento original se marca con **dobles asteriscos**.
 * Se omitió una nota en inglés al pie del PDF que no forma parte de los Términos.
 */
export const TERMINOS: LegalDocument = {
  heading: ['Términos y Condiciones Generales de Uso', 'Zuvo Technology'],

  intro: [
    'Los presentes Términos y Condiciones Generales (en adelante, los "Términos") regulan el acceso y uso de la aplicación móvil, sitio web y plataforma tecnológica (en adelante, la "Plataforma") provista por **Zuvo Technology** (en adelante, "Zuvo").',
    'Al registrarse y utilizar la Plataforma, usted (en adelante, el "Usuario" o "Conductor", según corresponda) acepta de manera expresa, voluntaria e irrevocable la totalidad de las cláusulas aquí descritas. Si no está de acuerdo con estos Términos, deberá abstenerse de descargar, registrarse o utilizar la Plataforma.',
  ],

  sections: [
    {
      number: '1',
      title: 'Naturaleza de los Servicios y Multiplataforma',
      items: [
        '**Plataforma de Intermediación Tecnológica:** Zuvo es una empresa de tecnología que ofrece un ecosistema digital de intermediación. La Plataforma no es una empresa de transporte ni de mensajería.',
        '**Servicios de Movilidad:** La Plataforma conecta a Usuarios que requieren traslados con proveedores independientes de transporte que operan por cuenta propia (en adelante, "Conductores"). Zuvo no presta servicios de transporte, no posee flota propia ni mantiene relación laboral con los Conductores.',
        '**Servicio de Envíos:** La Plataforma también permite a los Usuarios solicitar que un Conductor retire un paquete en un punto de origen y lo entregue a otra persona en el destino indicado (en adelante, "Envíos"). Las condiciones particulares de los Envíos se detallan en la cláusula 2.',
      ],
    },
    {
      number: '2',
      title: 'Términos Específicos para Envíos',
      items: [
        '**Datos del Envío:** Al solicitar un Envío, el Usuario que lo envía (en adelante, el "Remitente") indica el nombre y el teléfono de quien lo recibe (en adelante, el "Destinatario"), el tamaño del paquete y una descripción veraz de su contenido. El Remitente declara contar con la autorización del Destinatario para compartir sus datos, que se utilizan únicamente para coordinar la entrega.',
        '**Tamaño y Embalaje:** El paquete debe estar cerrado y correctamente embalado, y no puede superar el tamaño ni el peso máximos que indica la Plataforma al solicitar el Envío.',
        '**Objetos Prohibidos:** Está prohibido enviar dinero, armas, municiones o explosivos, drogas o sustancias ilegales, animales, alimentos perecederos, materiales peligrosos (inflamables, tóxicos o corrosivos), objetos de procedencia ilícita y, en general, cualquier bien cuyo transporte esté prohibido o restringido por la normativa vigente.',
        '**Retiro del Paquete:** El Conductor podrá negarse a retirar un paquete que no cumpla con estas condiciones, cuyo tamaño no coincida con el declarado o que no pueda trasladar de forma segura. El Conductor no abre ni inspecciona los paquetes.',
        '**Código de Entrega:** Al solicitar el Envío, la Plataforma le informa al Remitente un código de entrega, que este debe compartir con el Destinatario. El Conductor solicitará ese código para entregar el paquete, y su ingreso en la Plataforma acredita que la entrega fue realizada.',
        '**Entrega No Realizada:** Si el paquete no puede entregarse (por ejemplo, porque el Destinatario no se encuentra en el destino o no informa el código), el Conductor lo devolverá en el punto de retiro, donde deberá informársele el mismo código. En ese caso, se cobra la tarifa del Envío.',
        '**Destino del Envío:** Una vez solicitado, el destino de un Envío no puede modificarse, ya que la entrega se coordina con el Destinatario y su código.',
        '**Responsabilidad por el Contenido:** El Remitente es el único responsable por el contenido del paquete, su embalaje y su legalidad, y responderá por los daños que este pudiera ocasionar al Conductor, al vehículo o a terceros. Se recomienda no enviar objetos de valor. Ante cualquier inconveniente con un Envío, el Usuario puede reportarlo desde la Plataforma para que Zuvo intervenga en su resolución.',
      ],
    },
    {
      number: '3',
      title: 'Registro de Cuenta y Elegibilidad de Usuarios',
      items: [
        '**Capacidad Legal:** Para registrarse en la Plataforma se debe contar con al menos 18 años de edad y capacidad legal para contratar conforme a las leyes de la República Argentina.',
        '**Veracidad de los Datos:** El titular de la cuenta se compromete a suministrar información exacta, completa y actualizada (nombre completo, DNI, teléfono, correo electrónico y medio de pago válido).',
        '**Seguridad de Credenciales:** La cuenta es personal e intransferible. Cada Usuario o Conductor es responsable de mantener la confidencialidad de su contraseña y de toda actividad realizada desde su perfil.',
      ],
    },
    {
      number: '4',
      title: 'Condiciones Generales de Uso y Conducta',
      items: [
        '**Uso Lícito y Respetuoso:** Todos los integrantes de la comunidad Zuvo deben mantener un trato cordial y respetuoso. Queda estrictamente prohibido cualquier acto de violencia, acoso, discriminación o uso de la Plataforma para actividades ilícitas.',
        '**Prohibiciones en Movilidad:** En los servicios de transporte está prohibido trasladar sustancias ilegales, armas o materiales peligrosos. En los Envíos rigen, además, las prohibiciones de la cláusula 2. Los daños materiales o suciedad extraordinaria ocasionados por un Usuario en el vehículo podrán ser cobrados a su método de pago registrado.',
      ],
    },
    {
      number: '5',
      title: 'Tarifas, Pagos y Cancelaciones',
      items: [
        '**Cálculo de Tarifas:** El valor de los viajes y Envíos se calcula mediante algoritmos según distancia, tiempo, demanda y peajes, y se informa al Usuario antes de confirmar la solicitud.',
        '**Medios de Pago:** Los pagos se procesan a través de tarjetas de crédito, débito, billeteras virtuales autorizadas o efectivo (cuando corresponda).',
        '**Cancelaciones:** Zuvo podrá aplicar cargos por cancelación tardía o inasistencia tanto en viajes como en Envíos.',
      ],
    },
    {
      number: '6',
      title: 'Limitación de Responsabilidad',
      items: [
        '**Disponibilidad Tecnológica:** Zuvo procura mantener la Plataforma operativa de forma continua, pero no garantiza la ausencia absoluta de interrupciones técnicas, fallas de conectividad o disponibilidad inmediata de Conductores.',
        '**Responsabilidad por Prestaciones de Terceros:** Zuvo actúa únicamente como intermediario tecnológico. En consecuencia, no asume responsabilidad por daños, perjuicios o incidentes ocurridos durante la prestación de los viajes o Envíos, los cuales recaen exclusivamente sobre el Conductor interviniente o, en lo que respecta al contenido de un Envío, sobre el Remitente, sin perjuicio de los seguros obligatorios que cada Conductor debe mantener vigentes.',
      ],
    },
    {
      number: '7',
      title: 'Protección de Datos Personales (Ley N° 25.326 - Argentina)',
      paragraphs: [
        'En estricto cumplimiento de la **Ley N° 25.326 de Protección de Datos Personales** de la República Argentina y sus normas reglamentarias, se informa lo siguiente:',
      ],
      items: [
        '**Responsable de la Base de Datos:** Zuvo Technology es responsable del tratamiento y resguardo de los datos personales recolectados a través de la Plataforma.',
        '**Finalidad de los Datos:** Los datos personales se recaban para gestionar la intermediación de viajes y Envíos, procesar pagos y brindar soporte técnico.',
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

  closing: ['Zuvo Technology — Plataforma de Movilidad y Envíos.'],
};
