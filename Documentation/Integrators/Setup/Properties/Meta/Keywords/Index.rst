.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../../../../Includes.txt


.. _integrator_setup_properties_meta_keywords:


Keywords
========

Controlling the properties of the keywords tag

TypoScript Constant Editor: [SEO DYNAMIC TAG - META KEYWORDS]


.. container:: table-row

  Property
    Keywords field

  Data type
    string

  Description
    Field, which contains the keywords. Keywords should be a comma separated list. You can use a list of fields, separated by a double slash. I.e: keywords // seo_keywords.

  Default
    keywords // seo_keywords



.. container:: table-row

  Property
    Phrase field

  Data type
    string

  Description
    If keywords from above are empty, keywords will generated from this field. Value should not be a comma separated list but a phrase. You can use a list of fields, separated by a double slash. I.e: title // header

  Default
    title // header


Further property

* Crop

* Default