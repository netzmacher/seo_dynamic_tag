.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _integrator-configuration:

Configuration
=============


.. _integrator-configuration-constanteditor:

Constant Editor
---------------


Canonical Tag
^^^^^^^^^^^^^

Properties for the canonical tag.

TypoScript Constant Editor: [SEO DYNAMIC TAG - CANONICAL TAG]


.. container:: table-row

  Property
    Enabled

  Data type
    boolean

  Description
    If you don't like the canonical tag, disable it.

  Default
    -


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
    -


.. container:: table-row

  Property
    Use cash hash

  Data type
    boolean

  Description
    Recommended. Use a cash hash parameter for a unique URL.

  Default
    1


.. _integrator-configuration-condition:

Condition
^^^^^^^^^

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


Crop
^^^^

The content for metag tags will cropped by default.

TypoScript Constant Editor: [SEO DYNAMIC TAG - CROP]


.. container:: table-row

  Property
    Description

  Data type
    string

  Description
    Crop description after X chars (whole words will cropped).

  Default
    ``200``


There are further crop properties for

* Keywords

* Title prefix

* Title appendix


.. _integrator-configuration-database:

Database
^^^^^^^^

Controlling of the mapping with your database.

TypoScript Constant Editor: [SEO DYNAMIC TAG - DATABASE]


.. container:: table-row

  Property
    Table

  Data type
    string

  Description
    **Obligate!** The from table in the SQL query.

    Example:

    ``tt_news``

  Default
    -




.. container:: table-row

  Property
    Pid list

  Data type
    string

  Description
    **Obligate!** Page id of the folder, which contains the records. This can be a comma seperated list of page ids.

    Example:

    124, 148, 304

  Default
    -


There are further database properties for

* GP parameter for uid

* Author

* Description

* Keywords

* Keywords cover

* Title prefix

* Title appendix


Default Values
^^^^^^^^^^^^^^

Controlling the content of some default values

TypoScript Constant Editor: [SEO DYNAMIC TAG - DEFAULT]


.. container:: table-row

  Property
    Author

  Data type
    string

  Description
    Default author, if current record doesn't contain any author. For single views only. Leave it empty, if you don't like a default author.

  Default
    TYPO3 SEO Dynamic Tag (seo_dynamic tag)


There are further default properties for

* Description

* Keywords


Meta Description
^^^^^^^^^^^^^^^^

Controlling the properties of the description tag

TypoScript Constant Editor: [SEO DYNAMIC TAG - META DESCRIPTION]


.. container:: table-row

  Property
    Prefix

  Data type
    string

  Description
    String will prepended to the meta tag description.

  Default
    -


There are further properties like

* Devider

* Devider wrap

* Appendix


Meta Keywords
^^^^^^^^^^^^^

Controlling the properties of the keywords tag

TypoScript Constant Editor: [SEO DYNAMIC TAG - META KEYWORDS]


.. container:: table-row

  Property
    Prefix

  Data type
    string

  Description
    String will prepended to the meta tag keywords.

  Default
    -


Further property

* Appendix


Meta Title
^^^^^^^^^^

Controlling the properties of the title tag

TypoScript Constant Editor: [SEO DYNAMIC TAG - META TITLE]


.. container:: table-row

  Property
    Prefix

  Data type
    string

  Description
    String will prepended to the title tag.

  Default
    -


There are further properties like

* Devider

* Devider wrap

* Appendix


Page Object
^^^^^^^^^^^

Controlling the property of the page object.

TypoScript Constant Editor: [SEO DYNAMIC TAG - PAGE OBJECT]


.. container:: table-row

  Property
    Label

  Data type
    string

  Description
    **Obligate!** The label of your page in your TypoScript configuration. Usually: page

  Default
    page


.. _integrator-configuration-setup:

Setup
-----

There shouldn't by any need to configure SEO Dynamic Tag directly.

But if yes, please refer to :ref:`Developer: Setup <developer-setup>`