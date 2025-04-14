<?php

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

ExtensionManagementUtility::addStaticFile(
				'seo_dynamic_tag'
				, 'Configuration/TypoScript/Base/'
				, 'SEO [01] – MUST PLACED BELOW OF ALL OTHER TEMPLATES'
);
ExtensionManagementUtility::addStaticFile(
				'seo_dynamic_tag'
				, 'Configuration/TypoScript/ResetPageMeta/'
				, 'SEO [09] Reset page.meta'
);
