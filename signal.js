

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
			this.id = id;
			if( module ){
				this.integrateModule( module );
			}
			if( parent ){
				this.bootstrap( parent );
			}
		};
	} );



