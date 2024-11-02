<?php

namespace Netzmacher\SeoDynamicTag\Userfunc\Condition;

/* * *************************************************************
 *  Copyright notice
 *
 *  (c) 2020-2024 - Dirk Wildt <http://wildt.at.die-netzmacher.de>
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
 * @author			Dirk Wildt <http://wildt.at.die-netzmacher.de>
 * @package			TYPO3
 * @subpackage  seo_dynamic_tag
 *
 * @version 5.0.0
 * @since 5.0.0
 */
class XXXRegister
{

	/**
	 * AreSet() : 
	 *
	 * @return boolean
	 * @version 5.0.0
	 * @since 5.0.0
	 */
	public static function AreSet()
	{
		global $GLOBALS;
		var_dump( __METHOD__, __LINE__, $GLOBALS[ 'TSFE' ]->register );
		if( empty( $GLOBALS[ 'TSFE' ]->register[ 'seodynamictagTable' ] ) )
		{
			return false;
		}

		return true;
	}

}
