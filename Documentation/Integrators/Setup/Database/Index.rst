.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../../Includes.txt


.. _integrator_setup_database:


Database*
=========

Controlling of the mapping with your database.

TypoScript Constant Editor: [SEO DYNAMIC TAG - DATABASE]


.. container:: table-row

  Property
    GP parameter for uid

  Data type
    integer

  Description
    **Obligate!** The GP parameter with the uid.

    Example:

    ``tx_ttnews|tt_news``

  Default
    NULL



  Property
    Table

  Data type
    string

  Description
    **Obligate!** The from table in the SQL query.

    Example:

    ``tt_news``

  Default
    NULL



  Property
    Field image

  Data type
    string

  Description
    **Obligate!** Name of the field, which relate to the images.

    Example:

    ``image``

  Default
    image



  Property
    Exclusive image

  Data type
    string

  Description
    Name of the field, which contains the flag for an image, which is excluvsive for list views

    Example:

    ``image_1stforlistonly``

  Default
    image_1stforlistonly



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
    NULL



.. container:: table-row

  Property
    Recursive

  Data type
    integer

  Description
    Number of recursivity levels for the pidInList.

    Example:

    0

  Default
    999