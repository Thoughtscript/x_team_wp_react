<?php

if ( have_posts() ) {

	while ( have_posts() ) {

		the_post();
		echo '</br></br>';
		the_date();
		echo '</br></br>';
		the_time();
		echo '</br></br>';
		the_author();
		echo '</br></br>';
		the_permalink();
		echo '</br></br>';
		the_title();
		echo '</br>';
		the_content();

	}
}
