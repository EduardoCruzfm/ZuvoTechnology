/**
 * Preguntas frecuentes de la web.
 *
 * Las respuestas son las mismas que da la Ayuda de la app de Zuvo: si cambia
 * una respuesta allá, conviene cambiarla acá también.
 * Sin montos ni límites: los cambia la empresa desde su panel y quedarían viejos.
 */
export interface FaqItem {
  question: string;
  answer: string;
}

export type FaqAudience = 'pasajeros' | 'conductores';

export const FAQ: Record<FaqAudience, FaqItem[]> = {
  pasajeros: [
    {
      question: '¿Cómo pido un viaje?',
      answer:
        'Descargá la app y creá tu cuenta. En el inicio, escribí desde dónde salís y a dónde vas, elegí auto, moto o envío, mirá el precio y confirmá.',
    },
    {
      question: '¿Cómo pago?',
      answer:
        'En efectivo o con Mercado Pago. El precio lo ves antes de confirmar y es el mismo con los dos.',
    },
    {
      question: '¿Puedo programar un viaje?',
      answer:
        'Sí, desde 30 minutos hasta 7 días antes. Un rato antes buscamos conductor y te avisamos. Hasta que te asignen uno, lo cancelás gratis.',
    },
    {
      question: '¿Cuánto cuesta cancelar?',
      answer:
        'Es gratis mientras se busca conductor y durante 2 minutos después de que te asignen uno. Después, o si ya llegó, se cobra un costo que la app te muestra antes de confirmar.',
    },
    {
      question: '¿Qué pasa si el conductor cancela?',
      answer:
        'Buscamos otro automáticamente, sin costo. Si nadie acepta, se cancela y te devolvemos todo lo que hayas pagado.',
    },
    {
      question: '¿Cómo funciona el envío?',
      answer:
        'Cargás quién recibe y qué mandás. Te damos un código de 4 cifras: pasáselo a quien recibe, porque el repartidor se lo va a pedir para entregar.',
    },
    {
      question: '¿Cómo comparto mi viaje?',
      answer:
        'Durante el viaje, tocá "Compartir" y mandalo a quien quieras: le llegan los datos del conductor, la patente y un enlace para seguir el viaje.',
    },
    {
      question: 'Me olvidé algo en el viaje',
      answer:
        'En la app, andá a Tus viajes, abrí ese viaje y tocá "Me olvidé algo": le avisamos al conductor y coordinan la devolución por el chat de Zuvo. Se puede avisar hasta 7 días después del viaje.',
    },
  ],
  conductores: [
    {
      question: '¿Qué necesito para ser conductor?',
      answer:
        'Un auto o una moto, tu DNI, tu licencia de conducir, el seguro y la cédula del vehículo, y una foto tuya. Todo se carga desde la app y el equipo de Zuvo lo revisa.',
    },
    {
      question: '¿Puedo elegir cuándo trabajar?',
      answer:
        'Sí. Te conectás y te desconectás cuando quieras. Mientras estás conectado te llegan pedidos cerca tuyo, y tenés 20 segundos para aceptar cada uno.',
    },
    {
      question: '¿Qué plan me conviene?',
      answer:
        'En la app escribís cuánto pensás facturar por semana y te mostramos cuánto pagarías con cada plan. Con Comisión pagás un porcentaje de cada viaje, con tope por mes. Con Zuvo Pro pagás una cuota por mes y te quedás con el 100% de todos tus viajes.',
    },
    {
      question: '¿Qué es el tope de la comisión?',
      answer:
        'Con el plan Comisión, es lo máximo que pagás de comisión en un mes. Cuando lo alcanzás, el resto del mes te quedás con el 100% de cada viaje. No es un límite de lo que podés ganar.',
    },
    {
      question: '¿Cómo cobro mis viajes?',
      answer:
        'En efectivo cobrás en mano y la comisión se descuenta de tu billetera. Con Mercado Pago se te acredita la tarifa menos la comisión: el costo de Mercado Pago lo paga Zuvo, no vos.',
    },
    {
      question: '¿Cuándo llega mi retiro?',
      answer:
        'En hasta 24 horas hábiles, a tu Mercado Pago o a tu cuenta bancaria. La cuenta tiene que estar a tu nombre.',
    },
    {
      question: 'El pasajero no aparece',
      answer:
        'Tocá "Llegué" y esperá el tiempo que muestra la app. Después podés cancelar como "no se presentó" y recibís una compensación.',
    },
    {
      question: '¿Qué pasa cuando vence mi licencia o el seguro?',
      answer:
        'Te avisamos antes para que subas el nuevo desde la app. Si vence, no podés conectarte hasta que aprobemos el nuevo.',
    },
  ],
};
