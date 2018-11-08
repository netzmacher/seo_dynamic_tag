.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../../Includes.txt


.. _integrator_setup_canonical:


Canonical Tag*
==============

* TypoScript Constant Editor: [SEO DYNAMIC TAG - CANONICAL TAG]


.. container:: table-row

  Property
    Enabled

  Data type
    boolean

  Description
    If you don't like the canonical tag, disable it.

  Default
    NULL

.. container:: table-row

  Property
    Allowed parameter (single view)

  Data type
    string

  Description
    **Obligate!** Allowed URL parameter for the single view.

    Example:

    ``&tx_browser_pi1[showUid]={GP:tx_browser_pi1|showUid}``

  Default
    NULL


.. container:: table-row

  Property
    Use cash hash

  Data type
    boolean

  Description
    Recommended. Use a cash hash parameter for a unique URL.

  Default
    1