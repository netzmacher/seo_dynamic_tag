<?php

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
				'seo_dynamic_tag'
				, 'Configuration/TypoScript/Base/'
				, 'SEO [01] – MUST PLACED BELOW OF ALL OTHER TEMPLATES'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
				'seo_dynamic_tag'
				, 'Configuration/TypoScript/ResetPageMeta/'
				, 'SEO [09] Reset page.meta'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
				'seo_dynamic_tag'
				, 'Configuration/TypoScript/4.0.3/'
				, 'SEO [99] SEO Dynamic Tag 4 [deprecated]'
);
