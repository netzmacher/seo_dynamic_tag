.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../../Includes.txt


.. _integrator-quick-start-templates:

Ready-for-use Templates
=======================

Extensions
----------

SEO Dynamic Tag has ready-for-use-templates for this extensions:

.. _integrator-quick-start-templates-cal:
.. _integrator-quick-start-templates-ttproducts:
.. _integrator-quick-start-templates-ttnews:

* Calendar Base (cal)

* News (tt_news)

* Shop system (tt_products)


Include Static Templates
------------------------

The templates are compatible with SEO Dynamic Tag 2 only.

Remove

* SEO [1] (seo_dynamic_tag)

Include

* SEO [90] 2.x (seo_dynamic_tag)

and one of the static templates additionally

* SEO [91] + cal (seo_dynamic_tag)

* SEO [91] + tt_news (seo_dynamic_tag)

* SEO [91] + tt_products (seo_dynamic_tag)

If you like to optimize the TYPO3 CMS (table: pages), please include the static template

* SEO [91] + pages (seo_dynamic_tag)


Configuration
-------------

You have to configure only the properties

* :ref:`Condition: Single view begin <integrator-configuration-condition>`

* :ref:`Database: Pid list <integrator-configuration-database>`