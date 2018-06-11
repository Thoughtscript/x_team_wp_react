<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function xteam_customize_register( $wp_customize ) { }
add_action( 'customize_register', 'xteam_customize_register' );
