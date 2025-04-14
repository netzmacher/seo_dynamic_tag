<?php

$EM_CONF[$_EXTKEY] = [
  'title'            => 'SEO Dynamic Tag',
  'description'      => 'Search Engine Optimisation (SEO) for title tag, canonical tag, meta tags author, description and keywords and social media tags for google, opengraph/facebook and twitter.',
  'category'         => 'plugin',
  'version'          => '12.4.1',
  'state'            => 'stable',
  'clearcacheonload' => 0,
  'author'           => 'Dirk Wildt (Die Netzmacher)',
  'author_email'     => 'http://wildt.at.die-netzmacher.de',
  'author_company'   => '',
  'constraints'      => [
    'depends'   => [
      'typo3' => '12.4.0-12.4.99'
    ],
  ]
];
