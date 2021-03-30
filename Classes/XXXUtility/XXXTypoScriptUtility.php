<?php

//declare(strict_types = 1);

namespace Netzmacher\SeoDynamicTag\XXXUtility;

use TYPO3\CMS\Core\Utility\GeneralUtility;

/* * *************************************************************
 *  Copyright notice
 *
 *  (c) 2018-2021 - Dirk Wildt <http://wildt.at.die-netzmacher.de>
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 * ************************************************************* */

/**
 * Class TypoScriptUtility
 *
 * @package TYPO3
 * @subpackage xblog
 * @author Dirk Wildt <http://wildt.at.die-netzmacher.de>
 * @version 0.0.5
 * @since 0.0.5
 */
class XXXTypoScriptUtility extends AbstractUtility
{

	/**
	 * Renders a TypoScript plain array, usually $conf
	 *
	 * @param array $plainArray
	 * @return array
	 * @version 0.0.5
	 * @since 0.0.5
	 */
	public static function cObjGetSingle( $plainArray )
	{
		if( empty( $plainArray ) )
		{
			return '';
		}
		$name = $plainArray[ '_typoScriptNodeValue' ];
		$conf = self::convertPlainArrayToTypoScriptArray( $plainArray );

		$string = ObjectUtility::getContentObject()->cObjGetSingle( $name, $conf );
		return $string;
	}

	/**
	 * Converts a plain TypoScript array to an array in TypoScript notation
	 *
	 * @param array $plainArray
	 * @return array $typoScriptArray
	 * @version 0.0.5
	 * @since 0.0.5
	 */
	public static function convertPlainArrayToTypoScriptArray( $plainArray )
	{
		if( empty( $plainArray ) )
		{
			return '';
		}
		$typoScriptService = GeneralUtility::makeInstance( 'TYPO3\\CMS\\Extbase\\Service\\TypoScriptService' );
		$typoScriptArray = $typoScriptService->convertPlainArrayToTypoScriptArray( $plainArray );

		return $typoScriptArray;
	}

	/**
	 * Parse TypoScript from path like lib.blabla
	 *
	 * @param $typoScriptObjectPath
	 * @return string
	 * @version 0.0.5
	 * @since 0.0.5
	 */
	public static function parseTypoScriptFromTypoScriptPath( $typoScriptObjectPath )
	{
		if( empty( $typoScriptObjectPath ) )
		{
			return '';
		}
		$setup = self::getTyposcriptFrontendController()->tmpl->setup;
		var_dump(__METHOD__, __LINE__, $setup);
		$pathSegments = GeneralUtility::trimExplode( '.', $typoScriptObjectPath );
		$lastSegment = array_pop( $pathSegments );
		foreach( $pathSegments as $segment )
		{
			$setup = $setup[ $segment . '.' ];
		}
		return self::getContentObject()->cObjGetSingle( $setup[ $lastSegment ], $setup[ $lastSegment . '.' ] );
	}

}
