<?php

namespace Netzmacher\SeoDynamicTag\Userfunc;

use Netzmacher\SeoDynamicTag\Utility\SqlUtility;
use TYPO3\CMS\Core\Utility\ArrayUtility;

/* * *************************************************************
 *  Copyright notice
 *
 *  (c) 2020-2021 - Dirk Wildt <http://wildt.at.die-netzmacher.de>
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
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 * ************************************************************* */

/**
 * The class tx_browser_pi1_session bundles methods for the session management
 *
 * @author    Dirk Wildt <http://wildt.at.die-netzmacher.de>
 * @package    TYPO3
 * @subpackage  seo_dynamic_tag
 *
 * @version 5.1.0
 * @since 5.1.0
 */
class RenderUserfunc extends AbstractUserfunc
{

	public $_conf;

	/**
	 * HandleTimestamp() : 
	 *
	 * @param  string		Empty string (no content to process)
	 * @param  array    TypoScript configuration
	 * @return boolean	
	 * @version 5.1.0
	 * @since 5.1.0
	 */
	public function HandleTimestamp( $content, $conf )
	{
		unset( $content );
		$this->_conf = $conf;

		$value = $this->_cObj( 'cObject' );
		$value = $this->_replaceTimestamp( $value );
		return $value;
	}

	/**
	 * _replaceTimestamp() : 
	 *
	 * @param	string	rendered value
	 * @return string
	 * @version 5.1.0
	 * @since 5.1.0
	 */
	private function _replaceTimestamp( $value )
	{
		$matches = null;

		preg_match( '/\d{10}/', $value, $matches );
		if( !isset( $matches[ 0 ] ) )
		{
			return $value;
		}

		$tstamp = $matches[ 0 ];
		$strftime = $this->_cObj( 'strftime' );
		$date = strftime( $strftime, $tstamp );
		$value = str_replace( $tstamp, $date, $value );

		return $value;
	}

}
