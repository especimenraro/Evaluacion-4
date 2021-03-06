var Calculadora = {
	init: function () {
		this.flagPunto = 0
		this.flagCero = 0
		this.resultado = 0
		this.operacion=""
		this.flagResultado = 1
		this.longitudOperando = 0
		sessionStorage.setItem("operacion",this.operacion)
		sessionStorage.setItem("operacionAnterior","")
		this.escuchaClick()
		} ,	// FIN INIT
	escuchaClick: function () {
		var self = this;
		var teclas, tecla;
		teclas = document.getElementsByClassName("tecla")
		for (i=0; i<teclas.length; i++) {
		teclas[i].addEventListener("click",function (e) {
			tecla =this.getAttribute("id")
			
			switch(tecla) {
				case "0":	self.asignaOperando(tecla)
											break;
				case "1":	self.asignaOperando(tecla)
											break;
				case "2":	self.asignaOperando(tecla)
											break;
				case "3":	self.asignaOperando(tecla)
											break;
				case "4":	self.asignaOperando(tecla)
											break;
				case "5":	self.asignaOperando(tecla)
											break;
				case "6":	self.asignaOperando(tecla)
											break;
				case "7":	self.asignaOperando(tecla)
											break;
				case "8":	self.asignaOperando(tecla)
											break;
				case "9":	self.asignaOperando(tecla)
											break;		
				case "punto":	self.asignaOperando(".")
											break;									
				case "on":self.onClear()
											break;		
				case "sign":self.cambiaSigno()
											break;		
				case "dividido":	self.asignaOperador("/")
											break;		
				case "por":	self.asignaOperador("x")
											break;	
				case "menos":	self.asignaOperador("-")
											break;
				case "mas":self.asignaOperador("+")
											break;	
				case "igual":	self.ejecutaOperacion()
											break;	
				default: 
				
						
			} //FIN SWITCH
		} //FIN FUNCTION EVENT LISTENER
		
		)  //FIN EVENT LISTENER
		
		teclas[i].addEventListener("mousedown", function () {
		tecla = this.getAttribute("id")
		if (tecla == "0" || tecla == "1"  || tecla == "2" || tecla == "3" || tecla == "punto" || tecla == "igual"  ) {
		this.style.width = "28%"
		this.style.height = "60px"
		} // FIN IF
		else if (tecla == "mas") {
			this.style.width = "98%"
			this.style.height = "98%"
		} // FIN ELSE IF
		else {
				this.style.width = "21%"
				this.style.height = "60px"	
		} //FIN ELSE
		}//FIN FUNCTION EVENT LISTENER
		)//FIN EVENT LISTENER
		
		teclas[i].addEventListener("mouseup", function () {
			tecla = this.getAttribute("id")
			if (tecla == "0" || tecla == "1"  || tecla == "2" || tecla == "3" || tecla == "punto" || tecla == "igual" ) {
				this.style.width = "29%"
				this.style.height = "62.91px"
			} // FIN IF
			else if (tecla == "mas") {
					this.style.width = "100%"
					this.style.height = "100%"
			} // FIN ELSE IF
			else {
						this.style.width = "22%"
						this.style.height = "62.91px"	
			} //FIN ELSE
			}//FIN FUNCTION EVENT LISTENER
			)//FIN EVENT LISTENER
		
		} //FIN FOR
		
	}, //FIN ESCUCHA CLICK
	asignaOperando: function (tecla) {	
			if (this.resultado =="0") { this.flagCero = 1 } else { this.flagCero = 0}
			if ((!this.flagPunto && tecla==".") || (tecla!="."  && ((!this.flagCero && tecla=="0") || tecla!="0") )     ) {
			if (tecla==".") { this.flagPunto = 1 }
			
			this.longitudOperando = this.longitudOperando +1
			if (this.longitudOperando<10) {
			if (!this.flagResultado) {
			
			this.operacion = sessionStorage.getItem("operacion")
			this.operacion = this.operacion+tecla
			sessionStorage.setItem("operacion",this.operacion)
			this.muestraResultado()
		}//FIN IF
		else {
			this.operacion = tecla
			this.flagResultado = 0
			sessionStorage.setItem("operacion",this.operacion)
			this.muestraResultado()		
		} //FIN ELSE
	} //FIN IF
	} //FIN IF
	}, //FIN ASIGNA OPERANDO
	asignaOperador:  function (tecla) {
			this.operacion = sessionStorage.getItem("operacion")
			this.operacion =  this.operacion + "," + tecla + ","
			sessionStorage.setItem("operacion",this.operacion)
			this.flagResultado=0
			this.flagPunto = 0
			this.flagCero = 0
			this.longitudOperando=0
	}, //FIN ASIGNA OPERADOR
	ejecutaOperacion: function () {
			arregloElementosOperacion = (sessionStorage.getItem("operacion")).split(",")
			arregloElementosOperacionAnterior = (sessionStorage.getItem("operacionAnterior")).split(",")
			this.resultado = Number(this.resultado)
			var elemento
			var resultadoParcial
			var operando1,operando2;
			if (arregloElementosOperacionAnterior.length == 3 && arregloElementosOperacion.length == 1) {
				operando1 = arregloElementosOperacion[0]
				operando2 = Number(arregloElementosOperacionAnterior[2])
				elemento = arregloElementosOperacionAnterior[1]
				switch(elemento) {
				case "+": 	this.resultado = this.resultado +operando2;
												break;
				case "-":  	this.resultado = this.resultado - operando2;
												break;
				case "x":  	this.resultado = this.resultado * operando2;
												break;
				case "/":  	this.resultado = this.resultado / operando2;
												break;
				default:
				} // FIN SWITCH
		
			
			} // FIN IF
			else {
			this.resultado = Number(arregloElementosOperacion[0])
			for (i=1;i<arregloElementosOperacion.length;i=i+2) {
				elemento = arregloElementosOperacion[i]
				switch(elemento) {
				case "+": 	this.resultado = this.resultado + Number(arregloElementosOperacion[i+1]);
												break;
				case "-":  	this.resultado = this.resultado - Number(arregloElementosOperacion[i+1]);
												break;
				case "x":  	this.resultado = this.resultado * Number(arregloElementosOperacion[i+1]);
												break;
				case "/":  	this.resultado = this.resultado / Number(arregloElementosOperacion[i+1]);
												break;
				default:
				} // FIN SWITCH
			
			} //FIN FOR
			sessionStorage.setItem("operacionAnterior",sessionStorage.getItem("operacion"))			
		
		
		} //FIN ELSE
			
			sessionStorage.setItem("operacion",this.resultado.toString().substr(0,9))
			
			this.flagResultado = 1
			this.flagPunto = 0
			this.flagCero = 0
			this.muestraResultado()
	},//FIN EJECUTA OPERACION
	
	muestraResultado: function () {
			arregloElementosOperacion = (sessionStorage.getItem("operacion")).split(",")
			var textoOperacion =arregloElementosOperacion[arregloElementosOperacion.length-1]
			if (isNaN(textoOperacion)==false) {
			pantalla = document.getElementById("display")
			pantalla.innerHTML = textoOperacion
			this.resultado = textoOperacion
		} //FIN IF
	},//FIN MUESTRA RESULTADO
	onClear: function () {
		this.resultado = 0
		sessionStorage.setItem("operacion",this.resultado.toString())
		this.flagResultado = 1
		this.longitudOperando = 0
		this.flagPunto = 0
		this.flagCero = 0
		this.muestraResultado()
	},//FIN ONCLEAR
	cambiaSigno: function () {
	
		this.operacion = sessionStorage.getItem("operacion")
		if (isNaN(this.operacion)==false)
		{
			this.resultado = -Number(this.operacion)
			this.resultado = this.resultado
			sessionStorage.setItem("operacion",this.resultado.toString())
		this.flagResultado = 1
		this.flagPunto = 0
		this.muestraResultado()
		} //FIN IF
		
		
	} //FIN CAMBIA SIGNO
} //FIN CALCULADORA
Calculadora.init()