var Calculadora = {
	init: function () {
		
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
				case "raiz": self.asignaOperador(tecla)
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
		
		} //FIN FOR
		
	}, //FIN ESCUCHA CLICK
	asignaOperando: function (tecla) {	
			
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
	}, //FIN ASIGNA OPERANDO
	asignaOperador:  function (tecla) {
			this.operacion = sessionStorage.getItem("operacion")
			this.operacion =  this.operacion + "," + tecla + ","
			sessionStorage.setItem("operacion",this.operacion)
			this.flagResultado=0
			this.muestraResultado()
	}, //FIN ASIGNA OPERADOR
	ejecutaOperacion: function () {
			arregloElementosOperacion = (sessionStorage.getItem("operacion")).split(",")
			arregloElementosOperacionAnterior = (sessionStorage.getItem("operacionAnterior")).split(",")
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
			this.resultado = this.resultado
			sessionStorage.setItem("operacion",this.resultado.toString())
			
			this.flagResultado = 1
			this.muestraResultado()
	},//FIN EJECUTA OPERACION
	
	muestraResultado: function () {
			arregloElementosOperacion = (sessionStorage.getItem("operacion")).split(",")
			var textoOperacion =""
			for (i=0;i<arregloElementosOperacion.length;i++) {
				textoOperacion = 	textoOperacion + arregloElementosOperacion[i]
			} //FIN FOR
			pantalla = document.getElementById("display")
			pantalla.innerHTML = textoOperacion
	},//FIN MUESTRA RESULTADO
	onClear: function () {
		this.resultado = 0
		sessionStorage.setItem("operacion",this.resultado.toString())
		this.flagResultado = 1
		this.muestraResultado()
	},//FIN ONCLEAR
	cambiaSigno: function () {
	
		this.operacion = sessionStorage.getItem("operacion")
		if (!Number(this.operacion)==false)
		{
			this.resultado = -Number(this.operacion)
			this.resultado = this.resultado
			sessionStorage.setItem("operacion",this.resultado.toString())
		this.flagResultado = 1
		this.muestraResultado()
		} //FIN IF
		
		
	} //FIN CAMBIA SIGNO
} //FIN CALCULADORA
Calculadora.init()