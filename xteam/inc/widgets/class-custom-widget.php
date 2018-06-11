<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
require_once( 'class-enhanced-widget.php' );

class Custom_Widget extends Enhanced_Widget {
	public function __construct() {
		$widget_id = 'custom_widget';
		$widget_options = array(
			'classname'   => $widget_id,
			'description' => 'My Custom Widget Description',
		);
		parent::__construct( $widget_id, 'My Custom Widget', $widget_options );
	}
	public function widget( $args, $instance ) { }
	public function form( $instance ) {	}
	public function update( $new_instance, $old_instance ) {
		return $new_instance;
	}
}
