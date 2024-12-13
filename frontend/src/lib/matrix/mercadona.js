const spices = [
  ["Orégano", "https://prod-mercadona.imgix.net/images/20a564cf97b2b9662bb7727d6008ed69.jpg?fit=crop&h=300&w=300", "Orégano Hacendado", "Orégano Hacendado", 0.95],
  ["Ajo y Perejil", "https://prod-mercadona.imgix.net/images/87354ac95bb1960b3cdab6dc5e632bb4.jpg?fit=crop&h=300&w=300", "Ajo y Perejil Hacendado", "Especias (35% ajo, cebolla, 7% perejil y pimienta negra) y sal", 1.35],
  ["Comino", "https://prod-mercadona.imgix.net/images/945a39457b8b947b612650a22e7a2c71.jpg?fit=crop&h=300&w=300", "Comino en grano Hacendado", "Comino. Contiene trazas de gluten, sésamo y mostaza", 1.95],
  ["Anís en grano", "https://prod-mercadona.imgix.net/images/8a0d0e5176f9c1a26fcd7cb0e7c2af49.jpg?fit=crop&h=300&w=300", "Anís en grano Hacendado", "Anís", 2],
  ["Sazonador para paella con azafrán", "https://prod-mercadona.imgix.net/images/f2cdac44f287c5a2b6d89b51d091ad3e.jpg?fit=crop&h=300&w=300", "Sazonador para paella con azafrán Hacendado", "Ajo, sal (25%), pimentón, harina de maíz, colorante E-102, pimienta, clavo y azafrán (2,5%)", 1.45],
  ["Mezcla de especias para elaborar Gazpacho Manchego", "https://prod-mercadona.imgix.net/images/5d236a43839a49f8ff9d38e500d39a16.jpg?fit=crop&h=300&w=300", "Mezcla de especias para gazpacho manchego Hacendado", "Pimienta negra, pebrella, tomillo, mejorana, clavo y nuez moscada. Puede contener trazas de apio", 2.5],
];

const chips = [
  ["Patatas fritas", "https://prod-mercadona.imgix.net/images/daa5379864f490d809e6272ea964a119.jpg?fit=crop&h=300&w=300", "Patatas fritas clásicas Hacendado", "Patata, aceite de girasol (30%)* y sal. (*) El aceite de girasol representa el 30% del peso del producto. Contiene trazas de leche. Sin gluten", 1.9],
  ["Patatas fritas tradicionales", "https://prod-mercadona.imgix.net/images/47850d622dbfbb94d1735b2ed178f591.jpg?fit=crop&h=300&w=300", "Patatas fritas Lisas Hacendado", "Patatas, aceite de girasol alto oleico (6%) y sal", 1.05],
  ["PRODUCTO DE APERITIVO FRITO CON SABOR A NATA ACIDIFICADA Y CEBOLLA", "https://prod-mercadona.imgix.net/images/56a2e4615004f217b4a9b1e49905ccf2.jpg?fit=crop&h=300&w=300", "Aperitivo de patata sabor crema agria y cebolla Pringles", "Patatas deshidratadas, aceite de girasol, harina de TRIGO, harina de maíz, harina de arroz, condimento a base de nata acidificada y cebolla (almidón de TRIGO, potenciadores del sabor {glutamato de monosodio, guanilato disódico, inosinato disódico}, cebolla en polvo, dextrosa, aceite de girasol, sal, almidón de maíz modificado, aromas {LECHE}, maltodextrina, azúcar, suero de leche dulce en polvo {LECHE}, nata acidificada en polvo {LECHE}, jarabe de glucosa en polvo, acidulantes {ácido cítrico, ácido málico}, proteínas de la LECHE), maltodextrina, emulgente (E471), sal, colorante (norbixina de annato)", 1.99],
  ["PATATAS FRITAS CON SABOR A CHILI Y LIMA", "https://prod-mercadona.imgix.net/images/350c9942cd10944b69411214785e2ef1.jpg?fit=crop&h=300&w=300", "Patatas fritas sabor chili y lima Hacendado", "Patatas, aceite de girasol (27%)* y aroma [acidulantes (E-262 y E-296), azúcar, sal, aroma, especias, maltodextrina, colorante (E-160c)]. (*)", 1.15],
  ["Patatas fritas en aceite de oliva (33%)", "https://prod-mercadona.imgix.net/images/7465d3f0986086aa40498b426b727c18.jpg?fit=crop&h=300&w=300", "Patatas fritas 0% sal añadida Hacendado", "Patatas seleccionadas, aceite de oliva (33%)* . (*) El aceite de oliva representa el 33% del peso del producto", 1.6],
  ["Producto de aperitivo de maíz horneado con sabor a queso", "https://prod-mercadona.imgix.net/images/65fea39f1f0312a745336ac7353a01c9.jpg?fit=crop&h=300&w=300", "Pelotazos sabor queso Cheetos", "Sémola de maíz (73%), aceite de maíz, aroma a queso [$lactosa$ (de $leche$), suero de $leche$ en polvo, queso en polvo (de $leche$), preparaciones y sustancias aromatizantes (contienen $leche$), potenciadores del sabor (glutamato monosódico, guanilato e inosinato disódicos), cloruro potásico, aroma de humo], azúcar, sal, colorantes (concentrado de vegetales, extracto de pimentón). Puede contener soja.", 1.5, "Cheetos"],
];

const coffee = [
  ["Café molido de tueste natural", "https://prod-mercadona.imgix.net/images/453ffbc68166e2142311cc1d5f5d4005.jpg?fit=crop&h=300&w=300", "Café molido natural fuerte Hacendado", "Café", 0.25],
  ["Café molido de tueste natural Valiente", "https://prod-mercadona.imgix.net/images/c7bb30cc29919d10e1877219fbf12bea.jpg?fit=crop&h=300&w=300", "Café molido natural Cafés Valiente", "Café", 4, "Cafés Valiente"],
  ["Café molido de tueste natural Bonka", "https://prod-mercadona.imgix.net/images/b40db42fc960184d8773f2ee602d23cb.jpg?fit=crop&h=300&w=300", "Café molido natural Bonka", "Café molido de tueste natural", 3, "Bonka"],
  ["Café molido de tueste natural (80%) y torrefacto (20%)", "https://prod-mercadona.imgix.net/images/4cd907914e980e53265e3a44a49a0379.jpg?fit=crop&h=300&w=300", "Café molido mezcla Marcilla crème express", "Café y azúcar", 4.3, "Marcilla"],
  ["Café de tueste natural molido", "https://prod-mercadona.imgix.net/images/6142966016229403846714fb18bf965d.jpg?fit=crop&h=300&w=300", "Café molido natural Climent", "", 2.3, "Climent"],
  ["Café de tueste natural 50% y café torrefacto 50%", "https://prod-mercadona.imgix.net/images/a9ffe73bc07c16bf77cbdb6fc596a7f1.jpg?fit=crop&h=300&w=300", "Café en grano mezcla fuerte Hacendado", "Café y azúcar", 10.2],
];

const birdMeat = [
  ["Pavo a tacos", "https://prod-mercadona.imgix.net/images/2cf18e210fbb02e692b4d5af399e698d.jpg?fit=crop&h=300&w=300", "Tacos de pavo", "Pavo", 4.56, " "],
  ["Filete de pechuga", "https://prod-mercadona.imgix.net/images/39d334e9e418f0c17b8c9de9116e192d.jpg?fit=crop&h=300&w=300", "Filetes pechuga de pavo", "Pavo", 5.07, " "],
  ["Filete de pollo", "https://prod-mercadona.imgix.net/images/602a32e5bd1f9ac56713ae753ada951e.jpg?fit=crop&h=300&w=300", "Filetes pechuga de pollo", "100% Pollo", 4.81, " "],
  ["Carne de pollo contramuslo", "https://prod-mercadona.imgix.net/images/cbb6a188df470ed02af864df8225c6e1.jpg?fit=crop&h=300&w=300", "100% Pollo", "Contramuslos de pollo deshuesados y sin piel", 3.85, " "],
  ["Carne de pollo", "https://prod-mercadona.imgix.net/images/90cecf4aedea3e14cd7309fb5e024f84.jpg?fit=crop&h=300&w=300", "Pollo", "Alas partidas de pollo", 3.12, " "],
  ["SOLOMILLO DE POLLO MARINADO Y EMPANADO", "https://prod-mercadona.imgix.net/images/b8471ff00155734a88aa6daf3589b716.jpg?fit=crop&h=300&w=300", "PREPARADO DE CARNE - Solomillo de pollo marinado (75%): solomillo de pollo 69%, agua, conservadores (E-326 y E-262), sal, antioxidantes (E-331 yE-301), fibras vegetales, dextrosa. Cobertura (25%): Rebozado (Harina de arroz, harina de garbanzo, aceite girasol, dextrosa, sal, emulgente (E-471), especias, extracto de especias y colorante caramelo natural) y encolante (agua, almidón, proteína vegetal, ajo, sal, fibra vegetal, estabilizante (E-451),espesante (E-412), conservador (E-200)).", "Filetes solomillos de pollo marinados empanados sin gluten", 3.95, " "],
];

const infusion = [
  ["Té verde", "https://prod-mercadona.imgix.net/images/d4d5d098f5dce80ae9b9fa2e72fade52.jpg?fit=crop&h=300&w=300", "Mezcla de té verde", "Té verde Hacendado", .75],
  ["Preparado alimenticio al cacao", "https://prod-mercadona.imgix.net/images/a4ac30f31fec6517b344ccdb204e6584.jpg?fit=crop&h=300&w=300", "Cacao soluble ColaCao original", "Azúcar, cacao desgrasado natural (22%), crema de cereal kola-malteado [harina de trigo, extracto de malta de cebada, aroma natural (extracto de nuez de cola)], sales minerales (calcio, fósforo), aromas, sal.", 6.99, "ColaCao"],
  ["Té negro con canela aromatizado", "https://prod-mercadona.imgix.net/images/0f79bda7b73f67dfa7c085ba0119ae66.jpg?fit=crop&h=300&w=300", "Té negro (76%), canela (20%) y aroma", "Té negro con canela Hacendado", 1.4],
  ["Manzanilla sabor a miel con edulcorante.", "https://prod-mercadona.imgix.net/images/7b7f93c9e2318336d4ccaa99fa901558.jpg?fit=crop&h=300&w=300", "Infusión Manzanilla sabor a miel Hacendado con edulcorante", "Manzanilla (95%), edulcorante (aspartamo) y aroma miel. Contiene una fuente de fenilalanina", 1.15],
  ["Infusión yerba mate Amanda", "https://prod-mercadona.imgix.net/images/918c48fa52a47adf1daed213a8c6e38c.jpg?fit=crop&h=300&w=300", "Infusión yerba mate Amanda", "Infusión yerba mate Amanda", 2.85, "Amanda"],
  ["Infusión de manzana y canela", "https://prod-mercadona.imgix.net/images/3c4ceddb760c0ddd8c120549542cb444.jpg?fit=crop&h=300&w=300", "Infusión manzana y canela Hacendado", "Manzana 36%,canela 25%, hibisco 19%,aromas 7%, raíz de achicoria tostada 5,5%,cáscaras de naranja 4%, hoja de stevia 2%,manzanilla 1,5%", 1.4]
];

const drink = [
  ["Agua mineral mediana Cortes", "https://prod-mercadona.imgix.net/images/5021f011386c8cb1e3a1d21c03cdadc8.jpg?fit=crop&h=300&w=300", "Agua mineral mediana Cortes mineralización débil", "Composición Química: Residuo Seco (180º): 330, Bicarbonatos: 279.6, sulfatos: 18.9, Fluoruros: &lt;0.10, Calcio: 100.7, Magnesio: 9.1, Sodio: 9.5, Potasio: 1.3.Laboratorio Labaqua. Julio del 2021", .4, "Cortes"],
  ["Agua mineral grande Bronchales", "https://prod-mercadona.imgix.net/images/8b69a22c839c4e2c5816045bb9428843.jpg?fit=crop&h=300&w=300", "Agua mineral grande Bronchales mineralización muy débil", "Composición química mg/l; Residuo seco a 180C: 44 , Bicarbonatos: 24.60 , Cloruros: 1.90 , Sulfatos: 5.00 , Sílice: 10.50 , Calcio: 3.08 , Magnesio: 3.35 , Sodio: 1.60 , Potasio: 1,20", 1.26, "Bronchales"],
  ["Agua mineral grande Nestlé Aquarel", "https://prod-mercadona.imgix.net/images/271842cd61ddc0fc2672b2f27411ae55.jpg?fit=crop&h=300&w=300", "Agua mineral grande Nestlé Aquarel mineralización muy débil", "Manantial AQUAREL AVETS:Bicarbonato (137 mg/L), Calcio (37,7 mg/L), Sodio (10mg/L), Magnesio (6,9 mg/L), Sulfato (12,5 mg/L), Cloruro (9,1 mg/L), Residuo Seco a 180º (165 mg/L).Manantial LAS JARAS:Bicarbonato (13,2 mg/L), Calcio (2,2 mg/L), Sodio (4,7 mg/L), Magnesio (2,3 mg/L), Sulfato (3,7 mg/L), Cloruro (6,8 mg/L), Residuo Seco a 180º (40 mg/L)", .59, "Nestlé Aquarel"],
  ["Agua mineral grande Solán de Cabras", "https://prod-mercadona.imgix.net/images/352cd9ecc83a4d07f990f058903c2003.jpg?fit=crop&h=300&w=300", "Agua mineral grande Solán de Cabras mineralización débil", "Agua mineral natural", .87, "Solán de Cabras"],
  ["Agua de coco", "https://prod-mercadona.imgix.net/images/e61783a4862816cc9c27a11e7c9cdf54.jpg?fit=crop&h=300&w=300", "Agua de coco", "Agua de coco Chaokoh 100% natural", 2.6, "Chaokoh"],
  ["Agua mineral con gas grande Cortes", "https://prod-mercadona.imgix.net/images/acba588f5324e906a494a87166a071de.jpg?fit=crop&h=300&w=300", "Agua mineral con gas grande Cortes", "Composición química mg/L; Bicarbonatos: 279.6, Calcio: 100.7, Magnesio: 9.1, Sodio: 9.5 , Residuo seco (180C): 330, Potasio: 1.3, Sulfatos: 18.9, Fluoruros: &lt;0.10. Laboratorio Labaqua. Julio 2021", .41, "Cortes"],
];

const milk = [
  ["Leche semidesnatada de vaca UHT", "https://prod-mercadona.imgix.net/images/b9613b9354f8b0705f998b2201ffe443.jpg?fit=crop&h=300&w=300", "Leche semidesnatada Hacendado", "Leche semidesnatada de vaca", 4.98],
  ["Leche semidesnatada sin lactosa Hacendado", "https://prod-mercadona.imgix.net/images/86beaab2a15ac2d9840049b9cdbd6535.jpg?fit=crop&h=300&w=300", "Leche semidesnatada sin lactosa Hacendado", "Leche semidesnatada, enzima (lactasa) y vitaminas A, D, E y ácido fólico. Origen de la leche: España", 1.72],
  ["Leche  desnatada de vaca UHT 0% M.G", "https://prod-mercadona.imgix.net/images/40b9fc5096d638d3e3fe2c5d4f8eb1d8.jpg?fit=crop&h=300&w=300", "Leche desnatada Hacendado", "Leche desnatada de vaca", 4.74],
  ["Leche desnatada Asturiana", "https://prod-mercadona.imgix.net/images/c7136d8bc6d7a67d220d94a1214b6634.jpg?fit=crop&h=300&w=300", "Leche desnatada", "Leche desnatada Asturiana", 1.07, "Asturiana"],
  ["Leche entera calcio Hacendado", "https://prod-mercadona.imgix.net/images/8f436dc356b125eab8fe766f42562bc0.jpg?fit=crop&h=300&w=300", "Leche entera calcio Hacendado", "Leche entera, proteínas de la leche, sólidos lácteos ricos en calcio, estabilizante (E-451) y vitaminas A, D, E y B9 (ácido folico)", 6.72],
  ["Bebida de avena sin azúcares añadidos Hacendado", "https://prod-mercadona.imgix.net/images/6418531f9054c82e7084945ad9febc23.jpg?fit=crop&h=300&w=300", "Bebida de avena sin azúcares añadidos Hacendado", "Agua, avena (10%), aceite de coco, maltodextrina, fosfato tricálcico (calcio), sal marina, estabilizantes (goma gellan y goma xantana) y vitaminas B2, B12 y D", 1.2],
];

[spices, chips, coffee, birdMeat, infusion, drink, milk].forEach(table => table.forEach(row => row[4] = row[4] * 21.17))

export const trendStock = [
  birdMeat.at(3),
  chips.at(0),
  coffee.at(4),
  spices.at(2),
  infusion.at(5),
  drink.at(2),
];

export const lastStock = [
  chips.at(0),
  coffee.at(5),
  chips.at(2),
  milk.at(1),
]

const category = {
  spices,
  chips,
  coffee,
  birdMeat,
  infusion,
  drink,
  milk,
};

export default category