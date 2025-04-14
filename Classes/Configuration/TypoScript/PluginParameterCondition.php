<?php

namespace Netzmacher\SeoDynamicTag\Configuration\TypoScript;

use TYPO3\CMS\Core\Configuration\TypoScript\ConditionMatching\AbstractCondition;
use Netzmacher\SeoDynamicTag\Utility\TypoScriptUtility;

/**
 * PluginParameterCondition
 */
class PluginParameterCondition extends AbstractCondition
{

	/**
  * Evaluate condition
  */
 public function matchCondition( array $conditionParameters ): void
	{
		var_dump( __METHOD__, __LINE__, TypoScriptUtility::parseTypoScriptFromTypoScriptPath( 'page.') );
		die();
	}

}
