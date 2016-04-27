/**
 * @fileoverview Provide zz.ui.mdl.switch base object.
 * @license Apache-2.0
 * @author popkov.aleksander@gmail.com (Popkov Alexander)
 */

goog.provide( 'zz.ui.mdl.switch' );

goog.require( 'goog.ui.decorate' );
goog.require( 'goog.ui.Component' );

goog.require( 'zz.ui.mdl.Switch' );
goog.require( 'zz.ui.mdl.SwitchRenderer' );
goog.require( 'zz.ui.mdl.switch.tpl' );

/**
 * Base namespace for zz.ui.mdl.switch module.
 * @const
 */
zz.ui.mdl.switch = zz.ui.mdl.switch || { };

/**
 * Bootstrap module method.
 */
zz.ui.mdl.switch.bootstrap = function( ){


    goog.ui.registry.setDecoratorByClassName( zz.ui.mdl.SwitchRenderer.CSS_CLASS, function( ){

        return new zz.ui.mdl.Switch( );
    } );

	soy.renderElement( goog.dom.getElement( 'root' ), zz.ui.mdl.switch.tpl.default );

	var swtch1 = goog.ui.decorate( goog.dom.getElement( '1' ) );
	var swtch2 = goog.ui.decorate( goog.dom.getElement( '2' ) );

	swtch2.setEnabled( false );

	goog.events.listen(

		swtch1, [

			goog.ui.Component.EventType.ACTION,
			goog.ui.Component.EventType.CHANGE,
			goog.ui.Component.EventType.CHECK,
			goog.ui.Component.EventType.UNCHECK,
			goog.ui.Component.EventType.FOCUS,
			goog.ui.Component.EventType.BLUR,
			goog.ui.Component.EventType.DISABLE,
			goog.ui.Component.EventType.ENABLE
		],
		function( e ){ console.log( e ); },
		false );

};
goog.exportSymbol( 'zz.ui.mdl.switch.bootstrap', zz.ui.mdl.switch.bootstrap );