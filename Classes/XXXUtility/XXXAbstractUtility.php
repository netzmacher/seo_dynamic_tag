<?php

//declare(strict_types = 1);

namespace Netzmacher\SeoDynamicTag\XXXUtility;

use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Object\ObjectManager;
use TYPO3\CMS\Frontend\ContentObject\ContentObjectRenderer;
use TYPO3\CMS\Frontend\Controller\TypoScriptFrontendController;

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
 * Class AbstractUtility
 *
 * @package TYPO3
 * @subpackage xblog
 * @author Dirk Wildt <http://wildt.at.die-netzmacher.de>
 * @version 0.0.5
 * @since 0.0.5
 */
abstract class XXXAbstractUtility
{

	/**
	 * @return ContentObjectRenderer
	 * @codeCoverageIgnore
	 */
	protected static function getContentObject(): ContentObjectRenderer
	{
		return self::getObjectManager()->get( ContentObjectRenderer::class );
	}

	/**
	 * @return LanguageService
	 * @SuppressWarnings(PHPMD.Superglobals)
	 */
	protected static function getLanguageService()
	{
		return $GLOBALS[ 'LANG' ];
	}

	/**
	 * @return ObjectManager
	 */
	protected static function getObjectManager(): ObjectManager
	{
		return GeneralUtility::makeInstance( ObjectManager::class );
	}

	/**
	 * @return TypoScriptFrontendController
	 * @SuppressWarnings(PHPMD.Superglobals)
	 */
	protected static function getTyposcriptFrontendController()
	{
		return $GLOBALS[ 'TSFE' ];
	}

}
