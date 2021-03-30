<?php

if( !defined( 'TYPO3_MODE' ) )
{
	die( 'Access denied.' );
}

	/*	 * ****************************************************************************
	 * FE addRootLineFields
	 * **************************************************************************** */
	$addRootLineFields = ''
					. 'author,'
					. 'description,'
					. 'keywords'
	;
	$GLOBALS[ 'TYPO3_CONF_VARS' ][ 'FE' ][ 'addRootLineFields' ] .= ($GLOBALS[ 'TYPO3_CONF_VARS' ][ 'FE' ][ 'addRootLineFields' ] ? ',' : '') . $addRootLineFields;
