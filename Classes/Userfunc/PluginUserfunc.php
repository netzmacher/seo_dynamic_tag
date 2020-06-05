<?php

namespace Netzmacher\SeoDynamicTag\UserFunc;

use Netzmacher\SeoDynamicTag\Utility\SqlUtility;
use TYPO3\CMS\Core\Utility\ArrayUtility;

/* * *************************************************************
 *  Copyright notice
 *
 *  (c) 2020 - Dirk Wildt <http://wildt.at.die-netzmacher.de>
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
 * @version 5.0.0
 * @since 5.0.0
 */
class PluginUserfunc extends AbstractUserfunc
{

	public $_conf;

	/**
	 * SetRegister() : Set the registers: seodynamictagTable, seodynamictagUid, seodynamictagPid, seodynamictagAdditionalParams
	 * 								 Only in case of matched requirements!
	 *
	 * @param  string		Empty string (no content to process)
	 * @param  array    TypoScript configuration
	 * @return boolean	
	 * @version 5.0.0
	 * @since 5.0.0
	 */
	public function SetRegisterParamsPidTableUid( $content, $conf )
	{
	
		static $matchParameter = null;

		unset( $content );
		$this->_conf = $conf;

		if( $matchParameter === true )
		{
			return true;
		}

		if( !isset( $conf[ 'plugins.' ] ) )
		{
			$matchParameter = false;
			return;
		}

		$mergedGPParameters = $this->_getParameters();
		if( empty( $mergedGPParameters ) )
		{
			$matchParameter = false;
			return;
		}

		$plugin = $this->_getPlugin( $mergedGPParameters );
		if( empty( $plugin ) )
		{
			$matchParameter = false;
			return;
		}

		$showUid = $this->_getShowUid( $plugin, $mergedGPParameters );
		if( empty( $showUid ) )
		{
			$matchParameter = false;
			return;
		}

		if( !$this->_setRegister( $plugin, $showUid, $mergedGPParameters ) )
		{
			$matchParameter = false;
			return;
		}

		$matchParameter = true;
		return;
	}

	/**
	 * _getParameters() : 
	 *
	 * @return array
	 * @version 5.0.0
	 * @since 5.0.0
	 */
	private function _getParameters()
	{
		$postParameter = ( array ) filter_input_array( INPUT_POST );
		$getParameter = ( array ) filter_input_array( INPUT_GET );
		$mergedGPParameters = $getParameter;
		ArrayUtility::mergeRecursiveWithOverrule( $mergedGPParameters, $postParameter );
		return $mergedGPParameters;
	}

	/**
	 * _getPlugin() : 
	 *
	 * @param  array
	 * @return string	
	 * @version 5.0.0
	 * @since 5.0.0
	 */
	private function _getPlugin( $mergedGPParameters )
	{
		$plugins = array_keys( $this->_conf[ 'plugins.' ] );
		$plugin = array_intersect( $plugins, array_keys( $mergedGPParameters ) );
		if( empty( $plugin ) )
		{
			return;
		}

		// A plugin is part of the URL parameters
		$plugin = $plugin[ key( $plugin ) ];
		return $plugin;
	}

	/**
	 * _getShowUid() : 
	 *
	 * @param  string
	 * @param  array
	 * @return string	
	 * @version 5.0.0
	 * @since 5.0.0
	 */
	private function _getShowUid( $plugin, $mergedGPParameters )
	{

		$showUid = array_intersect( array_keys( $this->_conf[ 'plugins.' ][ $plugin . '.' ][ 'showUids.' ] ), array_keys( $mergedGPParameters[ $plugin ] ) );
		if( empty( $showUid ) )
		{
			return;
		}

		// A plugin with its showUid is part of the URL parameters
		$showUid = $showUid[ key( $showUid ) ];
		return $showUid;
	}

	/**
	 * _setRegister() : Set the registers: seodynamictagTable, seodynamictagUid, seodynamictagPid, seodynamictagAdditionalParams
	 * 									Only in case of matched requirements!
	 *
	 * @param  string
	 * @param  string
	 * @param  array
	 * @return string	
	 * @version 5.0.0
	 * @since 5.0.0
	 */
	private function _setRegister( $plugin, $showUid, $mergedGPParameters )
	{
//&tx_xblog_pi1[newsUid]={GP:tx_xblog_pi1|newsUid}		
		$table = $this->_conf[ 'plugins.' ][ $plugin . '.' ][ 'showUids.' ][ $showUid ];
		if( empty( $table ) )
		{
			return;
		}
		$uid = ( int ) $mergedGPParameters[ $plugin ][ $showUid ];
		if( empty( $uid ) )
		{
			return;
		}

		$pid = SqlUtility::getPid( $table, $uid );
		if( empty( $pid ) )
		{
			return;
		}

		$GLOBALS[ 'TSFE' ]->register[ 'seodynamictagTable' ] = $table;
		$GLOBALS[ 'TSFE' ]->register[ 'seodynamictagUid' ] = $uid;
		$GLOBALS[ 'TSFE' ]->register[ 'seodynamictagPid' ] = $pid;
		$GLOBALS[ 'TSFE' ]->register[ 'seodynamictagAdditionalParams' ] = $this->_setRegisterAdditionalParams( $plugin, $showUid, $uid, $mergedGPParameters );

		//var_dump( __METHOD__, __LINE__, $GLOBALS[ 'TSFE' ]->register );
	}

	/**
	 * _setRegister() : Set the register: seodynamictagAdditionalParams
	 *
	 * @param  string
	 * @param  string
	 * @param  array
	 * @return string	
	 * @version 5.0.0
	 * @since 5.0.0
	 */
	private function _setRegisterAdditionalParams( $plugin, $showUid, $uid, $mergedGPParameters )
	{
		$additionalParams = '&' . $plugin . '[' . $showUid . ']=' . $uid;

		$_conf = $this->_conf[ 'plugins.' ][ $plugin . '.' ][ 'additionalParams' ];

		if( empty( $_conf ) )
		{
			return $additionalParams;
		}

		$_confParams = explode( ',', $_conf );
		foreach( $_confParams as $_confParam )
		{
			$_confParam = trim( $_confParam );
			$value = $mergedGPParameters[ $plugin ][ $_confParam ];
			if( empty( $value ) )
			{
				continue;
			}
			$value = htmlspecialchars( $value );
			$additionalParams = $additionalParams . '&' . $plugin . '[' . $_confParam . ']=' . $value;
		}

		//var_dump( __METHOD__, __LINE__, $additionalParams );
		return $additionalParams;
	}

}
