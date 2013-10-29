

define( "signalModule", [ "angular" ],
	function( ){
		var signalModule = angular.module( "signal" );
		return signalModule;
	} );

define( "signal", 
	[ 
		"jquery", 
		"angular", 
		"underscore",
		"signalModule",
		"signalDirective",
		"signalController"
	],
	function( signalModule, signalDirective, signalController ){
		/*
			id 
		*/
		function Signal = function Signal( id, parent, module ){

		};

		Signal.prototype.bootstrap = function bootstrap( parent ){

		};

		Signal.prototype.integrate = function integrate( module ){

		};

		Signal.prototype.build = function build( ){

		};

		return Signal;
	} );



