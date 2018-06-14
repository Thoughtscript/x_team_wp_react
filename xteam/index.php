<?php

$context = Timber::get_context();
$page = 'home.twig';
$post = new TimberPost();
$context['posts'] = Timber::get_posts();
Timber::render($page, $context);