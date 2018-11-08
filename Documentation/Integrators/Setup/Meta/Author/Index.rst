.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../../../Includes.txt


.. _integrator_setup_meta_author:


Author
======

Controlling the properties of the description tag

TypoScript Constant Editor: [SEO DYNAMIC TAG - META AUTHOR]


.. container:: table-row

  Property
    Author

  Data type
    string

  Description
    Value is used in the meta tag author. You can use a list of fields, separated by a double slash. I.e: author // actor. If field or field value is empty, SEO Dynamic Tag takes the value from the author default. See [SEO DYNAMIC TAG - DEFAULT VALUES].

  Default
    author



.. container:: table-row

  Property
    Crop

  Data type
    integer

  Description
    Crop author after X chars (whole words will cropped).

  Default
    200




.. container:: table-row

  Property
    Default

  Data type
    string

  Description
    Default author, if current record doesn't contain any author. For single views only. Leave it empty, if you don't like a default author.

  Default
    Author default by TYPO3 SEO Dynamic Tag (seo_dynamic tag)