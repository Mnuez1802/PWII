function cargarJuego(NombreJuego) {

    console.log(NombreJuego);
    const parametros = new URLSearchParams(window.location.search);
    const juego = parametros.get('juego');

    const juegos = {

        'zelda': {
            titulo: 'The Legend of Zelda: Tears of The Kingdom',
            descripcion: 'Seis años de desarrollo para crear una secuela a la altura de algo como The Legend of Zelda: Breath of the Wild. El posiblemente mejor estudio de Nintendo no se había enfrentado a un desafío igual desde Ocarina of Time y la eterna búsqueda de un heredero a la altura. Tan diferentes y a la vez con tantas similitudes, los títulos de Nintendo 64 y Switch rompieron moldes y supusieron un punto de inflexión en muchos sentidos. Tears of the Kingdom no lo tenía fácil. La espera ha sido larga, la información ha llegado en cuentagotas e incluso algunos se permitieron el lujo de dudar de lo que íbamos a tener entre manos cuando algún tráiler no convencía. Pero la realidad es que la nueva entrega de la saga Zelda ya está entre nosotros y es mucho más de lo que podríamos esperar de una secuela de Breath of the Wild. Estamos, simple y llanamente, ante el juego más grande y ambicioso de la historia de Nintendo. \n\nThe Legend of Zelda: Tears of the Kingdom podría haber sido un más y mejor de manual, manteniendo todo aquello que hizo grande a su predecesor, añadiendo algunas novedades y cediendo ante peticiones que se han hecho durante estos años de parte de la comunidad. Y podemos decir que sí, que todo esto se cumple. Pero que también va más allá. Sería fácil citar el ejemplo entre Super Mario Galaxy y su segunda parte, pero lo que alberga en el interior del nuevo título de Nintendo no se conforma con dar una vuelta de tuerca a lo que funciona. Lo amplifica, lo revoluciona y lo reimagina. Es el qué y el cómo. \n\nSi alguien piensa que por mantener las bases de Breath of the Wild, una Hyrule conocida y una estructura familiar el titulo puede perder frescura, es que no es consciente de lo que se viene. Y es lógico, nosotros tampoco lo éramos. Teníamos expectativas altas por ser una secuela de quién era, pero se han superado todas.',
            creadores: 'Nintendo',
            imagen: '../img/Switch/Zelda_TOTK.jpg',
            tutorial_vid: 'https://www.youtube.com/embed/Iz2TY7_Q27M',
            trailer_vid: 'https://www.youtube.com/embed/p_jPc32zpPA',
            disponibilidad: 'SWITCH',
            precio: '$69.99',
        },

        'cocoon': {
            titulo: 'Cocoon',
            descripcion: 'Cocoon es un juego de puzles en tercera persona desde una perspectiva aérea, en el que tenemos que avanzar usando diferentes esferas que vamos desbloqueando según progresamos. Cada esfera tiene un poder diferente activar puentes, activar una especie de pilares/ascensor, disparar un rayo o regenerarse en ciertas criaturas, además de contener un mundo en su interior. Sí, cada esfera tiene un escenario, al que podemos acceder a través de ciertos portales. \n\nTeniendo en cuenta que sólo podemos llevar una esfera a la vez, la gestión de las mismas también es importante. Desde zonas donde necesitamos una esfera en concreto pero sólo a las que sólo podemos acceder con otra, o áreas en las que, simplemente, no podemos acceder con una esfera, moverlas con cabeza va a ser fundamental también. Y eso sin destripar algunos de los puzles del tramo final, en los que vamos a tener que hacer auténticas virguerías con ellas.',
            creadores: 'Geometric Interactive',
            imagen: '../img/Switch/cocoon.png',
            tutorial_vid: 'https://www.youtube.com/embed/o70RMAbYLHE',
            trailer_vid: 'https://www.youtube.com/embed/ybLUzOvdgDo',
            disponibilidad: 'GLOBAL',
            precio: '$24.99'
        },

        'dave_the_diver': {
            titulo: 'Dave The Diver',
            descripcion: '¿De qué va exactamente Dave the Diver para enganchar a tantos jugadores? La premisa no puede ser más sencilla: somos Dave, un experto submarinista que es llamado para trabajar en un bar de sushi cerca de la Fosa Azul. Nuestra tarea principal consiste en explorar las aguas para conseguir pescados que sirvan para mantener a flote los ingredientes del local, pero esa es sólo la ocupación por el día; por la noche, llega el momento de gestionar el bar. Una idea que viene ni más ni menos de la experiencia de su director al conocer un bar japonés de estas características. Llega con textos en español, así que no hay ninguna disculpa para no disfrutar de sus ingeniosos personajes. \n\nA simple vista tendríamos un sencillo e inofensivo juego de submarinismo con mecánica roguelike el fondo marino cambia con cada zambullida- que nos hace cumplir una serie de objetivos con cada inmersión, desde conseguir cantidades de un tipo de pescado o condimentos a recursos de otro tipo. ¿Cómo? Empezaremos con un cuchillo y un arpón, aunque a medida que progresamos de ahí ese desarrollo cíclico de un roguelike- vamos a conseguir armas más potentes, trajes que nos permitan sumergirnos a más profundidad y otro equipamiento de más calidad. Poco a poco el juego se va abriendo con más libertad de exploración: más oxígeno, más espacio en el inventario, armamento con veneno… Ya imaginarás por dónde van los tiros.\n\nTambién nos cruzaremos con tesoros que incluyen recursos, armas y minerales listos para la extracción -¿qué es un indie moderno sin su minería?-… Gran parte de estos momentos son similares a los de un juego relajante pero de vez en cuando nos propone algún momento de más acción, especialmente cuando entran en escena los escualos y otras criaturas de tamaño imponente que irán apareciendo según avanzamos. El combate es básico apunta, dispara, o esquiva enfrentamientos y no pide más, salvo quizás opciones de dificultad para todos los gustos o unos puzles un poco más trabajados.',
            creadores: 'Mintrocket',
            imagen: '../img/Switch/dave-the-diver.jpeg',
            tutorial_vid: 'https://www.youtube.com/embed/IifqfRGNGsY',
            trailer_vid: 'https://www.youtube.com/embed/p85VHMpE0to',
            disponibilidad: 'PC, PS4, PS5 & SWITCH',
            precio: '$19.99'
        },

        'kirby_return_dreamland': {
            titulo: "Kirby's Return to Deam Land Deluxe",
            descripcion: 'De este modo, volvemos a encontrarnos ante la misma aventura 2D que pudimos disfrutar originalmente en Wii, aunque para esta ocasión se ha rehecho todo su apartado gráfico por completo, se han mejorado y pulido los controles, se han añadido más opciones y poderes, se han hecho ciertos retoques y se ha incluido una buena cantidad de contenidos adicionales.\n\nEn esencia, el diseño de los niveles no ha sufrido alteraciones de ningún tipo y en lo jugable se juega exactamente como esperaríais de cualquier Kirby. Es decir, podremos flotar en el aire, absorber enemigos y copiar sus habilidades para acceder a una enorme cantidad de poderes distintos que cambian por completo nuestra forma de jugar, los cuales tendremos que usar tanto para combatir y abrirnos camino como para encontrar coleccionables y otros secretos.\n\nLo primero que llama la atención es que ahora tenemos nuevos modos de control, pudiendo prescindir por completo de los controles por movimiento que tenía en Wii, lo que afecta a la ejecución de algunas acciones que esta vez resultan más cómodas e intuitivas. Además, el manejo de nuestro héroe también se ha mejorado con algunas de las novedades que se introdujeron en la saga a posteriori, como un control acuático mucho más fino o el añadido de un buen puñado de nuevos movimientos para ciertos poderes, haciendo de él un título bastante más agradable a los mandos y con un nivel de profundidad mayor.',
            creadores: 'HAL LABORATORY',
            imagen: '../img/Switch/kirby.jpg',
            tutorial_vid: 'https://www.youtube.com/embed/_--1EFcdkQY',
            trailer_vid: 'https://www.youtube.com/embed/72ZJ67CvOa4',
            disponibilidad: 'SWITCH',
            precio: '$59.99'
        },

        'mario_kart_8': {
            titulo: 'Mario Kart 8 Deluxe',
            descripcion: 'Mario Kart 8 Deluxe es un claro más y mejor de manual. Un refrito, como dirían algunos, pero de los buenos. El típico juego que al final te acabas comprando en varias plataformas porque te flipa y te da igual pagar por él varias veces. Nos ha pasado con clásicos, y con otros juegos más recientes y no tan clásicos que, por la razón que sea, queremos tener en distintas máquinas.\n\nDe entrada, Mario Kart 8 Deluxe incluye todos los DLC que fueron lanzados en Wii U. En aquella ocasión el juego salió con 32 circuitos y, con el tiempo, llegaron otros 16 más a través de contenidos descargables. Aquí están los 48 circuitos disponibles desde el primer minuto. Además de eso, el juego incluye nuevos personajes jugables hasta sumar un total de 41 más el Mii. Por opciones y variedad no será.\n\nPero eso no es todo: hay nuevas piezas para personalizar los vehículos y algo muy importante como es la posibilidad de llevar hasta dos objetos a la vez durante las carreras. La mala noticia es que no hay forma de seleccionar cuál de ellos queremos usar primero, pero eh, lanzar un plátano y tener un caparazón rojo en la recámara, por poner un ejemplo, no está nada mal.\n\nLo curioso no es sólo que podamos recoger dos cubos seguidos para disponer de dos objetos de forma simultánea, sino que hay unos nuevos cubos dobles. Lógicamente todos los jugadores intentarán ir a por ese doble cubo en cuanto lo detecten, así que ya tenemos una razón más para picarnos con el resto.',
            creadores: 'Nintendo',
            imagen: '../img/Switch/Mario-kart-8.jpg',
            tutorial_vid: 'https://www.youtube.com/embed/U8PH6kNl62I',
            trailer_vid: 'https://www.youtube.com/embed/N_Hw_M5ENCQ',
            disponibilidad: 'SWITCH',
            precio: '$59.99'
        },

        'metroid_prime_rem': {
            titulo: 'Metroid Prime Remastered',
            descripcion: 'De este modo, Metroid Prime Remastered nos ofrece la oportunidad de revivir la misma aventura que ya nos maravilló en 2002 con todas sus virtudes intactas. Así pues, volveremos a encarnar a Samus Aran en una aventura de acción y plataformas 3D en primera persona en la que deberemos explorar un misterioso planeta analizando nuestro entorno, enfrentándonos a todo tipo de criaturas y peligros, encontrando secretos y potenciadores y, sobre todo, consiguiendo nuevos poderes y habilidades que nos permitan acceder a nuevos lugares de su gigantesco mapa.\n\nEs uno de esos juegos a los que resulta muy difícil hacer justicia solo con palabras, ya que todo lo que hace lo hace de manera impecable y con un nivel de maestría que sigue dejando en evidencia a la inmensa mayoría de producciones actuales: desarrollo, diseño de niveles, ambientación, precisión de los controles, mecánicas de juego, enemigos, jefes, el ritmo al que se consiguen los poderes... Hasta la historia y la forma en la que se nos narra resultan interesantísimos. Como decimos, todo esto sigue muy vigente y no ha perdido ni un solo ápice de su capacidad para divertirnos y enamorarnos.\n\nSe trata de una obra muy artesanal y con un nivel de detalle enfermizo incluso en aspectos que pasan desapercibidos a simple vista, testimonio del mimo y cariño que puso Retro Studios en su día a la hora de trasladar la saga a la tercera dimensión de la mejor manera posible y sin perder su esencia ni diluir todo aquello que la hace única y especial, algo para lo que se tuvieron que llevar a cabo ideas muy inteligentes e incluso revolucionarias.',
            creadores: 'Retro Studios/Nintendo',
            imagen: '../img/Switch/metroid-prime-remastered.webp',
            tutorial_vid: 'https://www.youtube.com/embed/UqiXGRr_c7g',
            trailer_vid: 'https://www.youtube.com/embed/PW4a7ZvqRaw',
            disponibilidad: 'SWITCH',
            precio: '$39.99'
        },

        'paranormasight_7_mysteries_honjo': {
            titulo: 'PARANORMASIGHT: The Seven Mysteries of Honjo',
            descripcion: 'Square Enix es una de las editoras japonesas más productivas del momento y tienen lanzamiento casi a ritmo semanal. Muchos jugadores siguen practicando su precisión con los ritmos de Theatrhythm Final Bar Line o dan sus primeros pasos en Octopath Traveler 2 y ya tienen lista una nueva producción de la editora, PARANORMASIGHT: The Seven Mysteries of Honjo. Esta vez no se trata de un RPG sino de un peculiar cruce entre novela visual y aventura gráfica con un pequeño toque de terror que tiene más encanto de lo que parece a simple vista.\n\n Quizás no muchos recuerden que hace casi un año Square Enix lanzó otra propuesta "diferente" dentro de su catálogo, The Centennial Case: A Shijima Story, una aventura narrativa de misterio a lo Agatha Christie con secuencias de vídeo real. Paranormasight no va en esta línea exactamente ni en presentación ni en desarrollo-, ya que funciona de manera similar a una novela visual pero con algo más de interactividad, similar a lo que podríamos ver en las fases de investigación de la saga Danganronpa. Para explicarlo mejor, vamos a comenzar por el principio: los siete misterios de Honjo.\n\n Paranormasight transcurre en el barrio de Sumida, en Tokio, a finales del siglo XX. Nos ponemos en la piel de Shogo Okiie, un joven corriente que se encuentra con una amiga aficionada a las leyendas urbanas y en concreto a los llamados siete misterios de Honjo y que son más de siete-, unas historias de fantasmas que aparentemente tienen relación con un ritual de resurrección. ¿A quién no le gustaría traer de entre los muertos a un ser querido? Y sobre todo, ¿hasta dónde llegarías para conseguirlo? Esta es una de las preguntas incómodas que te hace Paranormasight.\n\n Sin profundizar mucho en la historia, que naturalmente es uno de los puntos fuertes del juego, acabaremos con una extraña piedra maldita que puede matar a la gente que huye del artefacto y que se alimenta de pedazos de alma, necesarios para el mencionado ritual. Pero Okiie no es el único con este "arma" o que va detrás de los siete misterios de Honjo, y cada maldición se activa de una manera diferente. Una de las claves por tanto es llevar las conversaciones a que nuestras víctimas quienes se conviertan en una amenaza, por ejemplo- a que hagan aquello que nos interesa para activar la maldición, pero nuestros enemigos también lo harán y no suelen revelar sus cartas antes de tiempo.',
            creadores: 'Square Enix',
            imagen: '../img/Switch/paranormasight-seven-mysteries.jpg',
            tutorial_vid: 'https://www.youtube.com/embed/mlTc_YIVYN8',
            trailer_vid: 'https://www.youtube.com/embed/xMRvEdxlli8',
            disponibilidad: 'PC, SWITCH, IOS & ANDROID',
            precio: '$19.99'
        },

        'persona_4_golden': {
            titulo: 'Persona 4 Golden',
            descripcion: 'Si bien hablamos en profundidad de Persona 4 Golden en su análisis de PS Vita, y de nuevo en el lanzamiento de PC, vamos a repasar brevemente lo que ofrece esta aventura con temática televisiva y extraños asesinatos en Inaba, un pequeño pueblo nipón ficticio que podría ser cualquier zona rural que hemos visto en centenares de mangas y animes. Allí llega nuestro protagonista, un joven que va a pasar el curso en casa de su tío y la sobrina, pero lo que parecía una temporada tranquila lejos del ruido de la gran ciudad cambia radicalmente con la aparición de un asesinato dantesco.\n\n Así comienza este thriller en el que nuestro héroe y los compañeros que se van sumando a su causa deciden detener al asesino en serie que está aterrorizando a la gente de Inaba. Investigación, sospechas y una carrera contra el reloj para impedir que el número de víctimas siga creciendo se complementan con la parte fantástica de Persona: el poder interior que despierta en los protagonistas. En este caso la historia nos habla del extraño mundo al que se accede desde las pantallas de las televisiones, un portal que podría ser la clave a los asesinatos.\n\n Persona 4 Golden es una versión ampliada del Persona 4 original, al que añadió un nuevo trimestre conectado a un nuevo personaje secundario, Marie, entre otros cambios. Al igual que el resto de Persona, estos spin-off centran gran parte de su atención en la simulación de vida de los estudiantes, así que el tiempo se reparte en las tareas obligatorias ir a clase, principalmente- y cómo aprovechamos el tiempo de ocio, sea para mejorar la relación con los amigos, subir el nivel de las habilidades que definen al protagonista, entrenar en las mazmorras o aumentar el número de Personas en nuestra colección, que al final es lo que da flexibilidad a las técnicas del héroe.',
            creadores: 'Atlus/P Studio',
            imagen: '../img/Switch/persona-4-golden.jpg',
            tutorial_vid: 'https://www.youtube.com/embed/G0rJafN26c8',
            trailer_vid: 'https://www.youtube.com/embed/g_tT2Zshf3A',
            disponibilidad: 'GLOBAL',
            precio: '$19.99'
        },

        'pikmin_4': {
            titulo: 'PIKMIN 4',
            descripcion: 'Hemos tenido que esperar diez años para ver un Pikmin nuevo. Lo que es mucho, aunque también la mitad de lo que tuvo que esperar Nintendo para ver cómo una entrega (Pikmin 3 Deluxe) lograba vender más de dos millones de copias. A pesar de remontarse a las hornadas iniciales de GameCube, allá por el cada vez más lejano 2001, esta saga de estrategia y aventuras apadrinada por Shigeru Miyamoto nunca alcanzó el estrellato de franquicias como Mario, Zelda o Donkey Kong. Ni siquiera se ha acercado Luigi`s Mansion, otra creación de la era GameCube que entrega tras entrega ha multiplicado varias veces sus ventas. Pikmin siempre ha estado la sombra de sus hermanos, y ha mantenido a los fans dudando sobre su posible continuidad.\n\n No por ello dejó de ser una saga apreciada por Nintendo, por supuesto. Por algo el capitán Olimar, su primer y más representativo protagonista, lleva varias generaciones como luchador de Super Smash Bros. Y por algo estamos a dos días del estreno de Pikmin 4. Es obvio que desde ambos lados, creadores y usuarios, hay interés en que la serie siga adelante, incluso si es con pausas largas y expectativas de ventas moderadas. Pero esa incertidumbre tiene un coste, y el juego que hoy toca analizar es otra clase de Pikmin. No simplemente porque añada nuevos escenarios, puzles, enemigos y tesoros para recoger; que también. Si no porque esta cuarta entrega se ha sometido a un ejercicio de reconceptualización considerable. El mayor hasta la fecha.\n\n La única constante, por tanto, han sido los propios Pikmin. Para algo dan título a la saga, y para algo se encargan de hacer todo el trabajo. Ellos derrotan a los enemigos. Ellos llevan sus cadáveres a las cebollas para generar más Pikmin. Ellos tiran muros y tienden puentes para expandir el espacio explorable. Y ellos transportan los objetos importantes de cada entrega (piezas de la nave, tesoros para ganar dinero, fruta para generar provisiones). Los personajes rara vez consiguen mejoras propias porque la cantidad y variedad de Pikmin es lo que condiciona el progreso. De lo que dependen las acciones disponibles: los rojos son inmunes al fuego; los amarillos, a la electricidad; los azules pueden combatir bajo el agua... Y así hasta superar la media docena.',
            creadores: 'Nintendo',
            imagen: '../img/Switch/pikmin4.webp',
            tutorial_vid: 'https://www.youtube.com/embed/fGsASTNpvu0',
            trailer_vid: 'https://www.youtube.com/embed/HxlAJKI9jfQ',
            disponibilidad: 'SWITCH',
            precio: '$59.99'
        },

        'red_dead_redemption': {
            titulo: 'Red Dead Redemption',
            descripcion: 'Que una obra tan brillante como Red Dead Redemption fuese tan poco accesible en la actualidad demuestra que la industria del videojuego tiene que tomarse más en serio la conservación de sus producciones: hasta ahora sólo podíamos jugar a esta entrega de la saga en las plataformas en las que se lanzó hace 13 años (PS3 o Xbox 360) o a través de la retrocompatibilidad de Xbox One y Xbox Series X/S, donde funciona verdaderamente bien.\n\n Para paliar (en parte) esa inaccesibilidad, Rockstar Games ha decidido publicar el juego original en nuevas plataformas a precio completo. Nada de remakes, como se venía rumoreando, ni siquiera remasterización: el mismo Red Dead Redemption que jugamos en 2010 llega ahora a PS4 y Switch, ampliando la gama de sistemas en los que podemos jugar a tan magnífico videojuego (pero dejando fuera a PC, que inexplicablemente sigue sin contar con una versión propia por el momento). En Vandal hemos podido probar ambas adaptaciones, tanto en la consola de Sony como en la de Nintendo, pero para este análisis nos centramos en la segunda por ser la más peculiar y llamativa.\n\n Aunque han pasado más de una década y dos generaciones desde el lanzamiento original de Red Dead Redemption, la llegada de este juego a Switch ha arqueado más de una ceja a causa del último proyecto similar que lanzó Rockstar Games en la consola de Nintendo: el preocupante rendimiento y las chocantes decisiones estéticas de Grand Theft Auto: The Trilogy - The Definitive Edition, cuyos juegos incluidos son más antiguos que el protagonizado por John Marston, han provocado que nuestras expectativas ante tan emocionante port se hayan mantenido en suspensión ante el lanzamiento del juego.',
            creadores: 'Rockstar Games',
            imagen: '../img/Switch/red-dead-redemption-switch.jpg',
            tutorial_vid: 'https://www.youtube.com/embed/uVSMv5uDX-g',
            trailer_vid: 'https://www.youtube.com/embed/Q5sGCr03cPI',
            disponibilidad: 'GLOBAL',
            precio: '$49.99'
        },

        'sea_of_stars': {
            titulo: 'Sea of Stars',
            descripcion: 'Sabotage Studio sorprendió a medio mundo en 2018 con su primer juego, The Messenger, una fantástica aventura de acción y plataformas de aroma retro que desprendía encanto, carisma, humor y buen hacer con una jugabilidad a prueba de bombas y un diseño de niveles impecable. Por si no fuese suficiente, su segunda mitad escondía uno de los mayores, mejores y más atrevidos giros que hemos visto nunca en videojuego alguno, una auténtica genialidad que lo ha llevado a convertirse en uno de nuestros títulos indies favoritos de todos los tiempos.\n\n Con un debut tan potente, este pequeño estudio de desarrollo pasó a tener toda nuestra atención y no tardaría en volver a sorprendernos con el anuncio de su segundo proyecto: Sea of Stars, un juego de rol de corte clásico muy inspirado en las grandes obras maestras japonesas de la generación de 16 bits, teniendo en Chrono Trigger su principal referente. La confianza en el equipo tras The Messenger era tal que su campaña de financiación en Kickstarter acabó amasando más de 1,6 millones de dólares canadienses, superando así por muchísimo el objetivo de 133.000 que se habían marcado para poder hacer realidad este sueño que tenían.\n\n Desde entonces, hemos tenido que esperar tres años para poder echarle el guante a su versión final y si algo podemos confirmar tras haberla completado de principio a fin es que Sabotage Studio lo ha vuelto a hacer, firmando un auténtico juegazo con el que nos han dejado bien claro que su primer proyecto no fue un simple golpe de suerte. Aquí hay muchísimo talento y si sois de los que echáis de menos los JRPG de antaño, en esta obra vais a encontrar una aventura prácticamente imprescindible. ¿Los motivos? No tenéis más que seguir leyendo.',
            creadores: 'Sabotage Studio',
            imagen: '../img/Switch/sea-of-stars.webp',
            tutorial_vid: 'https://www.youtube.com/embed/QvV4GMtNyxM',
            trailer_vid: 'https://www.youtube.com/embed/8jkeh6O1Rzs',
            disponibilidad: 'Switch, PS4, PS5 & Xbox Series X',
            precio: '$34.99'
        },

        'sonic_origins_plus': {
            titulo: 'Sonic Origins Plus',
            descripcion: ': Lo primero que queremos mencionar es que, además de los nuevos contenidos, también se incluyen todos los descargables que se lanzaron para Sonic Origins, que no son muchos, pero que incluyen algunas cosas interesantes como las misiones extremas y el modo espejo. Si no las teníais, ahora os aparecerán por defecto. Lo más notable es la adición de Amy como personaje jugable en todos los títulos de la tetralogía original, y que añade una habilidad propia: pegar con el martillo, como no podía ser de otra manera. El ataque se realiza al pulsar el botón de saltar en el aire, haciendo que Amy golpee mientras gira, e incluso pudiendo prolongarlo brevemente tras aterrizar. No es nada revolucionario, pero la verdad es que nos ha gustado jugar con ella.\n\n De manera similar, Knuckles ahora puede jugarse en Sonic CD, sumándose así a los otros tres protagonistas. Esto, por alguna razón, nos ha gustado mucho. Quizás porque, después de crecer jugando a la trilogía original & Knuckles, es como ver un pequeño sueño de la infancia hecho realidad. No esperéis un cambio radical ni nada por el estilo, pero nos ha hecho ilusión y hemos disfrutado mucho jugando con Knuckles en Sonic CD.\n\n Sega asegura que se han realizado otras mejoras y se han solucionado errores del lanzamiento original, pero seguimos con ciertas limitaciones y carencias que no llegamos a entender. Seguimos sin poder jugar a los clásicos a 16:9 con el sistema tradicional de vidas, y seguimos sin un filtro CRT para poder disfrutar de estos títulos como se concibieron. No es ningún secreto que estos juegos se desarrollaban para aprovechar las carencias (o ventajas, según se mire) de las pantallas de la época, y jugarlos sin filtro hace que los veamos «peor». Os puede gustar más el píxel «puro», pero es indudable que los desarrolladores, entonces, creaban los gráficos con esta tecnología en mente.',
            creadores: 'Sega Corp.',
            imagen: '../img/Switch/sonic-origins-plus.jpg',
            tutorial_vid: 'https://www.youtube.com/embed/5YN9xBdMJcM',
            trailer_vid: 'https://www.youtube.com/embed/FoyoWlOJILc',
            disponibilidad: 'GLOBAL',
            precio: '$39.99'
        },

        'super_mario_bros_wonder': {
            titulo: 'Super Mario Bros. Wonder',
            descripcion: ': De este modo, volvemos a encontrarnos ante un juego de plataformas 2D muy clásico que hace gala de todo lo que cabría esperar de nuestro fontanero favorito: fases relativamente cortas conectadas por un mapamundi en las que nuestro objetivo es llegar al banderín de meta, objetos potenciadores con los que adquirir nuevas transformaciones, poderes y algo de salud extra, unos controles perfectos, unas físicas envidiables, muchos saltos, monedas, tuberías por las que colarnos, bloques que podemos destruir, un sistema de vidas tradicional y una buena variedad de enemigos, trampas y obstáculos que intentarán ponernos las cosas difíciles. En definitiva, un Super Mario Bros. de los de toda la vida que nos hace sentir como en casa.\n\n Esto, de entrada, es una garantía de calidad, ya que se trata de una fórmula que lleva décadas funcionando y demostrando lo mucho que puede divertir si se ejecuta con maestría. Sin embargo, esta vez Nintendo no se ha querido conformar con ofrecernos simplemente una nueva remesa de fases que se dediquen a hacer lo de siempre y han ido mucho más allá para convertir cada etapa en una experiencia completamente única.\n\n De hecho, la grandeza de Super Mario Bros. Wonder reside precisamente aquí, en un diseño de niveles que no teme romper las convenciones de la serie de mil formas distintas para bombardearnos con un torrente de ideas alocadas y divertidísimas que no parece tener fin, haciendo de cada pantalla una aventura en sí misma donde nunca sabemos qué es lo que nos vamos a encontrar.\n\n No hay dos fases en todo el juego que sean ni parecidas y siempre están introduciendo nuevas mecánicas o planteamientos que nos hacen cambiar por completo nuestra forma de jugar y afrontar los retos que nos presentan. Y lo mejor es que todo este popurrí funciona de auténtico lujo, hasta el punto de que no nos hemos encontrado ni un solo nivel en el que no nos lo hayamos pasado en grande o donde las ideas centrales en torno a las cuales gira se hayan quedado a medio gas o tengan una ejecución cuestionable. Se nota que es un título mimadísimo en el que se ha cuidado hasta el más mínimo detalle para tenernos siempre con una sonrisa en la boca y deseando descubrir qué nuevas locuras nos esperan en la siguiente pantalla mientras ponemos a prueba nuestra habilidad con el mando.',
            creadores: 'Nintendo',
            imagen: '../img/Switch/super-mario-bros-wonder.jpeg',
            tutorial_vid: 'https://www.youtube.com/embed/91YNOhUzldw',
            trailer_vid: 'https://www.youtube.com/embed/GZO7MgHNqI4',
            disponibilidad: 'SWITCH',
            precio: '$59.99'
        },

        'legend_heroes_trails_reverie': {
            titulo: 'Legend of Heroes: Trails into Reverie',
            descripcion: 'The Legend of Heroes Trails into Reverie es un RPG por turnos con componente algo estratégico de posicionamiento en el campo de batalla que tienen una estética oriental/anime desarrollado por Nihon Falcom y publicado por NIS America en Occidente y que ya está disponible para Playstation 4, Playstation 5, Nintedo Switch Y PC y que en nuestro caso analizaremos esta última versión. (Concretamente la versión 0.9.1 aunque en estos momentos está la 1.0.4 por lo que los errores que detecté en su momento que ya están solucionados los omitiré).\n\n The Legend of Heroes es una serie que nos acompaña desde los años 80 pero que a partir del año 2004 decidieron adentrarse en un complicado proyecto, crear una inmensa saga que transcurriría en diversos países de un gran continente llamado Zemuria y que a su vez tendría distintos arcos argumentales ubicados en zonas concretas que según avanzara la historia se irían relacionando entre sí cada vez más, afectando los eventos que ocurrirían en dichos juegos en el resto de territorios del mundo.\n\n El primer arco argumental transcurre en el Reino de Liberl y abarca tres títulos Trails in the Sky FC, Trails in the Sky SC y Trails in the Sky 3rd. Su segundo arco y el último en llegarnos oficialmente a occidente transcurre en Crossbell que es donde pasaremos la mayor parte del tiempo en Trails into Reverie y abarca dos juegos: Trails from Zero y Trails to Azure. El último arco argumental y que transcurre justo antes de Trails into Reverie es el que transcurre en el gran imperio de Erebonia y abarca las 4 entregas de Trails of Cold Steel. Vamos que si queréis una gran historia, con mucha política, geopolítica, decenas de organizaciones con sus normas y características propias, vamos lo que viene a ser pasaros años jugando, es un viaje precioso que merece mucho la pena vivirse. Sobre todo es importante que tengáis conocimientos de inglés porque es como están llegando todos los juegos de manera gradual. Y lo de siempre aunque todos tenemos nuestros títulos que nos gustan más o menos en este aspecto por norma general todas sus entregas tienen un buen argumento considerándose prácticamente el mayor aliciente a la hora de jugarlos.',
            creadores: 'Nihon Falcom Corp.',
            imagen: '../img/Switch/The-Legend-of-Heroes-trails.png',
            tutorial_vid: 'https://www.youtube.com/embed/JJgS4js3N4Q',
            trailer_vid: 'https://www.youtube.com/embed/QLbDui87ltI',
            disponibilidad: 'GLOBAL',
            precio: '$59.99'
        },

        'vampire_survivors': {
            titulo: 'Vampire Survivors',
            descripcion: 'Sencillo como el mecanismo de un botijo y adictivo como esos clásicos de los arcades, los abanderados de la Atari y los míticos minijuegos de java a los que me enganché en mi niñez y pasada mi juventud. Vampire Survivors es ese juego entre juegos al que da gusto entregarle tus próximos cinco minutos libres. Y su gran acierto es que nada más empezar a partida sabes que vas a perder, pero te lo vas a pasar en grande arrasando medio infierno sin tener que tocar ni un triste botón. Así de simple.\n\n Vampire Survivors es el resultado de fusionar la esencia y estética de los Castlevania clásicos con la jugabilidad del mítico Gauntlet y llevarlo todo al terreno de los roguelites. Eso sí, no esperes niveles retorcidos ni tampoco tendrás que preocuparte de machacar los botones: los ataques se realizan de manera automática, de modo que el desarrollo de la partida se basa en sortear infinitas oleadas de enemigos mientras tu temerario personaje golpea o lanza hechizos esperando a que llegue la muerte. ¡De manera literal! El hito del estudio Poncle es hacer que algo tan simple un verdadero vicio.\n\n Antonio Belpaese va a morir. Si es lo suficientemente habilidoso con el látigo, eso sucederá en media hora. Si es realmente bueno, quizás más. El primer protagonista de Vampire Survivors se encuentra en mitad de un amplio bosque abierto rodeado de monstruos, fantasmas, criaturas de la noche y pesadillas de todas las formas y colores que se pueden imaginar a través del pixelart clásico.\n\n La premisa de Vampire Survivors se reduce a algo tan sencillo como arrasar con todo lo que tienes en pantalla durante lo que dura tu partida. No necesitarás ni darle a ningún botón para atacar, ya que está automatizado, ni tampoco se requiere apuntar: simplemente tienes que moverte para no verte arrollado por la marabunta de enemigos que, poco a poco, acabarán llenando la pantalla.\n\n Por suerte, nuestro héroe tiene un recurso adicional: cada enemigo desprende una gema que le otorga experiencia y por cada nivel ascendido puede desbloquear nuevos recursos en forma de hechizos, armas adicionales, barreras, potenciadores y, en general, mejoras que aumentan su probabilidad de sobrevivir a medida que se recrudece la situación. Y la cosa se vuelve muy, muy complicada.',
            creadores: 'Poncle',
            imagen: '../img/Switch/VampireSurvivors.webp',
            tutorial_vid: 'https://www.youtube.com/embed/F5QeIeQiqzU',
            trailer_vid: 'https://www.youtube.com/embed/GFeHlz31KRk',
            disponibilidad: 'GLOBAL',
            precio: '$4.99'
        },

        'xenoblade_chron_3': {
            titulo: 'Xenoblade Chronicles 3',
            descripcion: 'Enorme, gigantesco, titánico, colosal. Estos y otros sinónimos son los adjetivos que siempre han definido el trabajo de Monolith Soft con Xenoblade Chronicles, una saga que si por algo se caracteriza es por el tamaño de sus mundos y la sensación de escala que transmiten, ofreciéndonos unos maravillosos JRPG capaces de hacernos sentir como meras hormigas ante todo lo que nos rodea. Por supuesto, esto es algo que también se acaba trasladando al resto de apartados, desde la enorme profundidad de sus sistemas de combate hasta la abrumadora cantidad de contenidos y secretos que suelen atesorar, por no hablar de sus elaboradas y complejas historias de ciencia ficción.\n\n Se trata, sin duda alguna, de una serie que se regodea en sus excesos para hacer de ellos una seña de identidad y crear una nueva forma de entender el género. Ahora, el estudio vuelve a la carga con Xenoblade Chronicles 3, un juego que sigue los pasos de sus predecesores para llevar la fórmula al siguiente nivel. ¿El resultado? Una nueva obra maestra que ha superado todas nuestras expectativas como solo Monolith sabe hacer: a lo grande.\n\n Esta vez la historia nos lleva a Aionios, un mundo asolado durante milenios por una brutal guerra entre dos facciones que no parece tener fin, una premisa que puede no sonar muy original, pero que gana enteros en el momento en el que descubrimos que los habitantes de cada bando nacen artificialmente de una incubadora y solo tienen una esperanza de vida de 10 años. Por supuesto, todos ellos sufren un entrenamiento y adoctrinamiento militar desde la primera vez que abren los ojos para que solo tengan un objetivo en mente: matar al enemigo y robarle la esencia vital que necesitan para sobrevivir, lo que deriva en un ciclo de violencia en el que nadie se plantea los motivos de sus actos ni las auténticas razones por las que ambas naciones llevan tantísimo tiempo masacrándose entre sí.\n\n Tal y como podréis intuir, nuestra misión no será otra que la de buscar la forma de detener este eterno conflicto, lo que nos llevará a iniciar un viaje por todo el mundo junto a un grupo de héroes formado por integrantes de los dos bandos, quienes acaban juntos por motivos que no os vamos a detallar.',
            creadores: 'Monolith Soft',
            imagen: '../img/Switch/xenoblade-chronicles-3-future-redeemed.webp',
            tutorial_vid: 'https://www.youtube.com/embed/iSb07TD_xAE',
            trailer_vid: 'https://www.youtube.com/embed/JwjF8u1VPVg',
            disponibilidad: 'SWITCH',
            precio: '$59.99'
        },

    };
    const info_Juegos = juegos[juego];

    console.log(info_Juegos);

    document.getElementById('tituloJuego').textContent = info_Juegos.titulo;
    document.getElementById('descripcionJuego').innerHTML = info_Juegos.descripcion.replace(/\n/g, '<br>');
    document.getElementById('creadoresJuego').textContent = info_Juegos.creadores;
    // IMAGEN
    const imagenJuego = document.getElementById('imagenJuego');
    imagenJuego.style.backgroundImage = `url('${info_Juegos.imagen}')`;
    imagenJuego.style.backgroundSize = 'cover';
    // FIN IMAGEN

    // VIDEOS
    const tutorialJuego = document.getElementById('tutorialJuego');
    tutorialJuego.src = info_Juegos.tutorial_vid;
    
    const trailerJuego = document.getElementById('trailerJuego');
    trailerJuego.src = info_Juegos.trailer_vid;
    // FIN VIDEOS

    // document.getElementById('disponibilidadJuego').textContent = info_Juegos.disponibilidad;
    // document.getElementById('precioJuego').textContent = info_Juegos.precio;
}

cargarJuego();
