import { TERMINOS } from './terminos.content';

describe('TERMINOS', () => {
  const texts = [
    ...TERMINOS.intro,
    ...TERMINOS.sections.flatMap((section) => [
      section.title,
      ...(section.paragraphs ?? []),
      ...(section.items ?? []),
    ]),
    ...(TERMINOS.closing ?? []),
  ];

  it('should number the sections in order', () => {
    expect(TERMINOS.sections.map((section) => section.number)).toEqual(
      TERMINOS.sections.map((_, index) => String(index + 1)),
    );
  });

  it('should close every bold marker', () => {
    const unclosed = texts.filter((text) => text.split('**').length % 2 === 0);
    expect(unclosed).toEqual([]);
  });

  it('should cover deliveries and leave telemedicine out while it is not offered', () => {
    expect(TERMINOS.sections.map((section) => section.title)).toContain(
      'Términos Específicos para Envíos',
    );
    expect(texts.filter((text) => /telemedicina|médic/i.test(text))).toEqual([]);
  });
});
