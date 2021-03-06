'use strict'

const llistaMalalties = ['Alzheimer','Anells vasculars','Atrèsia pulmonar amb comunicació intraventricular',
                    'Bacteria Gonorrea','Cadena de ADN','Canal auriculoventricular','Canal auriculoventricular parcial',
                    'Càncer','Càncer de mama','Cardiopatia familiar','Coartació de l’aorta i hipoplàsia de l’arc aòrtic',
                    'Comunicació interventricular (CIV)','Diabetis','Diftèria',
                    'Displàsia de maluc en l’adolescent i l’adult jove','Doble sortida del ventricle dret',
                    'Drenatge venós anòmal pulmonar total ','Ebola','Èczema','Epidermòlisi ampul·lar','Epilèpsia',
                    'Esclerosi múltiple','Esofagitis eosinofílica ','Espina bífida Vall dHebron','Estenosi aòrtica ',
                    'Fibromiàlgia','Glòbuls vermells','Grip','Hemofília','Herpes simple','Hipertensió arterial pulmonar',
                    'Ictus','Infecció per virus del Zika','Intestí irritable','Lesionats medul·lars complexos',
                    'Lesions valvulars: anomalia d’Ebstein','Lesions valvulars: anomalies congènites de la vàlvula mitral',
                    'Lesions valvulars: estenosi pulmonar','Lupus','Ma tremolosa amb distonia','Malaltia celíaca',
                    'Malaltia de Chagas','Malaltia del Crohn','Malalties metabòliques hereditàries',
                    'Malalties neuromusculars i malalties rares','Malatia de Parkinson','Meningitis',
                    'Miastènia gravis','Migranya','Mostra de sang amb sífilis','Neuroblastoma en la infància',
                    'Neurocirurgia pediàtrica complexa','Osteoporosi','Osteosarcoma en infants','Pacient amb al·lèrgia',
                    'Pacient amb cervicàlgia','Pacient amb dermatitis atòpica','Pacient amb diarrea',
                    'Pacient amb escoliosi idiopàtica','Pacient amb refredat comú','Persistència del conducte arteriós',
                    'Psoriasi','Reconstrucció complexa de la superfície ocular','Restrenyiment',
                    'Sarcoma d’Ewing en els infants','Senyals de l’infart de miocardi','Sèpsia','Síndrome d’Asperger',
                    'Síndrome de la hipoplàsia de cavitats esquerres','Síndromes de la fallada medul·lar congènita',
                    'Tetralogia de Fallot','Tractament d’infeccions osteoarticulars resistents',
                    'Transposició de grans artèries ','Trastorn Obsessiu Compulsiu (TOC)',
                    'Tumor extraocular en la infància (Rabdomiosarcoma)',
                    'Tumor intraocular en la infància (Retinoblastoma)','Tumors d’òrbita','Ventricle únic',
                    'Virus del papil·loma humà (VPH)'];
					
		var text_select = "";
		var i;
		
					function mostrarMalalties() {
						text_select = text_select + "<select class='form-control'>";
							for (i = 0; i < llistaMalalties.length; i++) {
								text_select = text_select + "<option>" +llistaMalalties[i]+"</option>";
							}
						text_select = text_select + "</select>";
						
						document.getElementById("contenidor").innerHTML = text_select; 
					}
