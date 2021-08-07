

var pane = 'cuba';
var showinst = true;
var scrollpos = 0;

var cubazoom=7;
var prizoom = 9;
var prim = 7;
var lhazoom = 11;
var lham = 7;
var artzoom = 10;
var artm = 7;
var mayzoom = 10;
var maym = 9.5;
var matzoom = 10.2;
var matm = 7;
var ijvzoom = 10.5;
var ijvm = 7;
var cfgzoom = 10;
var cfgm = 7;
var vclzoom = 10.5;
var vclm = 7;
var sspzoom = 9.8;
var sspm = 7;
var cavzoom = 9.8;
var cavm = 9.1;
var camzoom = 9;
var camm = 7;
var ltuzoom = 10;
var ltum = 7;
var holzoom = 9.5;
var holm = 9.1;
var grazoom = 9.7;
var gram = 7;
var stgzoom = 9.6;
var stgm = 7;
var gtmzoom = 9.8;
var gtmm = 9.5;

$('#filter-more').click(function(e){
	$('#filter-more').hide();
	$('#filter-less').show();
	$('#filter-content').removeClass('hidden-sm');
	$('#filter-content').removeClass('hidden-xs');
});

$('#filter-less').click(function(e){
	$('#filter-less').hide();
	$('#filter-more').show();
	$('#filter-content').addClass('hidden-sm');
	$('#filter-content').addClass('hidden-xs');
});

function setStrings(l){
		var t= '';
		for(var i in l){
			t+= l[i]+', ';
		}
		return t.slice(0,t.length-2);
	}

function addZero(i){
	if ((i/10)<1){
		return '0'+i;
	}
	return ''+i;
}

var positions = {
	'cuba' : {
		'lat': 22.153168,
		'lon': -79.271124,
		'zoom': cubazoom
	},
	'lha' : {
		'lat': 23.0766324,
		'lon': -82.3360146,
		'zoom': lhazoom
	},
	'pri' : {
		'lat': 22.438307,
		'lon': -83.702309,
		'zoom': prizoom
	},
	'art' : {
		'lat': 22.842204,
		'lon': -82.745224,
		'zoom': artzoom
	},
	'may' : {
		'lat': 22.952956,
		'lon': -81.993915,
		'zoom': mayzoom
	},
	'ijv' : {
		'lat': 21.719568,
		'lon': -82.858492,
		'zoom': 10.5
	},
	'mat' : {
		'lat': 22.659698,
		'lon': -81.408236,
		'zoom': ijvzoom
	},
	'cfg' : {
		'lat': 22.197917,
		'lon': -80.448240,
		'zoom': cfgzoom
	},
	'vcl' : {
		'lat': 22.452371,
		'lon': -79.954054,
		'zoom': vclzoom
	},
	'ssp' : {
		'lat': 21.959919,
		'lon': -79.479276,
		'zoom': sspzoom
	},
	'cav' : {
		'lat': 21.926637,
		'lon': -78.752911,
		'zoom': cavzoom
	},
	'cam' : {
		'lat': 21.364849,
		'lon': -77.839544,
		'zoom': camzoom
	},

	'ltu' : {
		'lat': 20.983554,
		'lon': -76.923605,
		'zoom': ltuzoom
	},
	'hol' : {
		'lat': 20.855621,
		'lon': -76.260657,
		'zoom': holzoom
	},
	'gra' : {
		'lat': 20.315138,
		'lon': -76.675267,
		'zoom': grazoom
	},
	'gtm' : {
		'lat': 20.184101,
		'lon': -75.046560,
		'zoom': gtmzoom
	},
	'stg' : {
		'lat': 20.166654,
		'lon': -75.8448168,
		'zoom': stgzoom
	}

}


$('.tab-part').click(
	function(e){
		var id = $(this).attr('id');
		$('.tab-part').removeClass('selected');
		$('#'+id).addClass('selected');
		var mid = id.split('-')[0];
		$('.content-part').addClass('undisplay');
		$('#'+mid+'-info').removeClass('undisplay');
	}
);

function hideProfile(){
	//$('#gray-out').hide();
	$('#profile-block').hide();
	$('#directory').removeClass('vanish');
	$('html,body').animate({'scrollTop':scrollpos},'fast');
}

function showProfile(){
	//$('#gray-out').show();
	$('#directory').addClass('vanish');
	$('#profile-block').show();
	scrollpos = $('body').scrollTop();
	$('html,body').animate({'scrollTop':0},'fast');
}

$('#close-profile').click(
	function(e){
		hideProfile();
	}
);

var events = [];



$.getJSON("data/datos.json",function(data){
$.getJSON("data/cuba.geojson",
	function(cuba){
		var equidadIcon = L.icon({
			iconUrl : '../img/equidad.png',
			iconSize: [26,30],
			iconAnchor: [13,30],
			popupAnchor: [3,-22],
			tooltipAnchor: [0,-4],
			shadowUrl: '../img/shadow.png',
			shadowSize: [26,26],
			shadowAnchor: [5,26]
		});
		var emancipacionIcon = L.icon({
			iconUrl : '../img/emancipacion.png',
			iconSize: [26,30],
			iconAnchor: [13,30],
			popupAnchor: [3,-22],
			tooltipAnchor: [-7,0],
			shadowUrl: '../img/shadow.png',
			shadowSize: [26,26],
			shadowAnchor: [5,26]
		});
		var gobernanzaIcon = L.icon({
			iconUrl : '../img/gobernanza.png',
			iconSize: [26,30],
			iconAnchor: [13,30],
			popupAnchor: [3,-22],
			tooltipAnchor: [-7,0],
			shadowUrl: '../img/shadow.png',
			shadowSize: [26,26],
			shadowAnchor: [5,26]
		});
		var identidadIcon = L.icon({
			iconUrl : '../img/identidad.png',
			iconSize: [26,30],
			iconAnchor: [13,30],
			popupAnchor: [3,-22],
			tooltipAnchor: [-7,0],
			shadowUrl: '../img/shadow.png',
			shadowSize: [26,26],
			shadowAnchor: [5,26]
		});
		var inclusionIcon = L.icon({
			iconUrl : '../img/inclusion.png',
			iconSize: [26,30],
			iconAnchor: [13,30],
			popupAnchor: [3,-22],
			tooltipAnchor: [-7,-0],
			shadowUrl: '../img/shadow.png',
			shadowSize: [26,26],
			shadowAnchor: [5,26]
		});
		var medioambienteIcon = L.icon({
			iconUrl : '../img/medioambiente.png',
			iconSize: [26,30],
			iconAnchor: [13,30],
			popupAnchor: [3,-22],
			tooltipAnchor: [-7,0],
			shadowUrl: '../img/shadow.png',
			shadowSize: [26,26],
			shadowAnchor: [5,26]
		});
		var generalIcon = L.icon({
			iconUrl : '../img/general.png',
			iconSize: [26,30],
			iconAnchor: [13,30],
			popupAnchor: [3,-22],
			tooltipAnchor: [-7,0],
			shadowUrl: '../img/shadow.png',
			shadowSize: [26,26],
			shadowAnchor: [5,26]
		});

		var topicData = {
			"Medio Ambiente": {
				"icon":generalIcon,
				//"icon":medioambienteIcon,
				"color": '#00B150'
			},
			"Inclusión": {
				"icon":generalIcon,
				//"icon":inclusionIcon,
				//"color": '#A2D8E9',
				"color": '#00B150'
			},
			"Justicia de Género y Equidad": {
				"icon":generalIcon,
				//"icon":equidadIcon,
				//"color": '#F3770F',
				"color": '#00B150'
			},
			"Participación y Gobernanza": {
				"icon":generalIcon,
				//"icon":gobernanzaIcon,
				//"color": '#A52330',
				"color": '#00B150'
			},
			"Identidad": {
				"icon":generalIcon,
				//"icon":identidadIcon,
				//"color": '#F2CA03',
				"color": '#00B150'
			},
			"Emancipación": {
				"icon":generalIcon,
				//"icon":emancipacionIcon,
				//"color": '#806DBB',
				"color": '#00B150'
			},
			"General": {
				"icon":generalIcon,
				"color": '#00B150'
			}
		}


		var calendar = null;
		function setCalendar(){
			var calendarEl = document.getElementById('calendar');
		    calendar = new FullCalendar.Calendar(calendarEl, {
		      plugins: [ 'interaction', 'dayGrid' ,'timeGrid', 'list' ],
		      header: {
		        left: 'prev,next today',
		        center: 'title',
		        right: 'dayGridMonth,timeGridDay,listMonth'
		      },
		      locale: 'es',
		      defaultView: 'listMonth',
		      navLinks: true,
		      editable: false,
		      eventLimit: true, // allow "more" link when too many events
		      events: events,
		      eventRender: function eventRender(event, element ) {
				  var pid = event.event.extendedProps.description;
                  return pdict[pid];
              },
		    });

		    calendar.render();

		}


		var search = lunr(function () {
		  this.use(lunr.es);
		  //this.pipeline.remove(lunr.es.stemmer);
		  //this.searchPipeline.remove(lunr.es.stemmer);
		  this.ref('id');
		  this.field('descripcion');
		  this.field('keywords');
		  this.field('nombre');
		  this.field('nombre-corto');
		  var tkeys = Object.keys(data.proyectos);
		  for(var i=0;i<tkeys.length;i++){
		     this.add(data.proyectos[tkeys[i]]);
		  }
		});



		function moveMap(id){
			map.flyTo([positions[id]['lat'],positions[id]['lon']],positions[id]['zoom']);
		}
		var datos = data;
		var pdict = {};

		function getSmallProfile(id){
			var e = datos.proyectos[id];
			var t = '';
			t += '<div class="small-pname" style="background-color:'+topicData['General'].color+'">'+e['nombre-corto']+'</div>';
			// t += '<div class="small-pcategory-block"><span class="small-pcategory-label">Temática(s):</span> <span class="small-pcategory">'+setStrings(e['categoria'])+'</span></div>';
			t += '<div class="small-pkeywords-block"><span class="small-pkeywords-label">Palabras clave:</span> <span class="small-pkeywords">'+e['keywords']+'</span></div>';
			/*t += '<div class="list-pcontent-estructura">';
			t += '<span class="small-pestructura-label">Estructura:</span> <span class="small-estructura">'+e['estructura']+'</span>';
			t += '</div>';*/
			t += '<div class="small-plink cursor" style="color:'+topicData['General'].color+'" id="pid-'+id+'">VER PROYECTO</div>';

			return t;
		}
		//definir la var en el resumen del proyecto en /List------------------
		function getListBlock(id){
			var e = datos.proyectos[id];
			var t = '<div class="list-ppart">';
			t += '<div class="list-pname cursor" id="pid-'+id+'">'+e['nombre']+'</div>';
			t += '<hr class="hr-pname">'
			t += '<div class="list-pcontent">';
			t += '<div class="list-pcontent-categ-reach">';
			// t += ' <span class="small-pcategory-label">Temática(s):</span> <span class="small-pcategory">'+setStrings(e['categoria'])+'</span><span class="sep"> / </span>';
			t += ' <span class="small-preach-label">Alcance:</span> <span class="small-preach">'+e['alcance']+'</span>';
			t += '</div>';
			t += '<div class="list-pcontent-keywords">';
			t += '<span class="small-pkeywords-label">Palabras clave:</span> <span class="small-pkeywords">'+e['keywords']+'</span>';
			t += '</div>';
			/*t += '<div class="list-pcontent-estructura">';
			t += '<span class="small-pestructura-label">Estructura:</span> <span class="small-estructura">'+e['estructura']+'</span>';
			t += '</div>';*/
			t += '</div>'
			t+='</div>';
			return t;
		}
		//definir la var en el resumen del proyecto en /List End---------------------

		function style(feature){
			 return {
				weight: 0.5,
				opacity: 0.8,
				color: '#f5f1f1',
				fillOpacity: 1,
				fillColor: '#bcbcbc'
			};
		}
		var geojson = L.geoJSON(cuba,{style:style});
		var map = L.map('map', {
		    center: [21.5, -79.371124],
		    zoom: 16,
		    layers: [geojson],
		    keyboard: false,
		    dragging: true,
		    zoomControl: true,
		    boxZoom: false,
		    doubleClickZoom: false,
		    scrollWheelZoom: false,
		    tap: true,
		    touchZoom: true,
		    zoomSnap: 0.05,
		    zoomControl: true
		});
		map.zoomControl.setPosition('topright');
		map.fitBounds(geojson.getBounds());
		map.on('popupopen',
			function(e){
				$('.small-plink').click(
					function(k){
						var id = k.currentTarget.id.split('-')[1];
						fillAndShowProfile(id);
					}
				);
			}
		);

		var markers = {};
		for(var i in datos.proyectos){
			pdict[i]=true;
		 	markers[i] = L.marker([datos.proyectos[i].geo.lat,datos.proyectos[i].geo.lon],
				{
					"title"	: datos.proyectos[i].nombre,
					"alt"	: datos.proyectos[i].nombre,
					icon: topicData['General'].icon
				}
		 	);
		 	markers[i].bindPopup(getSmallProfile(i));
		 	markers[i].bindTooltip(datos.proyectos[i]['nombre-corto'],{'direction':'top'});
		 	if (datos.proyectos[i].eventos!=null){
				for(var j in datos.proyectos[i].eventos){
					var e = datos.proyectos[i].eventos[j]
					var el = {};
					el['title'] = e['nombre'];
					el['start']	= e.inicio['año']+'-'+addZero(e.inicio.mes)+'-'+addZero(e.inicio.dia);
					el['pid'] = datos.proyectos[i].id;
					el['backgroundColor']=topicData['General'].color;
					el['borderColor']=topicData['General'].color;
					if (e.fin!=null){
						el['end'] = e.fin['año']+'-'+addZero(e.fin.mes)+'-'+addZero(e.fin.dia);
					}
					events.push(el);
				}
			}
		}
		setCalendar();
		$('#calendar-info').addClass('undisplay');



		function setBounds(){
			map.fitBounds(geojson.getBounds());
		}

		window.addEventListener('resize', setBounds);


		function setList(){
			var t = '<div id="project-list">';
			for(var i in pdict){
				if (pdict[i]){
					t+=getListBlock(i);
				}
			}
			t+='</div>';
			$('#list-info').html(t);
			$('.list-pname').click(
				function(k){
					var id = k.currentTarget.id.split('-')[1];
					fillAndShowProfile(id);
				}
			);
		}

		function setMarkers(){
			for(var i in markers){
				if (pdict[i]){
					markers[i].addTo(map);
				} else {
					markers[i].removeFrom(map);
				}
			}
		}

		function update(){
			filter();
			setMarkers();
			setList();
			searching();
		}

		function filter(){
			var lpane = '';
			var tdict = {};
			var prov = $('#province-select').val();
			if (prov=="none"){
				lpane = 'cuba';
				for(var i in datos.proyectos){
					tdict[i]=true;
					if (!showinst){
						if (datos.proyectos[i].tipo=='para'){tdict[i]=false;}
					}
				}
			} else {
				lpane = prov;
				for(var i in datos.proyectos){
					if (datos.proyectos[i].provincia==prov){
						tdict[i]=true;
						if (!showinst){
							if (datos.proyectos[i].tipo=='para'){tdict[i]=false;}
						}
					} else {
						tdict[i]=false;
					}
				}
			}
			if (pane!=lpane){
				pane = lpane;
				moveMap(pane);
				if (pane=='cuba'){
					map.fitBounds(geojson.getBounds());
				}
			}
			var reach = $('#reach-select').val();
			if (reach!='none'){
				for(var i in tdict){
					if (datos.proyectos[i].alcance!=reach){
						tdict[i]=false;
					}
				}
			}
			/*var category = $('#category-select').val();
			if (category!='none'){
				for(var i in tdict){
					if (datos.proyectos[i].categoria.indexOf(category)==-1){
						tdict[i]=false;
					}
				}
			}*/

			/*var category = $('#category-select').val();
			if (category!='none'){
				for(var i in tdict){
					if (datos.proyectos[i].ods.img.indexOf(category)==-1){
						tdict[i]=false;
					}
				}
			}*/
			var org = $('#org-select').val();
			if (org!='none'){
				for(var i in tdict){
					if (datos.proyectos[i].organizacion!=org){
						tdict[i]=false;
					}
				}
			}
			pdict = tdict;
		}

		$('#province-select').on('change',function(e){update();});
		$('#reach-select').on('change',function(e){update();});
		//$('#category-select').on('change',function(e){update();});
		$('#org-select').on('change',function(e){update();});
		$('#showinst').on('change',function(e){
			showinst = !showinst
			update();
		});


		update();


		function fillAndShowProfile(id){
			var e = datos.proyectos[id];
			$('.profile-logo').html('');
			if (e.logo!=null){
				$('.profile-logo').html('<img class="plogo" src="img/'+e.logo+'">');
			}
			$('#profile-title-block').css('background-color',topicData['General'].color);
			$('#project-name').html(e.nombre);
            if (e.ods!=null)
				$('#project-category').html(setStrings(e.ods.img));
			$('#project-reach').html(e.alcance);
			$('#project-keywords').html(setStrings(e.keywords));
			$('#project-description').html(e.descripcion);
			if (e.localizacion.direccion!=null){
				$('#project-address-block').removeClass('undisplay');
				$('#project-address').html(e.localizacion.direccion);
			} else {
				$('#project-address-block').addClass('undisplay');
			}
			if (e.localizacion.telefono!=null){
				$('#project-phone-block').removeClass('undisplay');
				$('#project-phone').html(e.localizacion.telefono);
			} else {
				$('#project-phone-block').addClass('undisplay');
			}
			if (e.localizacion.email!=null){
				$('#project-email').removeClass('undisplay');
				$('#project-email > a').prop('href','mailto:'+e.localizacion.email);
			} else {
				$('#project-email').addClass('undisplay');
			}
			if (e.web!=null){
				$('#project-web').removeClass('undisplay');
				$('#project-web > a').prop('href',e.web);
			} else {
				$('#project-web').addClass('undisplay');
			}
			if (e.social.twitter!=null){
				$('#project-twitter').removeClass('undisplay');
				$('#project-twitter > a').prop('href',e.social.twitter);
			} else {
				$('#project-twitter').addClass('undisplay');
			}
			if (e.social.facebook!=null){
				$('#project-facebook').removeClass('undisplay');
				$('#project-facebook > a').prop('href',e.social.facebook);
			} else {
				$('#project-facebook').addClass('undisplay');
			}
			if (e.social.instagram!=null){
				$('#project-instagram').removeClass('undisplay');
				$('#project-instagram > a').prop('href',e.social.instagram);
			} else {
				$('#project-instagram').addClass('undisplay');
			}
			if (e.social.youtube!=null){
				$('#project-youtube').removeClass('undisplay');
				$('#project-youtube > a').prop('href',e.social.youtube);
			} else {
				$('#project-youtube').addClass('undisplay');
			}
			if (e.personas!=null){
				$('#project-person-block').removeClass('undisplay');
				var t = '';
				for(var i in e.personas){
					t += '<div class="person-item">';
					t += '<span class="person-name">'+e.personas[i].nombre+' </span>';
					if (e.personas[i].email!=null){
						t += '<span class="person-email"> <a href="mailto://'+e.personas[i].email+'"><i class="fas fa-envelope"></i></a></span>';
					}
					t += '</div>';
				}
				$('#project-person').html(t);
			} else {
				$('#project-person-block').addClass('undisplay');
			}
			if (e.ods!=null){
				$('#project-ods-block').removeClass('undisplay');
				var t = '';
				for(var i in e.ods){
					t += '<div class="ods-item" style="float: left; margin: 0 0 1em 2;">';
					t +=   '<span class="ods-name">'
					t +=     '<img src="img/odsicons/'+e.ods[i].img+'" data-toggle="tooltip" data-placement="top" title="'+e.ods[i].descripcion+'">';
					// t +=     '<img src="img/odsicons/'+e.ods[i].img+'" style="float: left; margin: 0 0 1em 2em;" >';
					t +=   '</span>';
					t += '</div>';
				}
				$('#project-ods').html(t);

				$('[data-toggle="tooltip"]').tooltip();
			} else {
				$('#project-ods-block').addClass('undisplay');
			}
			showProfile();
		}
	    function setSearchList(slist){
				var total = 0;
				var t = '<div id="project-list">';
				for(var i in slist){
					var id = slist[i]['ref'];
						if(pdict[id]){
							t+=getListBlock(id);
							total ++;
						}
				}
				t+='</div>';
				if (total==0){
					$('#search-quantity').html('No hay resultados');
				} else {
					if (total==1){$('#search-quantity').html('1 resultado');}
					else {$('#search-quantity').html(total+' resultados');}
				}
				$('#search-items').html(t);
				$('.list-pname').click(
					function(k){
						var id = k.currentTarget.id.split('-')[1];
						fillAndShowProfile(id);
					}
				);
		}

		function searching(){
			var sterm = $('#searchtext').val().trim();
			if (sterm!=''){
				var items = search.search(sterm);
				var total = items.length;
				if (total==0){
					$('#search-quantity').html('No hay resultados');
					$('#search-items').html('');
				} else {
					setSearchList(items);
				}
			} else {
				$('#search-quantity').html('');
				$('#search-items').html('');
			}
		}

		$('#searchaction').click(function(e){
				searching();
		});

	}



);
}
);
