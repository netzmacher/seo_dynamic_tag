<?php

namespace Netzmacher\SeoDynamicTag\Userfunc;

use TYPO3\CMS\Frontend\ContentObject\ContentObjectRenderer;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use Netzmacher\SeoDynamicTag\Backend\Extensionmanager;

/* * *************************************************************
 *  Copyright notice
 *
 *  (c) 2018-2024 - Dirk Wildt <http://wildt.at.die-netzmacher.de>
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
 * @version 0.8.26
 * @since 0.6.1
 */
class AbstractUserfunc
{

	/**
	 * @var array current configuration array from TypoScript of the calling userFunc 
	 */
	public $_conf;

	/**
	 * @var boolean		true || false. Prompt the devUid. For development only
	 */
	private bool $_promptDevUid = false;

	/**
	 * @var object		the urrent cObject
	 */
	protected $cObj;

	/**
	 * _cObj( ) :
	 *
	 * @return string
	 * @access protected
	 * @version 0.3.0
	 * @since 0.3.0
	 */
	protected function _cObj( string $property )
	{
		if( !isset( $this->_conf[ $property . '.' ] ) )
		{
			return $this->_conf[ $property ];
		}

		$cObj_name = $this->_conf[ $property ];
		$cObj_conf = $this->_conf[ $property . '.' ];

		return $this->cObj->cObjGetSingle( $cObj_name, $cObj_conf );
	}

	/**
  * _extManagerEnabledSessionManagement( ) :
  *
  * @access protected
  * @version 0.6.0
  * @since 0.6.0
  */
 protected function _extManagerEnabledSessionManagement(): bool
	{
		//var_dump(__METHOD__, __LINE__, $enabled);
		return !Extensionmanager::getProperty( 'feature_session' );
	}

	/**
	 * _getFlexformValue():
	 *
	 * @param array flexform
	 * @param string label of the sheet
	 * @param string label of the field
	 * @return mixed value from flexform
	 * @access protected
	 * @version 0.5.2
	 * @since 0.5.2
	 */
	protected function _getFlexformValue( $sheet, $field )
	{
		$NSprefix = '';
		$reportDocTag = false;

		$xmlFlexform = $this->cObj->data[ 'pi_flexform' ];
		//var_dump( __METHOD__, __LINE__, $xmlFlexform, $this->cObj->data[ 'uid' ] );
		$arrFlexform = GeneralUtility::xml2array( $xmlFlexform, $NSprefix, $reportDocTag );

		if( !isset( $arrFlexform[ 'data' ][ $sheet ][ 'lDEF' ][ $field ][ 'vDEF' ] ) )
		{
			$this->_getFlexformValueDiePrompt( $sheet, $field );
		}

		return $arrFlexform[ 'data' ][ $sheet ][ 'lDEF' ][ $field ][ 'vDEF' ];
	}

	/**
	 * _getFlexformValueDiePrompt():
	 *
	 * @param array flexform
	 * @param string label of the sheet
	 * @param string label of the field
	 * @return mixed value from flexform
	 * @access protected
	 * @version 0.8.26
	 * @since 0.5.2
	 */
	private function _getFlexformValueDiePrompt( string $sheet, string $field ): never
	{
		$prompt = ''
						. 'ERROR<br />'
						. 'Current Flexform does\'t contain a sheet "' . $sheet . '" with field "' . $field . '"<br />'
						. 'Please save the xBlog-Plugin once!<br />'
						. '@ ' . __METHOD__ . ' (#' . __LINE__ . ')'
		;
		die( $prompt );
	}

	/**
  * _pluginExclusive():
  *
  * @access protected
  * @version 0.5.2
  * @since 0.5.2
  */
 protected function _pluginExclusive(): bool
	{
		$modeReceive = $this->_getFlexformValue( 'ctrl', 'settings.flexform.pi1.ctrl.mode.receive' );
		switch( true )
		{
			case($modeReceive == 'exclusive'):
				//var_dump( __METHOD__, __LINE__, 'plugin is exclusive!' );
				return true;
			case($modeReceive == 'default'):
				//var_dump( __METHOD__, __LINE__, 'plugin isn\'t exclusive!' );
				return false;
			default:
				$header = 'ERROR: undefined value in switch';
				$text = 'settings.flexform.pi1.ctrl.mode.receive is "' . $modeReceive . '", but must be either "exclusive" or "default"';
				$this->_zzDieWiPrompt( $header, $text, __METHOD__, __LINE__ );
		}
	}

	/**
	 * _actionIsSingle():
	 *
	 * @return boolean		true, if param action is single
	 * @access protected
	 * @version 0.9.7
	 * @since 0.9.7
	 * @internal #t4479, #t4480
	 */
	protected function _actionIsSingle()
	{
		$piVars = $GLOBALS['TYPO3_REQUEST']->getParsedBody()['tx_xblog_pi1'] ?? $GLOBALS['TYPO3_REQUEST']->getQueryParams()['tx_xblog_pi1'] ?? null;
		return match (true) {
      !isset($piVars['action']) => false,
      $piVars['action'] == 'single' => true,
      default => false,
  };
	}

	/**
	 * _pluginMatchs():
	 *
	 * @return boolean         
	 * @access protected
	 * @version 0.5.2
	 * @since 0.5.2
	 */
	protected function _pluginMatchs()
	{
		$uid = $this->cObj->data[ 'uid' ];
		$list_type = $this->cObj->data[ 'list_type' ];
		$piVars = $GLOBALS['TYPO3_REQUEST']->getParsedBody()['tx_' . $list_type] ?? $GLOBALS['TYPO3_REQUEST']->getQueryParams()['tx_' . $list_type] ?? null;

		if( !isset( $piVars[ 'plugin' ] ) )
		{
//			var_dump( __METHOD__, __LINE__, 'no URI param tx_' . $list_typeplugin . '[plugin]' );
			return false;
		}
  //			var_dump( __METHOD__, __LINE__, 'tx_' . $list_typeplugin . '[plugin] isn\'t the uid of the current xBlog plugin' );
  return $piVars[ 'plugin' ] == $uid;
	}

	/**
	 * _promptDevUid( ) :
	 *
	 * @return void
	 * @access protected
	 * @version 0.5.2
	 * @since 0.5.2
	 */
	protected function _promptDevUid()
	{
		if( !$this->_promptDevUid )
		{
			return;
		}

		var_dump( __METHOD__, __LINE__, $this->_cObj( 'devUid' ) );
	}

	/**
	 * _unproperParam( ) : dies, if a param is empty
	 *
	 * @params string $param
	 * @params string $defaultPrompt
	 * @return void
	 * @access protected
	 * @version 0.9.7
	 * @since 0.5.2
	 */
	protected function _unproperParam( string $param, string $defaultPrompt )
	{
		$value = $this->_cObj( $param );
		if( empty( $value ) )
		{
			$header = 'ERROR: showUid is missing';
			$text = $defaultPrompt
							. '<p style="color:red;font-weight:bold;">'
							. 'Here: ' . $param . ' is missing!'
							. '</p>'
			;
			$this->_zzDieWiPrompt( $header, $text, __METHOD__, __LINE__ );
		}
	}

	/**
  * _zzDieWiPrompt( ) :
  *
  * @access protected
  * @version 0.5.2
  * @since 0.5.2
  */
 protected function _zzDieWiPrompt( string $header, string $text, string $method, string $line ): never
	{
		$prompt = '
      <h1 style="color:red;">
        ' . $header . '
      </h1>
      ' . $text . '
      <p>
        Sorry for the trouble. This is a prompt of TYPO3 xBlog.
      </p>
      <h2>
        Help?
      </h2>
      <p>
        If you need any help, please take a look into the
        <a href="https://docs.typo3.org/typo3cms/extensions/xblog/" target="_blank" title="xBlog manual">
          xBlog manual &raquo;</a>
      </p>
      <h2>
        Developer Information
      </h2>
      <p>
        Error occures here: ' . $method . ' at #' . $line . '
      </p>
      <p>
        userFunc has devUid:<br /> 
				' . $this->_cObj( 'devUid' ) . '
      </p>
      ';
		die( $prompt );
	}

 public function setContentObjectRenderer(ContentObjectRenderer $cObj): void
 {
     $this->cObj = $cObj;
 }

}
