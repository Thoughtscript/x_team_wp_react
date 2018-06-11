<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function xteam_file( $file ) {
	return get_template_directory_uri() . $file;
}

function xteam_template( $slug ) {
	get_template_part( 'templates/xteam', $slug );
}
