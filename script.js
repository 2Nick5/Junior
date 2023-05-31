document.addEventListener('DOMContentLoaded', function() {
  var numDireccionesInput = document.getElementById('numDirecciones');
  var direccionesContainer = document.getElementById('direccionesContainer');
  var submitButton = document.createElement('button');
  submitButton.innerText = 'Submit';
  submitButton.type = 'button';
  submitButton.addEventListener('click', function() {
    guardarDatos();
  });

  numDireccionesInput.addEventListener('change', function() {
    var numDirecciones = parseInt(numDireccionesInput.value);
    
    // Limpiar el contenedor de direcciones
    direccionesContainer.innerHTML = '';
    
    // Generar los cuadros de texto para las direcciones
    for (var i = 1; i <= numDirecciones; i++) {
      var label = document.createElement('label');
      label.innerText = 'Dirección ' + i + ':';
      var input = document.createElement('input');
      input.type = 'text';
      input.name = 'direccion' + i;
      input.required = true;
      
      direccionesContainer.appendChild(label);
      direccionesContainer.appendChild(input);
      direccionesContainer.appendChild(document.createElement('br'));
    }
    
    // Agregar el botón "Submit" al contenedor de direcciones
    direccionesContainer.appendChild(submitButton);
  });

  function guardarDatos() {
    // Obtener los valores de los campos de dirección
    var numDirecciones = parseInt(numDireccionesInput.value);
    var direcciones = {};
    for (var i = 1; i <= numDirecciones; i++) {
      var input = document.getElementsByName('direccion' + i)[0];
      direcciones['direccion' + i] = input.value;
    }
    
  }

    var form = document.getElementById('identificationForm');    
    var numDireccionesInput = document.getElementById('numDirecciones');
    var direccionesContainer = document.getElementById('direccionesContainer');
        numDireccionesInput.addEventListener('change', function() {
      var numDirecciones = parseInt(numDireccionesInput.value);  
      direccionesContainer.innerHTML = '';      
      // Generar los cuadros de texto para las direcciones
      for (var i = 1; i <= numDirecciones; i++) {
        var label = document.createElement('label');
        label.innerText = 'Dirección ' + i + ':';
        var input = document.createElement('input');
        input.type = 'text';
        input.name = 'direccion' + i;
        input.required = true;
        
        direccionesContainer.appendChild(label);
        direccionesContainer.appendChild(input);
        direccionesContainer.appendChild(document.createElement('br'));
      }
    });
    var numDirecciones = parseInt(numDireccionesInput.value);
    const identificationForm = document.getElementById('identificationForm');
    const tableBody = document.querySelector('#identificationTable tbody');
    const ciudadesPorPais = {
      Afganistán: ['Kabul', 'Kandahar', 'Herat'],
      Albania: ['Tirana', 'Durrës', 'Vlorë'],
      Alemania: ['Berlín', 'Hamburgo', 'Múnich'],
      Andorra:['Andorra la Vella'],
      AntiguayBarbuda: ['Saint Johns', 'All Saints', 'Liberta', 'Bolans'],
      ArabiaSaudita: ['Riad', 'Jeddah', 'Meca', 'Medina'],
      Argelia: ['Argel', 'Orán', 'Constantina', 'Annaba'],
      Argentina: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza'],
      Armenia: ['Ereván', 'Gyumri', 'Vanadzor', 'Vagharshapat'],
      Australia: ['Sídney', 'Melbourne', 'Brisbane', 'Perth'],
      Austria: ['Viena', 'Graz', 'Linz', 'Salzburgo'],
      Azerbaiyán: ['Bakú', 'Ganja', 'Sumqayit', 'Mingachevir'],
      Bahamas: ['Nassau', 'Freeport', 'West End', 'Coopers Town'],
      Bangladés: ['Dhaka', 'Chittagong', 'Khulna', 'Rajshahi'],
      Barbados: ['Bridgetown', 'Speightstown', 'Oistins', 'Holetown'],
      Baréin: ['Manama', 'Riffa', 'Muharraq', 'Hamad Town'],
      Bélgica: ['Bruselas', 'Amberes', 'Gante', 'Charleroi'],
      Belice: ['Belmopan', 'Ciudad de Belice', 'San Ignacio', 'Orange Walk Town'],
      Bielorrusia: ['Minsk', 'Gomel', 'Mogilev', 'Vitebsk'],
      BirmaniaMyanmar: ['Yangón', 'Mandalay', 'Naypyidaw', 'Mawlamyine'],
      Bolivia: ['La Paz', 'Santa Cruz de la Sierra', 'Cochabamba', 'Sucre'],
      BosniayHerzegovina: ['Sarajevo', 'Banja Luka', 'Tuzla', 'Zenica'],
      Botsuana: ['Gaborone', 'Francistown', 'Molepolole', 'Selebi-Phikwe'],
      Brasil: ['São Paulo', 'Río de Janeiro', 'Brasilia', 'Salvador'],
      Brunéi: ['Bandar Seri Begawan', 'Kuala Belait', 'Seria', 'Tutong'],
      Bulgaria: ['Sofía', 'Plovdiv', 'Varna', 'Burgas'],
      BurkinaFaso: ['Uagadugú', 'Bobo-Dioulasso', 'Koudougou', 'Ouagadougou'],
      Burundi: ['Buyumbura', 'Gitega', 'Ruyigi', 'Muyinga'],
      Bután: ['Thimphu', 'Phuntsholing', 'Punakha', 'Jakar'],
      CaboVerde: ['Praia', 'Mindelo', 'Santa Maria', 'Assomada'],
      Camboya: ['Phnom Penh', 'Siem Reap', 'Battambang', 'Sihanoukville'],
      Camerún: ['Yaoundé', 'Duala', 'Garoua', 'Bamenda'],
      Canadá: ['Toronto', 'Montreal', 'Vancouver', 'Calgary'],
      Catar: ['Doha', 'Al-Wakrah', 'Al-Rayyan', 'Umm Salal'],
      Chad: ['NDjamena', 'Moundou', 'Sarh', 'Abéché'],
      Chile: ['Santiago', 'Valparaíso', 'Concepción', 'Viña del Mar'],
      China: ['Beijing', 'Shanghai', 'Guangzhou', 'Chongqing'],
      Chipre: ['Nicosia', 'Limassol', 'Larnaca', 'Paphos'],
      CiudaddelVaticano: ['Ciudad del Vaticano'],
      Colombia: ['Bogotá', 'Medellín', 'Cali', 'Barranquilla'],
      Comoras: ['Moroni', 'Mutsamudu', 'Fomboni', 'Domoni'],
      CoreadelNorte:['Pyongyang', 'Hamhung', 'Nampo', 'Wonsan'],
      CoreadelSur: ['Seúl', 'Busan', 'Incheon', 'Daegu'],
      CostadeMarfil: ['Abiyán', 'Bouaké', 'Daloa', 'Yamoussoukro'],
      CostaRica: ['San José', 'Liberia', 'Limón', 'Alajuela'],
      Croacia: ['Zagreb', 'Split', 'Rijeka', 'Osijek'],
      Cuba: ['La Habana', 'Santiago de Cuba', 'Camagüey', 'Holguín'],
      Dinamarca: ['Copenhague', 'Aarhus', 'Odense', 'Aalborg'],
      Dominica: ['Roseau', 'Portsmouth', 'Marigot', 'Saint Joseph'],
      Ecuador: ['Quito', 'Guayaquil', 'Cuenca', 'Santo Domingo'],
      Egipto: ['El Cairo', 'Alejandría', 'Giza', 'Shubra El-Kheima'],
      ElSalvador: ['San Salvador', 'Santa Ana', 'San Miguel', 'San Salvador de Jujuy'],
      EmiratosÁrabesUnidos: ['Dubái', 'Abu Dhabi', 'Sharjah', 'Ajman'],
      Eritrea: ['Asmara', 'Keren', 'Massawa', 'Assab'],
      Eslovaquia: ['Bratislava', 'Košice', 'Prešov', 'Nitra'],
      Eslovenia: ['Liubliana', 'Maribor', 'Celje', 'Kranj'],
      España: ['Madrid', 'Barcelona', 'Valencia', 'Sevilla'],
      EstadosUnidos: ['Nueva York', 'Los Ángeles', 'Chicago', 'Houston'],
      Estonia: ['Tallin', 'Tartu', 'Narva', 'Pärnu'],
      Etiopía: ['Adís Abeba', 'Addis Alem', 'Bahir Dar', 'Dire Dawa'],
      Filipinas: ['Manila', 'Cebú', 'Dávao', 'Quezon'],
      Finlandia: ['Helsinki', 'Espoo', 'Tampere', 'Vantaa'],
      Fiyi: ['Suva', 'Lautoka', 'Nadi', 'Labasa'],
      Francia: ['París', 'Marsella', 'Lyon', 'Toulouse'],
      Gabón: ['Libreville', 'Port-Gentil', 'Franceville', 'Oyem'],
      Gambia: ['Banjul', 'Serekunda', 'Brikama', 'Bakau'],
      Georgia: ['Tiflis', 'Kutaisi', 'Batumi', 'Rustavi'],
      Ghana: ['Acra', 'Kumasi', 'Tamale', 'Tema'],
      Granada: ['San Jorge', 'Saint Georges', 'Gouyave', 'Grenville'],
      Grecia: ['Atenas', 'Salónica', 'El Pireo', 'Patras'],
      Guatemala: ['Ciudad de Guatemala', 'Mixco', 'Villa Nueva', 'Quetzaltenango'],
      Guyana: ['Georgetown', 'Linden', 'New Amsterdam', 'Bartica'],
      Guinea: ['Conakry', 'Nzérékoré', 'Kindia', 'Kankan'],
      GuineaEcuatorial: ['Malabo', 'Bata', 'Ebebiyín', 'Aconibe'],
      GuineaBisáu: ['Bisáu', 'Bafatá', 'Gabú', 'Cacheu'],
      Haití: ['Puerto Príncipe', 'Carrefour', 'Delmas', 'Pétionville'],
      Honduras: ['Tegucigalpa', 'San Pedro Sula', 'Choloma', 'La Ceiba'],
      Hungría: ['Budapest', 'Debrecen', 'Miskolc', 'Szeged'],
      India: ['Nueva Delhi', 'Bombay', 'Bangalore', 'Calcuta'],
      Indonesia: ['Yakarta', 'Surabaya', 'Medan', 'Bandung'],
      Irak: ['Bagdad', 'Basora', 'Mosul', 'Erbil'],
      Irán: ['Teherán', 'Mashhad', 'Isfahán', 'Tabriz'],
      Irlanda: ['Dublín', 'Cork', 'Galway', 'Limerick'],
      Islandia: ['Reikiavik', 'Akureyri', 'Kópavogur', 'Hafnarfjörður'],
      IslasMarshall: ['Majuro', 'Ebeye', 'RMI Capitol', 'Laura'],
      IslasSalomón: ['Honiara', 'Auki', 'Gizo', 'Tulagi'],
      Israel: ['Jerusalén', 'Tel Aviv', 'Haifa', 'Beerseba'],
      Italia: ['Roma', 'Milán', 'Nápoles', 'Turín'],
      Jamaica: ['Kingston', 'Montego Bay', 'Spanish Town', 'Portmore'],
      Japón: ['Tokio', 'Yokohama', 'Osaka', 'Nagoya'],
      Jordania: ['Amán', 'Zarqa', 'Irbid', 'Aqaba'],
      Kazajistán: ['Nur-Sultán', 'Almaty', 'Shymkent', 'Karaganda'],
      Kenia: ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru'],
      Kirguistán: ['Bishkek', 'Osh', 'Jalal-Abad', 'Karakol'],
      Kiribati: ['Tarawa', 'Betio', 'Bikenibeu', 'Teaoraereke'],
      Kuwait: ['Kuwait City', 'Al Ahmadi', 'Hawalli', 'Farwaniya'],
      Laos: ['Vientiane', 'Pakse', 'Savannakhet', 'Luang Prabang'],
      Lesoto: ['Maseru', 'Teyateyaneng', 'Mafeteng', 'Hlotse'],
      Letonia: ['Riga', 'Daugavpils', 'Liepāja', 'Jelgava'],
      Líbano: ['Beirut', 'Tripoli', 'Sidón', 'Tiro'],
      Liberia: ['Monrovia', 'Gbarnga', 'Bensonville', 'Harper'],
      Libia: ['Trípoli', 'Bengasi', 'Misurata', 'Tarhuna'],
      Liechtenstein: ['Vaduz', 'Schaan', 'Triesen', 'Balzers'],
      Lituania: ['Vilna', 'Kaunas', 'Klaipėda', 'Šiauliai'],
      Luxemburgo: ['Luxemburgo', 'Esch-sur-Alzette', 'Differdange', 'Dudelange'],
      MacedoniadelNorte: ['Skopie', 'Bitola', 'Kumanovo', 'Prilep'],
      Madagascar: ['Antananarivo', 'Toamasina', 'Antsirabe', 'Fianarantsoa'],
      Malasia: ['Kuala Lumpur', 'George Town', 'Ipoh', 'Shah Alam'],
      Malaui: ['Lilongüe', 'Blantyre', 'Mzuzu', 'Zomba'],
      Maldivas: ['Malé', 'Hithadhoo', 'Kulhudhuffushi', 'Thinadhoo'],
      Malí: ['Bamako', 'Sikasso', 'Mopti', 'Koutiala'],
      Malta: ['La Valeta', 'Birkirkara', 'Mosta', 'Qormi'],
      Marruecos: ['Casablanca', 'Rabat', 'Fez', 'Marrakech'],
      Mauricio: ['Port Louis', 'Beau Bassin-Rose Hill', 'Vacoas-Phoenix', 'Curepipe'],
      Mauritania: ['Nouakchott', 'Nouadhibou', 'Kiffa', 'Kaédi'],
      México: ['Ciudad de México', 'Guadalajara', 'Monterrey', 'Puebla'],
      Micronesia: ['Palikir', 'Weno', 'Colonia', 'Tofol'],
      Moldavia: ['Chisinau', 'Balti', 'Tiraspol', 'Bender'],
      Mónaco: ['Montecarlo', 'Mónaco-Ville', 'La Condamine', 'Fontvieille'],
      Mongolia: ['Ulán Bator', 'Erdenet', 'Darkhan', 'Choibalsan'],
      Montenegro: ['Podgorica', 'Nikšić', 'Pljevlja', 'Bijelo Polje'],
      Mozambique: ['Maputo', 'Matola', 'Beira', 'Nampula'],
      Namibia: ['Windhoek', 'Rundu', 'Walvis Bay', 'Oshakati'],
      Nauru: ['Yaren', 'Denigomodu', 'Aiwo', 'Buada'],
      Nepal: ['Kathmandu', 'Pokhara', 'Lalitpur', 'Bharatpur'],
      Nicaragua: ['Managua', 'León', 'Masaya', 'Tipitapa'],
      Níger: ['Niamey', 'Zinder', 'Maradi', 'Agadez'],
      Nigeria: ['Lagos', 'Kano', 'Ibadan', 'Abuja'],
      Noruega: ['Oslo', 'Bergen', 'Stavanger', 'Trondheim'],
      NuevaZelanda: ['Auckland', 'Wellington', 'Christchurch', 'Hamilton'],
      Omán: ['Muscat', 'Salalah', 'Sohar', 'Nizwa'],
      PaísesBajos: ['Ámsterdam', 'Róterdam', 'La Haya', 'Utrecht'],
      Pakistán: ['Islamabad', 'Karachi', 'Lahore', 'Faisalabad'],
      Palaos: ['Ngerulmud', 'Koror', 'Melekeok', 'Airai'],
      Panamá: ['Ciudad de Panamá', 'Colón', 'David', 'Arraiján'],
      PapúaNuevaGuinea: ['Port Moresby', 'Lae', 'Mount Hagen', 'Popondetta'],
      Paraguay: ['Asunción', 'Ciudad del Este', 'San Lorenzo', 'Luque'],
      Perú: ['Lima', 'Arequipa', 'Trujillo', 'Chiclayo'],
      Polonia: ['Varsovia', 'Cracovia', 'Łódź', 'Wrocław'],
      Portugal: ['Lisboa', 'Oporto', 'Vila Nova de Gaia', 'Amadora'],
      ReinoUnido: ['Londres', 'Birmingham', 'Mánchester', 'Glasgow'],
      RepúblicaCentroafricana: ['Bangui', 'Bimbo', 'Mbaiki', 'Berbérati'],
      RepúblicaCheca: ['Praga', 'Brno', 'Ostrava', 'Plzeň'],
      RepúblicadelCongo: ['Brazzaville', 'Pointe-Noire', 'Dolisie', 'Kayes'],
      RepúblicaDominicana: ['Santo Domingo', 'Santiago de los Caballeros', 'San Pedro de Macorís', 'La Romana'],
      RepúblicaSudafricana: ['Ciudad del Cabo', 'Johannesburgo', 'Durban', 'Pretoria'],
      Ruanda: ['Kigali', 'Butare', 'Gisenyi', 'Ruhengeri'],
      Rumanía: ['Bucarest', 'Cluj-Napoca', 'Timișoara', 'Iași'],
      Rusia: ['Moscú', 'San Petersburgo', 'Novosibirsk', 'Ekaterimburgo'],
      Samoa: ['Apia', 'Vaitele', 'Faleula', 'Siusega'],
      SanCristóbalyNieves: ['Basseterre', 'Charlestown', 'Cayon', 'Dieppe Bay Town'],
      SanMarino: ['San Marino', 'Serravalle', 'Borgo Maggiore', 'Domagnano'],
      SanVicenteylasGranadinas: ['Kingstown', 'Georgetown', 'Byera Village', 'Barrouallie'],
      SantaLucía: ['Castries', 'Vieux Fort', 'Micoud', 'Soufrière'],
      SantoToméyPríncipe: ['São Tomé', 'Santo António', 'Santana', 'Santo Amaro'],
      Senegal: ['Dakar', 'Thiès', 'Saint-Louis', 'Mbour'],
      Serbia: ['Belgrado', 'Novi Sad', 'Niš', 'Kragujevac'],
      Seychelles: ['Victoria', 'Anse Boileau', 'Beau Vallon', 'Mont Fleuri'],
      SierraLeona: ['Freetown', 'Bo', 'Kenema', 'Koidu'],
      Singapur: ['Singapur', 'Jurong East', 'Woodlands', 'Tampines'],
      Siria: ['Damasco', 'Alepo', 'Homs', 'Latakia'],
      Somalia: ['Mogadiscio', 'Hargeisa', 'Bosaso', 'Galkayo'],
      SriLanka: ['Colombo', 'Kandy', 'Galle', 'Nuwara Eliya'],
      Suazilandia: ['Mbabane', 'Manzini', 'Big Bend', 'Siteki'],
      Sudán: ['Jartum', 'Omdurmán', 'Port Sudan', 'Khartoum Bahri'],
      SudándelSur: ['Yuba', 'Malakal', 'Wau', 'Aweil'],
      Suecia: ['Estocolmo', 'Gotemburgo', 'Malmö', 'Uppsala'],
      Suiza: ['Zúrich', 'Ginebra', 'Basilea', 'Berna'],
      Surinam: ['Paramaribo', 'Lelydorp', 'Nieuw Nickerie', 'Moengo'],
      Tailandia: ['Bangkok', 'Phuket', 'Chiang Mai', 'Pattaya'],
      Tanzania: ['Dodoma', 'Dar es Salaam', 'Arusha', 'Mwanza'],
      Tayikistán: ['Dusambé', 'Khujand', 'Kŭlob', 'Bokhtar'],
      TimorOriental: ['Dili', 'Same', 'Aileu', 'Baucau'],
      Togo: ['Lomé', 'Sokodé', 'Kara', 'Atakpamé'],
      Tonga: ['Nukuʻalofa', 'Neiafu', 'Haveluliku', 'Pangai'],
      TrinidadyTobago: ['Puerto España', 'Chaguanas', 'San Fernando', 'Arima'],
      Túnez: ['Túnez', 'Sfax', 'Susah', 'Kairuán'],
      Turkmenistán: ['Asjabad', 'Daşoguz', 'Turkmenabat', 'Mary'],
      Turquía: ['Estambul', 'Ankara', 'Esmirna', 'Bursa'],
      Tuvalu: ['Funafuti', 'Fongafale', 'Alapi', 'Tonga'],
      Ucrania: ['Kiev', 'Járkov', 'Odesa', 'Dnipró'],
      Uganda: ['Kampala', 'Gulu', 'Lira', 'Mbarara'],
      Uruguay: ['Montevideo', 'Salto', 'Paysandú', 'Las Piedras'],
      Uzbekistán: ['Taskent', 'Namangán', 'Samarcanda', 'Andiján'],
      Vanuatu: ['Port Vila', 'Luganville', 'Norsup', 'Sola'],
      Venezuela: ['Caracas', 'Maracaibo', 'Valencia', 'Barquisimeto'],
      Vietnam: ['Hanói', 'Ciudad Ho Chi Minh', 'Da Nang', 'Haiphong'],
      Yemen: ['Sanaa', 'Adén', 'Taiz', 'Al Hudaydah'],
      Yibuti: ['Yibuti', 'Ali Sabieh', 'Dikhil', 'Arta'],
      Zambia: ['Lusaka', 'Kitwe', 'Ndola', 'Kabwe'],
      Zimbabue: ['Harare', 'Bulawayo', 'Chitungwiza', 'Mutare']    
    };
    

    const paisSelect = document.getElementById('pais');
    const ciudadSelect = document.getElementById('city');
    /*const formulario = document.getElementById('identificationForm');*/

    paisSelect.addEventListener("change", function () {
      const paisSeleccionado = paisSelect.value;
      const ciudades = ciudadesPorPais[paisSeleccionado] || [];
      ciudadSelect.innerHTML = "";
    
      ciudades.forEach(function (ciudad) {
        const opcion = document.createElement("option");
        opcion.value = ciudad;
        opcion.textContent = ciudad;
        ciudadSelect.appendChild(opcion);
      });
    });

    form.addEventListener('submit', function(e) {
      e.preventDefault(); 

      //valores formulario --->
      const idInput = document.getElementById('id');
      const nameInput = document.getElementById('name');
      const apellidoInput = document.getElementById('apellido');
      const estadocivilInput = document.getElementById('estadocivil');
      const identificationTypeSelect = document.getElementById('identificationType');
    
      const id = idInput.value;
      const name = nameInput.value;
      const apellido= apellidoInput.value;
      const estadocivil = estadocivilInput.value;
      const identificationType = identificationTypeSelect.value;
      const pais = paisSelect.value;
      const ciudad = ciudadSelect.value;    
      const direcciones = [];
      const direccionInputs = direccionesContainer.getElementsByTagName('input');
      for (let i = 0; i < direccionInputs.length; i++) {
      direcciones.push(direccionInputs[i].value);
      }
      const photo = document.getElementById('photo');
      if (photo.files.length === 0) {
        alert('Por favor seleccione una imagen.');
        e.preventDefault(); 
      }else if (!id || !name || !apellido|| !estadocivil || !identificationType || !pais|| !ciudad ||!photo) {
        alert('Por favor, complete todos los campos.');
        return;
      }
        
      
      const newRow = tableBody.insertRow();
      newRow.innerHTML = `<td>${id}</td><td>${name}</td><td>${apellido}</td><td>${estadocivil}</td><td>${identificationType}</td><td>${pais}</td><td>${ciudad}</td><td>${direcciones}</td>`;
  
      idInput.value = '';
      nameInput.value = '';
      apellidoInput.value = '';
      estadocivilInput.value = '';
      identificationTypeSelect.value = '';
      paisSelect.value = '';
      ciudadSelect.innerHTML = '';
      direccionesContainer.innerHTML = '';
    });
  });

let personas = [];
function crearPersona() {
  const tipoIdentificacion = document.getElementById('tipo-identificacion').value;
  const numeroIdentificacion = document.getElementById('numero-identificacion').value;
  const nombres = document.getElementById('nombres').value;
  const apellidos = document.getElementById('apellidos').value;
  const pais = document.getElementById('pais').value;
  const ciudad = document.getElementById('ciudad').value;
  const avatar = document.getElementById('avatar').value; // Aquí obtendrías la ruta del archivo

 
  const persona = {
    tipoIdentificacion,
    numeroIdentificacion,
    nombres,
    apellidos,
    pais,
    ciudad,
    avatar
  };

  personas.push(persona);


  limpiarFormulario();

  alert('Persona creada exitosamente');
}


function limpiarFormulario() {
  document.getElementById('tipo-identificacion').value = '';
  document.getElementById('numero-identificacion').value = '';
  document.getElementById('nombres').value = '';
  document.getElementById('apellidos').value = '';
  document.getElementById('pais').value = '';
  document.getElementById('ciudad').value = '';
  document.getElementById('avatar').value = '';
}


function consultarPersonas() {
  const consultaIdentificacion = document.getElementById('consulta-identificacion').value;
  const consultaNombres = document.getElementById('consulta-nombres').value;
  const consultaApellidos = document.getElementById('consulta-apellidos').value;

  
  const resultados = personas.filter(persona =>
    persona.numeroIdentificacion.includes(consultaIdentificacion) &&
    persona.nombres.includes(consultaNombres) &&
    persona.apellidos.includes(consultaApellidos)
  );

  mostrarResultados(resultados);
}

function mostrarResultados(resultados) {
  const resultadosContainer = document.getElementById('resultados');

  
  resultadosContainer.innerHTML = '';

  if (resultados.length === 0) {
    resultadosContainer.innerHTML = 'No se encontraron personas.';
  } else {
    const table = document.createElement('table');
    const tableHeader = document.createElement('thead');
    const tableBody = document.createElement('tbody');

    
    const headerRow = document.createElement('tr');
    const headers = ['ID', 'Tipo de Identificación', 'Nombres', 'Apellidos', 'País', 'Ciudad'];

    headers.forEach(headerText => {
      const header = document.createElement('th');
      header.textContent = headerText;
      headerRow.appendChild(header);
    });

    tableHeader.appendChild(headerRow);
    table.appendChild(tableHeader);
    table.appendChild(tableBody);

    resultados.forEach(persona => {
      const row = document.createElement('tr');
      const values = [
        persona.numeroIdentificacion,
        persona.tipoIdentificacion,
        persona.nombres,
        persona.apellidos,
        persona.pais,
        persona.ciudad
      ];

      values.forEach(value => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
      });

      tableBody.appendChild(row);
    });

    resultadosContainer.appendChild(table);
  }  
}
document.getElementById('identificationForm').addEventListener('submit', function(e){
  e.preventDefault();
  let identificationForm = new FormData(document.getElementById('identificationForm'));
    fetch('registrar.php',{
      method: 'POST',
      body:identificationForm
    })  
    .then((response)=>response.json())
    .then(data=>{
      if(data=='true'){
        document.getElementById('ID').value ='';
        document.getElementById('Nombre').value ='';
        document.getElementById('Apellido').value ='';
        alert('El usuario se unsertó correctamente');
      }else{
        console.log(data);
      }
    });
});