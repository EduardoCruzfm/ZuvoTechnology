/**
 * Modelo de contenido para documentos legales.
 *
 * Para resaltar texto en negrita, envolverlo entre dobles asteriscos:
 *   '**Uso Lícito:** El Usuario se compromete a ...'
 */
export interface LegalSection {
  /** Número tal como figura en el documento original (ej.: '1'). */
  number: string;
  /** Título de la sección tal como figura en el documento original. */
  title: string;
  /** Párrafos sueltos de la sección (opcional). */
  paragraphs?: string[];
  /** Viñetas de la sección (opcional). */
  items?: string[];
}

export interface LegalDocument {
  /** Encabezado del documento original (líneas del título del PDF). */
  heading?: string[];
  /** Párrafos introductorios previos a las secciones. */
  intro: string[];
  /** Secciones numeradas. */
  sections: LegalSection[];
  /** Líneas finales del documento original, después de las secciones (opcional). */
  closing?: string[];
}

