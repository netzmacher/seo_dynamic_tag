<?php

namespace Netzmacher\SeoDynamicTag\Utility;

use TYPO3\CMS\Core\Database\Connection;
use TYPO3\CMS\Core\Database\ConnectionPool;
use TYPO3\CMS\Core\Database\Query\QueryBuilder;
use TYPO3\CMS\Core\Utility\GeneralUtility;

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
 * @subpackage  xblog
 *
 * @version 5.0.0
 * @since 5.0.0
 */
class SqlUtility
{

	/**
	 * QueryBuilder()
	 * 
	 * @param string $table
	 * @return QueryBuilder
	 * 
	 * @version	5.0.0
	 * @since	5.0.0
	 */
	protected static function QueryBuilder( $table ): QueryBuilder
	{
		return self::_connection( $table )->createQueryBuilder( $table );
	}

	/**
	 * _connection
	 * 
	 * @param string $table
	 * @return Connection
	 * 
	 * @version	5.0.0
	 * @since	5.0.0
	 */
	private static function _connection( $table ): Connection
	{
		return GeneralUtility::makeInstance( ConnectionPool::class )->getConnectionForTable( $table );
	}

	/**
	 * getPid():
	 *
	 * @param string	$table		table
	 * @param integer	$uid			uid
	 * @return string	$pid			pid
	 * @access public
	 * @version 5.0.0
	 * @since 5.0.0
	 */
	public static function getPid( $table, $uid )
	{
		$queryBuilder = self::QueryBuilder( $table );

		$queryBuilder
						->select( 'pid' )
						->from( $table )
						->where(
										$queryBuilder->expr()->eq( 'uid', $uid )
						)
		;

		$rows = $queryBuilder
						->execute()
						->fetchAll()
		;

		return $rows[ 0 ][ 'pid' ];
	}

}