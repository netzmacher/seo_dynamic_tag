<?php
if (!defined ('TYPO3_MODE')) {
  die ('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPItoST43($_EXTKEY,'Resources/Private/2.x/pi1/class.tx_seodynamictag_pi1.php','_pi1','',1);