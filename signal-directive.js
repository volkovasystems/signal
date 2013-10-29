
define( "signalDirective",
	[ 
		"angular",
		"jquery",
		"underscore",
		"signalModule",
		"signalTemplate"
	],
	function( signalModule, signalTemplate ){
		signalModule.directive( "signal",
			[
				"$timeout",
				function( $timeout ){
					return {
						"require": "?^",
						"restrict": "E",
						"controller": "signalController",
						"template": signalTemplate,
						"link":
							function( scope, element ){

							}
					}
				} 
			] );
	} );