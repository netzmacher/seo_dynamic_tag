<?php

namespace Netzmacher\SeoDynamicTag\Configuration\TypoScript;

use Netzmacher\SeoDynamicTag\Utility\TypoScriptUtility;

/**
 * PluginParameterCondition
 */
class PluginParameterCondition extends \TYPO3\CMS\Core\Configuration\TypoScript\ConditionMatching\AbstractCondition
{

	/**
	 * Evaluate condition
	 *
	 * @param array $conditionParameters
	 * @return bool
	 */
	public function matchCondition( array $conditionParameters )
	{
		var_dump( __METHOD__, __LINE__, TypoScriptUtility::parseTypoScriptFromTypoScriptPath( 'page.') );
		die();
		$result = FALSE;
		if( empty( $conditionParameters ) )
		{
			$result = TRUE;
		}
		if( !empty( $conditionParameters ) && $conditionParameters[ 0 ] === 'TYPO3' )
		{
			$result = TRUE;
		}
		if( !empty( $conditionParameters ) && str_starts_with((string) $conditionParameters[ 0 ], '=') )
		{
			$conditionParameters[ 0 ] = trim( substr( (string) $conditionParameters[ 0 ], 1 ) );
			if( $conditionParameters[ 0 ] == '42' )
			{
				$result = TRUE;
			}
		}

		return $result;
	}

}
