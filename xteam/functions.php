<?php

define( 'XTEAM_DIR', get_template_directory() );
define( 'XTEAM_VER', '1.0' );
require_once( XTEAM_DIR . '/inc/helpers.php' );
require_once( XTEAM_DIR . '/inc/customizer.php' );

if ( ! function_exists( 'xteam_setup' ) ) {
	function xteam_setup() {
		add_theme_support( 'post-thumbnails' );
		register_nav_menus( array(
			'primary-menu' => esc_html__( 'Header Menu', 'xteam' ),
		) );
		register_sidebar(
			array(
				'name'          => 'Custom Widget Area',
				'id'            => 'custom_widget_area',
				'before_widget' => '',
				'after_widget'  => '',
				'before_title'  => '',
				'after_title'   => '',
			)
		);
	}
}
add_action( 'after_setup_theme', 'xteam_setup' );

function xteam_enqueue_styles() {
	wp_enqueue_style( 'xteam-default-style', get_stylesheet_uri() );
	wp_enqueue_style( 'xteam-main-style', xteam_file( '/css/style.min.css' ), array( 'xteam-default-style' ), XTEAM_VER );
}
add_action( 'wp_enqueue_scripts', 'xteam_enqueue_styles' );

function xteam_enqueue_scripts() {
	wp_enqueue_script( 'jquery' );
	wp_enqueue_script( 'xteam-main-js', xteam_file( '/js/xteam.js' ), array( 'jquery' ), XTEAM_VER, true );
}
add_action( 'wp_enqueue_scripts', 'xteam_enqueue_scripts' );

function xteam_register_widgets() {
	require_once( XTEAM_DIR . '/inc/widgets/class-custom-widget.php' );
	register_widget( 'Custom_Widget' );
}
add_action( 'widgets_init', 'xteam_register_widgets' );
