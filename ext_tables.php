<?php
if( ! defined ( 'TYPO3_MODE' ) )
{
  die( 'Access denied.' );
}

  //  add static TypoScript
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile( $_EXTKEY, 'Configuration/TypoScript/Base/',							'SEO [1]'                       );
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile( $_EXTKEY, 'Configuration/TypoScript/ResetPageMeta/',			'SEO [9] Reset page.meta'       );
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile( $_EXTKEY, 'Resources/Private/2.x/static/',               'SEO [90] 2.x'                  );
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile( $_EXTKEY, 'Resources/Private/2.x/static/cal/',           'SEO [91] + 2.x cal'            );
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile( $_EXTKEY, 'Resources/Private/2.x/static/pages/',         'SEO [91] + 2.x pages'          );
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile( $_EXTKEY, 'Resources/Private/2.x/static/tt_news/',       'SEO [91] + 2.x tt_news'        );
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile( $_EXTKEY, 'Resources/Private/2.x/static/tt_products/',   'SEO [91] + 2.x tt_products'    );
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile( $_EXTKEY, 'Resources/Private/2.x/static/resetPageMeta/',	'SEO [99] 2.x reset page.meta'  );