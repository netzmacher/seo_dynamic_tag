<?php

use a9f\Fractor\Configuration\FractorConfiguration;
use a9f\FractorTypoScript\Configuration\TypoScriptProcessorOption;
use a9f\Fractor\ValueObject\Indent;
use a9f\FractorXml\Configuration\XmlProcessorOption;
use a9f\Typo3Fractor\Set\Typo3LevelSetList;
use Helmich\TypoScriptParser\Parser\Printer\PrettyPrinterConfiguration;

return FractorConfiguration::configure()
    ->withPaths([
      __DIR__ . '/extensions/seo_dynamic_tag/',
    ])
//    ->withSkip([
//      RemoveUseCacheHashFromTypolinkTypoScriptFractor::class,
//        __DIR__ . '/packages/my_package/crappy_file.txt',
//        __DIR__ . '/packages/my_package/other_crappy_file.txt' => [
//            AddRenderTypeToFlexFormFractor::class,
//        ]
//    ])
    ->withOptions([
//      XmlProcessorOption::INDENT_CHARACTER                 => Indent::STYLE_TAB,
      XmlProcessorOption::INDENT_SIZE                      => 2,
      XmlProcessorOption::INDENT_CHARACTER                 => Indent::STYLE_SPACE,
      TypoScriptProcessorOption::INDENT_SIZE               => 2,
      //TypoScriptProcessorOption::INDENT_CHARACTER          => Indent::STYLE_TAB,
      TypoScriptProcessorOption::INDENT_CHARACTER          => PrettyPrinterConfiguration::INDENTATION_STYLE_SPACES,
      TypoScriptProcessorOption::ADD_CLOSING_GLOBAL        => false,
      TypoScriptProcessorOption::INCLUDE_EMPTY_LINE_BREAKS => true,
      TypoScriptProcessorOption::INDENT_CONDITIONS         => true,
    ])
    ->withSets([
      Typo3LevelSetList::UP_TO_TYPO3_13
    ])
;
