// Tipus de dades per a OpoFast
export interface Pregunta {
  id: string
  subtema: string
  cos: string
  pregunta: string
  opcions: string[]
  resposta_correcta: number
  explicacio: string
}

export interface Subtema {
  id: string
  nom: string
  cos: string
}

export interface Cos {
  id: string
  nom: string
  descripcio: string
  emoji: string
}

// Cossos d'oposició
export const cossos: Cos[] = [
  {
    id: 'mosso',
    nom: 'Mosso d\'Esquadra',
    descripcio: 'Policia de la Generalitat de Catalunya',
    emoji: '🚔'
  },
  {
    id: 'bombers',
    nom: 'Bombers (Catalunya)',
    descripcio: 'Cos de Bombers de Catalunya',
    emoji: '🚒'
  }
]

// Subtemes per cos
export const subtemes: Subtema[] = [
  // Mosso d'Esquadra
  { id: 'marc-juridic', nom: 'Marc jurídic', cos: 'mosso' },
  { id: 'institucions-catalanes', nom: 'Institucions catalanes', cos: 'mosso' },
  { id: 'drets-deures', nom: 'Drets i deures fonamentals', cos: 'mosso' },
  { id: 'llei-10-1994', nom: 'Llei 10/1994', cos: 'mosso' },
  { id: 'geografia-catalunya', nom: 'Geografia de Catalunya', cos: 'mosso' },
  
  // Bombers
  { id: 'normativa-seguretat', nom: 'Normativa de seguretat', cos: 'bombers' },
  { id: 'incendis-forestals', nom: 'Incendis forestals', cos: 'bombers' },
  { id: 'materials-perillosos', nom: 'Materials perillosos', cos: 'bombers' },
  { id: 'protocols-actuacio', nom: 'Protocols d\'actuació', cos: 'bombers' },
  { id: 'primers-auxilis', nom: 'Primers auxilis', cos: 'bombers' }
]

// Preguntes d'exemple
export const preguntes: Pregunta[] = [
  // MOSSO D'ESQUADRA - Marc jurídic
  {
    id: 'mj1',
    subtema: 'marc-juridic',
    cos: 'mosso',
    pregunta: 'Quina és la norma bàsica que regula l\'organització i funcionament dels Mossos d\'Esquadra?',
    opcions: [
      'Llei 10/1994, d\'11 de juliol, de la Policia de la Generalitat-Mossos d\'Esquadra',
      'Llei Orgànica 2/1986, de 13 de març, de Forces i Cossos de Seguretat',
      'Decret 243/2018, de 13 de novembre',
      'Codi Penal Espanyol'
    ],
    resposta_correcta: 0,
    explicacio: 'La Llei 10/1994, d\'11 de juliol, de la Policia de la Generalitat-Mossos d\'Esquadra és la norma bàsica que estableix l\'organització, funcionament i règim jurídic d\'aquest cos policial.'
  },
  {
    id: 'mj2',
    subtema: 'marc-juridic',
    cos: 'mosso',
    pregunta: 'Segons la legislació vigent, quines són les funcions principals dels Mossos d\'Esquadra?',
    opcions: [
      'Només funcions de seguretat ciutadana',
      'Seguretat ciutadana, policia judicial i trànsit en l\'àmbit de Catalunya',
      'Únicament policia judicial',
      'Només control de fronteres'
    ],
    resposta_correcta: 1,
    explicacio: 'Els Mossos d\'Esquadra tenen competències en seguretat ciutadana, policia judicial i trànsit en tot el territori català, segons estableix la seva llei reguladora.'
  },

  // MOSSO D'ESQUADRA - Institucions catalanes
  {
    id: 'ic1',
    subtema: 'institucions-catalanes',
    cos: 'mosso',
    pregunta: 'Quin és l\'òrgan superior de govern de Catalunya?',
    opcions: [
      'El Parlament de Catalunya',
      'La Generalitat de Catalunya',
      'El Consell Executiu',
      'El President de la Generalitat'
    ],
    resposta_correcta: 1,
    explicacio: 'La Generalitat de Catalunya és la institució en què s\'organitza políticament l\'autogovern de Catalunya, segons l\'Estatut d\'Autonomia.'
  },
  {
    id: 'ic2',
    subtema: 'institucions-catalanes',
    cos: 'mosso',
    pregunta: 'Quants diputats componen el Parlament de Catalunya?',
    opcions: [
      '100 diputats',
      '135 diputats',
      '150 diputats',
      '175 diputats'
    ],
    resposta_correcta: 1,
    explicacio: 'El Parlament de Catalunya està compost per 135 diputats elegits per sufragi universal, lliure, igual, directe i secret.'
  },

  // MOSSO D'ESQUADRA - Geografia de Catalunya
  {
    id: 'gc1',
    subtema: 'geografia-catalunya',
    cos: 'mosso',
    pregunta: 'Quina és la província més extensa de Catalunya?',
    opcions: [
      'Barcelona',
      'Tarragona',
      'Lleida',
      'Girona'
    ],
    resposta_correcta: 2,
    explicacio: 'Lleida és la província més extensa de Catalunya amb 12.150 km², seguida de Tarragona, Barcelona i Girona.'
  },

  // BOMBERS - Normativa de seguretat
  {
    id: 'ns1',
    subtema: 'normativa-seguretat',
    cos: 'bombers',
    pregunta: 'Quina normativa regula principalment la prevenció d\'incendis en edificis?',
    opcions: [
      'Codi Tècnic de l\'Edificació (CTE)',
      'Llei de Prevenció de Riscos Laborals',
      'Reglament de Seguretat contra Incendis en Establiments Industrials (RSCIEI)',
      'Totes les anteriors'
    ],
    resposta_correcta: 3,
    explicacio: 'La prevenció d\'incendis es regeix per múltiples normatives: el CTE per a edificis, la LPRL per a centres de treball i el RSCIEI per a establiments industrials.'
  },

  // BOMBERS - Incendis forestals
  {
    id: 'if1',
    subtema: 'incendis-forestals',
    cos: 'bombers',
    pregunta: 'Quins són els tres elements bàsics del triangle del foc?',
    opcions: [
      'Calor, combustible i comburent',
      'Flama, fum i cendres',
      'Ignició, propagació i extinció',
      'Temperatura, pressió i humitat'
    ],
    resposta_correcta: 0,
    explicacio: 'El triangle del foc està format per: calor (font d\'ignició), combustible (material que crema) i comburent (oxigen de l\'aire).'
  },

  // BOMBERS - Materials perillosos
  {
    id: 'mp1',
    subtema: 'materials-perillosos',
    cos: 'bombers',
    pregunta: 'Què signifiquen les sigles ADR en el transport de mercaderies perilloses?',
    opcions: [
      'Acord europeu sobre Transport de Mercaderies Perilloses per Carretera',
      'Agència de Desenvolupament Regional',
      'Associació de Distribuïdors de Risc',
      'Autorització de Desenvolupament de Rutes'
    ],
    resposta_correcta: 0,
    explicacio: 'ADR és l\'Acord europeu sobre el transport internacional de mercaderies perilloses per carretera, que regula la seva classificació, envasament i transport.'
  },

  // BOMBERS - Primers auxilis
  {
    id: 'pa1',
    subtema: 'primers-auxilis',
    cos: 'bombers',
    pregunta: 'Quina és la seqüència correcta en la reanimació cardiopulmonar (RCP) bàsica?',
    opcions: [
      'Comprovar consciència - Demanar ajuda - Obrir via aèria - Comprovar respiració - Massatge cardíac',
      'Massatge cardíac - Ventilacions - Demanar ajuda',
      'Ventilacions - Massatge cardíac - Desfibril·lació',
      'Comprovar pols - Ventilacions - Massatge cardíac'
    ],
    resposta_correcta: 0,
    explicacio: 'La seqüència correcta en RCP bàsica és: verificar consciència, demanar ajuda, obrir via aèria, comprovar respiració, iniciar compressions toràciques i ventilacions.'
  }
]

// Funcions d'utilitat
export function getSubtemesByCos(cosId: string): Subtema[] {
  return subtemes.filter(subtema => subtema.cos === cosId)
}

export function getPreguntesBySubtema(subtemaIds: string[]): Pregunta[] {
  return preguntes.filter(pregunta => subtemaIds.includes(pregunta.subtema))
}

export function getPreguntesByCos(cosId: string): Pregunta[] {
  return preguntes.filter(pregunta => pregunta.cos === cosId)
}

export function getRandomPreguntes(preguntes: Pregunta[], limit: number = 10): Pregunta[] {
  const shuffled = [...preguntes].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, limit)
} 