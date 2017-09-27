var Calculadora = {
	init: function () {
		
		this.resultado = 0
		this.operacion=""
		sessionStorage.setItem("operacion",this.operacion)
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
				case "on":self.asignaOperador(tecla)
											break;		
				case "sign":self.asignaOperador(tecla)
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
			this.operacion = sessionStorage.getItem("operacion")
			this.operacion = this.operacion+tecla
			sessionStorage.setItem("operacion",this.operacion)
			this.muestraResultado()
	}, //FIN ASIGNA OPERANDO
	asignaOperador:  function (tecla) {
			this.operacion = sessionStorage.getItem("operacion")
			this.operacion =  this.operacion + "," + tecla + ","
			sessionStorage.setItem("operacion",this.operacion)
			this.muestraResultado()
	}, //FIN ASIGNA OPERADOR
	ejecutaOperacion: function () {
			arregloElementosOperacion = (sessionStorage.getItem("operacion")).split(",")
			var elemento
			var resultadoParcial
			var resultado = Number(arregloElementosOperacion[0])
			for (i=1;i<arregloElementosOperacion.length;i=i+2) {
				elemento = arregloElementosOperacion[i]
				switch(elemento) {
				case "+": 	resultado = resultado + Number(arregloElementosOperacion[i+1]);
												break;
				case "-":  	resultado = resultado - Number(arregloElementosOperacion[i+1]);
												break;
				case "x":  	resultado = resultado * Number(arregloElementosOperacion[i+1]);
												break;
				case "/":  	resultado = resultado / Number(arregloElementosOperacion[i+1]);
												break;
				default:
				} // FIN SWITCH
			
			} //FIN FOR
			sessionStorage.setItem("operacion",resultado.toString())
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
	} //FIN MUESTRA RESULTADO
} //FIN CALCULADORA