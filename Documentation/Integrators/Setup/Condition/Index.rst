.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../../Includes.txt


.. _integrator_setup_condition:


Condition*
==========

Properties for the condition.

The condition is needed for detail views of records.
It ensures, that SEO Dynamic Tag is running only

* on the current page and
* in the single view

TypoScript Constant Editor: [SEO DYNAMIC TAG - CONDITION]


.. container:: table-row

  Property
    Single view begin

  Data type
    string

  Description
    **Obligate!** Global condition beginning for the single view.
    Without outer square brackets (!).
    Replace 'xxx' with the id of the page with your plugin for the single view.
    You can use PIDinRootline among others but this is dangerous.

    Example:

    ``globalVar = GP:tx_ttnews|tt_news > 0] && [globalVar = TSFE:id = 123``

  Default
    ``globalVar = GP:table|field > 0] && [globalVar = TSFE:id = xxx``


.. container:: table-row

  Property
    Single view end

  Data type
    string

  Description
    **Obligate!** Global condition ending.
    Without outer square brackets (!). Usually: global

  Default
    global