<?php
if( ! defined ( 'TYPO3_MODE' ) )
{
  die( 'Access denied.' );
}

  //  add static TypoScript
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile( $_EXTKEY, 'Configuration/TypoScript/Base/',							'SEO [01]'                   );
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile( $_EXTKEY, 'Configuration/TypoScript/ResetPageMeta/',			'SEO [09] Reset page.meta'   );
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile( $_EXTKEY, 'Configuration/TypoScript/3.4.1/',							'SEO [99] SEO Dynamic Tag 3 [deprecated]' );
