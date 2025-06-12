// main.js
// Revista digital sencilla sin librerías externas

// 1. Define el contenido de cada página (puedes expandirlo o dividirlo más si lo deseas)
const pages = [
    // Portada
    `<div class='magazine-page portada'>
        <h1>Raíces y Futuro</h1>
        <h2>Diversidad Cultural y Participación Ciudadana en el Estado de México</h2>
        <img src='frame.png' alt='Código QR' width='90' height='90' style='margin: 24px auto;'>
        <p class='subtitle'>Revista Digital de Ciencias Sociales II</p>
        <hr style="border: none; border-top: 2px solid #fff; width: 60%; margin: 2em auto 1em auto;">
        <p style="font-size:1.1em; font-style:italic; margin-top:1.5em;">“La diversidad cultural es la riqueza de los pueblos, el puente entre el pasado y el futuro.”</p>
        <p style="margin-top:2em;font-size:1.05em;">Edición especial dedicada a la exploración de la identidad, la memoria y la participación social en el Estado de México.<br><br><b>Colaboradores:</b> Estudiantes, docentes y miembros de la comunidad de Jilotepec.</p>
    </div>`,
    // Bienvenida y galería
    `<div class='magazine-page'>
        <h2>¡Bienvenidos a la revista!</h2>
        <p style="font-size:1.1em;">Explora la riqueza cultural de los pueblos originarios y afrodescendientes en el Estado de México, con especial enfoque en Jilotepec. Descubre cómo la democracia participativa y la ciudadanía activa están transformando nuestras comunidades.</p>
        <div style='display:flex;gap:18px;flex-wrap:wrap;justify-content:center;margin:2em 0;'>
            <div style="background:#f7faff;border-radius:10px;padding:10px 8px;box-shadow:0 1px 6px rgba(44,62,80,0.08);width:130px;">
                <img src='1.jpg' alt='Cultura Indígena' style='width:100%;border-radius:8px;'>
                <div style='text-align:center;font-size:0.95em;margin-top:0.5em;'>Diversidad cultural</div>
            </div>
            <div style="background:#f7faff;border-radius:10px;padding:10px 8px;box-shadow:0 1px 6px rgba(44,62,80,0.08);width:130px;">
                <img src='tradiciones.jpg' alt='Tradiciones' style='width:100%;border-radius:8px;'>
                <div style='text-align:center;font-size:0.95em;margin-top:0.5em;'>Tradiciones y costumbres</div>
            </div>
            <div style="background:#f7faff;border-radius:10px;padding:10px 8px;box-shadow:0 1px 6px rgba(44,62,80,0.08);width:130px;">
                <img src='participacionciudadana.webp' alt='Participación Ciudadana' style='width:100%;border-radius:8px;'>
                <div style='text-align:center;font-size:0.95em;margin-top:0.5em;'>Participación ciudadana</div>
            </div>
        </div>
        <hr class="section-sep">
        <div style="margin-top:2em;">
            <p><b>¿Qué encontrarás en esta edición?</b></p>
            <ul style="margin-left:1.2em;">
                <li>Un recorrido por los pueblos indígenas y afrodescendientes del Estado de México, con historias de vida y testimonios de sus habitantes.</li>
                <li>Costumbres, tradiciones, leyendas y recetas típicas que dan vida a la región.</li>
                <li>Ejemplos reales de participación ciudadana, democracia comunitaria y logros colectivos.</li>
                <li>Reflexiones sobre el papel de la juventud, la importancia de la identidad cultural y el futuro de nuestras comunidades.</li>
            </ul>
        </div>
        <hr class="section-sep">
        <p style="text-align:center;font-size:1.05em;color:#2d6cdf;margin-top:2em;">¡Comienza a hojear y déjate sorprender! 📖✨</p>
    </div>`,
    // Índice
    `<div class='magazine-page'>
        <h3 class='index-title'>Índice de Contenidos</h3>
        <ul class='index-list' style='columns:1;'>
            <li>🌽 Pueblos Indígenas en el Estado de México</li>
            <li>🧑‍🌾 Otomíes (Hñahñú)</li>
            <li>🌄 Nahuas</li>
            <li>🧵 Mazahuas</li>
            <li>Pueblos Afrodescendientes</li>
            <li>🎉 Costumbres y Tradiciones</li>
            <li>💃 Danzas Tradicionales</li>
            <li>👗 Vestimenta Típica</li>
            <li>🤝 Influencia en la Organización Social</li>
            <li>🗳️ Democracia Participativa</li>
            <li>🏡 Caso: San Lorenzo Oltepec</li>
            <li>🙋‍♂️ Participación Ciudadana</li>
            <li>🧑‍🎓 Participación Juvenil</li>
        </ul>
        <hr class="section-sep">
        <div style="margin-top:1.5em;">
            <p style="color:#3a4a6b;font-size:1em;">Navega usando los botones y disfruta cada página. <br>Recuerda que cada sección está pensada para inspirar, informar y motivar la participación.</p>
        </div>
    </div>`,
    // Pueblos Indígenas - Introducción
    `<div class='magazine-page'>
        <h2>🌽 Pueblos Indígenas en el Estado de México</h2>
        <blockquote style="background:#eaf1fb;padding:1em 1.5em;border-left:4px solid #2d6cdf;border-radius:8px;font-style:italic;">“Nuestros pueblos originarios son guardianes de la memoria, la lengua y la tierra.”</blockquote>
        <p>El Estado de México es hogar de una gran diversidad de pueblos originarios, cada uno con su propia lengua, cosmovisión y tradiciones. Entre los más representativos se encuentran los otomíes, nahuas y mazahuas, quienes han resistido el paso del tiempo y la modernidad, manteniendo vivas sus raíces.</p>
        <div style="margin-top:1.2em;">
            <b>¿Sabías que...?</b>
            <ul>
                <li>En el Estado de México se hablan al menos 5 lenguas indígenas, entre ellas otomí, mazahua, náhuatl, matlatzinca y tlahuica.</li>
                <li>Según el INEGI 2020, más de 400,000 personas en el estado se reconocen como indígenas.</li>
                <li>Las fiestas patronales y los rituales agrícolas siguen siendo parte fundamental de la vida comunitaria.</li>
                <li>La transmisión oral de historias y leyendas es clave para preservar la identidad. Ejemplo: la leyenda del cerro del Xochitécatl, que narra el origen de los pueblos de la región.</li>
            </ul>
        </div>
        <div style="margin-top:1.2em;">
            <b>Cita:</b> <span style="font-style:italic;">“Ser indígena es llevar en la sangre la historia de nuestros abuelos y el sueño de nuestros hijos.”</span></div>
    </div>`,
    // Otomíes
    `<div class='magazine-page'>
        <h3>🧑‍🌾 Otomíes (Hñahñú)</h3>
        <img src='comunidad_otomi.jpg' alt='Comunidad Otomí'>
        <p>Los otomíes, que se autodenominan Hñahñú, son uno de los pueblos indígenas más numerosos del Estado de México. Su lengua pertenece a la familia otomangue y cuenta con variantes dialectales.</p>
        <h4>Historia y presencia</h4>
        <p>Los otomíes han habitado el altiplano central desde tiempos prehispánicos. Fueron aliados y rivales de los mexicas y participaron en la defensa de sus territorios durante la conquista. Hoy, su presencia es fuerte en Temoaya, Acambay, Jilotepec y Villa del Carbón.</p>
        <h4>Cultura y Cosmovisión</h4>
        <p>La cosmovisión otomí gira en torno a la dualidad: frío/caliente, masculino/femenino, vida/muerte. El maíz es sagrado y está presente en rituales, fiestas y la alimentación diaria. La música, la danza y la medicina tradicional son pilares de su vida comunitaria.</p>
        <h4>Lengua y educación</h4>
        <p>El hñähñu se enseña en escuelas bilingües y en talleres comunitarios. Hay esfuerzos por revitalizar la lengua a través de cuentos, canciones y materiales didácticos.</p>
        <h4>Aportaciones</h4>
        <ul>
            <li>🌱 Técnicas agrícolas tradicionales como la milpa, que promueve la biodiversidad y la autosuficiencia alimentaria.</li>
            <li>🧶 Artesanías en lana, textiles bordados y cerámica con símbolos ancestrales. Destacan los tapetes de Temoaya y los bordados de Jilotepec.</li>
            <li>🌿 Medicina tradicional basada en plantas y saberes transmitidos por generaciones. Los curanderos otomíes son reconocidos en la región.</li>
            <li>🌎 Filosofía de respeto y equilibrio con la naturaleza, reflejada en rituales de agradecimiento a la tierra.</li>
        </ul>
        <h4>Fiestas y tradiciones</h4>
        <p>La fiesta de San Lorenzo en Jilotepec y la celebración del equinoccio en Temoaya son ejemplos de la vitalidad cultural otomí.</p>
        <h4>Desafíos Actuales</h4>
        <p>La migración, la discriminación y la pérdida de la lengua entre los jóvenes son retos importantes. Sin embargo, proyectos de educación bilingüe y turismo cultural están revitalizando la identidad otomí.</p>
        <hr class="section-sep">
        <p style="font-size:0.98em;color:#3a4a6b;">“El que no sabe de dónde viene, difícilmente sabrá hacia dónde va.”</p>
    </div>`,
    // Nahuas
    `<div class='magazine-page'>
        <h3>🌄 Nahuas</h3>
        <img src='comunidad_nahua.jpg' alt='Comunidad Nahua'>
        <p>Los nahuas son descendientes directos de los mexicas y otros pueblos que hablaban náhuatl en el período prehispánico. Su lengua, el náhuatl, es la indígena con más hablantes en México.</p>
        <h4>Historia y presencia</h4>
        <p>Los nahuas han sido protagonistas de la historia de México desde la época mexica. En el Estado de México, su presencia se concentra en Texcoco, Chimalhuacán, Valle de Chalco y zonas rurales de Jilotepec.</p>
        <h4>Cultura y Cosmovisión</h4>
        <p>La relación con la naturaleza y el ciclo agrícola es central. El calendario ritual nahua combina elementos prehispánicos y católicos. La música, la danza y la gastronomía (como el mole y los tamales) son expresiones vivas de su identidad.</p>
        <h4>Lengua y educación</h4>
        <p>El náhuatl se enseña en talleres y escuelas comunitarias. Hay proyectos de rescate lingüístico y publicaciones de cuentos y poesía en náhuatl.</p>
        <h4>Aportaciones</h4>
        <ul>
            <li>🍲 Gastronomía tradicional: mole, tamales, atole, tlacoyos y salsas de chile.</li>
            <li>🌿 Herbolaria y medicina tradicional, con un vasto conocimiento de plantas y remedios naturales.</li>
            <li>🪶 Arte plumario, alfarería y elaboración de máscaras para fiestas y carnavales.</li>
            <li>🤲 Sistema de cargos comunitarios (tequio) y asambleas para la toma de decisiones colectivas.</li>
        </ul>
        <h4>Fiestas y tradiciones</h4>
        <p>El Día de Muertos, la fiesta de San Miguel y las danzas de carnaval son celebraciones emblemáticas nahuas.</p>
        <h4>Desafíos Actuales</h4>
        <p>La presión sobre sus tierras, la contaminación y la migración afectan la preservación de sus tradiciones. Talleres de lengua y ferias culturales buscan fortalecer la identidad nahua.</p>
        <hr class="section-sep">
        <p style="font-size:0.98em;color:#3a4a6b;">Dato curioso: El náhuatl es una de las lenguas originarias más estudiadas en universidades de todo el mundo.</p>
    </div>`,
    // Mazahuas
    `<div class='magazine-page'>
        <h3>🧵 Mazahuas</h3>
        <img src='comunidad_mazahua.webp' alt='Comunidad Mazahua'>
        <p>Los mazahuas son un pueblo indígena cuya lengua pertenece a la familia otomangue. Son conocidos por su rica tradición textil y su profunda conexión con la tierra.</p>
        <h4>Historia y presencia</h4>
        <p>Los mazahuas han habitado la región noroccidental del Estado de México desde tiempos ancestrales. Su cultura se ha enriquecido con influencias purépechas y otomíes.</p>
        <h4>Cultura y Cosmovisión</h4>
        <p>El maíz, el agua y la tierra son elementos sagrados. Celebran ceremonias agrícolas, peticiones de lluvia y fiestas patronales con música y danzas. La vestimenta mazahua es famosa por sus bordados coloridos y símbolos de protección.</p>
        <h4>Lengua y educación</h4>
        <p>El mazahua se enseña en escuelas bilingües y en talleres de bordado. Las abuelas son guardianas de la lengua y las tradiciones.</p>
        <h4>Aportaciones</h4>
        <ul>
            <li>🧵 Textiles bordados con motivos tradicionales y colores vivos. El rebozo mazahua es símbolo de identidad.</li>
            <li>🎶 Música y danzas como la Danza de los Concheros y la Danza de los Arcos.</li>
            <li>🏠 Arquitectura tradicional con adobe, madera y techos de dos aguas.</li>
            <li>🌲 Conocimiento ecológico sobre manejo de bosques y agua, transmitido de generación en generación.</li>
        </ul>
        <h4>Fiestas y tradiciones</h4>
        <p>La fiesta de la Virgen de la Candelaria y las ferias artesanales son momentos clave para la comunidad mazahua.</p>
        <h4>Desafíos Actuales</h4>
        <p>La explotación de recursos, la migración y la apropiación cultural de sus diseños son retos actuales. Colectivos de artesanas luchan por el reconocimiento y la protección de su patrimonio.</p>
        <hr class="section-sep">
        <p style="font-size:0.98em;color:#3a4a6b;">¿Sabías que...? El rebozo mazahua es una de las prendas más representativas de la región.</p>
    </div>`,
    // Pueblos Afrodescendientes - Introducción
    `<div class='magazine-page'>
        <h2> Pueblos Afrodescendientes en el Estado de México</h2>
        <blockquote style="background:#eaf1fb;padding:1em 1.5em;border-left:4px solid #2d6cdf;border-radius:8px;font-style:italic;">“La historia afrodescendiente es también la historia de México.”</blockquote>
        <p>Las comunidades afrodescendientes han estado presentes en México desde el siglo XVI. Aunque menos visibilizadas, han aportado música, gastronomía, danzas y saberes que enriquecen la cultura nacional.</p>
        <div style="margin-top:1.2em;">
            <b>¿Sabías que...?</b>
            <ul>
                <li>En 2020, el INEGI reconoció oficialmente a la población afrodescendiente en el censo nacional.</li>
                <li>La música de raíz africana, como el son jarocho y la chilena, es parte del patrimonio sonoro de México.</li>
                <li>Las comunidades afrodescendientes han desarrollado técnicas únicas para la fabricación de instrumentos musicales.</li>
                <li>En la Costa Chica de Guerrero y Oaxaca, las fiestas afrodescendientes son reconocidas por la UNESCO como patrimonio cultural inmaterial.</li>
            </ul>
        </div>
        <div style="margin-top:1.2em;">
            <b>Cita:</b> <span style="font-style:italic;">“Ser afrodescendiente es bailar con la historia y cantar con el corazón.”</span></div>
    </div>`,
    // Afrodescendientes: Presencia
    `<div class='magazine-page'>
        <h3>Presencia Afrodescendiente</h3>
        <img src='comunidad_afro.avif' alt='Comunidad Afrodescendiente'>
        <p>Según el INEGI, en el Estado de México hay aproximadamente <b>150,000 personas</b> que se reconocen como afrodescendientes, principalmente en municipios como Cuautla y algunas zonas de Puebla cercanas al estado.</p>
        <div style="margin-top:1.2em;">
            <b>Principales aportaciones:</b>
            <ul>
                <li>La chilena y el son jarocho, géneros musicales con raíces africanas.</li>
                <li>Platillos como el arroz con coco y el uso del plátano macho en la cocina.</li>
                <li>Elaboración de máscaras y danzas con ritmos africanos.</li>
                <li>La tradición oral de cuentos y leyendas que explican el origen de la comunidad.</li>
            </ul>
        </div>
        <div style="margin-top:1.2em;">
            <b>Testimonio:</b> <span style="font-style:italic;">“Mi abuela me enseñó a tocar el tambor y a bailar la chilena. Así recordamos a nuestros ancestros.”</span></div>
    </div>`,
    // Afrodescendientes: Historia y aportaciones
    `<div class='magazine-page'>
        <h4>Historia</h4>
        <p>Los primeros africanos llegaron como esclavos durante la colonia, trabajando en minas, haciendas y obrajes. Con el tiempo se mezclaron con indígenas y europeos, pero mantuvieron elementos culturales distintivos. En el Estado de México, su presencia se ha fortalecido en las últimas décadas gracias a la autoidentificación y el reconocimiento legal.</p>
        <h4>Aportaciones Culturales</h4>
        <ul>
            <li>🎵 Influencia en la música tradicional (son jarocho, chilena, fandango).</li>
            <li>🍌 Contribuciones a la gastronomía (arroz con coco, plátano macho, técnicas de fritura).</li>
            <li>💃 Expresiones dancísticas con ritmos africanos y zapateado.</li>
            <li>📖 Tradiciones orales, cuentos y leyendas transmitidas de generación en generación.</li>
            <li>Elaboración de instrumentos musicales como tambores, marimbas y quijadas de burro.</li>
        </ul>
        <div style="margin-top:1.2em;">
            <b>Dato curioso:</b> En la Costa Chica de Guerrero y Oaxaca, las fiestas afrodescendientes son reconocidas por la UNESCO como patrimonio cultural inmaterial.</div>
        <div style="margin-top:1.2em;">
            <b>Cita:</b> <span style="font-style:italic;">“La música es la voz de nuestros antepasados.”</span></div>
    </div>`,
    // Afrodescendientes: Desafíos y resiliencia
    `<div class='magazine-page'>
        <h4>Desafíos Actuales</h4>
        <p>Discriminación, invisibilización y falta de reconocimiento oficial han sido retos históricos. Sin embargo, desde 2019 el INEGI incluye preguntas sobre afrodescendencia en censos, lo que ayuda a visibilizar a esta población. El acceso a la educación y la preservación de las tradiciones siguen siendo desafíos.</p>
        <h4>Ejemplo de Resiliencia</h4>
        <p>En Cuautla, la familia Martínez ha mantenido por generaciones la tradición de fabricar instrumentos musicales con técnicas traídas por sus ancestros africanos, adaptándolas a materiales locales. Hoy, sus tambores y marimbas son reconocidos en toda la región y se utilizan en fiestas y ceremonias.</p>
        <div style='margin-top:15px;'>
            <a href='https://www.youtube.com/watch?v=xbNbRjKuQQ4' target='_blank' style="color:#2d6cdf;font-weight:600;">▶️ Ver video sobre afrodescendientes en México</a>
        </div>
        <hr class="section-sep">
        <p style="font-size:0.98em;color:#3a4a6b;">“La resiliencia afrodescendiente es ejemplo de fortaleza y creatividad.”</p>
        <div style="margin-top:1.2em;">
            <b>Testimonio:</b> <span style="font-style:italic;">“Ser afrodescendiente es un orgullo y una responsabilidad. Debemos mantener vivas nuestras raíces.”</span></div>
    </div>`,
    // Costumbres y Tradiciones - Introducción
    `<div class='magazine-page'>
        <h2>🎉 Costumbres y Tradiciones de las Comunidades</h2>
        <blockquote style="background:#eaf1fb;padding:1em 1.5em;border-left:4px solid #2d6cdf;border-radius:8px;font-style:italic;">“Las tradiciones son el alma viva de los pueblos.”</blockquote>
        <p>El Estado de México, y en particular el municipio de Jilotepec, cuenta con un rico patrimonio cultural inmaterial que se manifiesta en fiestas, danzas, vestimenta y gastronomía. Las celebraciones patronales, los carnavales y las ferias son momentos de encuentro y reafirmación de la identidad.</p>
        <div style="margin-top:1.2em;">
            <b>Ejemplo:</b> En Jilotepec, la fiesta de San Lorenzo reúne a toda la comunidad en torno a la música, la danza y la comida tradicional. Se preparan platillos como el mole, los tamales y el atole, y se realizan procesiones y juegos tradicionales.</div>
        <div style="margin-top:1.2em;">
            <b>Receta típica:</b> <span style="font-style:italic;">Tamales de frijol con hoja de milpa, acompañados de atole de maíz azul.</span></div>
        <div style="margin-top:1.2em;">
            <b>Curiosidad:</b> <span style="font-style:italic;">En algunas comunidades, las mujeres transmiten las recetas y los secretos culinarios de generación en generación.</span></div>
    </div>`,
    // Danzas Tradicionales
    `<div class='magazine-page'>
        <h3>💃 Danzas Tradicionales</h3>
        <div class='card-container'>
            <div class='card'>
                <img src='danza_concheros.jpg' alt='Danza de los Concheros'>
                <h4>Danza de los Concheros</h4>
                <p>Practicada por comunidades otomíes y mazahuas, esta danza ritual combina elementos prehispánicos y cristianos. Los danzantes usan trajes elaborados y se acompañan con instrumentos de cuerda hechos con caparazones de armadillo. La danza es una ofrenda a la tierra y a los antepasados.</p>
            </div>
            <div class='card'>
                <img src='danza_arcos.jpg' alt='Danza de los Arcos'>
                <h4>Danza de los Arcos</h4>
                <p>Característica de las fiestas patronales en Jilotepec, donde los danzantes tejen y destejen figuras con arcos floridos mientras avanzan al ritmo de la música. Simboliza la unión comunitaria y la alegría colectiva. Los arcos representan la fertilidad y la abundancia.</p>
            </div>
        </div>
        <div style="margin-top:1.2em;">
            <b>Dato:</b> Las danzas tradicionales no solo son espectáculo, sino también ofrenda y agradecimiento a la tierra y los ancestros. Los niños y jóvenes participan activamente, aprendiendo los pasos y el significado de cada movimiento.</div>
        <div style="margin-top:1.2em;">
            <b>Testimonio:</b> <span style="font-style:italic;">“Bailar la danza de los arcos es sentir la fuerza de mi pueblo y la alegría de estar juntos.”</span></div>
    </div>`,
    // Vestimenta Típica
    `<div class='magazine-page'>
        <h3>👗 Vestimenta Típica</h3>
        <div style='display:flex;gap:18px;flex-wrap:wrap;justify-content:center;'>
            <div style="background:#f7faff;border-radius:10px;padding:10px 8px;box-shadow:0 1px 6px rgba(44,62,80,0.08);width:120px;">
                <img src='mujer_mazahua.jpg' alt='Mujer Mazahua' style='width:100%;border-radius:8px;'>
                <div style='text-align:center;font-size:0.95em;margin-top:0.5em;'>Vestimenta Mazahua</div>
            </div>
            <div style="background:#f7faff;border-radius:10px;padding:10px 8px;box-shadow:0 1px 6px rgba(44,62,80,0.08);width:120px;">
                <img src='hombre_otomi.avif' alt='Hombre Otomí' style='width:100%;border-radius:8px;'>
                <div style='text-align:center;font-size:0.95em;margin-top:0.5em;'>Vestimenta Otomí</div>
            </div>
            <div style="background:#f7faff;border-radius:10px;padding:10px 8px;box-shadow:0 1px 6px rgba(44,62,80,0.08);width:120px;">
                <img src='bordados_tradicionales.jpg' alt='Bordados Tradicionales' style='width:100%;border-radius:8px;'>
                <div style='text-align:center;font-size:0.95em;margin-top:0.5em;'>Bordados Tradicionales</div>
            </div>
        </div>
        <p style="margin-top:1.5em;">La indumentaria tradicional refleja identidad, estatus y ocasiones especiales, además de ser un testimonio de habilidades artesanales. Los bordados, colores y formas cuentan historias y transmiten valores. El quechquémitl otomí y el rebozo mazahua son prendas emblemáticas que se usan en fiestas y ceremonias.</p>
        <div style="margin-top:1.2em;">
            <b>Dato:</b> El rebozo mazahua y el quechquémitl otomí son prendas emblemáticas reconocidas a nivel nacional. Los colores y los símbolos varían según la región y el significado.</div>
        <div style="margin-top:1.2em;">
            <b>Testimonio:</b> <span style="font-style:italic;">“Cada puntada en mi rebozo es un recuerdo de mi abuela y de mi pueblo.”</span></div>
    </div>`,
    // Influencia en la Organización Social
    `<div class='magazine-page'>
        <h3>🤝 Influencia en la Organización Social</h3>
        <h4>Influencias Positivas</h4>
        <ul>
            <li>💪 <b>Fortalecimiento de identidad:</b> Las tradiciones unen a la comunidad alrededor de valores compartidos y refuerzan el sentido de pertenencia.</li>
            <li>👵 <b>Transmisión intergeneracional:</b> Los mayores enseñan a los jóvenes su herencia cultural a través de relatos, talleres y fiestas.</li>
            <li>💰 <b>Economía local:</b> La producción artesanal y el turismo cultural generan ingresos y empleo. Muchas familias viven de la venta de textiles, cerámica y alimentos típicos.</li>
            <li>🧑‍🤝‍🧑 <b>Gobernanza comunitaria:</b> Sistemas como el tequio y la mayordomía organizan el trabajo colectivo y la toma de decisiones. Las asambleas son espacios de diálogo y consenso.</li>
        </ul>
        <h4>Influencias Negativas</h4>
        <ul>
            <li>💸 <b>Costos económicos:</b> Los cargos festivos pueden representar gastos excesivos para familias, generando endeudamiento.</li>
            <li>🚻 <b>Roles de género:</b> Algunas tradiciones perpetúan desigualdades entre hombres y mujeres, limitando la participación femenina en cargos de autoridad.</li>
            <li>⛔ <b>Resistencia al cambio:</b> En algunos casos, se rechazan innovaciones que podrían mejorar condiciones de vida, por temor a perder la identidad.</li>
            <li>🎭 <b>Folklorización:</b> Reducción de culturas vivas a espectáculos para turistas, perdiendo su sentido profundo y comunitario.</li>
        </ul>
        <div style="margin-top:1.2em;">
            <b>Reflexión:</b> El reto es mantener vivas las tradiciones, adaptándolas a los nuevos tiempos sin perder su esencia. La participación de mujeres y jóvenes es clave para la renovación cultural.</div>
    </div>`,
    // Democracia Participativa - Introducción
    `<div class='magazine-page'>
        <h2>🗳️ Democracia Participativa en las Comunidades</h2>
        <blockquote style="background:#eaf1fb;padding:1em 1.5em;border-left:4px solid #2d6cdf;border-radius:8px;font-style:italic;">“La democracia se construye con la voz y la acción de todos.”</blockquote>
        <p>La democracia participativa va más allá del voto, involucrando a los ciudadanos en la toma de decisiones sobre asuntos que afectan sus vidas cotidianas. En las comunidades indígenas y rurales, la asamblea y el consenso son prácticas ancestrales de autogobierno.</p>
        <div style="margin-top:1.2em;">
            <b>Ejemplo:</b> En muchas comunidades, el presupuesto participativo permite decidir en qué se invierte el dinero público. Las mujeres y los jóvenes han comenzado a tener voz y voto en las asambleas.</div>
        <div style="margin-top:1.2em;">
            <b>Cita:</b> <span style="font-style:italic;">“La democracia no es un acto, es un proceso de todos los días.”</span></div>
    </div>`,
    // Democracia Participativa - Mecanismos
    `<div class='magazine-page'>
        <h3>¿Qué es la Democracia Participativa?</h3>
        <p>Es un modelo de organización política donde los ciudadanos tienen un papel activo y directo en las decisiones públicas, a través de mecanismos como:</p>
        <ul>
            <li>👥 Comités Vecinales: Grupos de vecinos que identifican y priorizan necesidades. Ejemplo: organizar la limpieza de calles o la reparación de luminarias.</li>
            <li>💰 Presupuesto Participativo: Los ciudadanos deciden cómo se gasta parte del presupuesto municipal. En Jilotepec, se han financiado parques y aulas escolares.</li>
            <li>🗣️ Asambleas Comunitarias: Espacios abiertos para debatir y votar temas relevantes. Las decisiones se toman por mayoría y se respetan los acuerdos.</li>
            <li>🌳 Jornadas Comunitarias: Acciones colectivas para mejorar el entorno, como limpieza y reforestación. Se fomenta el trabajo en equipo y la solidaridad.</li>
            <li>📋 Consultas Ciudadanas: Votaciones sobre proyectos o problemas específicos. Ejemplo: decidir si se construye un pozo o se pavimenta una calle.</li>
            <li>🧑‍⚖️ Consejos Ciudadanos: Órganos consultivos que supervisan y asesoran a las autoridades. Promueven la transparencia y la rendición de cuentas.</li>
        </ul>
        <div style="margin-top:1.2em;">
            <b>Dato:</b> La democracia participativa fortalece la confianza y la corresponsabilidad social. En Jilotepec, la participación ciudadana ha mejorado la calidad de los servicios públicos.</div>
    </div>`,
    // Democracia Participativa - Ejemplos visuales
    `<div class='magazine-page'>
        <div class='card-container'>
            <div class='card'><img src='comites_vecinales.jpg' alt='Comités Vecinales'><h4>Comités Vecinales</h4><p>Organizaciones de base donde los residentes discuten y priorizan necesidades de su colonia o comunidad. Fomentan la solidaridad y la cooperación. Ejemplo: el comité de San Lorenzo logró instalar alumbrado público en su calle.</p></div>
            <div class='card'><img src='presupuesto_par.webp' alt='Presupuesto Participativo'><h4>Presupuesto Participativo</h4><p>Proceso mediante el cual los ciudadanos deciden directamente cómo asignar parte del presupuesto público. Ejemplo: elegir entre pavimentar calles o mejorar la escuela.</p></div>
            <div class='card'><img src='asambleas.webp' alt='Asambleas Comunitarias'><h4>Asambleas Comunitarias</h4><p>Reuniones donde todos los miembros de una comunidad pueden expresar su opinión y votar sobre temas relevantes. Son la base de la democracia directa. En Jilotepec, las asambleas se realizan cada mes.</p></div>
            <div class='card'><img src='jornada_limpieza.jpg' alt='Jornadas de Limpieza'><h4>Jornadas Comunitarias</h4><p>Acciones colectivas para mejorar el entorno, como limpieza, reforestación o mantenimiento de espacios públicos. Fortalecen el sentido de pertenencia. Los niños participan plantando árboles.</p></div>
            <div class='card'><img src='consultas.jpg' alt='Consultas Ciudadanas'><h4>Consultas Ciudadanas</h4><p>Mecanismos formales donde los ciudadanos pueden votar y opinar sobre proyectos específicos que impactan a su comunidad. Ejemplo: consulta para elegir el nombre de una nueva calle.</p></div>
            <div class='card'><img src='consejos.jpg' alt='Consejos Ciudadanos'><h4>Consejos Ciudadanos</h4><p>Órganos consultivos formados por vecinos que supervisan y asesoran en la implementación de políticas públicas locales. En Jilotepec, el consejo ciudadano revisa el presupuesto municipal.</p></div>
        </div>
    </div>`,
    // Caso: San Lorenzo Oltepec
    `<div class='magazine-page'>
        <h3>🏡 Caso: San Lorenzo Oltepec</h3>
        <ul>
            <li><b>2018 - Diagnóstico Comunitario:</b> Mediante asambleas, identificaron como prioridades el mantenimiento del pozo de agua y la mejora de la escuela primaria. Se realizaron encuestas y visitas casa por casa.</li>
            <li><b>2019 - Presupuesto Participativo:</b> Asignaron el 30% del presupuesto municipal a estas obras, con seguimiento ciudadano a la ejecución. Se formó un comité de vigilancia.</li>
            <li><b>2020 - Jornadas de Limpieza:</b> Organizaron brigadas mensuales para mantener limpios los espacios públicos, con participación de todas las edades. Se recolectaron más de 2 toneladas de basura.</li>
            <li><b>2021 - Comité de Vigilancia:</b> Crearon un grupo ciudadano para supervisar que las obras se realizaran conforme a lo acordado. Se publicaron reportes en redes sociales.</li>
            <li><b>2022 - Resultados:</b> Pozo rehabilitado que beneficia a 120 familias, escuela con aulas renovadas, y mayor cohesión comunitaria. Se celebró una fiesta de inauguración.</li>
        </ul>
        <hr class="section-sep">
        <div style="margin-top:1.2em;">
            <b>Reflexión:</b> La participación ciudadana puede transformar realidades y mejorar la calidad de vida de toda una comunidad. El trabajo en equipo y la transparencia son clave para el éxito.</div>
    </div>`,
    // Participación Ciudadana - Introducción
    `<div class='magazine-page'>
        <h2>🙋‍♂️ Participación Ciudadana en Jilotepec</h2>
        <blockquote style="background:#eaf1fb;padding:1em 1.5em;border-left:4px solid #2d6cdf;border-radius:8px;font-style:italic;">“La ciudadanía activa es la base de una sociedad justa y solidaria.”</blockquote>
        <p>La participación ciudadana es el involucramiento activo de los individuos en procesos políticos, sociales y culturales que afectan sus comunidades. En Jilotepec, la colaboración entre vecinos ha permitido crear proyectos innovadores y fortalecer la democracia local.</p>
        <div style="margin-top:1.2em;">
            <b>Ejemplo:</b> El Consejo Juvenil Municipal impulsa actividades culturales, deportivas y de protección ambiental. Han organizado concursos de muralismo, campañas de reciclaje y talleres de liderazgo.</div>
    </div>`,
    // Participación Ciudadana - Mecanismos
    `<div class='magazine-page'>
        <h3>¿Qué es la Participación Ciudadana?</h3>
        <p>Es el derecho y deber de los ciudadanos de intervenir en las decisiones públicas, ya sea a través de mecanismos institucionales o de organización comunitaria. Incluye:</p>
        <ul>
            <li>🗳️ Votar en elecciones para elegir autoridades. En Jilotepec, la participación electoral ha aumentado en los últimos años.</li>
            <li>📋 Participar en consultas públicas sobre obras y servicios. Ejemplo: decidir el destino de un terreno baldío.</li>
            <li>🧑‍⚖️ Integrar consejos ciudadanos y comités de vigilancia. Los vecinos pueden postularse y ser elegidos por la comunidad.</li>
            <li>🗣️ Asistir a asambleas y reuniones vecinales. Se discuten temas como seguridad, limpieza y cultura.</li>
            <li>🤲 Organizar iniciativas comunitarias, como campañas de limpieza o reforestación. En 2022, se plantaron más de 500 árboles en Jilotepec.</li>
            <li>👀 Vigilar el desempeño de autoridades y exigir transparencia. El observatorio ciudadano publica reportes trimestrales.</li>
        </ul>
        <div style="margin-top:1.2em;">
            <b>Dato:</b> La participación ciudadana fortalece la democracia y promueve la corresponsabilidad social. En Jilotepec, la colaboración entre jóvenes y adultos ha sido fundamental.</div>
    </div>`,
    // Participación Ciudadana - Ejemplos
    `<div class='magazine-page'>
        <h3>Ejemplos en Jilotepec</h3>
        <div class='card-container'>
            <div class='card'><img src='consejo_j.webp' alt='Consejo Juvenil'><h4>Consejo Juvenil Municipal</h4><p>Espacio donde jóvenes de 15 a 29 años proponen proyectos e inciden en políticas públicas locales. En 2023 lograron la creación de un centro cultural juvenil y la organización de ferias de ciencia y arte. Han impulsado la creación de un mural colectivo y la recuperación de espacios públicos.</p></div>
            <div class='card'><img src='patrullas.webp' alt='Patrullas Ambientales'><h4>Patrullas Ambientales Comunitarias</h4><p>Vecinos organizados monitorean y reportan problemas ambientales como tiraderos clandestinos o contaminación de cuerpos de agua. Han logrado la recuperación de espacios verdes y la limpieza de ríos.</p></div>
            <div class='card'><img src='observatorio.jpg' alt='Observatorio Ciudadano'><h4>Observatorio Ciudadano</h4><p>Grupo que da seguimiento al desempeño del gobierno municipal y publica informes trimestrales sobre cumplimiento de metas. Promueven la transparencia y la rendición de cuentas, y han capacitado a jóvenes en temas de participación.</p></div>
        </div>
    </div>`,
    // Participación desde la Juventud
    `<div class='magazine-page'>
        <h3>🧑‍🎓 Participación desde la Juventud</h3>
        <ul>
            <li>🌐 <b>Redes Sociales:</b> Crean grupos para discutir problemas locales y organizar acciones. Ejemplo: campaña <span style="color:#2d6cdf;font-weight:600;">#JilotepecLimpio</span> que convocó a 200 voluntarios y logró limpiar 5 parques. Los jóvenes difunden información y convocan a la acción.</li>
            <li>🎨 <b>Arte Urbano:</b> Murales con mensajes sociales en espacios públicos, autorizados por el ayuntamiento mediante un programa de participación. Los murales embellecen la ciudad y transmiten valores de respeto y solidaridad.</li>
            <li>🌱 <b>Huertos Escolares:</b> Estudiantes de secundaria gestionaron y mantuvieron huertos que proveían verduras para el comedor escolar, promoviendo la alimentación saludable y el trabajo en equipo. Se han realizado talleres de agricultura urbana.</li>
            <li>🎙️ <b>Podcast Comunitario:</b> “Voces de mi Pueblo”, producido por jóvenes, difunde problemáticas locales, entrevista a autoridades y promueve la participación juvenil. El podcast ha sido escuchado en más de 10 municipios.</li>
        </ul>
        <hr class="section-sep">
        <div style="margin-top:1.2em;">
            <b>Reflexión:</b> La juventud es motor de cambio y esperanza. Su creatividad y energía son clave para construir un mejor futuro. Los jóvenes de Jilotepec demuestran que la participación no tiene edad.</div>
    </div>`,
    // Créditos
    `<div class='magazine-page credits'>
        <h3>Créditos</h3>
        <p>Proyecto escolar de Ciencias Sociales II - Parcial III</p>
        <p>Profesora: Mariana Balladares Rico</p>
        <p>Grupo: 401 - Semestre: Segundo</p>
        <p>Valor: 130 puntos (30% de la calificación)</p>
        <hr class="section-sep">
        <p style="font-size:1.1em;color:#2d6cdf;margin-top:1.5em;">Gracias por leer y ser parte del cambio. <br>¡Sigue explorando, aprendiendo y participando! 🌎🤝</p>
        <div style="margin-top:2em;font-size:0.98em;color:#3a4a6b;">“La cultura no es un lujo, es una necesidad del espíritu.” – José Vasconcelos</div>
    </div>`
];

// 2. Lógica de navegación y animación
let currentPage = 0;
const magazine = document.getElementById('magazine');
const pageIndicator = document.getElementById('pageIndicator');
const prevBtn = document.getElementById('prevPage');
const nextBtn = document.getElementById('nextPage');

function renderPage(newPage, direction = 0) {
    magazine.innerHTML = '';
    const pageDiv = document.createElement('div');
    pageDiv.innerHTML = pages[newPage];
    const pageContent = pageDiv.firstElementChild;
    pageContent.classList.add('active');
    magazine.appendChild(pageContent);
    if (direction === 1) {
        pageContent.style.transform = 'translateX(100%)';
        setTimeout(() => {
            pageContent.style.transition = 'all 0.5s cubic-bezier(.77,0,.18,1)';
            pageContent.style.transform = 'translateX(0)';
        }, 10);
    } else if (direction === -1) {
        pageContent.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            pageContent.style.transition = 'all 0.5s cubic-bezier(.77,0,.18,1)';
            pageContent.style.transform = 'translateX(0)';
        }, 10);
    }
    pageIndicator.textContent = `Página ${newPage + 1} de ${pages.length}`;
    prevBtn.disabled = newPage === 0;
    nextBtn.disabled = newPage === pages.length - 1;
}

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        renderPage(currentPage, -1);
    }
});
nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        renderPage(currentPage, 1);
    }
});

renderPage(currentPage, 0);

