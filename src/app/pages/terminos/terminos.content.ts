import { LegalDocument } from '../../components/legal-layout/legal-document.model';

/**
 * TÉRMINOS Y CONDICIONES GENERALES DE USO — ZUVO TECHNOLOGY
 *
 * Fuente: terminos_y_condiciones_zuvo.pdf (BORRADOR en revisión legal).
 * Para actualizar el texto, editar únicamente este archivo.
 * El texto en negrita del documento original se marca con **dobles asteriscos**.
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
      title: 'Naturaleza del Servicio',
      items: [
        '**Plataforma de Intermediación:** Zuvo es una empresa de tecnología, no una empresa de transporte.',
        '**Función Principal:** La Plataforma funciona exclusivamente como un punto de encuentro digital que conecta a usuarios que necesitan un servicio de movilidad (en adelante, "Usuarios Solicitantes") con proveedores independientes de servicios de transporte que operan por cuenta propia (en adelante, "Conductores").',
        '**Independencia de las Partes:** Zuvo no presta servicios de transporte, no actúa como agencia de viajes, no es propietaria de los vehículos utilizados por los Conductores, ni emplea a los mismos. La relación contractual del viaje se da exclusivamente entre el Usuario Solicitante y el Conductor.',
      ],
    },
    {
      number: '2',
      title: 'Registro de Cuenta y Elegibilidad',
      items: [
        '**Capacidad Legal:** Para registrarse como Usuario, se debe contar con la edad mínima legal para contratar según las leyes de la jurisdicción de la República Argentina (18 años).',
        '**Veracidad de la Información:** El titular de la cuenta se compromete a proporcionar datos personales exactos, vigentes y verídicos (nombre, teléfono, correo electrónico y método de pago válido).',
        '**Seguridad de la Cuenta:** El acceso a la cuenta es personal e intransferible. El resguardo de las credenciales de acceso (contraseñas o códigos de verificación) es responsabilidad exclusiva del titular.',
      ],
    },
    {
      number: '3',
      title: 'Condiciones de Uso de la Plataforma',
      items: [
        '**Uso Lícito:** El Usuario se compromete a utilizar la Plataforma exclusivamente para fines legítimos y de acuerdo con la normativa vigente.',
        '**Prohibiciones de Conducta:** Queda estrictamente prohibido transportar sustancias ilegales, armas, materiales peligrosos o utilizar el servicio para cometer actos ilícitos. Asimismo, se exige un trato respetuoso mutuo entre Usuarios y Conductores; cualquier acto de acoso, violencia o discriminación resultará en la cancelación inmediata de la cuenta.',
        '**Daños al Vehículo:** Si un Usuario causa daños materiales o suciedad extraordinaria en el vehículo del Conductor que requiera limpieza profunda o reparación, Zuvo se reserva el derecho de mediar y cargar dichos costos al método de pago registrado del Usuario.',
      ],
    },
    {
      number: '4',
      title: 'Tarifas y Métodos de Pago',
      items: [
        '**Cálculo de Tarifas:** El valor estimado de cada trayecto se calculará a través de los algoritmos de la Plataforma, considerando variables como distancia, tiempo estimado de viaje, demanda en tiempo real (tarifa dinámica) y peajes aplicables.',
        '**Medios de Pago:** Los pagos podrán realizarse mediante tarjeta de crédito, débito, billeteras virtuales autorizadas o dinero en efectivo, según la disponibilidad del servicio en la región.',
        '**Cargos por Cancelación:** Zuvo podrá aplicar una tasa de cancelación si el Usuario cancela el viaje después de transcurrido un tiempo determinado desde la asignación del Conductor, o si el Conductor llega al punto de partida y el Usuario no se presenta tras el tiempo de espera reglamentario.',
      ],
    },
    {
      number: '5',
      title: 'Limitación de Responsabilidad',
      items: [
        '**Garantía del Servicio:** Zuvo trabaja para mantener la Plataforma operativa las 24 horas del día, pero no garantiza la disponibilidad ininterrumpida, la ausencia de errores en el sistema ni la disponibilidad inmediata de Conductores en todas las zonas o momentos.',
        '**Responsabilidad por Incidentes:** Dado que el transporte es ejecutado por terceros independientes, Zuvo no se hace responsable por daños materiales, lesiones personales, pérdidas de objetos ni retrasos ocurridos durante el trayecto, sin perjuicio de las coberturas de seguro obligatorias con las que deben contar los vehículos adheridos.',
      ],
    },
    {
      number: '6',
      title: 'Protección de Datos Personales (Ley N° 25.326 - Argentina)',
      items: [
        '**Cumplimiento Normativo:** En cumplimiento de la Ley N° 25.326 de Protección de Datos Personales de la República Argentina, los datos recolectados a través de la Plataforma son tratados con estricta confidencialidad y bajo las medidas de seguridad técnicas requeridas por las normas vigentes.',
        '**Finalidad del Tratamiento:** La recolección de los datos personales (como nombre, geolocalización, datos de contacto y facturación) tiene como única finalidad la correcta prestación, optimización, seguridad y facturación del servicio de intermediación tecnológica brindado por Zuvo.',
        '**Derechos del Titular (ARCO):** El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos de forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto (conforme al artículo 14, inciso 3 de la Ley N° 25.326). Asimismo, podrá solicitar la rectificación, actualización o supresión de sus datos.',
        '**Órgano de Control:** La **Agencia de Acceso a la Información Pública (AAIP)**, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al cumplimiento de las normas sobre protección de datos personales.',
      ],
    },
    {
      number: '7',
      title: 'Modificaciones y Rescisión',
      items: [
        '**Actualización de Términos:** Zuvo se reserva el derecho de modificar estos Términos en cualquier momento. Las modificaciones serán notificadas a través de la Plataforma y entrarán en vigencia a partir de su publicación. El uso continuado del servicio implicará la aceptación de los nuevos términos.',
        '**Suspensión de Cuenta:** Zuvo se reserva la facultad de suspender o dar de baja de manera definitiva cualquier cuenta que infrinja estas condiciones, sin necesidad de aviso previo ni derecho a indemnización alguna.',
      ],
    },
  ],
};

