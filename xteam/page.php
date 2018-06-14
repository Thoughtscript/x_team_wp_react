<?php

$context = Timber::get_context();
$page = 'page.twig';
$post = new TimberPost();
$context['post'] = $post;
$context['posts'] = Timber::get_posts();
Timber::render($page, $context);