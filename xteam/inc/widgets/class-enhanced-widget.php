<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Enhanced_Widget extends WP_Widget {
	protected function render_input_for_attribute( $instance, $slug, $label ) {
		$field_id   = esc_attr( $this->get_field_id( $slug ) );
		$field_name = esc_attr( $this->get_field_name( $slug ) );
		$attr       = ! empty( $instance[ $slug ] ) ? $instance[ $slug ] : esc_html__( 'Default', 'xteam' );
	?>
		<p>
			<label for="<?php echo $field_id; ?>">
				<?php echo esc_html( $label ); ?>
			</label>
			<input id="<?php echo $field_id; ?>" name="<?php echo $field_name; ?>" type="text" value="<?php echo esc_attr( $attr ); ?>" />
		</p>
	<?php
	}
}
